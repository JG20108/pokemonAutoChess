"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTwitchBlacklist = refreshTwitchBlacklist;
exports.listTwitchBlacklist = listTwitchBlacklist;
exports.addTwitchBlacklistEntry = addTwitchBlacklistEntry;
exports.removeTwitchBlacklistEntry = removeTwitchBlacklistEntry;
exports.refreshTwitchStreams = refreshTwitchStreams;
exports.getTwitchStreamsPayload = getTwitchStreamsPayload;
const twitch_blacklisted_streamer_1 = __importDefault(require("../models/mongo-models/twitch-blacklisted-streamer"));
const logger_1 = require("../utils/logger");
const TWITCH_OAUTH_URL = "https://id.twitch.tv/oauth2/token";
const TWITCH_HELIX_URL = "https://api.twitch.tv/helix";
const DEFAULT_CATEGORY_NAME = "Pokemon Auto Chess";
const THUMBNAIL_WIDTH = "320";
const THUMBNAIL_HEIGHT = "180";
let tokenCache = null;
let cachedStreams = [];
let lastRefreshAt = null;
let lastError = null;
let blacklistedLogins = new Set();
function normalizeStreamerLogin(value) {
    return value.trim().toLowerCase().replace(/^@/, "");
}
function refreshTwitchBlacklist() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const entries = yield twitch_blacklisted_streamer_1.default.find({}, [
                "streamerLogin"
            ]).lean();
            blacklistedLogins = new Set(entries
                .map((entry) => normalizeStreamerLogin(entry.streamerLogin))
                .filter((login) => login.length > 0));
        }
        catch (error) {
            logger_1.logger.error("Unable to refresh Twitch blacklist", { error });
        }
    });
}
function listTwitchBlacklist() {
    return __awaiter(this, void 0, void 0, function* () {
        return twitch_blacklisted_streamer_1.default.find({}, [
            "streamerLogin",
            "reason",
            "createdBy",
            "createdAt",
            "updatedAt"
        ])
            .sort({ createdAt: -1 })
            .lean();
    });
}
function addTwitchBlacklistEntry(streamerLogin, createdBy, reason) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const normalizedLogin = normalizeStreamerLogin(streamerLogin);
        if (!normalizedLogin) {
            throw new Error("Invalid streamerLogin");
        }
        const existing = yield twitch_blacklisted_streamer_1.default.findOne({
            streamerLogin: normalizedLogin
        });
        if (existing) {
            throw new Error("Streamer is already blacklisted");
        }
        yield twitch_blacklisted_streamer_1.default.create({
            streamerLogin: normalizedLogin,
            reason: (_a = reason === null || reason === void 0 ? void 0 : reason.trim()) !== null && _a !== void 0 ? _a : "",
            createdBy: createdBy.trim()
        });
        yield refreshTwitchBlacklist();
        yield refreshTwitchStreams();
    });
}
function removeTwitchBlacklistEntry(streamerLogin) {
    return __awaiter(this, void 0, void 0, function* () {
        const normalizedLogin = normalizeStreamerLogin(streamerLogin);
        if (!normalizedLogin) {
            throw new Error("Invalid streamerLogin");
        }
        const deleteResult = yield twitch_blacklisted_streamer_1.default.deleteOne({
            streamerLogin: normalizedLogin
        });
        yield refreshTwitchBlacklist();
        yield refreshTwitchStreams();
        return deleteResult.deletedCount > 0;
    });
}
function getClientId() {
    return process.env.TWITCH_CLIENT_ID;
}
function getClientSecret() {
    return process.env.TWITCH_CLIENT_SECRET;
}
function getCategoryName() {
    var _a;
    return (_a = process.env.TWITCH_CATEGORY_NAME) !== null && _a !== void 0 ? _a : DEFAULT_CATEGORY_NAME;
}
function isConfigured() {
    return Boolean(getClientId() && getClientSecret());
}
function buildHeaders(accessToken) {
    var _a;
    return {
        "Client-Id": (_a = getClientId()) !== null && _a !== void 0 ? _a : "",
        Authorization: `Bearer ${accessToken}`
    };
}
function getAppAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const now = Date.now();
        if (tokenCache && tokenCache.expiresAt > now + 60000) {
            return tokenCache.accessToken;
        }
        const body = new URLSearchParams({
            client_id: (_a = getClientId()) !== null && _a !== void 0 ? _a : "",
            client_secret: (_b = getClientSecret()) !== null && _b !== void 0 ? _b : "",
            grant_type: "client_credentials"
        });
        const response = yield fetch(TWITCH_OAUTH_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body.toString()
        });
        if (!response.ok) {
            const error = yield response.text();
            throw new Error(`Twitch OAuth failed (${response.status}): ${error.slice(0, 300)}`);
        }
        const json = (yield response.json());
        tokenCache = {
            accessToken: json.access_token,
            expiresAt: Date.now() + json.expires_in * 1000
        };
        return tokenCache.accessToken;
    });
}
function resolveCategoryId(accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const categoryName = getCategoryName();
        const params = new URLSearchParams({ name: categoryName });
        const response = yield fetch(`${TWITCH_HELIX_URL}/games?${params.toString()}`, {
            headers: buildHeaders(accessToken)
        });
        if (!response.ok) {
            const error = yield response.text();
            throw new Error(`Twitch category lookup failed (${response.status}): ${error.slice(0, 300)}`);
        }
        const json = (yield response.json());
        const category = json.data.find((entry) => entry.name === categoryName);
        if (!category) {
            throw new Error(`Twitch category not found: ${categoryName}`);
        }
        logger_1.logger.info(`Resolved Twitch category id for ${categoryName}: ${category.id}`);
        return category.id;
    });
}
function mapStream(stream) {
    var _a;
    return {
        id: stream.id,
        userName: stream.user_name,
        userLogin: stream.user_login,
        title: stream.title,
        language: stream.language,
        thumbnailUrl: stream.thumbnail_url
            .replace("{width}", THUMBNAIL_WIDTH)
            .replace("{height}", THUMBNAIL_HEIGHT),
        url: `https://www.twitch.tv/${stream.user_login}`,
        viewerCount: stream.viewer_count,
        startedAt: stream.started_at,
        tags: (_a = stream.tags) !== null && _a !== void 0 ? _a : []
    };
}
function refreshTwitchStreams() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isConfigured()) {
            lastError = "TWITCH_CLIENT_ID or TWITCH_CLIENT_SECRET is missing";
            cachedStreams = [];
            return cachedStreams;
        }
        try {
            const accessToken = yield getAppAccessToken();
            const categoryId = yield resolveCategoryId(accessToken);
            const params = new URLSearchParams({
                game_id: categoryId,
                first: "50",
                type: "live"
            });
            const response = yield fetch(`${TWITCH_HELIX_URL}/streams?${params.toString()}`, {
                headers: buildHeaders(accessToken)
            });
            if (!response.ok) {
                const error = yield response.text();
                throw new Error(`Twitch streams fetch failed (${response.status}): ${error.slice(0, 300)}`);
            }
            const json = (yield response.json());
            cachedStreams = json.data
                .map(mapStream)
                .filter((stream) => !blacklistedLogins.has(normalizeStreamerLogin(stream.userLogin)));
            lastRefreshAt = new Date();
            lastError = null;
            return cachedStreams;
        }
        catch (error) {
            lastError = error instanceof Error ? error.message : "Unknown Twitch error";
            logger_1.logger.error("Unable to refresh Twitch streams", { error: lastError });
            return cachedStreams;
        }
    });
}
function getTwitchStreamsPayload() {
    return {
        streams: cachedStreams,
        lastRefreshAt: lastRefreshAt ? lastRefreshAt.toISOString() : null,
        isConfigured: isConfigured(),
        error: lastError
    };
}
//# sourceMappingURL=twitch.js.map