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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionUtils = void 0;
exports.createBooster = createBooster;
exports.pickRandomPokemonBooster = pickRandomPokemonBooster;
exports.migrateShardsOfAltForms = migrateShardsOfAltForms;
const config_1 = require("../config");
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
        const emotionsNotUnlocked = availableEmotions.filter((emotion) => !CollectionUtils.hasUnlockedCustom(user.pokemonCollection, {
            name,
            shiny,
            emotion
        }));
        if (emotionsNotUnlocked.length > 0) {
            emotion = (0, random_1.pickRandomIn)(emotionsNotUnlocked);
        }
    }
    const hasAlreadyUnlocked = CollectionUtils.hasUnlockedCustom(user.pokemonCollection, {
        name,
        shiny,
        emotion
    });
    return { name, shiny, emotion, new: !hasAlreadyUnlocked };
}
class CollectionUtils {
    static hasNodeBuffer() {
        return typeof Buffer !== "undefined";
    }
    static allocMask(size) {
        return this.hasNodeBuffer() ? Buffer.alloc(size) : new Uint8Array(size);
    }
    static hasUnlockedCustom(collection, card) {
        var _a;
        const index = Pokemon_1.PkmIndex[card.name];
        if (collection.has(index) === false) {
            return false;
        }
        const collectionItem = collection.get(index);
        return CollectionUtils.hasUnlocked(collectionItem.unlocked, (_a = card.emotion) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL, card.shiny);
    }
    static toMongoCollectionItem(item) {
        return Object.assign(Object.assign({}, item), { unlocked: CollectionUtils.decodeBase64(item.unlockedb64) });
    }
    static toCollectionItemClient(item) {
        return {
            id: item.id,
            dust: item.dust,
            played: item.played,
            selectedShiny: item.selectedShiny,
            selectedEmotion: item.selectedEmotion,
            unlockedb64: item.unlocked
                ? CollectionUtils.encodeBase64(item.unlocked)
                : ""
        };
    }
    static unpackCollectionItem(item) {
        const { emotions, shinyEmotions } = CollectionUtils.getEmotionsUnlocked(item);
        const { unlockedb64 } = item, rest = __rest(item, ["unlockedb64"]);
        return Object.assign(Object.assign({}, rest), { emotions,
            shinyEmotions });
    }
    static getEmotionMask(emotions = [], shinyEmotions = []) {
        const buffer = this.allocMask(5);
        emotions.forEach((emotion) => {
            const index = this.EMOTION_VALUES.indexOf(emotion);
            if (index !== -1) {
                this.setBit(buffer, index, true);
            }
        });
        shinyEmotions.forEach((emotion) => {
            const index = this.EMOTION_VALUES.indexOf(emotion);
            if (index !== -1) {
                this.setBit(buffer, index + 20, true);
            }
        });
        return buffer;
    }
    static encodeBase64(buffer) {
        if (this.hasNodeBuffer()) {
            return Buffer.from(buffer).toString("base64");
        }
        let binary = "";
        for (let i = 0; i < buffer.length; i++) {
            binary += String.fromCharCode(buffer[i]);
        }
        return btoa(binary);
    }
    static decodeBase64(base64) {
        if (this.hasNodeBuffer()) {
            return Buffer.from(base64, "base64");
        }
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
    }
    static getEmotionsUnlocked(item) {
        const emotions = [];
        const shinyEmotions = [];
        if (!item)
            return { emotions, shinyEmotions };
        const mask = "unlockedb64" in item
            ? CollectionUtils.decodeBase64(item.unlockedb64)
            : item.unlocked;
        for (let i = 0; i < 20; i++) {
            if (this.getBit(mask, i)) {
                emotions.push(this.EMOTION_VALUES[i]);
            }
        }
        for (let i = 0; i < 20; i++) {
            if (this.getBit(mask, i + 20)) {
                shinyEmotions.push(this.EMOTION_VALUES[i]);
            }
        }
        return {
            emotions,
            shinyEmotions
        };
    }
    static hasUnlocked(mask, emotion, shiny = false) {
        const index = this.EMOTION_VALUES.indexOf(emotion);
        if (index === -1)
            return false;
        const bitIndex = shiny ? index + 20 : index;
        return this.getBit(mask, bitIndex);
    }
    static unlockEmotion(mask, emotion, shiny = false) {
        const index = this.EMOTION_VALUES.indexOf(emotion);
        if (index === -1)
            return;
        const bitIndex = shiny ? index + 20 : index;
        this.setBit(mask, bitIndex, true);
    }
    static setBit(mask, bitIndex, value) {
        const byteIndex = Math.floor(bitIndex / 8);
        const bitPosition = bitIndex % 8;
        if (byteIndex >= mask.length)
            return;
        if (value) {
            mask[byteIndex] |= 1 << bitPosition;
        }
        else {
            mask[byteIndex] &= ~(1 << bitPosition);
        }
    }
    static getBit(mask, bitIndex) {
        const byteIndex = Math.floor(bitIndex / 8);
        const bitPosition = bitIndex % 8;
        if (byteIndex >= mask.length)
            return false;
        return (mask[byteIndex] & (1 << bitPosition)) !== 0;
    }
}
exports.CollectionUtils = CollectionUtils;
CollectionUtils.EMOTION_VALUES = types_1.CollectionEmotions;
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
//# sourceMappingURL=collection.js.map