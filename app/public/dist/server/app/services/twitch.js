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
exports.startTwitchAccountVerification = startTwitchAccountVerification;
exports.completeTwitchAccountVerification = completeTwitchAccountVerification;
exports.unlinkTwitchAccount = unlinkTwitchAccount;
exports.refreshTwitchBlacklist = refreshTwitchBlacklist;
exports.listTwitchBlacklist = listTwitchBlacklist;
exports.addTwitchBlacklistEntry = addTwitchBlacklistEntry;
exports.removeTwitchBlacklistEntry = removeTwitchBlacklistEntry;
exports.refreshTwitchStreams = refreshTwitchStreams;
exports.getTwitchStreamsPayload = getTwitchStreamsPayload;
const colyseus_1 = require("colyseus");
const crypto_1 = require("crypto");
const twitch_blacklisted_streamer_1 = __importDefault(require("../models/mongo-models/twitch-blacklisted-streamer"));
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const logger_1 = require("../utils/logger");
const TWITCH_OAUTH_URL = "https://id.twitch.tv/oauth2/token";
const TWITCH_OAUTH_AUTHORIZE_URL = "https://id.twitch.tv/oauth2/authorize";
const TWITCH_HELIX_URL = "https://api.twitch.tv/helix";
const DEFAULT_CATEGORY_NAME = "Pokemon Auto Chess";
const THUMBNAIL_WIDTH = "320";
const THUMBNAIL_HEIGHT = "180";
const DEFAULT_TWITCH_STATE_TTL_SECONDS = 600;
let tokenCache = null;
let cachedStreams = [];
let lastRefreshAt = null;
let lastError = null;
let blacklistedLogins = new Set();
const twitchVerificationSessions = new Map();
const isDevelopment = process.env.MODE === "dev";
const TWITCH_VERIFICATION_SESSION_PREFIX = "twitch_oauth_verification";
const TWITCH_VERIFICATION_SESSIONS_KEY = `${TWITCH_VERIFICATION_SESSION_PREFIX}:sessions`;
function normalizeStreamerLogin(value) {
    return value.trim().toLowerCase().replace(/^@/, "");
}
function getStateSecret() {
    return process.env.TWITCH_OAUTH_STATE_SECRET;
}
function getVerificationRedirectUri() {
    return process.env.TWITCH_OAUTH_REDIRECT_URI;
}
function getVerificationStateTtlSeconds() {
    const raw = Number(process.env.TWITCH_OAUTH_STATE_TTL_SECONDS);
    if (!Number.isFinite(raw) || raw <= 0) {
        return DEFAULT_TWITCH_STATE_TTL_SECONDS;
    }
    return Math.floor(raw);
}
function ensureVerificationConfigured() {
    if (!getClientId() || !getClientSecret()) {
        throw new Error("Twitch OAuth is not configured");
    }
    if (!getVerificationRedirectUri()) {
        throw new Error("TWITCH_OAUTH_REDIRECT_URI is missing");
    }
    const stateSecret = getStateSecret();
    if (!stateSecret || stateSecret.length < 32) {
        throw new Error("TWITCH_OAUTH_STATE_SECRET must be at least 32 chars");
    }
}
function cleanupExpiredVerificationSessions() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isDevelopment) {
            const sessions = yield colyseus_1.matchMaker.presence.hgetall(TWITCH_VERIFICATION_SESSIONS_KEY);
            const now = Date.now();
            for (const [nonce, rawSession] of Object.entries(sessions)) {
                try {
                    const session = JSON.parse(rawSession);
                    if (session.expiresAt <= now) {
                        yield colyseus_1.matchMaker.presence.hdel(TWITCH_VERIFICATION_SESSIONS_KEY, nonce);
                    }
                }
                catch (error) {
                    logger_1.logger.warn("Invalid Twitch verification session during cleanup", {
                        nonce,
                        error
                    });
                    yield colyseus_1.matchMaker.presence.hdel(TWITCH_VERIFICATION_SESSIONS_KEY, nonce);
                }
            }
            return;
        }
        const now = Date.now();
        for (const [nonce, session] of twitchVerificationSessions.entries()) {
            if (session.expiresAt <= now) {
                twitchVerificationSessions.delete(nonce);
            }
        }
    });
}
function getVerificationSessionKey(nonce) {
    return `${TWITCH_VERIFICATION_SESSION_PREFIX}:${nonce}`;
}
function storeVerificationSession(nonce, session) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isDevelopment) {
            twitchVerificationSessions.set(nonce, session);
            return;
        }
        yield colyseus_1.matchMaker.presence.hset(TWITCH_VERIFICATION_SESSIONS_KEY, nonce, JSON.stringify(session));
    });
}
function getVerificationSession(nonce) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (isDevelopment) {
            return (_a = twitchVerificationSessions.get(nonce)) !== null && _a !== void 0 ? _a : null;
        }
        let raw = yield colyseus_1.matchMaker.presence.hget(TWITCH_VERIFICATION_SESSIONS_KEY, nonce);
        if (!raw) {
            raw = yield colyseus_1.matchMaker.presence.hget(getVerificationSessionKey(nonce), "session");
        }
        if (!raw) {
            return null;
        }
        try {
            return JSON.parse(raw);
        }
        catch (error) {
            logger_1.logger.warn("Invalid stored Twitch verification session payload", {
                nonce,
                error
            });
            yield deleteVerificationSession(nonce);
            return null;
        }
    });
}
function deleteVerificationSession(nonce) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isDevelopment) {
            twitchVerificationSessions.delete(nonce);
            return;
        }
        yield colyseus_1.matchMaker.presence.hdel(TWITCH_VERIFICATION_SESSIONS_KEY, nonce);
        yield colyseus_1.matchMaker.presence.hdel(getVerificationSessionKey(nonce), "session");
    });
}
function signStatePayload(payloadBase64) {
    return (0, crypto_1.createHmac)("sha256", getStateSecret())
        .update(payloadBase64)
        .digest("base64url");
}
function parseAndVerifyState(state) {
    const [payloadBase64, signature] = state.split(".");
    if (!payloadBase64 || !signature) {
        throw new Error("Invalid OAuth state");
    }
    const expectedSignature = signStatePayload(payloadBase64);
    const provided = Buffer.from(signature, "base64url");
    const expected = Buffer.from(expectedSignature, "base64url");
    if (provided.length !== expected.length ||
        !(0, crypto_1.timingSafeEqual)(provided, expected)) {
        throw new Error("Invalid OAuth state signature");
    }
    const decodedPayload = Buffer.from(payloadBase64, "base64url").toString("utf8");
    const payload = JSON.parse(decodedPayload);
    if (!payload.uid || !payload.nonce || !payload.exp) {
        throw new Error("Malformed OAuth state payload");
    }
    if (payload.exp <= Date.now()) {
        throw new Error("OAuth state has expired");
    }
    return payload;
}
function buildPkceChallenge(codeVerifier) {
    return (0, crypto_1.createHash)("sha256").update(codeVerifier).digest("base64url");
}
function generateCodeVerifier() {
    return (0, crypto_1.randomBytes)(48).toString("base64url");
}
function generateNonce() {
    return (0, crypto_1.randomBytes)(24).toString("base64url");
}
function getVerificationScope() {
    var _a;
    return (_a = process.env.TWITCH_OAUTH_SCOPE) !== null && _a !== void 0 ? _a : "";
}
function startTwitchAccountVerification(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        ensureVerificationConfigured();
        yield cleanupExpiredVerificationSessions();
        const now = Date.now();
        const nonce = generateNonce();
        const stateTtlMs = getVerificationStateTtlSeconds() * 1000;
        const expiresAt = now + stateTtlMs;
        const codeVerifier = generateCodeVerifier();
        const codeChallenge = buildPkceChallenge(codeVerifier);
        const statePayload = {
            uid,
            nonce,
            iat: now,
            exp: expiresAt
        };
        const payloadBase64 = Buffer.from(JSON.stringify(statePayload)).toString("base64url");
        const signature = signStatePayload(payloadBase64);
        const state = `${payloadBase64}.${signature}`;
        yield storeVerificationSession(nonce, {
            uid,
            codeVerifier,
            expiresAt
        });
        const authorizeParams = new URLSearchParams({
            client_id: getClientId(),
            redirect_uri: getVerificationRedirectUri(),
            response_type: "code",
            force_verify: "true",
            state,
            code_challenge: codeChallenge,
            code_challenge_method: "S256"
        });
        const scope = getVerificationScope().trim();
        if (scope) {
            authorizeParams.set("scope", scope);
        }
        return {
            authorizeUrl: `${TWITCH_OAUTH_AUTHORIZE_URL}?${authorizeParams.toString()}`,
            expiresAt: new Date(expiresAt).toISOString()
        };
    });
}
function exchangeAuthorizationCode(code, codeVerifier) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const body = new URLSearchParams({
            client_id: (_a = getClientId()) !== null && _a !== void 0 ? _a : "",
            client_secret: (_b = getClientSecret()) !== null && _b !== void 0 ? _b : "",
            code,
            grant_type: "authorization_code",
            redirect_uri: (_c = getVerificationRedirectUri()) !== null && _c !== void 0 ? _c : "",
            code_verifier: codeVerifier
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
            throw new Error(`Twitch code exchange failed (${response.status}): ${error.slice(0, 300)}`);
        }
        const payload = (yield response.json());
        if (!payload.access_token) {
            throw new Error("Twitch code exchange returned no access token");
        }
        return payload.access_token;
    });
}
function fetchTwitchUser(accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const response = yield fetch(`${TWITCH_HELIX_URL}/users`, {
            headers: buildHeaders(accessToken)
        });
        if (!response.ok) {
            const error = yield response.text();
            throw new Error(`Twitch user fetch failed (${response.status}): ${error.slice(0, 300)}`);
        }
        const json = (yield response.json());
        const user = (_a = json.data) === null || _a === void 0 ? void 0 : _a[0];
        if (!user) {
            throw new Error("Twitch did not return an authenticated user");
        }
        return user;
    });
}
function completeTwitchAccountVerification(code, state) {
    return __awaiter(this, void 0, void 0, function* () {
        ensureVerificationConfigured();
        yield cleanupExpiredVerificationSessions();
        const parsedState = parseAndVerifyState(state);
        const session = yield getVerificationSession(parsedState.nonce);
        if (!session || session.expiresAt <= Date.now()) {
            yield deleteVerificationSession(parsedState.nonce);
            throw new Error("OAuth verification session expired");
        }
        if (session.uid !== parsedState.uid) {
            yield deleteVerificationSession(parsedState.nonce);
            throw new Error("OAuth verification session mismatch");
        }
        yield deleteVerificationSession(parsedState.nonce);
        const userAccessToken = yield exchangeAuthorizationCode(code, session.codeVerifier);
        const twitchUser = yield fetchTwitchUser(userAccessToken);
        const normalizedLogin = normalizeStreamerLogin(twitchUser.login);
        const linkedUser = yield user_metadata_1.default.findOne({ twitchUserId: twitchUser.id }, ["uid"]);
        if (linkedUser && linkedUser.uid !== parsedState.uid) {
            throw new Error("Twitch account already linked to another user");
        }
        const user = yield user_metadata_1.default.findOne({ uid: parsedState.uid });
        if (!user) {
            throw new Error("User not found");
        }
        user.twitchUserId = twitchUser.id;
        user.twitchLogin = normalizedLogin;
        user.twitchDisplayName = twitchUser.display_name;
        user.twitchVerifiedAt = new Date();
        user.twitchVerificationRevokedAt = null;
        yield user.save();
        logger_1.logger.info("Twitch verification linked", {
            uid: user.uid,
            twitchUserId: twitchUser.id,
            twitchLogin: normalizedLogin
        });
        return {
            uid: user.uid,
            twitchUserId: twitchUser.id,
            twitchLogin: normalizedLogin,
            twitchDisplayName: twitchUser.display_name
        };
    });
}
function unlinkTwitchAccount(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_metadata_1.default.findOne({ uid });
        if (!user) {
            throw new Error("User not found");
        }
        const hadLink = Boolean(user.twitchUserId);
        user.twitchUserId = undefined;
        user.twitchLogin = undefined;
        user.twitchDisplayName = undefined;
        user.twitchVerifiedAt = null;
        user.twitchVerificationRevokedAt = new Date();
        yield user.save();
        if (hadLink) {
            logger_1.logger.info("Twitch verification unlinked", { uid: user.uid });
        }
    });
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