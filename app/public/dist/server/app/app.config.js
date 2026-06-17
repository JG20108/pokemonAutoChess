"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const promises_1 = require("node:fs/promises");
const monitor_1 = require("@colyseus/monitor");
const colyseus_1 = require("colyseus");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const helmet_1 = __importDefault(require("helmet"));
const marked_1 = require("marked");
const mongoose_1 = require("mongoose");
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("../package.json"));
const config_1 = require("./config");
const design_1 = require("./core/design");
const game_record_1 = require("./models/colyseus-models/game-record");
const chat_v2_1 = __importDefault(require("./models/mongo-models/chat-v2"));
const detailled_statistic_v2_1 = __importDefault(require("./models/mongo-models/detailled-statistic-v2"));
const title_statistic_1 = __importDefault(require("./models/mongo-models/title-statistic"));
const user_metadata_1 = __importStar(require("./models/mongo-models/user-metadata"));
const precomputed_types_1 = require("./models/precomputed/precomputed-types");
const after_game_room_1 = __importDefault(require("./rooms/after-game-room"));
const custom_lobby_room_1 = __importDefault(require("./rooms/custom-lobby-room"));
const game_room_1 = __importDefault(require("./rooms/game-room"));
const preparation_room_1 = __importDefault(require("./rooms/preparation-room"));
const booster_1 = require("./services/booster");
const bots_1 = require("./services/bots");
const collection_1 = require("./services/collection");
const leaderboard_1 = require("./services/leaderboard");
const meta_1 = require("./services/meta");
const sprite_gap_scanner_1 = require("./services/sprite-gap-scanner");
const twitch_1 = require("./services/twitch");
const types_1 = require("./types");
const Dungeon_1 = require("./types/enum/Dungeon");
const Emotion_1 = require("./types/enum/Emotion");
const Game_1 = require("./types/enum/Game");
const Item_1 = require("./types/enum/Item");
const Pokemon_1 = require("./types/enum/Pokemon");
const logger_1 = require("./utils/logger");
const clientSrc = __dirname.includes("server")
    ? path_1.default.join(__dirname, "..", "..", "client")
    : path_1.default.join(__dirname, "public", "dist", "client");
const viewsSrc = path_1.default.join(clientSrc, "index.html");
const isDevelopment = process.env.MODE === "dev";
const setCacheControl = (res, maxAge = 86400) => {
    if (!isDevelopment) {
        res.set("Cache-Control", `max-age=${maxAge}`);
    }
    else {
        res.set("Cache-Control", "no-cache");
    }
};
const legalPageStyle = `
      :root {
        color-scheme: light;
      }
      body {
        margin: 0;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        background: #f7f7f7;
        color: #1b1b1b;
      }
      main {
        box-sizing: border-box;
        max-width: 900px;
        margin: 0 auto;
        padding: 24px 16px 48px;
        background: #fff;
        min-height: 100vh;
      }
      h1,
      h2,
      h3 {
        line-height: 1.25;
      }
      p,
      li {
        line-height: 1.6;
      }
`;
function renderLegalPage(res, markdownFile, pageTitle, unavailableMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const markdown = yield (0, promises_1.readFile)(path_1.default.resolve(process.cwd(), markdownFile), "utf8");
            const html = yield marked_1.marked.parse(markdown);
            res.type("html").send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle} | Pokemon Auto Chess</title>
    <style>${legalPageStyle}</style>
  </head>
  <body>
    <main>
      ${html}
    </main>
  </body>
