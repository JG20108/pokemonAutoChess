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
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const config_1 = require("../config");
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const types_1 = require("../types");
const CloseCodes_1 = require("../types/enum/CloseCodes");
const Game_1 = require("../types/enum/Game");
const logger_1 = require("../utils/logger");
const schemas_1 = require("../utils/schemas");
const preparation_commands_1 = require("./commands/preparation-commands");
const preparation_state_1 = __importDefault(require("./states/preparation-state"));
class PreparationRoom extends colyseus_1.Room {
    constructor() {
        super();
        this.dispatcher = new command_1.Dispatcher(this);
        this.maxClients = config_1.MAX_PLAYERS_PER_GAME;
        this.roomPassword = null;
    }
    setName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setMetadata({
                name: name.slice(0, 30),
                type: "preparation"
            });
        });
    }
    setPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hasPassword = password && password.trim().length > 0;
            yield this.setMetadata({
                passwordProtected: hasPassword,
                type: "preparation"
            });
            this.roomPassword = hasPassword ? password : null;
        });
    }
    setNoElo(noElo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setMetadata({ noElo });
        });
    }
    setMinMaxRanks(minRank, maxRank) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setMetadata({
                minRank: minRank,
                maxRank: maxRank
            });
        });
    }
    setGameStarted(gameStartedAt) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setMetadata({ gameStartedAt });
        });
    }
    onCreate(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        logger_1.logger.info("create Preparation ", this.roomId);
        this.clock.start();
        this.state = new preparation_state_1.default(options);
        this.setPassword((_a = options.password) !== null && _a !== void 0 ? _a : null);
        this.setMetadata({
            name: options.roomName.slice(0, 30),
            ownerName: options.gameMode === Game_1.GameMode.CLASSIC ? null : options.ownerId,
            minRank: (_b = options.minRank) !== null && _b !== void 0 ? _b : null,
            maxRank: (_c = options.maxRank) !== null && _c !== void 0 ? _c : null,
            noElo: (_d = options.noElo) !== null && _d !== void 0 ? _d : false,
            gameMode: options.gameMode,
            whitelist: (_e = options.whitelist) !== null && _e !== void 0 ? _e : [],
            blacklist: (_f = options.blacklist) !== null && _f !== void 0 ? _f : [],
            playersInfo: [],
            tournamentId: (_g = options.tournamentId) !== null && _g !== void 0 ? _g : null,
            bracketId: (_h = options.bracketId) !== null && _h !== void 0 ? _h : null,
            gameStartedAt: null,
            passwordProtected: !!(options.password && options.password.trim().length > 0),
            type: "preparation"
        });
        this.maxClients = 8;
        if (options.gameMode === Game_1.GameMode.TOURNAMENT) {
            this.autoDispose = false;
        }
        if (options.autoStartDelayInSeconds) {
            this.clock.setTimeout(() => {
                var _a, _b, _c;
                if (this.state.gameStartedAt != null) {
                    logger_1.logger.debug("game has started but the prep room is still open, forcing close");
                    this.disconnect(CloseCodes_1.CloseCodes.NORMAL_CLOSURE);
                    return;
                }
                else if (this.state.users.size < 2) {
                    if ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.tournamentId) {
                        this.presence.publish("tournament-match-end", {
                            tournamentId: (_b = this.metadata) === null || _b === void 0 ? void 0 : _b.tournamentId,
                            bracketId: (_c = this.metadata) === null || _c === void 0 ? void 0 : _c.bracketId,
                            players: (0, schemas_1.values)(this.state.users).map((p) => ({
                                id: p.uid,
                                rank: 1
                            }))
                        });
                    }
                    this.disconnect(CloseCodes_1.CloseCodes.ROOM_EMPTY);
                }
                else {
                    this.dispatcher.dispatch(new preparation_commands_1.OnGameStartRequestCommand());
                }
            }, options.autoStartDelayInSeconds * 1000);
            this.clock.setTimeout(() => {
                for (let t = 0; t < 10; t++) {
                    this.clock.setTimeout(() => {
                        this.state.addMessage({
                            author: "Server",
                            authorId: "server",
                            payload: `Game is starting in ${10 - t}`,
                            avatar: "0070/Normal"
                        });
                    }, t * 1000);
                }
            }, (options.autoStartDelayInSeconds - 10) * 1000);
            this.clock.setTimeout(() => {
                for (let t = 0; t < 9; t++) {
                    this.clock.setTimeout(() => {
                        this.state.addMessage({
                            author: "Server",
                            authorId: "server",
                            payload: `Game will start automatically in ${10 - t} minute${t !== 9 ? "s" : ""}`,
                            avatar: "0340/Special1"
                        });
                    }, t * 60 * 1000);
                }
            }, (options.autoStartDelayInSeconds - 10 * 60) * 1000);
        }
        this.onMessage(types_1.Transfer.KICK, (client, message) => {
            logger_1.logger.info(types_1.Transfer.KICK, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnKickPlayerCommand(), { client, message });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.CHANGE_ROOM_NAME, (client, message) => {
            logger_1.logger.info(types_1.Transfer.CHANGE_ROOM_NAME, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnRoomNameCommand(), { client, message });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.CHANGE_ROOM_PASSWORD, (client, message) => {
            logger_1.logger.info(types_1.Transfer.CHANGE_ROOM_PASSWORD, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnRoomPasswordCommand(), {
                    client,
                    message
                });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.CHANGE_ROOM_RANKS, (client, { minRank, maxRank }) => {
            logger_1.logger.info(types_1.Transfer.CHANGE_ROOM_RANKS, this.roomName, minRank, maxRank);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnRoomChangeRankCommand(), {
                    client,
                    minRank,
                    maxRank
                });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.CHANGE_SPECIAL_RULE, (client, specialRule) => {
            logger_1.logger.info(types_1.Transfer.CHANGE_SPECIAL_RULE, this.roomName, specialRule);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnRoomChangeSpecialRule(), {
                    client,
                    specialRule
                });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.CHANGE_NO_ELO, (client, message) => {
            logger_1.logger.info(types_1.Transfer.CHANGE_NO_ELO, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnChangeNoEloCommand(), {
                    client,
                    message
                });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.GAME_START_REQUEST, (client) => {
            logger_1.logger.info(types_1.Transfer.GAME_START_REQUEST, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnGameStartRequestCommand(), { client });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.TOGGLE_READY, (client, ready) => {
            logger_1.logger.info(types_1.Transfer.TOGGLE_READY, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnToggleReadyCommand(), { client, ready });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.NEW_MESSAGE, (client, message) => {
            logger_1.logger.info(types_1.Transfer.NEW_MESSAGE, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.OnNewMessageCommand(), { client, message });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.REMOVE_MESSAGE, (client, message) => {
            logger_1.logger.info(types_1.Transfer.REMOVE_MESSAGE, this.roomName);
            try {
                this.dispatcher.dispatch(new preparation_commands_1.RemoveMessageCommand(), {
                    client,
                    messageId: message.id
                });
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.ADD_BOT, (client, botType) => {
            logger_1.logger.info(types_1.Transfer.ADD_BOT, this.roomName);
            try {
                const user = this.state.users.get(client.auth.uid);
                if (user) {
                    this.dispatcher.dispatch(new preparation_commands_1.OnAddBotCommand(), {
                        type: botType,
                        user: user
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onMessage(types_1.Transfer.REMOVE_BOT, (client, t) => {
            logger_1.logger.info(types_1.Transfer.REMOVE_BOT, this.roomName);
            try {
                const user = this.state.users.get(client.auth.uid);
                if (user) {
                    this.dispatcher.dispatch(new preparation_commands_1.OnRemoveBotCommand(), {
                        target: t,
                        user: user
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
        this.onServerAnnouncement = this.onServerAnnouncement.bind(this);
        this.presence.subscribe("server-announcement", this.onServerAnnouncement);
        this.onGameStart = this.onGameStart.bind(this);
        this.presence.subscribe("game-started", this.onGameStart);
        this.onRoomDeleted = this.onRoomDeleted.bind(this);
        this.presence.subscribe("room-deleted", this.onRoomDeleted);
    }
    onAuth(client, options, context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield firebase_admin_1.default.auth().verifyIdToken(options.idToken);
                const user = yield firebase_admin_1.default.auth().getUser(token.uid);
                const userProfile = yield user_metadata_1.default.findOne({ uid: user.uid });
                const isAdmin = (userProfile === null || userProfile === void 0 ? void 0 : userProfile.role) === types_1.Role.ADMIN;
                if (this.state.password &&
                    (userProfile === null || userProfile === void 0 ? void 0 : userProfile.role) === types_1.Role.BASIC &&
                    this.state.ownerId !== user.uid) {
                    if (!options.password || options.password !== this.roomPassword) {
                        client.leave(CloseCodes_1.CloseCodes.INVALID_PASSWORD);
                        return;
                    }
                }
                const isAlreadyInRoom = this.state.users.has(user.uid);
                const numberOfHumanPlayers = (0, schemas_1.values)(this.state.users).filter((u) => !u.isBot).length;
                if (numberOfHumanPlayers >= config_1.MAX_PLAYERS_PER_GAME && !isAdmin) {
                    client.leave(CloseCodes_1.CloseCodes.ROOM_FULL);
                    return;
                }
                else if (isAlreadyInRoom) {
                    client.leave(CloseCodes_1.CloseCodes.USER_ALREADY_JOINED);
                    return;
                }
                else if (this.state.gameStartedAt != null) {
                    client.leave(CloseCodes_1.CloseCodes.GAME_ALREADY_STARTED);
                    return;
                }
                else if (userProfile === null || userProfile === void 0 ? void 0 : userProfile.banned) {
                    client.leave(CloseCodes_1.CloseCodes.USER_BANNED);
                    return;
                }
                else if (this.metadata.blacklist.includes(user.uid)) {
                    client.leave(CloseCodes_1.CloseCodes.USER_KICKED);
                    return;
                }
                else if (this.metadata.whitelist &&
                    this.metadata.whitelist.length > 0 &&
                    !this.metadata.whitelist.includes(user.uid)) {
                    client.leave(CloseCodes_1.CloseCodes.USER_NOT_WHITELISTED);
                    return;
                }
                else {
                    return user;
                }
            }
            catch (error) {
                logger_1.logger.error(error);
                client.leave(CloseCodes_1.CloseCodes.ABNORMAL_CLOSURE);
            }
        });
    }
    onJoin(client, options, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            if (auth) {
                yield this.dispatcher.dispatch(new preparation_commands_1.OnJoinCommand(), {
                    client,
                    options,
                    auth
                });
            }
        });
    }
    onDrop(client, code) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                (_a = this.state.abortOnPlayerLeave) === null || _a === void 0 ? void 0 : _a.abort();
                yield this.allowReconnection(client, 10);
            }
            catch (e) {
            }
        });
    }
    onLeave(client, code) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const consented = code === colyseus_1.CloseCode.CONSENTED;
            if (this.state.gameStartedAt === null) {
                (_a = this.state.abortOnPlayerLeave) === null || _a === void 0 ? void 0 : _a.abort();
            }
            this.dispatcher.dispatch(new preparation_commands_1.OnLeaveCommand(), { client, consented });
        });
    }
    onDispose() {
        logger_1.logger.info("Dispose preparation room", this.roomId);
        this.dispatcher.stop();
    }
    onServerAnnouncement(message) {
        this.state.addMessage({
            author: "Server Announcement",
            authorId: "server",
            payload: message,
            avatar: "0294/Joyous"
        });
    }
    onGameStart({ gameId, preparationId }) {
        if (this.roomId === preparationId) {
            this.lock();
            this.setGameStarted(new Date().toISOString());
            this.broadcast(types_1.Transfer.GAME_START, gameId);
        }
    }
    onRoomDeleted(roomId) {
        if (this.roomId === roomId) {
            this.disconnect(CloseCodes_1.CloseCodes.ROOM_DELETED);
        }
    }
    updatePlayersInfo() {
        this.setMetadata({
            playersInfo: [...this.state.users.values()].map((u) => `${u.name} [${u.elo}]`)
        });
    }
}
exports.default = PreparationRoom;
//# sourceMappingURL=preparation-room.js.map