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
exports.DeleteRoomCommand = exports.OpenGameCommand = exports.JoinOrOpenRoomCommand = exports.SelectLanguageCommand = exports.UnbanUserCommand = exports.BanUserCommand = exports.OnSearchByIdCommand = exports.ChangeAvatarCommand = exports.ChangeTitleCommand = exports.ChangeNameCommand = exports.RemoveMessageCommand = exports.OnNewMessageCommand = exports.GiveRoleCommand = exports.GiveAllPortraitsCommand = exports.GiveBoostersCommand = exports.HeapSnapshotCommand = exports.DeleteAccountCommand = exports.GiveTitleCommand = exports.OnLeaveCommand = exports.OnJoinCommand = void 0;
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const crypto_1 = require("crypto");
const v8_1 = require("v8");
const config_1 = require("../../config");
const gadgets_1 = require("../../config/game/gadgets");
const collection_1 = require("../../core/collection");
const pending_game_manager_1 = require("../../core/pending-game-manager");
const user_metadata_1 = __importDefault(require("../../models/mongo-models/user-metadata"));
const precomputed_emotions_1 = require("../../models/precomputed/precomputed-emotions");
const discord_1 = require("../../services/discord");
const notifications_1 = require("../../services/notifications");
const types_1 = require("../../types");
const CloseCodes_1 = require("../../types/enum/CloseCodes");
const EloRank_1 = require("../../types/enum/EloRank");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Starters_1 = require("../../types/enum/Starters");
const avatar_1 = require("../../utils/avatar");
const elo_1 = require("../../utils/elo");
const logger_1 = require("../../utils/logger");
const name_generation_1 = require("../../utils/name-generation");
const profanity_filter_1 = require("../../utils/profanity-filter");
const random_1 = require("../../utils/random");
class OnJoinCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, user }) {
            try {
                client.send(types_1.Transfer.ROOMS, this.room.rooms);
                client.userData = { joinedAt: Date.now() };
                if (user) {
                    this.room.users.set(client.auth.uid, user);
                    const pendingGame = yield (0, pending_game_manager_1.getPendingGame)(this.room.presence, client.auth.uid);
                    if (pendingGame != null && !pendingGame.isExpired) {
                        client.send(types_1.Transfer.RECONNECT_PROMPT, pendingGame.gameId);
                    }
                    const notifications = notifications_1.notificationsService.getNotifications(client.auth.uid);
                    if (notifications.length > 0) {
                        client.send(types_1.Transfer.NOTIFICATIONS, notifications);
                    }
                }
                else {
                    const starterBoosters = 3;
                    const starterPokemon = (0, random_1.pickRandomIn)(Starters_1.Starters);
                    const starterAvatar = Pokemon_1.PkmIndex[starterPokemon] + "/Normal";
                    const randomName = (0, name_generation_1.generateRandomName)(starterPokemon);
                    yield user_metadata_1.default.create({
                        uid: client.auth.uid,
                        displayName: randomName,
                        avatar: starterAvatar,
                        booster: starterBoosters,
                        pokemonCollection: new Map()
                    });
                    const newUser = {
                        uid: client.auth.uid,
                        displayName: randomName,
                        language: client.auth.metadata.language,
                        avatar: starterAvatar,
                        games: 0,
                        wins: 0,
                        exp: 0,
                        level: 0,
                        elo: 1000,
                        maxElo: 1000,
                        eventPoints: 0,
                        maxEventPoints: 0,
                        eventFinishTime: null,
                        pokemonCollection: new Map(),
                        booster: starterBoosters,
                        titles: [],
                        title: "",
                        role: types_1.Role.BASIC
                    };
                    this.room.users.set(client.auth.uid, newUser);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnJoinCommand = OnJoinCommand;
class OnLeaveCommand extends command_1.Command {
    execute({ client }) {
        try {
            if (client && client.auth && client.auth.displayName && client.auth.uid) {
                this.room.users.delete(client.auth.uid);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnLeaveCommand = OnLeaveCommand;
class GiveTitleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, title }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                const targetUser = this.room.users.get(uid);
                if (u && u.role && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid });
                    if (user && user.titles && !user.titles.includes(title)) {
                        user.titles.push(title);
                        user.save();
                        if (targetUser) {
                            targetUser.titles.push(title);
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveTitleCommand = GiveTitleCommand;
class DeleteAccountCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client }) {
            try {
                if (client.auth.uid) {
                    logger_1.logger.info(`User ${client.auth.displayName} [${client.auth.uid}] has deleted their account`);
                    yield user_metadata_1.default.deleteOne({ uid: client.auth.uid });
                    client.leave(CloseCodes_1.CloseCodes.USER_DELETED);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.DeleteAccountCommand = DeleteAccountCommand;
class HeapSnapshotCommand extends command_1.Command {
    execute({ client }) {
        const u = this.room.users.get(client.auth.uid);
        if (u && u.role === types_1.Role.ADMIN) {
            logger_1.logger.info("writing heap snapshot");
            (0, v8_1.writeHeapSnapshot)();
        }
    }
}
exports.HeapSnapshotCommand = HeapSnapshotCommand;
class GiveBoostersCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, numberOfBoosters = 1 }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                const targetUser = this.room.users.get(uid);
                if (u && u.role && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid: uid });
                    if (user) {
                        user.booster += numberOfBoosters;
                        user.save();
                        if (targetUser) {
                            targetUser.booster = user.booster;
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveBoostersCommand = GiveBoostersCommand;
class GiveAllPortraitsCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid }) {
            try {
                const requester = this.room.users.get(client.auth.uid);
                if (!requester || requester.role !== types_1.Role.ADMIN) {
                    return;
                }
                const user = yield user_metadata_1.default.findOne({ uid });
                if (!user) {
                    logger_1.logger.warn(`GiveAllPortraitsCommand: target user ${uid} not found in DB`);
                    return;
                }
                const allPkm = Object.values(Pokemon_1.Pkm);
                let modifiedCount = 0;
                for (const pkm of allPkm) {
                    const index = Pokemon_1.PkmIndex[pkm];
                    if (!index)
                        continue;
                    const availableNormal = (0, precomputed_emotions_1.getAvailableEmotions)(index, false);
                    const availableShiny = (0, precomputed_emotions_1.getAvailableEmotions)(index, true);
                    if (availableNormal.length === 0 &&
                        availableShiny.length === 0) {
                        continue;
                    }
                    const mask = Buffer.alloc(5, 0);
                    for (const emotion of availableNormal) {
                        collection_1.CollectionUtils.unlockEmotion(mask, emotion, false);
                    }
                    for (const emotion of availableShiny) {
                        collection_1.CollectionUtils.unlockEmotion(mask, emotion, true);
                    }
                    const existing = user.pokemonCollection.get(index);
                    if (existing) {
                        existing.unlocked = mask;
                    }
                    else {
                        user.pokemonCollection.set(index, {
                            id: index,
                            unlocked: mask,
                            dust: 0,
                            selectedEmotion: types_1.Emotion.NORMAL,
                            selectedShiny: false,
                            played: 0
                        });
                    }
                    modifiedCount++;
                }
                user.markModified("pokemonCollection");
                yield user.save();
                logger_1.logger.info(`Admin ${client.auth.uid} unlocked all portraits for ${uid} (${modifiedCount} Pokémon touched)`);
            }
            catch (error) {
                logger_1.logger.error("GiveAllPortraitsCommand failed:", error);
            }
        });
    }
}
exports.GiveAllPortraitsCommand = GiveAllPortraitsCommand;
class GiveRoleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, role }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                const targetUser = this.room.users.get(uid);
                if (u && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid: uid });
                    if (user) {
                        user.role = role;
                        user.save();
                        if (targetUser) {
                            targetUser.role = user.role;
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveRoleCommand = GiveRoleCommand;
class OnNewMessageCommand extends command_1.Command {
    execute({ client, message }) {
        try {
            const MAX_MESSAGE_LENGTH = 250;
            message = (0, profanity_filter_1.cleanProfanity)(message.substring(0, MAX_MESSAGE_LENGTH));
            const user = this.room.users.get(client.auth.uid);
            if (user &&
                [types_1.Role.ADMIN, types_1.Role.MODERATOR].includes(user.role) &&
                message != "") {
                this.state.addMessage(message, user.uid, user.displayName, user.avatar);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnNewMessageCommand = OnNewMessageCommand;
class RemoveMessageCommand extends command_1.Command {
    execute({ client, messageId }) {
        try {
            const user = this.room.users.get(client.auth.uid);
            if (user &&
                user.role &&
                (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR)) {
                this.state.removeMessage(messageId);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.RemoveMessageCommand = RemoveMessageCommand;
class ChangeNameCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (!user)
                    return;
                if (config_1.USERNAME_REGEXP.test(name)) {
                    logger_1.logger.info(`${client.auth.displayName} changed name to ${name}`);
                    user.displayName = name;
                    const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (mongoUser) {
                        mongoUser.displayName = name;
                        yield mongoUser.save();
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeNameCommand = ChangeNameCommand;
class ChangeTitleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, title }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (title !== "" && (user === null || user === void 0 ? void 0 : user.titles.includes(title)) === false) {
                    throw new Error("User does not have this title unlocked");
                }
                if (user) {
                    user.title = title;
                    const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (mongoUser) {
                        mongoUser.title = title;
                        yield mongoUser.save();
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeTitleCommand = ChangeTitleCommand;
class ChangeAvatarCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, index, emotion, shiny }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (!user)
                    return;
                if (!mongoUser)
                    return;
                const collectionItem = mongoUser.pokemonCollection.get(index);
                if (!collectionItem ||
                    !collection_1.CollectionUtils.hasUnlocked(collectionItem.unlocked, emotion, shiny))
                    return;
                const portrait = (0, avatar_1.getPortraitSrc)(index, shiny, emotion)
                    .replace("/assets/portraits/", "")
                    .replace(".png", "");
                user.avatar = portrait;
                mongoUser.avatar = portrait;
                mongoUser.save();
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeAvatarCommand = ChangeAvatarCommand;
class OnSearchByIdCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid }) {
            try {
                const user = yield user_metadata_1.default.findOne({ uid: uid });
                if (user) {
                    client.send(types_1.Transfer.USER, user);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnSearchByIdCommand = OnSearchByIdCommand;
class BanUserCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, reason }) {
            try {
                const bannedUser = yield user_metadata_1.default.findOne({ uid });
                const user = this.room.users.get(client.auth.uid);
                if (user &&
                    bannedUser &&
                    (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR) &&
                    bannedUser.role !== types_1.Role.ADMIN) {
                    const res = yield user_metadata_1.default.updateOne({ uid }, { banned: true });
                    this.state.removeMessages(uid);
                    if (res.modifiedCount > 0) {
                        client.send(types_1.Transfer.ALERT, `${user.displayName} banned the user ${bannedUser.displayName}`);
                        discord_1.discordService.announceBan(user, bannedUser, reason);
                        bannedUser.banned = true;
                        client.send(types_1.Transfer.USER, bannedUser);
                    }
                    else {
                        client.send(types_1.Transfer.ALERT, `${bannedUser.displayName} was already banned`);
                    }
                    this.room.clients.forEach((c) => {
                        if (c.auth.uid === uid) {
                            c.leave(CloseCodes_1.CloseCodes.USER_BANNED);
                        }
                    });
                }
                else if (!bannedUser) {
                    client.send(types_1.Transfer.ALERT, `No user found with ID ${uid}`);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BanUserCommand = BanUserCommand;
class UnbanUserCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, reason }) {
            try {
                const unbannedUser = yield user_metadata_1.default.findOne({ uid });
                const user = this.room.users.get(client.auth.uid);
                if (unbannedUser &&
                    user &&
                    (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR)) {
                    const res = yield user_metadata_1.default.updateOne({ uid }, { banned: false });
                    if (res.modifiedCount > 0) {
                        client.send(types_1.Transfer.ALERT, `${user.displayName} unbanned the user ${unbannedUser === null || unbannedUser === void 0 ? void 0 : unbannedUser.displayName} (User ID: ${uid})`);
                        discord_1.discordService.announceUnban(user, unbannedUser, reason);
                        unbannedUser.banned = false;
                        client.send(types_1.Transfer.USER, unbannedUser);
                    }
                    else {
                        client.send(types_1.Transfer.ALERT, `${unbannedUser.displayName} was not banned`);
                    }
                }
                else if (!unbannedUser) {
                    client.send(types_1.Transfer.ALERT, `No user found with ID ${uid}`);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.UnbanUserCommand = UnbanUserCommand;
class SelectLanguageCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, message }) {
            try {
                const u = this.room.users.get(client.auth.uid);
                if (client.auth.uid && u) {
                    const user = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (user) {
                        user.language = message;
                        yield user.save();
                    }
                    u.language = message;
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.SelectLanguageCommand = SelectLanguageCommand;
class JoinOrOpenRoomCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, gameMode }) {
            var _b, _c, _d;
            const user = this.room.users.get(client.auth.uid);
            if (!user)
                return;
            switch (gameMode) {
                case Game_1.GameMode.CUSTOM_LOBBY:
                    return [new OpenGameCommand().setPayload({ gameMode, client })];
                case Game_1.GameMode.CLASSIC: {
                    const existingClassicLobby = (_b = this.room.rooms) === null || _b === void 0 ? void 0 : _b.find((room) => {
                        var _a;
                        return room.name === "preparation" &&
                            ((_a = room.metadata) === null || _a === void 0 ? void 0 : _a.gameMode) === Game_1.GameMode.CLASSIC &&
                            room.clients < config_1.MAX_PLAYERS_PER_GAME;
                    });
                    if (existingClassicLobby) {
                        client.send(types_1.Transfer.REQUEST_ROOM, existingClassicLobby.roomId);
                    }
                    else {
                        return [new OpenGameCommand().setPayload({ gameMode, client })];
                    }
                    break;
                }
                case Game_1.GameMode.RANKED: {
                    if (user.level < gadgets_1.GADGETS.certificate.levelRequired) {
                        client.send(types_1.Transfer.ALERT, `You need to reach level ${gadgets_1.GADGETS.certificate.levelRequired} to unlock ranked mode.`);
                        return;
                    }
                    const userRank = (0, elo_1.getRank)(user.elo);
                    let minRank = EloRank_1.EloRank.LEVEL_BALL;
                    let maxRank = EloRank_1.EloRank.BEAST_BALL;
                    switch (userRank) {
                        case EloRank_1.EloRank.LEVEL_BALL:
                        case EloRank_1.EloRank.NET_BALL:
                            minRank = EloRank_1.EloRank.LEVEL_BALL;
                            maxRank = EloRank_1.EloRank.NET_BALL;
                            break;
                        case EloRank_1.EloRank.SAFARI_BALL:
                        case EloRank_1.EloRank.LOVE_BALL:
                            minRank = EloRank_1.EloRank.NET_BALL;
                            maxRank = EloRank_1.EloRank.LOVE_BALL;
                            break;
                        case EloRank_1.EloRank.PREMIER_BALL:
                        case EloRank_1.EloRank.QUICK_BALL:
                            minRank = EloRank_1.EloRank.LOVE_BALL;
                            maxRank = EloRank_1.EloRank.QUICK_BALL;
                            break;
                        case EloRank_1.EloRank.POKE_BALL:
                        case EloRank_1.EloRank.SUPER_BALL:
                        case EloRank_1.EloRank.ULTRA_BALL:
                        case EloRank_1.EloRank.MASTER_BALL:
                        case EloRank_1.EloRank.BEAST_BALL:
                            minRank = EloRank_1.EloRank.QUICK_BALL;
                            maxRank = EloRank_1.EloRank.BEAST_BALL;
                            break;
                    }
                    const existingRanked = (_c = this.room.rooms) === null || _c === void 0 ? void 0 : _c.find((room) => {
                        var _a;
                        const { minRank, maxRank, gameMode } = (_a = room.metadata) !== null && _a !== void 0 ? _a : {};
                        const minElo = minRank ? config_1.EloRankThreshold[minRank] : 0;
                        const maxRankThreshold = maxRank
                            ? config_1.EloRankThreshold[maxRank]
                            : Infinity;
                        return (room.name === "preparation" &&
                            gameMode === Game_1.GameMode.RANKED &&
                            user.elo >= minElo &&
                            (user.elo <= maxRankThreshold || userRank === maxRank) &&
                            room.clients < config_1.MAX_PLAYERS_PER_GAME);
                    });
                    if (existingRanked) {
                        client.send(types_1.Transfer.REQUEST_ROOM, existingRanked.roomId);
                    }
                    else {
                        return [
                            new OpenGameCommand().setPayload({
                                gameMode,
                                client,
                                minRank,
                                maxRank
                            })
                        ];
                    }
                    break;
                }
                case Game_1.GameMode.SCRIBBLE: {
                    const existingScribble = (_d = this.room.rooms) === null || _d === void 0 ? void 0 : _d.find((room) => {
                        var _a;
                        return room.name === "preparation" &&
                            ((_a = room.metadata) === null || _a === void 0 ? void 0 : _a.gameMode) === Game_1.GameMode.SCRIBBLE &&
                            room.clients < config_1.MAX_PLAYERS_PER_GAME;
                    });
                    if (existingScribble) {
                        client.send(types_1.Transfer.REQUEST_ROOM, existingScribble.roomId);
                    }
                    else {
                        return [new OpenGameCommand().setPayload({ gameMode, client })];
                    }
                    break;
                }
            }
        });
    }
}
exports.JoinOrOpenRoomCommand = JoinOrOpenRoomCommand;
class OpenGameCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ gameMode, client, minRank, maxRank }) {
            const user = this.room.users.get(client.auth.uid);
            if (!user)
                return;
            let roomName = `${user.displayName}'${user.displayName.endsWith("s") ? "" : "s"} room`;
            let noElo = true;
            let password = null;
            let ownerId = null;
            if (gameMode === Game_1.GameMode.RANKED) {
                roomName = "Ranked Match";
                noElo = false;
            }
            else if (gameMode === Game_1.GameMode.SCRIBBLE) {
                roomName = "Smeargle's Scribble";
            }
            else if (gameMode === Game_1.GameMode.CUSTOM_LOBBY) {
                ownerId = user.uid;
                const secureCode = (0, crypto_1.randomBytes)(4)
                    .toString("base64url")
                    .replace(/[^a-zA-Z0-9]/g, "");
                password = (secureCode + (0, crypto_1.randomBytes)(4).toString("hex"))
                    .substring(0, 4)
                    .toUpperCase();
            }
            else if (gameMode === Game_1.GameMode.CLASSIC) {
                roomName = "Classic";
            }
            const newRoom = yield colyseus_1.matchMaker.createRoom("preparation", {
                gameMode,
                minRank,
                maxRank,
                noElo,
                password,
                ownerId,
                roomName
            });
            client.send(types_1.Transfer.REQUEST_ROOM, newRoom.roomId);
        });
    }
}
exports.OpenGameCommand = OpenGameCommand;
class DeleteRoomCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, roomId, tournamentId, bracketId }) {
            try {
                if (client) {
                    const user = this.room.users.get(client.auth.uid);
                    if (!user || !user.role || user.role !== types_1.Role.ADMIN) {
                        return;
                    }
                }
                const roomsIdToDelete = [];
                if (roomId) {
                    roomsIdToDelete.push(roomId);
                }
                else if (tournamentId) {
                    const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                    if (!tournament)
                        return logger_1.logger.error(`DeleteRoomCommand ; Tournament not found: ${tournamentId}`);
                    const allRooms = yield colyseus_1.matchMaker.query({});
                    roomsIdToDelete.push(...allRooms
                        .filter((result) => {
                        var _a, _b;
                        return ((_a = result.metadata) === null || _a === void 0 ? void 0 : _a.tournamentId) === tournamentId &&
                            (bracketId === "all" ||
                                ((_b = result.metadata) === null || _b === void 0 ? void 0 : _b.bracketId) === bracketId);
                    })
                        .map((result) => result.roomId));
                }
                if (roomsIdToDelete.length === 0) {
                    return logger_1.logger.error(`DeleteRoomCommand ; room not found with query: roomId: ${roomId} tournamentId: ${tournamentId} bracketId: ${bracketId}`);
                }
                roomsIdToDelete.forEach((roomIdToDelete) => {
                    this.room.presence.publish("room-deleted", roomIdToDelete);
                });
            }
            catch (error) {
                logger_1.logger.error(`DeleteRoomCommand error:`, error);
            }
        });
    }
}
exports.DeleteRoomCommand = DeleteRoomCommand;
//# sourceMappingURL=lobby-commands.js.map