</html>`);
        }
        catch (error) {
            logger_1.logger.error(`Failed to load ${markdownFile}`, error);
            res.status(500).send(unavailableMessage);
        }
    });
}
let gameOptions = {};
if (process.env.NODE_APP_INSTANCE) {
    const processNumber = Number(process.env.NODE_APP_INSTANCE || "0");
    const port = (Number(process.env.PORT) || 2569) + processNumber;
    gameOptions = {
        presence: new colyseus_1.RedisPresence(process.env.REDIS_URI),
        driver: new colyseus_1.RedisDriver(process.env.REDIS_URI),
        publicAddress: `${port}.${process.env.SERVER_NAME}`,
        selectProcessIdToCreateRoom: function (roomName, clientOptions) {
            return __awaiter(this, void 0, void 0, function* () {
                var _a;
                if (roomName === "lobby") {
                    const lobbies = yield colyseus_1.matchMaker.query({ name: "lobby" });
                    if (lobbies.length !== 0) {
                        throw "Attempt to create one lobby";
                    }
                }
                const stats = yield colyseus_1.matchMaker.stats.fetchAll();
                stats.sort((p1, p2) => p1.roomCount !== p2.roomCount
                    ? p1.roomCount - p2.roomCount
                    : p1.ccu - p2.ccu);
                if (stats.length === 0) {
                    throw "No process available";
                }
                else {
                    return (_a = stats[0]) === null || _a === void 0 ? void 0 : _a.processId;
                }
            });
        }
    };
    (_a = gameOptions.presence) === null || _a === void 0 ? void 0 : _a.setMaxListeners(100);
}
exports.server = (0, colyseus_1.defineServer)(Object.assign(Object.assign({}, gameOptions), { rooms: {
        "after-game": (0, colyseus_1.defineRoom)(after_game_room_1.default),
        lobby: (0, colyseus_1.defineRoom)(custom_lobby_room_1.default),
        preparation: (0, colyseus_1.defineRoom)(preparation_room_1.default).enableRealtimeListing(),
        game: (0, colyseus_1.defineRoom)(game_room_1.default).enableRealtimeListing()
    }, express: (app) => {
        app.use((0, helmet_1.default)({
            crossOriginOpenerPolicy: false,
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: [
                        "'self'",
                        "https://*.pokemon-auto-chess.com",
                        "wss://*.pokemon-auto-chess.com",
                        "https://*.firebaseapp.com",
                        "https://apis.google.com",
                        "https://*.googleapis.com",
                        "https://*.doubleclick.net",
                        "https://*.githubusercontent.com",
                        "http://raw.githubusercontent.com",
                        "https://api.github.com",
                        "https://*.youtube.com",
                        "https://pokemon.darkatek7.com",
                        "https://eternara.site",
                        "https://www.penumbra-autochess.com",
                        "https://pokechess.com.br",
                        "https://uruwhy.online",
                        "https://koala-pac.com",
                        "https://pokev9.52kx.net",
                        "https://www.john-auto-chess.com/"
                    ],
                    scriptSrc: [
                        "'self'",
                        "'unsafe-inline'",
                        "'unsafe-eval'",
                        "https://apis.google.com",
                        "https://*.googleapis.com",
                        "https://*.doubleclick.net"
                    ],
                    imgSrc: [
                        "'self'",
                        "data:",
                        "blob:",
                        "https://www.gstatic.com",
                        "http://raw.githubusercontent.com",
                        "https://static-cdn.jtvnw.net"
                    ]
                }
            }
        }));
        app.use(((err, req, res, next) => {
            res.status(err.status).json(err);
        }));
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.static(clientSrc));
        app.get("/", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/auth", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/lobby", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/preparation", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/game", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/after", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/bot-builder", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/bot-admin", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/sprite-viewer", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/map-viewer", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/gameboy", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/translations", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/privacy-policy", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            yield renderLegalPage(res, "policy.md", "Privacy Policy", "Privacy policy is temporarily unavailable");
        }));
        app.get("/policy", (req, res) => {
            res.redirect(301, "/privacy-policy");
        });
        app.get("/terms-of-service", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            yield renderLegalPage(res, "terms-of-service.md", "Terms of Service", "Terms of service are temporarily unavailable");
        }));
        app.get("/terms", (req, res) => {
            res.redirect(301, "/terms-of-service");
        });
        app.get("/pokemons", (req, res) => {
            res.send(Pokemon_1.Pkm);
        });
        app.get("/pokemons-index", (req, res) => {
            res.send(Pokemon_1.PkmIndex);
        });
        app.get("/types", (req, res) => {
            res.send(precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE);
        });
        app.get("/items", (req, res) => {
            res.send(Item_1.Item);
        });
        app.get("/types-trigger", (req, res) => {
            res.send(config_1.SynergyTriggers);
        });
        app.get("/titles", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield title_statistic_1.default.find().sort({ name: 1 }).exec());
        }));
        app.get("/meta/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getMetadata)());
        }));
        app.get("/meta/items", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getMetaItems)());
        }));
        app.get("/meta/pokemons", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getMetaPokemons)());
        }));
        app.get("/meta/regions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getMetaRegions)());
        }));
        app.get("/meta-v2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getMetaV2)());
        }));
        app.get("/meta/player-rank-distribution", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getPlayerRankDistribution)());
        }));
        app.get("/meta/game-activity", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getGameActivity)());
        }));
        app.get("/dendrogram", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, meta_1.getDendrogram)());
        }));
        app.get("/sprite-gap-scanner", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 86400);
            res.send((0, sprite_gap_scanner_1.getCachedSpriteGapData)());
        }));
        app.get("/meta/types", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
            if (!user || user.role !== types_1.Role.ADMIN) {
                res.status(403).send("Unauthorized");
                return;
            }
            res.send((0, meta_1.computeSynergyAverages)());
        }));
        app.get("/tilemap/:map", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (!req.params.map ||
                    !Object.values(Dungeon_1.DungeonPMDO).includes(req.params.map)) {
                    return res.status(400).send({ error: "Invalid map parameter" });
                }
                const tilemap = (0, design_1.initTilemap)(req.params.map);
                res.send(tilemap);
            }
            catch (error) {
                logger_1.logger.error("Error generating tilemap", { error, map: req.params.map });
                res.status(500).send({ error: "Error generating tilemap" });
            }
        }));
        app.get("/leaderboards", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            if (!isDevelopment) {
                res.set("Cache-Control", "no-cache");
            }
            res.send((0, leaderboard_1.getLeaderboard)());
        }));
        app.get("/leaderboards/bots", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (!isDevelopment) {
                res.set("Cache-Control", "no-cache");
            }
            res.send((_a = (0, leaderboard_1.getLeaderboard)()) === null || _a === void 0 ? void 0 : _a.botLeaderboard);
        }));
        app.get("/leaderboards/elo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (!isDevelopment) {
                res.set("Cache-Control", "no-cache");
            }
            res.send((_a = (0, leaderboard_1.getLeaderboard)()) === null || _a === void 0 ? void 0 : _a.leaderboard);
        }));
        app.get("/leaderboards/level", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (!isDevelopment) {
                res.set("Cache-Control", "no-cache");
            }
            res.send((_a = (0, leaderboard_1.getLeaderboard)()) === null || _a === void 0 ? void 0 : _a.levelLeaderboard);
        }));
        app.get("/leaderboards/event", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (!isDevelopment) {
                res.set("Cache-Control", "no-cache");
            }
            res.send((_a = (0, leaderboard_1.getLeaderboard)()) === null || _a === void 0 ? void 0 : _a.eventLeaderboard);
        }));
        app.get("/twitch/streams", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            setCacheControl(res, 120);
            res.send((0, twitch_1.getTwitchStreamsPayload)());
        }));
        app.post("/twitch/verify/start", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            try {
                const payload = yield (0, twitch_1.startTwitchAccountVerification)(userAuth.uid);
                res.status(200).json(payload);
            }
            catch (error) {
                const message = error instanceof Error ? error.message : "Unknown error";
                logger_1.logger.error("Error starting Twitch verification", { error: message });
                if (message.includes("not configured") ||
                    message.includes("REDIRECT") ||
                    message.includes("STATE_SECRET")) {
                    res.status(503).json({ error: message });
                    return;
                }
                res.status(400).json({ error: message });
            }
        }));
        app.get("/auth/twitch/callback", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            const state = (_a = req.query.state) === null || _a === void 0 ? void 0 : _a.toString();
            const code = (_b = req.query.code) === null || _b === void 0 ? void 0 : _b.toString();
            const successRedirect = process.env.TWITCH_VERIFY_SUCCESS_REDIRECT || "/auth";
            const errorRedirect = process.env.TWITCH_VERIFY_ERROR_REDIRECT || "/auth";
            if (!state || !code) {
                return res.redirect(`${errorRedirect}?twitchVerify=missing_params`);
            }
            try {
                yield (0, twitch_1.completeTwitchAccountVerification)(code, state);
                return res.redirect(`${successRedirect}?twitchVerify=success`);
            }
            catch (error) {
                const message = error instanceof Error
                    ? encodeURIComponent(error.message)
                    : "verification_failed";
                logger_1.logger.error("Error completing Twitch verification", { error: message });
                return res.redirect(`${errorRedirect}?twitchVerify=${message}`);
            }
        }));
        app.post("/twitch/verify/unlink", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            try {
                yield (0, twitch_1.unlinkTwitchAccount)(userAuth.uid);
                res.status(200).send();
            }
            catch (error) {
                const message = error instanceof Error ? error.message : "Unknown error";
                if (message === "User not found") {
                    res.status(404).json({ error: message });
                    return;
                }
                logger_1.logger.error("Error unlinking Twitch verification", { error: message });
                res.status(500).json({ error: "Error unlinking Twitch account" });
            }
        }));
        app.get("/game-history/:playerUid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            if (!isDevelopment) {
                res.set("Cache-Control", "no-cache");
            }
            const { playerUid } = req.params;
            const { page = 1, gameMode } = req.query;
            const limit = 10;
            const skip = (Number(page) - 1) * limit;
            const params = { playerId: playerUid };
            if (gameMode) {
                params.gameMode = gameMode;
            }
            const stats = yield detailled_statistic_v2_1.default.find(params, ["pokemons", "time", "rank", "elo", "gameMode"], { limit: limit, skip: skip, sort: { time: -1 } });
            if (stats) {
                const records = stats.map((record) => {
                    var _a;
                    return new game_record_1.GameRecord(record.time, record.rank, record.elo, record.pokemons, (_a = record.gameMode) !== null && _a !== void 0 ? _a : Game_1.GameMode.CUSTOM_LOBBY);
                });
                return res.status(200).json(records);
            }
            return res.status(200).json([]);
        }));
        app.get("/chat-history/:playerUid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            if (!isDevelopment) {
                res.set("Cache-Control", "no-cache");
            }
            const { playerUid } = req.params;
            const { page = 1 } = req.query;
            const limit = 30;
            const skip = (Number(page) - 1) * limit;
            const messages = yield chat_v2_1.default.find({ authorId: playerUid }, undefined, {
                limit: limit,
                skip: skip,
                sort: { time: -1 }
            });
            return res.status(200).json(messages !== null && messages !== void 0 ? messages : []);
        }));
        app.get("/players", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            try {
                const searchTerm = ((_b = (_a = req.query) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toString().trim()) || "";
                const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const userAuth = yield authUser(req, res);
                if (!userAuth)
                    return;
                const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
                const showBanned = (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN || (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.MODERATOR;
                const users = yield user_metadata_1.default.find(Object.assign({ displayName: { $regex: `^${escapedTerm}` } }, (showBanned ? {} : { banned: false })), [
                    "uid",
                    "elo",
                    "displayName",
                    "level",
                    "avatar",
                    ...(showBanned ? ["banned"] : [])
                ], {
                    limit: 100,
                    sort: { level: -1 },
                    collation: { locale: "en", strength: 2 }
                });
                if (users) {
                    const suggestions = users.map((u) => {
                        return {
                            id: u.uid,
                            elo: u.elo,
                            name: u.displayName,
                            level: u.level,
                            avatar: u.avatar,
                            banned: u.banned
                        };
                    });
                    res.status(200).json(suggestions);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
                res.status(500).json({ error: "Error fetching players" });
            }
        }));
        app.get("/bots", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const approved = req.query.approved === "true"
                ? true
                : req.query.approved === "false"
                    ? false
                    : undefined;
            const botsData = yield (0, bots_1.fetchBotsList)(approved, (_a = req.query.pkm) === null || _a === void 0 ? void 0 : _a.toString());
            res.send(botsData);
        }));
        app.get("/bots/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield (0, bots_1.fetchBot)(req.params.id));
        }));
        const authUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            let user;
            try {
                const authHeader = req.headers.authorization;
                if (!authHeader)
                    throw new Error("Unauthorized");
                const token = authHeader.split(" ")[1];
                if (!token)
                    throw new Error("Unauthorized");
                const decodedToken = yield firebase_admin_1.default.auth().verifyIdToken(token);
                user = yield firebase_admin_1.default.auth().getUser(decodedToken.uid);
                if (!user || !user.displayName)
                    throw new Error("Unauthorized");
                return user;
            }
            catch (error) {
                res.status(401).send(error);
                return null;
            }
        });
        app.get("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const userAuth = yield authUser(req, res);
                if (!userAuth)
                    return;
                const mongoUser = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
                if (!mongoUser)
                    return res.status(404).send("User not found");
                yield (0, collection_1.migrateShardsOfAltForms)(mongoUser);
                if (!isDevelopment) {
                    res.set("Cache-Control", "no-cache");
                }
                res.send((0, user_metadata_1.toUserMetadataJSON)(mongoUser));
            }
            catch (error) {
                logger_1.logger.error("Error fetching profile", error);
                res.status(500).send("Error fetching profile");
            }
        }));
        app.post("/boosters/open", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const userAuth = yield authUser(req, res);
                if (!userAuth)
                    return;
                const result = yield (0, booster_1.openBoosterForUser)(userAuth.uid);
                if (!result) {
                    res.status(409).json({ error: "No boosters available" });
                    return;
                }
                res.status(200).json({
                    boosterContent: result.boosterContent,
                    user: (0, user_metadata_1.toUserMetadataJSON)(result.userDoc)
                });
            }
            catch (error) {
                logger_1.logger.error("Error opening booster", error);
                res.status(500).json({ error: "Error opening booster" });
            }
        }));
        app.post("/boosters/buy", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            try {
                const userAuth = yield authUser(req, res);
                if (!userAuth)
                    return;
                const index = (_a = req.body) === null || _a === void 0 ? void 0 : _a.index;
                if (!index || typeof index !== "string") {
                    res.status(400).json({ error: "index is required" });
                    return;
                }
                const result = yield (0, booster_1.buyBoosterForUser)(userAuth.uid, index);
                if (!result) {
                    res.status(409).json({ error: "Not enough dust or invalid pokemon" });
                    return;
                }
                res.status(200).json({
                    user: (0, user_metadata_1.toUserMetadataJSON)(result.userDoc)
                });
            }
            catch (error) {
                logger_1.logger.error("Error buying booster", error);
                res.status(500).json({ error: "Error buying booster" });
            }
        }));
        app.post("/collection/change-selected-emotion", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const userAuth = yield authUser(req, res);
                if (!userAuth)
                    return;
                const index = (_a = req.body) === null || _a === void 0 ? void 0 : _a.index;
                const emotion = (_b = req.body) === null || _b === void 0 ? void 0 : _b.emotion;
                const shiny = (_c = req.body) === null || _c === void 0 ? void 0 : _c.shiny;
                if (!index || typeof index !== "string") {
                    res.status(400).json({ error: "index is required" });
                    return;
                }
                if (emotion !== null && !Object.values(Emotion_1.Emotion).includes(emotion)) {
                    res.status(400).json({ error: "emotion is invalid" });
                    return;
                }
                if (typeof shiny !== "boolean") {
                    res.status(400).json({ error: "shiny must be a boolean" });
                    return;
                }
                const result = yield (0, collection_1.changeSelectedEmotionForUser)(userAuth.uid, index, emotion, shiny);
                if (!result) {
                    res.status(409).json({ error: "Emotion is not unlocked" });
                    return;
                }
                res.status(200).json({ user: (0, user_metadata_1.toUserMetadataJSON)(result.userDoc) });
            }
            catch (error) {
                logger_1.logger.error("Error changing selected emotion", error);
                res.status(500).json({ error: "Error changing selected emotion" });
            }
        }));
        app.post("/collection/buy-emotion", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const userAuth = yield authUser(req, res);
                if (!userAuth)
                    return;
                const index = (_a = req.body) === null || _a === void 0 ? void 0 : _a.index;
                const emotion = (_b = req.body) === null || _b === void 0 ? void 0 : _b.emotion;
                const shiny = (_c = req.body) === null || _c === void 0 ? void 0 : _c.shiny;
                if (!index || typeof index !== "string") {
                    res.status(400).json({ error: "index is required" });
                    return;
                }
                if (!emotion || !Object.values(Emotion_1.Emotion).includes(emotion)) {
                    res.status(400).json({ error: "emotion is invalid" });
                    return;
                }
                if (typeof shiny !== "boolean") {
                    res.status(400).json({ error: "shiny must be a boolean" });
                    return;
                }
                const result = yield (0, collection_1.buyEmotionForUser)(userAuth.uid, index, emotion, shiny);
                if (!result) {
                    res.status(409).json({ error: "Not enough dust or invalid state" });
                    return;
                }
                res.status(200).json({ user: (0, user_metadata_1.toUserMetadataJSON)(result.userDoc) });
            }
            catch (error) {
                logger_1.logger.error("Error buying emotion", error);
                res.status(500).json({ error: "Error buying emotion" });
            }
        }));
        app.post("/bots", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const userAuth = yield authUser(req, res);
                if (!userAuth)
                    return;
                const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
                if (!user)
                    return;
                const bot = req.body;
                bot.author = user.displayName;
                const botAdded = (0, bots_1.addBotToDatabase)(bot);
                res.status(201).send(botAdded);
            }
            catch (error) {
                logger_1.logger.error("Error submitting bot", error);
                res.status(500).send("Error submitting bot");
            }
        }));
        app.delete("/bots/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
            if (!user ||
                (user.role !== types_1.Role.BOT_MANAGER && user.role !== types_1.Role.ADMIN)) {
                res.status(403).send("Unauthorized");
                return;
            }
            try {
                const deleteResult = yield (0, bots_1.deleteBotFromDatabase)(req.params.id, user);
                res.status(deleteResult.deletedCount > 0 ? 200 : 404).send();
            }
            catch (error) {
                logger_1.logger.error("Error deleting bot", error);
                res.status(500).send("Error deleting bot");
            }
        }));
        app.post("/bots/:id/approve", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userRecord = yield authUser(req, res);
            if (!userRecord)
                return;
            const user = yield user_metadata_1.default.findOne({ uid: userRecord.uid });
            if (!user ||
                (user.role !== types_1.Role.BOT_MANAGER && user.role !== types_1.Role.ADMIN)) {
                res.status(403).send("Unauthorized");
                return;
            }
            try {
                const approved = req.body.approved;
                const updateResult = yield (0, bots_1.approveBot)(req.params.id, approved, user);
                if (updateResult.modifiedCount === 0) {
                    res.status(404).send("Bot not found");
                    return;
                }
                res.status(200).send();
            }
            catch (error) {
                logger_1.logger.error("Error approving bot", error);
                res.status(500).send("Error approving bot");
            }
        }));
        app.get("/moderation/chat-search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
            if (!user || (user.role !== types_1.Role.ADMIN && user.role !== types_1.Role.MODERATOR)) {
                res.status(403).send("Unauthorized");
                return;
            }
            const query = (_a = req.query.query) === null || _a === void 0 ? void 0 : _a.toString().trim();
            if (!query || query.length < 2) {
                return res
                    .status(400)
                    .json({ error: "Query must be at least 2 characters" });
            }
            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            try {
                const messages = yield chat_v2_1.default
                    .find({ payload: { $regex: escapedQuery } }, undefined, {
                    limit: 50,
                    sort: { time: -1 }
                })
                    .lean();
                res.status(200).json(messages);
            }
            catch (error) {
                logger_1.logger.error("Error searching chat messages", error);
                res.status(500).json({ error: "Error searching messages" });
            }
        }));
        app.get("/moderation/twitch-blacklist", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
            if (!user || (user.role !== types_1.Role.ADMIN && user.role !== types_1.Role.MODERATOR)) {
                res.status(403).send("Unauthorized");
                return;
            }
            try {
                const blacklist = yield (0, twitch_1.listTwitchBlacklist)();
                res.status(200).json(blacklist);
            }
            catch (error) {
                logger_1.logger.error("Error listing twitch blacklist", error);
                res.status(500).json({ error: "Error listing twitch blacklist" });
            }
        }));
        app.post("/moderation/twitch-blacklist", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
            if (!user || (user.role !== types_1.Role.ADMIN && user.role !== types_1.Role.MODERATOR)) {
                res.status(403).send("Unauthorized");
                return;
            }
            const streamerLogin = (_a = req.body) === null || _a === void 0 ? void 0 : _a.streamerLogin;
            const reason = (_b = req.body) === null || _b === void 0 ? void 0 : _b.reason;
            if (!streamerLogin || typeof streamerLogin !== "string") {
                res.status(400).json({ error: "streamerLogin is required" });
                return;
            }
            if (reason !== undefined && typeof reason !== "string") {
                res.status(400).json({ error: "reason must be a string" });
                return;
            }
            if (typeof reason === "string" && reason.length > 300) {
                res.status(400).json({ error: "reason is too long" });
                return;
            }
            try {
                yield (0, twitch_1.addTwitchBlacklistEntry)(streamerLogin, user.displayName, reason);
                logger_1.logger.info(`${user.displayName} added twitch blacklist entry for ${streamerLogin}`);
                res.status(201).send();
            }
            catch (error) {
                const message = error instanceof Error ? error.message : "Unknown error";
                if (message === "Streamer is already blacklisted") {
                    res.status(409).json({ error: message });
                    return;
                }
                if (message === "Invalid streamerLogin") {
                    res.status(400).json({ error: message });
                    return;
                }
                logger_1.logger.error("Error adding twitch blacklist entry", error);
                res.status(500).json({ error: "Error adding twitch blacklist entry" });
            }
        }));
        app.delete("/moderation/twitch-blacklist/:streamerLogin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            const user = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
            if (!user ||
                (user.role !== types_1.Role.ADMIN && user.role !== types_1.Role.MODERATOR)) {
                res.status(403).send("Unauthorized");
                return;
            }
            try {
                const wasDeleted = yield (0, twitch_1.removeTwitchBlacklistEntry)(req.params.streamerLogin);
                if (!wasDeleted) {
                    res.status(404).json({ error: "Streamer is not blacklisted" });
                    return;
                }
                logger_1.logger.info(`${user.displayName} removed twitch blacklist entry for ${req.params.streamerLogin}`);
                res.status(200).send();
            }
            catch (error) {
                const message = error instanceof Error ? error.message : "Unknown error";
                if (message === "Invalid streamerLogin") {
                    res.status(400).json({ error: message });
                    return;
                }
                logger_1.logger.error("Error removing twitch blacklist entry", error);
                res
                    .status(500)
                    .json({ error: "Error removing twitch blacklist entry" });
            }
        }));
        app.post("/moderation/rename-account", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const userAuth = yield authUser(req, res);
            if (!userAuth)
                return;
            const caller = yield user_metadata_1.default.findOne({ uid: userAuth.uid });
            if (!caller ||
                (caller.role !== types_1.Role.ADMIN && caller.role !== types_1.Role.MODERATOR)) {
                res.status(403).send("Unauthorized");
                return;
            }
            const { uid, newName } = req.body;
            if (!uid || typeof uid !== "string") {
                return res.status(400).json({ error: "uid is required" });
            }
            if (!newName || typeof newName !== "string") {
                return res.status(400).json({ error: "newName is required" });
            }
            if (!config_1.USERNAME_REGEXP.test(newName)) {
                return res.status(400).json({ error: "Invalid name format" });
            }
            try {
                const target = yield user_metadata_1.default.findOne({ uid });
                if (!target)
                    return res.status(404).json({ error: "User not found" });
                target.displayName = newName;
                yield target.save();
                logger_1.logger.info(`${userAuth.displayName} renamed account ${uid} to ${newName}`);
                res.status(200).json({ displayName: newName });
            }
            catch (error) {
                logger_1.logger.error("Error renaming account", error);
                res.status(500).json({ error: "Error renaming account" });
            }
        }));
        app.get("/status", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const ccu = yield colyseus_1.matchMaker.stats.getGlobalCCU();
            const version = package_json_1.default.version;
            res.send({ ccu, maxCcu: config_1.MAX_CONCURRENT_PLAYERS_ON_SERVER, version });
        }));
        const basicAuthMiddleware = (0, express_basic_auth_1.default)({
            users: {
                admin: process.env.ADMIN_PASSWORD
                    ? process.env.ADMIN_PASSWORD
                    : "Default Admin Password"
            },
            challenge: true
        });
        app.use("/colyseus", basicAuthMiddleware, (0, monitor_1.monitor)());
        app.use("/colyseus", (0, monitor_1.monitor)());
    }, beforeListen: () => {
        (0, mongoose_1.connect)(process.env.MONGO_URI, {
            socketTimeoutMS: 45000
        });
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
            })
        });
    } }));
//# sourceMappingURL=app.config.js.map