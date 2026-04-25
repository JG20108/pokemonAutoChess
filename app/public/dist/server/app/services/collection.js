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
exports.changeSelectedEmotionForUser = changeSelectedEmotionForUser;
exports.buyEmotionForUser = buyEmotionForUser;
const config_1 = require("../config");
const collection_1 = require("../core/collection");
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const Pokemon_1 = require("../types/enum/Pokemon");
const booster_1 = require("./booster");
function changeSelectedEmotionForUser(uid, index, emotion, shiny) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoUser = yield user_metadata_1.default.findOne({ uid });
        if (!mongoUser)
            return null;
        const mongoItem = mongoUser.pokemonCollection.get(index);
        if (!mongoItem)
            return null;
        if (emotion === mongoItem.selectedEmotion &&
            shiny === mongoItem.selectedShiny) {
            return { userDoc: mongoUser };
        }
        if (emotion !== null &&
            !collection_1.CollectionUtils.hasUnlocked(mongoItem.unlocked, emotion, shiny)) {
            return null;
        }
        mongoItem.selectedEmotion = emotion;
        mongoItem.selectedShiny = shiny;
        yield mongoUser.save();
        return { userDoc: mongoUser };
    });
}
function buyEmotionForUser(uid, index, emotion, shiny) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!Pokemon_1.PkmByIndex.hasOwnProperty(index))
            return null;
        const mongoUser = yield user_metadata_1.default.findOne({ uid });
        if (!mongoUser)
            return null;
        const cost = (0, config_1.getEmotionCost)(emotion, shiny);
        const shardIndex = Pokemon_1.PkmIndex[(0, config_1.getBaseAltForm)(Pokemon_1.PkmByIndex[index])];
        const mongoItem = mongoUser.pokemonCollection.get(index);
        const mongoShardItem = mongoUser.pokemonCollection.get(shardIndex);
        if (!mongoItem || !mongoShardItem)
            return null;
        if (collection_1.CollectionUtils.hasUnlocked(mongoItem.unlocked, emotion, shiny)) {
            return { userDoc: mongoUser };
        }
        if (mongoShardItem.dust < cost)
            return null;
        collection_1.CollectionUtils.unlockEmotion(mongoItem.unlocked, emotion, shiny);
        mongoItem.selectedEmotion = emotion;
        mongoItem.selectedShiny = shiny;
        mongoUser.markModified(`pokemonCollection.${index}`);
        mongoShardItem.dust -= cost;
        (0, booster_1.checkTitlesAfterEmotionUnlocked)(mongoUser, [
            { name: Pokemon_1.PkmByIndex[index], emotion, shiny }
        ]);
        yield mongoUser.save();
        return { userDoc: mongoUser };
    });
}
//# sourceMappingURL=collection.js.map