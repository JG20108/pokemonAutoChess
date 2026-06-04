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
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const cron_1 = require("cron");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const v8_1 = require("v8");
const config_1 = require("../config");
const message_1 = __importDefault(require("../models/colyseus-models/message"));
const tournament_1 = require("../models/colyseus-models/tournament");
const chat_v2_1 = __importDefault(require("../models/mongo-models/chat-v2"));
const tournament_2 = __importDefault(require("../models/mongo-models/tournament"));
const user_metadata_1 = __importStar(require("../models/mongo-models/user-metadata"));
const leaderboard_1 = require("../services/leaderboard");
const meta_1 = require("../services/meta");
const notifications_1 = require("../services/notifications");
const sprite_gap_scanner_1 = require("../services/sprite-gap-scanner");
const twitch_1 = require("../services/twitch");
const types_1 = require("../types");
const CloseCodes_1 = require("../types/enum/CloseCodes");
const MaintenanceOrder_1 = require("../types/enum/MaintenanceOrder");
const logger_1 = require("../utils/logger");
const lobby_commands_1 = require("./commands/lobby-commands");
const tournament_commands_1 = require("./commands/tournament-commands");
const lobby_state_1 = __importDefault(require("./states/lobby-state"));
class CustomLobbyRoom extends colyseus_1.Room {
    constructor() {
        super();
        this.state = new lobby_state_1.default();
        this.tournamentCronJobs = new Map();
        this.cleanUpCronJobs = [];
        this.users = new Map();
        this.dispatcher = new command_1.Dispatcher(this);
    }
    removeRoom(index, roomId) {
        var _a;
        if (index !== -1) {
            (_a = this.rooms) === null || _a === void 0 ? void 0 : _a.splice(index, 1);
            this.clients.forEach((client) => {
                client.send(types_1.Transfer.REMOVE_ROOM, roomId);
            });
        }
    }
    addRoom(roomId, data) {
        var _a;
        (_a = this.rooms) === null || _a === void 0 ? void 0 : _a.push(data);
        this.clients.forEach((client) => {
            client.send(types_1.Transfer.ADD_ROOM, [roomId, data]);
        });
    }
    changeRoom(index, roomId, data) {
        if (this.rooms) {
            const previousData = this.rooms[index];
            this.rooms[index] = data;
            this.clients.forEach((client) => {
                if (previousData && !data) {
                    client.send(types_1.Transfer.REMOVE_ROOM, roomId);
                }
                else if (data) {
                    client.send(types_1.Transfer.ADD_ROOM, [roomId, data]);
                }
            });
        }
    }
    onCreate() {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.logger.info("create lobby", this.roomId);
            this.autoDispose = false;
            this["_listing"].unlisted = true;
            this.clock.setInterval(() => __awaiter(this, void 0, void 0, function* () {
                const ccu = yield colyseus_1.matchMaker.stats.getGlobalCCU();
                this.state.ccu = ccu;
            }), 1000);
            this.unsubscribeLobby = yield (0, colyseus_1.subscribeLobby)((roomId, data) => {
                var _a;
                if (this.rooms) {
                    const roomIndex = (_a = this.rooms) === null || _a === void 0 ? void 0 : _a.findIndex((room) => room.roomId === roomId);
                    if (!data) {
                        this.removeRoom(roomIndex, roomId);
                    }
                    else if (roomIndex === -1) {
                        this.addRoom(roomId, data);
                    }
                    else {
                        this.changeRoom(roomIndex, roomId, data);
                    }
                }
            });
            this.rooms = yield colyseus_1.matchMaker.query({ private: false, unlisted: false });
            this.onMessage(types_1.Transfer.REQUEST_ROOM, (client, gameMode) => __awaiter(this, void 0, void 0, function* () {
                this.dispatcher.dispatch(new lobby_commands_1.JoinOrOpenRoomCommand(), {
                    client,
                    gameMode
                });
            }));
            this.onMessage(types_1.Transfer.DELETE_ROOM, (client, roomId) => {
                logger_1.logger.info(types_1.Transfer.DELETE_ROOM, this.roomName);
                try {
                    this.dispatcher.dispatch(new lobby_commands_1.DeleteRoomCommand(), { client, roomId });
                }
                catch (error) {
                    logger_1.logger.error(error);
                }
            });
            this.onMessage(types_1.Transfer.SELECT_LANGUAGE, (client, message) => __awaiter(this, void 0, void 0, function* () {
                this.dispatcher.dispatch(new lobby_commands_1.SelectLanguageCommand(), {
                    client,
                    message
                });
            }));
            this.onMessage(types_1.Transfer.UNBAN, (client, { uid, reason }) => {
                this.dispatcher.dispatch(new lobby_commands_1.UnbanUserCommand(), {
                    client,
                    uid,
                    reason
                });
            });
            this.onMessage(types_1.Transfer.BAN, (client, { uid, reason }) => {
                this.dispatcher.dispatch(new lobby_commands_1.BanUserCommand(), {
                    client,
                    uid,
                    reason
                });
            });
            this.onMessage(types_1.Transfer.NEW_MESSAGE, (client, message) => {
                this.dispatcher.dispatch(new lobby_commands_1.OnNewMessageCommand(), { client, message });
            });
            this.onMessage(types_1.Transfer.REMOVE_MESSAGE, (client, message) => {
                this.dispatcher.dispatch(new lobby_commands_1.RemoveMessageCommand(), {
                    client,
                    messageId: message.id
                });
            });
            this.onMessage(types_1.Transfer.NEW_TOURNAMENT, (client, message) => {
                this.dispatcher.dispatch(new tournament_commands_1.OnCreateTournamentCommand(), {
                    client,
                    name: message.name,
                    startDate: message.startDate
                });
            });
            this.onMessage(types_1.Transfer.DELETE_TOURNAMENT, (client, message) => {
                this.dispatcher.dispatch(new tournament_commands_1.DeleteTournamentCommand(), {
                    client,
                    tournamentId: message.id
                });
            });
            this.onMessage(types_1.Transfer.REMAKE_TOURNAMENT_LOBBY, (client, message) => __awaiter(this, void 0, void 0, function* () {
                if (message.bracketId === "all") {
                    yield this.dispatcher.dispatch(new lobby_commands_1.DeleteRoomCommand(), {
                        client,
                        tournamentId: message.tournamentId,
                        bracketId: message.bracketId
                    });
                    this.dispatcher.dispatch(new tournament_commands_1.CreateTournamentLobbiesCommand(), {
                        client,
                        tournamentId: message.tournamentId
                    });
                }
                else {
                    yield this.dispatcher.dispatch(new lobby_commands_1.DeleteRoomCommand(), {
                        client,
                        tournamentId: message.tournamentId,
                        bracketId: message.bracketId
                    });
                    this.dispatcher.dispatch(new tournament_commands_1.RemakeTournamentLobbyCommand(), {
                        client,
                        tournamentId: message.tournamentId,
                        bracketId: message.bracketId
                    });
                }
            }));
            this.onMessage(types_1.Transfer.PARTICIPATE_TOURNAMENT, (client, message) => {
                this.dispatcher.dispatch(new tournament_commands_1.ParticipateInTournamentCommand(), {
                    client,
                    tournamentId: message.tournamentId,
                    participate: message.participate
                });
            });
            this.onMessage(types_1.Transfer.GIVE_BOOSTER, (client, { uid, numberOfBoosters }) => {
                this.dispatcher.dispatch(new lobby_commands_1.GiveBoostersCommand(), {
                    client,
                    uid,
                    numberOfBoosters: Number(numberOfBoosters) || 1
                });
            });
            this.onMessage(types_1.Transfer.GIVE_TITLE, (client, { uid, title }) => {
                this.dispatcher.dispatch(new lobby_commands_1.GiveTitleCommand(), { client, uid, title });
            });
            this.onMessage(types_1.Transfer.GIVE_ALL_PORTRAITS, (client, { uid }) => {
                this.dispatcher.dispatch(new lobby_commands_1.GiveAllPortraitsCommand(), {
                    client,
                    uid
                });
            });
            this.onMessage(types_1.Transfer.DELETE_ACCOUNT, (client) => {
                this.dispatcher.dispatch(new lobby_commands_1.DeleteAccountCommand(), { client });
            });
            this.onMessage(types_1.Transfer.MAINTENANCE, (client, order) => {
                const u = this.users.get(client.auth.uid);
                if (u && u.role === types_1.Role.ADMIN) {
                    this.presence.publish("maintenance", { userId: client.auth.uid, order });
                }
            });
            this.onMessage(types_1.Transfer.SET_ROLE, (client, { uid, role }) => {
                this.dispatcher.dispatch(new lobby_commands_1.GiveRoleCommand(), { client, uid, role });
            });
            this.onMessage(types_1.Transfer.CHANGE_NAME, (client, message) => {
                this.dispatcher.dispatch(new lobby_commands_1.ChangeNameCommand(), {
                    client,
                    name: message.name
                });
            });
            this.onMessage(types_1.Transfer.SET_TITLE, (client, title) => {
                this.dispatcher.dispatch(new lobby_commands_1.ChangeTitleCommand(), { client, title });
            });
            this.onMessage(types_1.Transfer.SEARCH_BY_ID, (client, uid) => {
                this.dispatcher.dispatch(new lobby_commands_1.OnSearchByIdCommand(), { client, uid });
            });
            this.onMessage(types_1.Transfer.NOTIFICATION_SEEN, (client, notificationId) => {
                if (client.auth) {
                    notifications_1.notificationsService.clearNotification(client.auth.uid, notificationId);
                }
            });
            this.onMessage(types_1.Transfer.CHANGE_AVATAR, (client, { index, emotion, shiny }) => {
                this.dispatcher.dispatch(new lobby_commands_1.ChangeAvatarCommand(), {
                    client,
                    index,
                    emotion,
                    shiny
                });
            });
            this.presence.subscribe("announcement", (message) => {
                this.state.addAnnouncement(message);
            });
            this.presence.subscribe("tournament-match-end", ({ tournamentId, bracketId, players }) => {
                this.dispatcher.dispatch(new tournament_commands_1.EndTournamentMatchCommand(), {
                    tournamentId,
                    bracketId,
                    players
                });
            });
            this.presence.subscribe("server-announcement", (message) => {
                this.state.addAnnouncement(message);
            });
            this.presence.subscribe("notification-added", (notif) => notifications_1.notificationsService.onNotificationAdded(notif));
            this.presence.subscribe("maintenance", ({ userId, order }) => {
                const client = this.clients.find((c) => c.auth && c.auth.uid === userId);
                const notify = (msg) => notifications_1.notificationsService.addNotification(userId, "info", msg, client);
                if (order === MaintenanceOrder_1.MaintenanceOrder.HEAP_SNAPSHOT) {
                    logger_1.logger.info("writing heap snapshot");
                    (0, v8_1.writeHeapSnapshot)();
                    notify("Heap snapshot written");
                }
                else if (order === MaintenanceOrder_1.MaintenanceOrder.FETCH_LEADERBOARDS) {
                    (0, leaderboard_1.fetchLeaderboards)();
                    notify("Leaderboards refreshed");
                }
                else if (order === MaintenanceOrder_1.MaintenanceOrder.FETCH_META_REPORTS) {
                    (0, meta_1.fetchMetaReports)();
                    notify("Meta reports refreshed");
                }
                else if (order === MaintenanceOrder_1.MaintenanceOrder.REFRESH_SPRITE_GAP_DATA) {
                    (0, sprite_gap_scanner_1.refreshSpriteGapData)();
                    notify("Sprite gap data refreshed");
                }
                else if (order === MaintenanceOrder_1.MaintenanceOrder.REFRESH_TWITCH_STREAMS) {
                    (0, twitch_1.refreshTwitchStreams)();
                    notify("Twitch streams refreshed");
                }
                else if (order === MaintenanceOrder_1.MaintenanceOrder.REFRESH_TWITCH_BLACKLIST) {
                    (0, twitch_1.refreshTwitchBlacklist)();
                    notify("Twitch streams blacklist refreshed");
                }
            });
            this.initCronJobs();
            this.fetchTournaments();
        });
    }
    onAuth(client, options, context) {
        const _super = Object.create(null, {
            onAuth: { get: () => super.onAuth }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                _super.onAuth.call(this, client, options, context);
                const token = yield firebase_admin_1.default.auth().verifyIdToken(options.idToken);
                const user = yield firebase_admin_1.default.auth().getUser(token.uid);
                if (!user.displayName) {
                    logger_1.logger.error("No display name for this account", user.uid);
                    throw new Error("No display name for this account. Please report this error.");
                }
                return user;
            }
            catch (error) {
                logger_1.logger.error(`Error on authentication on lobby room`, error);
                throw error;
            }
        });
    }
    onJoin(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const leanUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid }).lean();
            const user = leanUser ? (0, user_metadata_1.toLeanUserMetadata)(leanUser) : null;
            try {
                if (user === null || user === void 0 ? void 0 : user.banned) {
                    throw new Error("Account banned");
                }
                else if ((this.state.ccu > config_1.MAX_CONCURRENT_PLAYERS_ON_SERVER ||
                    this.clients.length > config_1.MAX_CONCURRENT_PLAYERS_ON_LOBBY) &&
                    (user === null || user === void 0 ? void 0 : user.role) !== types_1.Role.ADMIN &&
                    (user === null || user === void 0 ? void 0 : user.role) !== types_1.Role.MODERATOR) {
                    throw new Error("This server is currently at maximum capacity. Please try again later or join another server.");
                }
            }
            catch (error) {
                throw error;
            }
            this.dispatcher.dispatch(new lobby_commands_1.OnJoinCommand(), { client, user });
        });
    }
    onDrop(client, code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.allowReconnection(client, 30);
            }
            catch (e) {
            }
        });
    }
    onReconnect(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.onJoin(client);
        });
    }
    onLeave(client, code) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dispatcher.dispatch(new lobby_commands_1.OnLeaveCommand(), { client });
        });
    }
    onDispose() {
        try {
            logger_1.logger.info("dispose lobby");
            this.dispatcher.stop();
            this.cleanUpCronJobs.forEach((j) => j.stop());
            if (this.unsubscribeLobby) {
                this.unsubscribeLobby();
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
    fetchChat() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messages = yield chat_v2_1.default.find({
                    time: { $gt: Date.now() - 86400000 }
                });
                if (messages) {
                    messages.forEach((message) => {
                        this.state.messages.push(new message_1.default(message.id, message.payload, message.authorId, message.author, message.avatar, message.time));
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
    fetchTournaments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tournaments = yield tournament_2.default.find().exec();
                if (tournaments) {
                    this.state.tournaments.clear();
                    tournaments.forEach((tournament) => __awaiter(this, void 0, void 0, function* () {
                        const startDate = new Date(tournament.startDate);
                        if (tournament.finished &&
                            Date.now() > startDate.getTime() + config_1.TOURNAMENT_CLEANUP_DELAY) {
                            logger_1.logger.debug(`Deleted old tournament ${tournament.name}`);
                            yield tournament_2.default.findByIdAndDelete(tournament.id);
                            return;
                        }
                        this.state.tournaments.push(new tournament_1.TournamentSchema(tournament.id, tournament.name, tournament.startDate, tournament.players, tournament.brackets, tournament.finished));
                        if (startDate.getTime() > Date.now() &&
                            this.tournamentCronJobs.has(tournament.id) === false) {
                            logger_1.logger.debug("Start tournament cron job for", new Date(tournament.startDate));
                            this.tournamentCronJobs.set(tournament.id, new cron_1.CronJob(startDate, () => this.startTournament(tournament), null, true));
                            if (Date.now() <
                                startDate.getTime() - config_1.TOURNAMENT_REGISTRATION_TIME) {
                                logger_1.logger.debug("Start tournament registrations opening cron job for", new Date(startDate.getTime() - config_1.TOURNAMENT_REGISTRATION_TIME));
                                new cron_1.CronJob(new Date(startDate.getTime() - config_1.TOURNAMENT_REGISTRATION_TIME), () => this.state.addAnnouncement(`${tournament.name} is starting in one hour. Tournament registration is now open in the Tournament tab.`), null, true);
                            }
                        }
                    }));
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
    startTournament(tournament) {
        logger_1.logger.info(`Start tournament ${tournament.name}`);
        this.dispatcher.dispatch(new tournament_commands_1.NextTournamentStageCommand(), {
            tournamentId: tournament.id
        });
    }
    initCronJobs() {
        logger_1.logger.debug("init lobby cron jobs");
        if (process.env.NODE_APP_INSTANCE || process.env.MODE === "dev") {
            const staleJob = cron_1.CronJob.from({
                cronTime: "*/1 * * * *",
                timeZone: "Europe/Paris",
                onTick: () => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    logger_1.logger.debug(`Auto clean up stale rooms`);
                    const query = yield colyseus_1.matchMaker.query({
                        private: false,
                        unlisted: false
                    });
                    query.forEach((data) => {
                        var _a;
                        if (!((_a = this.rooms) === null || _a === void 0 ? void 0 : _a.map((r) => r.roomId).includes(data.roomId))) {
                            this.addRoom(data.roomId, data);
                        }
                    });
                    (_a = this.rooms) === null || _a === void 0 ? void 0 : _a.forEach((room, roomIndex) => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const { type, gameStartedAt } = (_a = room.metadata) !== null && _a !== void 0 ? _a : {};
                        if ((type === "preparation" &&
                            gameStartedAt != null &&
                            new Date(gameStartedAt).getTime() < Date.now() - 60000) ||
                            !query.map((r) => r.roomId).includes(room.roomId)) {
                            this.presence.hdel("roomcaches", room.roomId);
                            this.removeRoom(roomIndex, room.roomId);
                        }
                        if (type === "game" &&
                            gameStartedAt != null &&
                            new Date(gameStartedAt).getTime() < Date.now() - 86400000) {
                            this.presence.hdel("roomcaches", room.roomId);
                            this.removeRoom(roomIndex, room.roomId);
                        }
                    }));
                }),
                start: true
            });
            this.cleanUpCronJobs.push(staleJob);
            const afkJob = cron_1.CronJob.from({
                cronTime: "*/1 * * * *",
                timeZone: "Europe/Paris",
                onTick: () => __awaiter(this, void 0, void 0, function* () {
                    logger_1.logger.debug("checking inactive users");
                    this.clients.forEach((c) => {
                        var _a, _b;
                        if (((_a = c.userData) === null || _a === void 0 ? void 0 : _a.joinedAt) &&
                            ((_b = c.userData) === null || _b === void 0 ? void 0 : _b.joinedAt) < Date.now() - config_1.INACTIVITY_TIMEOUT) {
                            c.leave(CloseCodes_1.CloseCodes.USER_INACTIVE);
                        }
                    });
                }),
                start: true
            });
            this.cleanUpCronJobs.push(afkJob);
        }
    }
}
exports.default = CustomLobbyRoom;
//# sourceMappingURL=custom-lobby-room.js.map