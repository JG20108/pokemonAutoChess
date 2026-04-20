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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRoomCommand = exports.OpenGameCommand = exports.JoinOrOpenRoomCommand = exports.SelectLanguageCommand = exports.UnbanUserCommand = exports.BanUserCommand = exports.OnSearchByIdCommand = exports.BuyBoosterCommand = exports.BuyEmotionCommand = exports.ChangeAvatarCommand = exports.ChangeSelectedEmotionCommand = exports.ChangeTitleCommand = exports.ChangeNameCommand = exports.OpenBoosterCommand = exports.RemoveMessageCommand = exports.OnNewMessageCommand = exports.GiveRoleCommand = exports.GiveBoostersCommand = exports.HeapSnapshotCommand = exports.DeleteAccountCommand = exports.GiveTitleCommand = exports.OnLeaveCommand = exports.OnJoinCommand = void 0;
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const v8_1 = require("v8");
const config_1 = require("../../config");
const collection_1 = require("../../core/collection");
const pending_game_manager_1 = require("../../core/pending-game-manager");
const user_metadata_1 = __importStar(require("../../models/mongo-models/user-metadata"));
const precomputed_pokemon_data_1 = require("../../models/precomputed/precomputed-pokemon-data");
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
class OpenBoosterCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (!user)
                    return;
                let userDoc = yield user_metadata_1.default.findOneAndUpdate({
                    uid: client.auth.uid,
                    booster: { $gt: 0 }
                }, {
                    $inc: { booster: -1 }
                }, { returnDocument: "after" });
                if (!userDoc)
                    return;
                const updateOperations = {};
                const boosterContent = (0, collection_1.createBooster)(userDoc);
                boosterContent.forEach((card) => {
                    const index = Pokemon_1.PkmIndex[card.name];
                    const existingItem = userDoc.pokemonCollection.get(index);
                    if (!existingItem) {
                        if (`pokemonCollection.${index}` in updateOperations) {
                            const unlocked = updateOperations[`pokemonCollection.${index}`].unlocked;
                            collection_1.CollectionUtils.unlockEmotion(unlocked, card.emotion, card.shiny);
                        }
                        else {
                            const newCollectionItem = {
                                id: index,
                                unlocked: Buffer.alloc(5, 0),
                                dust: 0,
                                selectedEmotion: types_1.Emotion.NORMAL,
                                selectedShiny: false,
                                played: 0
                            };
                            collection_1.CollectionUtils.unlockEmotion(newCollectionItem.unlocked, card.emotion, card.shiny);
                            updateOperations[`pokemonCollection.${index}`] = newCollectionItem;
                        }
                    }
                    else {
                        const hasUnlocked = collection_1.CollectionUtils.hasUnlocked(existingItem.unlocked, card.emotion, card.shiny);
                        if (hasUnlocked) {
                            const dustGain = card.shiny ? config_1.DUST_PER_SHINY : config_1.DUST_PER_BOOSTER;
                            const shardIndex = Pokemon_1.PkmIndex[(0, config_1.getBaseAltForm)(card.name)];
                            updateOperations.$inc = updateOperations.$inc || {};
                            updateOperations.$inc[`pokemonCollection.${shardIndex}.dust`] =
                                dustGain;
                        }
                        else {
                            collection_1.CollectionUtils.unlockEmotion(existingItem.unlocked, card.emotion, card.shiny);
                            updateOperations[`pokemonCollection.${index}.unlocked`] =
                                Buffer.copyBytesFrom(existingItem.unlocked, 0, 5);
                        }
                    }
                });
                yield userDoc.updateOne(updateOperations);
                userDoc = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (!userDoc) {
                    logger_1.logger.error(`User document not found after opening booster: ${client.auth.uid}`);
                    return;
                }
                user.booster = userDoc.booster;
                boosterContent.forEach((pkmWithCustom) => {
                    const index = Pokemon_1.PkmIndex[pkmWithCustom.name];
                    const pokemonCollectionItem = user.pokemonCollection.get(index);
                    const mongoPokemonCollectionItem = userDoc.pokemonCollection.get(index);
                    if (!mongoPokemonCollectionItem) {
                        logger_1.logger.error(`Missing mongo collection item after booster open`, {
                            index,
                            pkmWithCustom,
                            clientUid: client.auth.uid
                        });
                        return;
                    }
                    if (pokemonCollectionItem) {
                        pokemonCollectionItem.dust = mongoPokemonCollectionItem.dust;
                        pokemonCollectionItem.unlocked = Buffer.copyBytesFrom(mongoPokemonCollectionItem.unlocked, 0, 5);
                    }
                    else {
                        const newConfig = {
                            dust: mongoPokemonCollectionItem.dust,
                            id: mongoPokemonCollectionItem.id,
                            selectedEmotion: mongoPokemonCollectionItem.selectedEmotion,
                            selectedShiny: mongoPokemonCollectionItem.selectedShiny,
                            played: mongoPokemonCollectionItem.played,
                            unlocked: Buffer.copyBytesFrom(mongoPokemonCollectionItem.unlocked, 0, 5)
                        };
                        user.pokemonCollection.set(index, newConfig);
                    }
                });
                checkTitlesAfterEmotionUnlocked(userDoc, boosterContent);
                yield userDoc.save();
                client.send(types_1.Transfer.BOOSTER_CONTENT, boosterContent);
                client.send(types_1.Transfer.USER_PROFILE, (0, user_metadata_1.toUserMetadataJSON)(userDoc));
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OpenBoosterCommand = OpenBoosterCommand;
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
class ChangeSelectedEmotionCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, emotion, index, shiny }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (!user)
                    return;
                const pokemonCollectionItem = user.pokemonCollection.get(index);
                if (!pokemonCollectionItem)
                    return;
                if (emotion === pokemonCollectionItem.selectedEmotion &&
                    shiny === pokemonCollectionItem.selectedShiny) {
                    return;
                }
                if (emotion === null ||
                    collection_1.CollectionUtils.hasUnlocked(pokemonCollectionItem.unlocked, emotion, shiny)) {
                    pokemonCollectionItem.selectedEmotion = emotion;
                    pokemonCollectionItem.selectedShiny = shiny;
                    yield user_metadata_1.default.findOneAndUpdate({ uid: client.auth.uid }, {
                        [`pokemonCollection.${index}.selectedEmotion`]: emotion,
                        [`pokemonCollection.${index}.selectedShiny`]: shiny
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeSelectedEmotionCommand = ChangeSelectedEmotionCommand;
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
class BuyEmotionCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, emotion, index, shiny }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                const cost = (0, config_1.getEmotionCost)(emotion, shiny);
                if (!user || !Pokemon_1.PkmByIndex.hasOwnProperty(index))
                    return;
                const shardIndex = Pokemon_1.PkmIndex[(0, config_1.getBaseAltForm)(Pokemon_1.PkmByIndex[index])];
                const pokemonCollectionItem = user.pokemonCollection.get(index);
                const shardCollectionItem = user.pokemonCollection.get(shardIndex);
                if (!pokemonCollectionItem || !shardCollectionItem)
                    return;
                if (collection_1.CollectionUtils.hasUnlocked(pokemonCollectionItem.unlocked, emotion, shiny)) {
                    return;
                }
                const mongoUser = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (!mongoUser)
                    return;
                const mongoItem = mongoUser.pokemonCollection.get(index);
                const mongoShardItem = mongoUser.pokemonCollection.get(shardIndex);
                if (!mongoItem || !mongoShardItem)
                    return;
                if (mongoShardItem.dust < cost)
                    return;
                collection_1.CollectionUtils.unlockEmotion(mongoItem.unlocked, emotion, shiny);
                mongoItem.selectedEmotion = emotion;
                mongoItem.selectedShiny = shiny;
                mongoUser.markModified(`pokemonCollection.${index}`);
                mongoShardItem.dust -= cost;
                collection_1.CollectionUtils.unlockEmotion(pokemonCollectionItem.unlocked, emotion, shiny);
                shardCollectionItem.dust = mongoShardItem.dust;
                pokemonCollectionItem.selectedEmotion = emotion;
                pokemonCollectionItem.selectedShiny = shiny;
                checkTitlesAfterEmotionUnlocked(mongoUser, [
                    { name: Pokemon_1.PkmByIndex[index], emotion, shiny }
                ]);
                yield mongoUser.save();
                client.send(types_1.Transfer.USER_PROFILE, (0, user_metadata_1.toUserMetadataJSON)(mongoUser));
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BuyEmotionCommand = BuyEmotionCommand;
function checkTitlesAfterEmotionUnlocked(mongoUser, unlocked) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTitles = [];
        if (!mongoUser.titles.includes(types_1.Title.SHINY_SEEKER)) {
            let numberOfShinies = 0;
            mongoUser.pokemonCollection.forEach((c) => {
                const { shinyEmotions } = collection_1.CollectionUtils.getEmotionsUnlocked(c);
                numberOfShinies += shinyEmotions.length;
            });
            if (numberOfShinies >= 30) {
                newTitles.push(types_1.Title.SHINY_SEEKER);
            }
        }
        if (!mongoUser.titles.includes(types_1.Title.DUKE)) {
            if (Object.values(Pokemon_1.Pkm)
                .filter((p) => Pokemon_1.NonPkm.includes(p) === false && config_1.PkmAltForms.includes(p) === false)
                .every((pkm) => {
                const baseForm = (0, config_1.getBaseAltForm)(pkm);
                const accepted = baseForm in config_1.PkmAltFormsByPkm
                    ? [baseForm, ...config_1.PkmAltFormsByPkm[baseForm]]
                    : [baseForm];
                return accepted.some((form) => {
                    const item = mongoUser.pokemonCollection.get(Pokemon_1.PkmIndex[form]);
                    if (!item)
                        return false;
                    const { emotions, shinyEmotions } = collection_1.CollectionUtils.getEmotionsUnlocked(item);
                    return emotions.length > 0 || shinyEmotions.length > 0;
                });
            })) {
                newTitles.push(types_1.Title.DUKE);
            }
        }
        if (unlocked.some((p) => p.emotion === types_1.Emotion.ANGRY && p.name === Pokemon_1.Pkm.ARBOK) &&
            !mongoUser.titles.includes(types_1.Title.DENTIST)) {
            newTitles.push(types_1.Title.DENTIST);
        }
        if (!mongoUser.titles.includes(types_1.Title.ARCHEOLOGIST) &&
            Pokemon_1.Unowns.some((unown) => unlocked.map((p) => p.name).includes(unown)) &&
            Pokemon_1.Unowns.every((name) => {
                const unownIndex = Pokemon_1.PkmIndex[name];
                const item = mongoUser.pokemonCollection.get(unownIndex);
                const isBeingUnlockedRightNow = unlocked.some((p) => p.name === name);
                let isAlreadyUnlocked = false;
                if (item) {
                    const { emotions, shinyEmotions } = collection_1.CollectionUtils.getEmotionsUnlocked(item);
                    isAlreadyUnlocked = emotions.length > 0 || shinyEmotions.length > 0;
                }
                return isAlreadyUnlocked || isBeingUnlockedRightNow;
            })) {
            newTitles.push(types_1.Title.ARCHEOLOGIST);
        }
        if (!mongoUser.titles.includes(types_1.Title.DUCHESS)) {
            if (unlocked.some((p) => {
                const item = mongoUser.pokemonCollection.get(Pokemon_1.PkmIndex[p.name]);
                if (!item)
                    return false;
                const { emotions, shinyEmotions } = collection_1.CollectionUtils.getEmotionsUnlocked(item);
                return (shinyEmotions.length >= types_1.CollectionEmotions.length &&
                    emotions.length >= types_1.CollectionEmotions.length);
            })) {
                newTitles.push(types_1.Title.DUCHESS);
            }
        }
        if (newTitles.length > 0) {
            mongoUser.titles.push(...newTitles);
        }
    });
}
class BuyBoosterCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, index }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (!user)
                    return;
                const pkm = Pokemon_1.PkmByIndex[index];
                if (!pkm)
                    return;
                const rarity = (0, precomputed_pokemon_data_1.getPokemonData)(pkm).rarity;
                const boosterCost = config_1.BoosterPriceByRarity[rarity];
                const shardIndex = Pokemon_1.PkmIndex[(0, config_1.getBaseAltForm)(pkm)];
                const mongoUser = yield user_metadata_1.default.findOneAndUpdate({
                    uid: client.auth.uid,
                    [`pokemonCollection.${shardIndex}.dust`]: { $gte: boosterCost }
                }, {
                    $inc: {
                        booster: 1,
                        [`pokemonCollection.${shardIndex}.dust`]: -boosterCost
                    }
                }, { returnDocument: "after" });
                if (!mongoUser)
                    return;
                const pokemonCollectionItem = user.pokemonCollection.get(shardIndex);
                if (!pokemonCollectionItem)
                    return;
                const mongoPokemonCollectionItem = mongoUser.pokemonCollection.get(shardIndex);
                if (!mongoPokemonCollectionItem)
                    return;
                user.booster = mongoUser.booster;
                pokemonCollectionItem.dust = mongoPokemonCollectionItem.dust;
                client.send(types_1.Transfer.USER_PROFILE, (0, user_metadata_1.toUserMetadataJSON)(mongoUser));
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BuyBoosterCommand = BuyBoosterCommand;
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
                password = Math.random().toString(36).substring(2, 6).toUpperCase();
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