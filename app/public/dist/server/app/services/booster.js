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
exports.buyBoosterForUser = buyBoosterForUser;
exports.openBoosterForUser = openBoosterForUser;
exports.checkTitlesAfterEmotionUnlocked = checkTitlesAfterEmotionUnlocked;
const config_1 = require("../config");
const collection_1 = require("../core/collection");
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const types_1 = require("../types");
const Pokemon_1 = require("../types/enum/Pokemon");
const collection_2 = require("./collection");
function buyBoosterForUser(uid, index) {
    return __awaiter(this, void 0, void 0, function* () {
        const pkm = Pokemon_1.PkmByIndex[index];
        if (!pkm)
            return null;
        const rarity = (0, precomputed_pokemon_data_1.getPokemonData)(pkm).rarity;
        const boosterCost = config_1.BoosterPriceByRarity[rarity];
        const shardIndex = Pokemon_1.PkmIndex[(0, config_1.getBaseAltForm)(pkm)];
        const userDoc = yield user_metadata_1.default.findOneAndUpdate({
            uid,
            [`pokemonCollection.${shardIndex}.dust`]: { $gte: boosterCost }
        }, {
            $inc: {
                booster: 1,
                [`pokemonCollection.${shardIndex}.dust`]: -boosterCost
            }
        }, { returnDocument: "after" });
        if (!userDoc)
            return null;
        return { userDoc };
    });
}
function openBoosterForUser(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        let userDoc = yield user_metadata_1.default.findOneAndUpdate({
            uid,
            booster: { $gt: 0 }
        }, {
            $inc: { booster: -1 }
        }, { returnDocument: "after" });
        if (!userDoc)
            return null;
        const updateOperations = {};
        const boosterContent = (0, collection_2.createBooster)(userDoc);
        for (const card of boosterContent) {
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
                    updateOperations.$inc[`pokemonCollection.${shardIndex}.dust`] = dustGain;
                }
                else {
                    collection_1.CollectionUtils.unlockEmotion(existingItem.unlocked, card.emotion, card.shiny);
                    updateOperations[`pokemonCollection.${index}.unlocked`] =
                        Buffer.copyBytesFrom(existingItem.unlocked, 0, 5);
                }
            }
        }
        yield userDoc.updateOne(updateOperations);
        userDoc = yield user_metadata_1.default.findOne({ uid });
        if (!userDoc)
            return null;
        checkTitlesAfterEmotionUnlocked(userDoc, boosterContent);
        yield userDoc.save();
        return {
            userDoc,
            boosterContent
        };
    });
}
function checkTitlesAfterEmotionUnlocked(mongoUser, unlocked) {
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
}
//# sourceMappingURL=booster.js.map