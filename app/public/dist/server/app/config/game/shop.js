"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyPrices = exports.SellPrices = exports.HIGH_ROLLER_CHANCE = exports.REPEAT_BALL_UNIQUE_INTERVAL = exports.REPEAT_BALL_UNIQUE_CAP = exports.REPEAT_BALL_LEGENDARY_CAP = exports.HONEY_CHANCE = exports.INCENSE_CHANCE = exports.PVE_WILD_CHANCE = exports.REMORAID_RATE = exports.FALINKS_TROOPER_RATE = exports.UNOWN_PSY7_NB_SHOPS_INTERVAL = exports.UNOWN_PSY5_NB_SHOPS_INTERVAL = exports.UNOWN_PSY3_NB_SHOPS_INTERVAL = exports.ARCEUS_RATE = exports.KECLEON_RATE = exports.EEVEE_RATE = exports.MIN_STAGE_FOR_DITTO = exports.DITTO_RATE = exports.RarityProbabilityPerLevel = exports.BoosterRarityProbability = exports.RarityColor = exports.RarityCost = exports.RarityHpCost = exports.NB_UNIQUE_PROPOSITIONS = exports.NB_STARTERS = exports.SHOP_SIZE = void 0;
const Game_1 = require("../../types/enum/Game");
exports.SHOP_SIZE = 6;
exports.NB_STARTERS = 3;
exports.NB_UNIQUE_PROPOSITIONS = 6;
exports.RarityHpCost = Object.freeze({
    [Game_1.Rarity.COMMON]: 1,
    [Game_1.Rarity.UNCOMMON]: 1,
    [Game_1.Rarity.RARE]: 2,
    [Game_1.Rarity.EPIC]: 2,
    [Game_1.Rarity.ULTRA]: 3,
    [Game_1.Rarity.UNIQUE]: 3,
    [Game_1.Rarity.LEGENDARY]: 3,
    [Game_1.Rarity.SPECIAL]: 1,
    [Game_1.Rarity.HATCH]: 4
});
exports.RarityCost = Object.freeze({
    [Game_1.Rarity.SPECIAL]: 0,
    [Game_1.Rarity.COMMON]: 1,
    [Game_1.Rarity.UNCOMMON]: 2,
    [Game_1.Rarity.RARE]: 3,
    [Game_1.Rarity.EPIC]: 4,
    [Game_1.Rarity.ULTRA]: 5,
    [Game_1.Rarity.HATCH]: 9,
    [Game_1.Rarity.UNIQUE]: 10,
    [Game_1.Rarity.LEGENDARY]: 20
});
exports.RarityColor = {
    [Game_1.Rarity.COMMON]: "var(--color-rarity-common)",
    [Game_1.Rarity.UNCOMMON]: "var(--color-rarity-uncommon)",
    [Game_1.Rarity.RARE]: "var(--color-rarity-rare)",
    [Game_1.Rarity.EPIC]: "var(--color-rarity-epic)",
    [Game_1.Rarity.ULTRA]: "var(--color-rarity-ultra)",
    [Game_1.Rarity.UNIQUE]: "var(--color-rarity-unique)",
    [Game_1.Rarity.LEGENDARY]: "var(--color-rarity-legendary)",
    [Game_1.Rarity.SPECIAL]: "var(--color-rarity-special)",
    [Game_1.Rarity.HATCH]: "var(--color-rarity-hatch)"
};
exports.BoosterRarityProbability = {
    [Game_1.Rarity.COMMON]: 0.12,
    [Game_1.Rarity.UNCOMMON]: 0.2,
    [Game_1.Rarity.RARE]: 0.2,
    [Game_1.Rarity.EPIC]: 0.18,
    [Game_1.Rarity.ULTRA]: 0.04,
    [Game_1.Rarity.UNIQUE]: 0.1,
    [Game_1.Rarity.LEGENDARY]: 0.06,
    [Game_1.Rarity.HATCH]: 0.05,
    [Game_1.Rarity.SPECIAL]: 0.05
};
exports.RarityProbabilityPerLevel = {
    1: [1, 0, 0, 0, 0],
    2: [1, 0, 0, 0, 0],
    3: [0.7, 0.3, 0, 0, 0],
    4: [0.5, 0.4, 0.1, 0, 0],
    5: [0.36, 0.42, 0.2, 0.02, 0],
    6: [0.25, 0.4, 0.3, 0.05, 0],
    7: [0.16, 0.33, 0.35, 0.15, 0.01],
    8: [0.11, 0.27, 0.35, 0.22, 0.05],
    9: [0.05, 0.2, 0.35, 0.3, 0.1]
};
exports.DITTO_RATE = 0.005;
exports.MIN_STAGE_FOR_DITTO = 6;
exports.EEVEE_RATE = 1 / 20;
exports.KECLEON_RATE = 1 / 400;
exports.ARCEUS_RATE = 1 / 400;
exports.UNOWN_PSY3_NB_SHOPS_INTERVAL = 5;
exports.UNOWN_PSY5_NB_SHOPS_INTERVAL = 3;
exports.UNOWN_PSY7_NB_SHOPS_INTERVAL = 10;
exports.FALINKS_TROOPER_RATE = 4 / 100;
exports.REMORAID_RATE = 1 / 3;
exports.PVE_WILD_CHANCE = 5 / 100;
exports.INCENSE_CHANCE = 5 / 100;
exports.HONEY_CHANCE = 5 / 100;
exports.REPEAT_BALL_LEGENDARY_CAP = 120;
exports.REPEAT_BALL_UNIQUE_CAP = 80;
exports.REPEAT_BALL_UNIQUE_INTERVAL = 10;
exports.HIGH_ROLLER_CHANCE = 2 / 100;
exports.SellPrices = {
    EGG: 2,
    SHINY_EGG: 10,
    DITTO: 5,
    EEVEE: 1,
    FALINKS_TROOPER: 3,
    MELTAN: 0,
    MAGIKARP: 0,
    GYARADOS: 10,
    FEEBAS: 1,
    MILOTIC: 10,
    WISHIWASHI: 3,
    WISHIWASHI_SCHOOL: 10,
    REMORAID: 2,
    OCTILLERY: 7,
    UNOWN: 1,
    HATCH: [3, 4, 5],
    UNIQUE: 10,
    UNIQUE_DUO: 6,
    LEGENDARY: 20,
    LEGENDARY_DUO: 10
};
exports.BuyPrices = {
    DITTO: 5,
    FALINKS_TROOPER: 3,
    MELTAN: 0,
    UNOWN: 1
};
//# sourceMappingURL=shop.js.map