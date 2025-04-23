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
const path_1 = __importDefault(require("path"));
const monitor_1 = require("@colyseus/monitor");
const tools_1 = __importDefault(require("@colyseus/tools"));
const uwebsockets_transport_1 = require("@colyseus/uwebsockets-transport");
const uWebSockets_js_1 = __importDefault(require("uWebSockets.js"));
const colyseus_1 = require("colyseus");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const mongoose_1 = require("mongoose");
const package_json_1 = __importDefault(require("../package.json"));
const design_1 = require("./core/design");
const game_record_1 = require("./models/colyseus-models/game-record");
const detailled_statistic_v2_1 = __importDefault(require("./models/mongo-models/detailled-statistic-v2"));
const meta_1 = __importDefault(require("./models/mongo-models/meta"));
const title_statistic_1 = __importDefault(require("./models/mongo-models/title-statistic"));
const precomputed_types_1 = require("./models/precomputed/precomputed-types");
const after_game_room_1 = __importDefault(require("./rooms/after-game-room"));
const custom_lobby_room_1 = __importDefault(require("./rooms/custom-lobby-room"));
const game_room_1 = __importDefault(require("./rooms/game-room"));
const preparation_room_1 = __importDefault(require("./rooms/preparation-room"));
const bots_1 = require("./services/bots");
const discord_1 = require("./services/discord");
const leaderboard_1 = require("./services/leaderboard");
const meta_2 = require("./services/meta");
const pastebin_1 = require("./services/pastebin");
const Config_1 = require("./types/Config");
const Item_1 = require("./types/enum/Item");
const Pokemon_1 = require("./types/enum/Pokemon");
const logger_1 = require("./utils/logger");
const chat_v2_1 = __importDefault(require("./models/mongo-models/chat-v2"));
const clientSrc = __dirname.includes('server')
    ? path_1.default.join(__dirname, '..', '..', 'client')
    : path_1.default.join(__dirname, 'public', 'dist', 'client');
