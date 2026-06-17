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
exports.migrateShardsOfAltForms = migrateShardsOfAltForms;
exports.createBooster = createBooster;
exports.pickRandomPokemonBooster = pickRandomPokemonBooster;
const config_1 = require("../config");
const collection_1 = require("../core/collection");
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const precomputed_emotions_1 = require("../models/precomputed/precomputed-emotions");
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../models/precomputed/precomputed-rarity");
const pokemon_animations_1 = require("../public/src/game/components/pokemon-animations");
const types_1 = require("../types");
const Ability_1 = require("../types/enum/Ability");
const Game_1 = require("../types/enum/Game");
const Pokemon_1 = require("../types/enum/Pokemon");
const logger_1 = require("../utils/logger");
const random_1 = require("../utils/random");
const booster_1 = require("./booster");
const booster_monitor_1 = require("./booster-monitor");
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
function migrateShardsOfAltForms(mongoUser) {
    return __awaiter(this, void 0, void 0, function* () {
        let modified = false;
        for (const [index, item] of mongoUser.pokemonCollection) {
            const pkm = Pokemon_1.PkmByIndex[index];
            if (config_1.PkmAltForms.includes(pkm) && item.dust > 0) {
                const basePkm = (0, config_1.getBaseAltForm)(pkm);
                const baseIndex = Pokemon_1.PkmIndex[basePkm];
                const baseItem = mongoUser.pokemonCollection.get(baseIndex);
                const dustToMigrate = item.dust;
                if (!baseItem) {
                    const newCollectionItem = {
                        id: index,
                        unlocked: Buffer.alloc(5, 0),
                        dust: item.dust,
                        selectedEmotion: types_1.Emotion.NORMAL,
                        selectedShiny: false,
                        played: 0
                    };
                    mongoUser.pokemonCollection.set(baseIndex, newCollectionItem);
                }
                else {
                    baseItem.dust += dustToMigrate;
                    item.dust = 0;
                }
                logger_1.logger.info(`Migrated ${dustToMigrate} shards from ${pkm} to its base form ${basePkm} for user ${mongoUser.uid}`);
                modified = true;
            }
        }
        if (modified) {
            return yield mongoUser.save();
        }
    });
}
function createBooster(user) {
    const NB_PER_BOOSTER = 10;
    const boosterContent = [];
    const alreadyTaken = new Set();
    const godPack = (0, random_1.chance)(1 / 1000);
    for (let i = 0; i < NB_PER_BOOSTER; i++) {
        const guaranteedUnique = i === NB_PER_BOOSTER - 1;
        let card;
        let attempts = 0;
        const maxAttempts = 50;
        do {
            card = pickRandomPokemonBooster(user, guaranteedUnique, godPack);
            attempts++;
        } while (attempts < maxAttempts &&
            alreadyTaken.has(`${card.name}-${card.shiny}-${card.emotion}`));
        boosterContent.push(card);
        alreadyTaken.add(`${card.name}-${card.shiny}-${card.emotion}`);
    }
    (0, booster_monitor_1.recordBoosterCreation)(boosterContent);
    return boosterContent;
}
function pickRandomPokemonBooster(user, guaranteedUnique, godPack) {
    var _a, _b, _c, _d;
    let name = Pokemon_1.Pkm.MAGIKARP;
    const rarity = (_a = (0, random_1.randomWeighted)(config_1.BoosterRarityProbability)) !== null && _a !== void 0 ? _a : Game_1.Rarity.COMMON;
    if (godPack || guaranteedUnique) {
        name = (0, random_1.pickRandomIn)([
            ...precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[Game_1.Rarity.UNIQUE],
            ...precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[Game_1.Rarity.LEGENDARY]
        ].filter((p) => (0, config_1.getBaseAltForm)(p) === p));
    }
    else {
        const candidates = ((_b = precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[rarity]) !== null && _b !== void 0 ? _b : []).filter((p) => Pokemon_1.Unowns.includes(p) === false &&
            (0, precomputed_pokemon_data_1.getPokemonData)(p).skill !== Ability_1.Ability.DEFAULT &&
            (0, config_1.getBaseAltForm)(p) === p);
        name = (0, random_1.pickRandomIn)(candidates);
        if (name === undefined) {
            name = Pokemon_1.Pkm.MAGIKARP;
            logger_1.logger.warn(`No candidates found for booster card rarity ${rarity}, defaulting to MAGIKARP`);
        }
    }
    if (name in config_1.PkmAltFormsByPkm) {
        name = (0, random_1.pickRandomIn)([name, ...config_1.PkmAltFormsByPkm[name]]);
    }
    const shiny = (godPack || (0, random_1.chance)(0.05)) &&
        ((_c = pokemon_animations_1.PokemonAnimations[name]) === null || _c === void 0 ? void 0 : _c.shinyUnavailable) !== true;
    const availableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(Pokemon_1.PkmIndex[name], shiny);
    let emotion = (_d = (0, random_1.randomWeighted)(availableEmotions.reduce((o, e) => (Object.assign(Object.assign({}, o), { [e]: 1 / config_1.EmotionCost[e] })), {}))) !== null && _d !== void 0 ? _d : types_1.Emotion.NORMAL;
    if (godPack) {
        const emotionsNotUnlocked = availableEmotions.filter((emotion) => !collection_1.CollectionUtils.hasUnlockedCustom(user.pokemonCollection, {
            name,
            shiny,
            emotion
        }));
        if (emotionsNotUnlocked.length > 0) {
            emotion = (0, random_1.pickRandomIn)(emotionsNotUnlocked);
        }
    }
    const hasAlreadyUnlocked = collection_1.CollectionUtils.hasUnlockedCustom(user.pokemonCollection, {
        name,
        shiny,
        emotion
    });
    return { name, shiny, emotion, new: !hasAlreadyUnlocked };
}
//# sourceMappingURL=collection.js.map