const viewsSrc = path_1.default.join(clientSrc, 'index.html');
let gameOptions = {};
if (process.env.NODE_APP_INSTANCE) {
    const processNumber = Number(process.env.NODE_APP_INSTANCE || '0');
    const port = (Number(process.env.PORT) || 2567) + processNumber;
    gameOptions = {
        presence: new colyseus_1.RedisPresence(process.env.REDIS_URI),
        driver: new colyseus_1.RedisDriver(process.env.REDIS_URI),
        publicAddress: `${port}.${process.env.SERVER_NAME}`,
        selectProcessIdToCreateRoom: function (roomName, clientOptions) {
            return __awaiter(this, void 0, void 0, function* () {
                var _a;
                if (roomName === 'lobby') {
                    const lobbies = yield colyseus_1.matchMaker.query({ name: 'lobby' });
                    if (lobbies.length !== 0) {
                        throw 'Attempt to create one lobby';
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
}
if (process.env.MODE === "dev") {
    gameOptions.devMode = true;
}
exports.default = (0, tools_1.default)({
    options: gameOptions,
    initializeTransport: function () {
        return new uwebsockets_transport_1.uWebSocketsTransport({
            compression: uWebSockets_js_1.default.SHARED_COMPRESSOR
        });
    },
    initializeGameServer: (gameServer) => {
        gameServer.define('after-game', after_game_room_1.default);
        gameServer.define('lobby', custom_lobby_room_1.default);
        gameServer.define('preparation', preparation_room_1.default).enableRealtimeListing();
        gameServer.define('game', game_room_1.default).enableRealtimeListing();
    },
    initializeExpress: (app) => {
        app.use((0, helmet_1.default)({
            crossOriginOpenerPolicy: false,
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: [
                        "'self'",
                        'https://*.pokemon-auto-chess.com',
                        'wss://*.pokemon-auto-chess.com',
                        'https://*.firebaseapp.com',
                        'https://apis.google.com',
                        'https://*.googleapis.com',
                        'https://*.githubusercontent.com',
                        'http://raw.githubusercontent.com',
                        'https://*.youtube.com',
                        'https://pokemon.darkatek7.com',
                        'https://eternara.site',
                        'https://www.penumbra-autochess.com',
                        'https://pokechess.com.br',
                        'https://uruwhy.online',
                        'https://koala-pac.com',
                    ],
                    scriptSrc: [
                        "'self'",
                        "'unsafe-inline'",
                        "'unsafe-eval'",
                        'https://apis.google.com',
                        'https://*.googleapis.com',
                    ],
                    imgSrc: [
                        "'self'",
                        'data:',
                        'blob:',
                        'https://www.gstatic.com',
                        'http://raw.githubusercontent.com',
                    ],
                },
            },
        }));
        app.use(((err, req, res, next) => {
            res.status(err.status).json(err);
        }));
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.static(clientSrc));
        app.get('/', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/auth', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/lobby', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/preparation', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/game', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/after', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/bot-builder', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/bot-admin', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/sprite-viewer', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/map-viewer', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/gameboy', (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get('/pokemons', (req, res) => {
            res.send(Pokemon_1.Pkm);
        });
        app.get('/pokemons-index', (req, res) => {
            res.send(Pokemon_1.PkmIndex);
        });
        app.get('/types', (req, res) => {
            res.send(precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE);
        });
        app.get('/items', (req, res) => {
            res.send(Item_1.Item);
        });
        app.get('/types-trigger', (req, res) => {
            res.send(Config_1.SynergyTriggers);
        });
        app.get('/meta', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.set('Cache-Control', 'no-cache');
            res.send(yield meta_1.default.find({}, [
                'cluster_id',
                'count',
                'ratio',
                'winrate',
                'mean_rank',
                'types',
                'pokemons',
                'x',
                'y',
            ]));
        }));
        app.get('/titles', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield title_statistic_1.default.find());
        }));
        app.get('/meta/items', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.set('Cache-Control', 'max-age=86400');
            res.send((0, meta_2.getMetaItems)());
        }));
        app.get('/meta/pokemons', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.set('Cache-Control', 'max-age=86400');
            res.send((0, meta_2.getMetaPokemons)());
        }));
        app.get('/tilemap/:map', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const tilemap = (0, design_1.initTilemap)(req.params.map);
            res.send(tilemap);
        }));
        app.get('/leaderboards', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.set('Cache-Control', 'no-cache');
            res.send((0, leaderboard_1.getLeaderboard)());
        }));
        app.get('/game-history/:playerUid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.set('Cache-Control', 'no-cache');
            const { playerUid } = req.params;
            const { page = 1 } = req.query;
            const limit = 10;
            const skip = (Number(page) - 1) * limit;
            const stats = yield detailled_statistic_v2_1.default.find({ playerId: playerUid }, ["pokemons", "time", "rank", "elo", "gameMode"], { limit: limit, skip: skip, sort: { time: -1 } });
            if (stats) {
                const records = stats.map((record) => new game_record_1.GameRecord(record.time, record.rank, record.elo, record.pokemons, record.gameMode));
                return res.status(200).json(records);
            }
            return res.status(200).json([]);
        }));
        app.get('/chat-history/:playerUid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.set('Cache-Control', 'no-cache');
            const { playerUid } = req.params;
            const { page = 1 } = req.query;
            const limit = 30;
            const skip = (Number(page) - 1) * limit;
            const messages = yield chat_v2_1.default.find({ authorId: playerUid }, undefined, {
                limit: limit,
                skip: skip,
                sort: { time: -1 },
            });
            return res.status(200).json(messages !== null && messages !== void 0 ? messages : []);
        }));
        app.get("/bots", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const botsData = yield (0, bots_1.getBotsList)();
            res.send(botsData);
        }));
        app.post('/bots', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { bot, author } = req.body;
                const pastebinUrl = (yield pastebin_1.pastebinService.createPaste(`${author} has uploaded BOT ${bot.name}`, JSON.stringify(bot, null, 2)));
                logger_1.logger.debug(`bot ${bot.name} created by ${author} with pastebin url ${pastebinUrl}`);
                discord_1.discordService.announceBotCreation(bot, pastebinUrl, author);
                res.status(201).send(pastebinUrl);
            }
            catch (error) {
                logger_1.logger.error(error);
                res.status(500).send('Internal server error');
            }
        }));
        app.get('/bots/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield (0, bots_1.getBotData)(req.params.id));
        }));
        app.get('/status', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const ccu = yield colyseus_1.matchMaker.stats.getGlobalCCU();
            const version = package_json_1.default.version;
            res.send({ ccu, maxCcu: Config_1.MAX_CONCURRENT_PLAYERS_ON_SERVER, version });
        }));
        const basicAuthMiddleware = (0, express_basic_auth_1.default)({
            users: {
                admin: process.env.ADMIN_PASSWORD
                    ? process.env.ADMIN_PASSWORD
                    : 'Default Admin Password',
            },
            challenge: true,
        });
        app.use('/colyseus', basicAuthMiddleware, (0, monitor_1.monitor)());
        app.use('/colyseus', (0, monitor_1.monitor)());
    },
    beforeListen: () => {
        (0, mongoose_1.connect)('mongodb+srv://joseosgui:F1Wy7S9l0uOs6hgI@cluster0.andeznt.mongodb.net/dev?retryWrites=true&w=majority', {
            maxPoolSize: Config_1.MAX_POOL_CONNECTIONS_SIZE,
            socketTimeoutMS: 45000,
        });
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert({
                projectId: 'pac-linkersito',
                clientEmail: 'firebase-adminsdk-fbsvc@pac-linkersito.iam.gserviceaccount.com',
                privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDnMtOraErNVI9P\nSCIkmNzpw1e1qEvoPOGC1JBdDjCDWky7S7HeqZXTJOYcIGAsk5OM/Z5YhsxQHRiy\nRL9bMKIpDFXVMZhH44Sc2BM6rKbRNYa4wtEjEMGPQMkX5xvzCp+WXWgGaaxgEQHn\nDu8FNHgljY03CPqXiPBsJSM9k5gc1XSwUue4hUEjhovPCR36HeWEfQYDIDlCZvzL\nr0LPyQAq4NC8HOl069sO0XzoVHS3aXIZL/kYB/a8ILPY3OpV0Ndro1pLeWIAPv9s\nhJ9PaNoVviN1Uq16EXesf0zJHgVeGysVClpXXB/92Z32BBJjw8yEGnVpcHOInLVg\ndGHHWdL5AgMBAAECggEAAzwl1A8ohMj7HFvhBmwRI0A1ePg636wCZ8c7oeGx8hSQ\nYEqF2Zy72PF6OsiFL/p8pQtjbM+uCizuDIiDuO3sRvDCPrJr9A2N7HflhPundePu\n16T6Miho3O1GIwx7yqHKa9swum4+GDYEtcvysjryt2vMnwmEIBytaIX4gUMQbM7U\n/K6TjYkXZbCDfxNXpuGMRQMTjSUo60jNmM2RuFg407fJTDBbQqRWRuEbD0gZuLaK\n4fkrP6h0oya92b5kgyhZClbQZJqUF5YChJr/bA6ADLhweZsgp4kFe3tkYBRiXoer\n9oUX76tkE9tGG2XHl5ENeb1HUKoS/GyVDsVtcFT5AQKBgQD5l5fZq1EqiMcmvkHF\n2IK1XY381O4I7nm8Huh5hBidHG/ut/9ibMXHU2QVT9SncdGV6FVaEbDcAVsQG+Pb\nmwd1IIM45eBnLKCJ1KR2HQgiy3/El+rKWO4Aqn2PQswHJgSgPkMQ9br/ZlNJOUMK\nhtP87SB2b2aQF2aohnQvYDGpGQKBgQDtIlgpqIWgBJQSRDDyc1j7gvayBGansGj1\naJzDvH2HpQWtQneTCWC5x1Mt+nGQL3cH4HAx6sjsfzPpZT7HYyp68qs7hbXRvhgm\nIwm/7x6F0Krp4SVfLPRHr/cr8d5KdO+ZlODX0ykngIjajVOZNu3YTVgPvi/0Darj\nb4BHIPhU4QKBgQCH241LbWYz6dnFbABvSef0AuWbvueGsxBOZuCR7GZddrIy1bLM\nh3qsgebTdu3A60Jy/9Edws1rI83GmffQfLV1euoSmYYpgvArtjSDGlBoaC62+x5R\nYFDEygioZ2qZZYdVFi75V1ifVrp0/BdS7osLfKOT9BV2z1YQ24b4lrrRWQKBgF1G\n3C0Ox/kos+H3htVnwAG3AzkE+ChQAQk/bCKmWy5nIDOF6Kki0DRjjnmQgOk5cnXb\nt+Y6t2wnoRDWrXoarNQN7oMMVne5caBWufgQpA35BbHXyS6F7VThh7V2f30EQFdG\nM6dRvWd3bN2jJ9YlwCsMSW5v3kb+tVCfRHM2KdihAoGAflYkWiNAL04z09ncC+1w\nmK+cKwc5sme8X+YrFSwH+2TS60/xMl6ewUFNgcMU2idxok+896afjIcvOURw23uD\nL3iBZF3N+LCYE3r/Blp+eoA0s7oXE/pPQ6zUhShFTT+buiq53eyYJosmlBvo3SHL\nlQwVRIYHoIgdiSsu7sh6bj4=\n-----END PRIVATE KEY-----\n',
            }),
        });
    },
});
//# sourceMappingURL=app.config.js.map