"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYNERGY_COLORS = exports.GoldenEggItems = exports.GOLDEN_BERRY_TREE_TYPES = exports.SHARDS_PER_SHINY_UNOWN_WANDERER = exports.SHARDS_PER_UNOWN_WANDERER = exports.SHINY_UNOWN_ENCOUNTER_CHANCE = exports.UNOWN_ENCOUNTER_CHANCE = exports.FAIRY_WANDS_BY_SYNERGY_LEVEL = exports.FIELD_SPEED_BUFF_PER_SYNERGY_LEVEL = exports.FIELD_HEAL_PER_SYNERGY_LEVEL = exports.MONSTER_MAX_HP_BUFF_FACTOR_PER_SYNERGY_LEVEL = exports.MONSTER_AP_BUFF_PER_SYNERGY_LEVEL = exports.MONSTER_ATTACK_BUFF_PER_SYNERGY_LEVEL = exports.FishRarityProbability = exports.SynergyTriggers = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Synergy_1 = require("../../types/enum/Synergy");
exports.SynergyTriggers = {
    [Synergy_1.Synergy.NORMAL]: [3, 5, 7, 9],
    [Synergy_1.Synergy.GRASS]: [3, 5, 7, 9],
    [Synergy_1.Synergy.FIRE]: [2, 4, 6, 8],
    [Synergy_1.Synergy.WATER]: [3, 6, 9],
    [Synergy_1.Synergy.ELECTRIC]: [3, 5, 7],
    [Synergy_1.Synergy.FIGHTING]: [2, 4, 6, 8],
    [Synergy_1.Synergy.PSYCHIC]: [3, 5, 7],
    [Synergy_1.Synergy.DARK]: [3, 5, 7],
    [Synergy_1.Synergy.STEEL]: [2, 4, 6, 8],
    [Synergy_1.Synergy.GROUND]: [2, 4, 6, 8],
    [Synergy_1.Synergy.POISON]: [3, 5, 7],
    [Synergy_1.Synergy.DRAGON]: [3, 5, 7],
    [Synergy_1.Synergy.FIELD]: [3, 6, 9],
    [Synergy_1.Synergy.MONSTER]: [2, 4, 6, 8],
    [Synergy_1.Synergy.HUMAN]: [2, 4, 6],
    [Synergy_1.Synergy.AQUATIC]: [2, 4, 6, 8],
    [Synergy_1.Synergy.BUG]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FLYING]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FLORA]: [3, 4, 5, 6],
    [Synergy_1.Synergy.ROCK]: [2, 4, 6],
    [Synergy_1.Synergy.GHOST]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FAIRY]: [2, 4, 6, 8],
    [Synergy_1.Synergy.ICE]: [2, 4, 6, 8],
    [Synergy_1.Synergy.FOSSIL]: [2, 4, 6],
    [Synergy_1.Synergy.SOUND]: [2, 4, 6],
    [Synergy_1.Synergy.ARTIFICIAL]: [2, 4, 6],
    [Synergy_1.Synergy.BABY]: [3, 5, 7],
    [Synergy_1.Synergy.LIGHT]: [3, 4, 5, 6],
    [Synergy_1.Synergy.WILD]: [2, 4, 6, 8],
    [Synergy_1.Synergy.AMORPHOUS]: [3, 5, 7],
    [Synergy_1.Synergy.GOURMET]: [3, 4, 5]
};
exports.FishRarityProbability = {
    [Item_1.Item.OLD_ROD]: {
        [Game_1.Rarity.SPECIAL]: 0.55,
        [Game_1.Rarity.COMMON]: 0.35,
        [Game_1.Rarity.UNCOMMON]: 0.1,
        [Game_1.Rarity.RARE]: 0,
        [Game_1.Rarity.EPIC]: 0
    },
    [Item_1.Item.GOOD_ROD]: {
        [Game_1.Rarity.SPECIAL]: 0.35,
        [Game_1.Rarity.COMMON]: 0.25,
        [Game_1.Rarity.UNCOMMON]: 0.3,
        [Game_1.Rarity.RARE]: 0.1,
        [Game_1.Rarity.EPIC]: 0
    },
    [Item_1.Item.SUPER_ROD]: {
        [Game_1.Rarity.SPECIAL]: 0.35,
        [Game_1.Rarity.COMMON]: 0.05,
        [Game_1.Rarity.UNCOMMON]: 0.25,
        [Game_1.Rarity.RARE]: 0.25,
        [Game_1.Rarity.EPIC]: 0.1
    }
};
exports.MONSTER_ATTACK_BUFF_PER_SYNERGY_LEVEL = [3, 6, 10, 10];
exports.MONSTER_AP_BUFF_PER_SYNERGY_LEVEL = [10, 20, 30, 30];
exports.MONSTER_MAX_HP_BUFF_FACTOR_PER_SYNERGY_LEVEL = [0.2, 0.4, 0.6, 0.6];
exports.FIELD_HEAL_PER_SYNERGY_LEVEL = [30, 40, 50];
exports.FIELD_SPEED_BUFF_PER_SYNERGY_LEVEL = [15, 20, 25];
exports.FAIRY_WANDS_BY_SYNERGY_LEVEL = [
    [Item_1.Item.LONG_WAND, Item_1.Item.SPIRIT_WAND, Item_1.Item.HP_SWAP_WAND, Item_1.Item.BLAST_WAND],
    [Item_1.Item.SLUMBER_WAND, Item_1.Item.SLOW_WAND, Item_1.Item.PETRIFY_WAND, Item_1.Item.CONFUSE_WAND],
    [
        Item_1.Item.TWO_EDGED_WAND,
        Item_1.Item.POUNCE_WAND,
        Item_1.Item.SURROUND_WAND,
        Item_1.Item.GUIDING_WAND
    ],
    [Item_1.Item.TUNNEL_WAND, Item_1.Item.WHIRLWIND_WAND, Item_1.Item.SWITCHER_WAND, Item_1.Item.WARP_WAND]
];
exports.UNOWN_ENCOUNTER_CHANCE = 0.033;
exports.SHINY_UNOWN_ENCOUNTER_CHANCE = 0.05;
exports.SHARDS_PER_UNOWN_WANDERER = 50;
exports.SHARDS_PER_SHINY_UNOWN_WANDERER = 250;
exports.GOLDEN_BERRY_TREE_TYPES = [
    Item_1.Item.GOLDEN_RAZZ_BERRY,
    Item_1.Item.GOLDEN_NANAB_BERRY,
    Item_1.Item.GOLDEN_PINAP_BERRY
];
exports.GoldenEggItems = [
    Item_1.Item.DYNAMAX_BAND,
    Item_1.Item.SHINY_STONE,
    Item_1.Item.RARE_CANDY,
    Item_1.Item.EVIOLITE,
    Item_1.Item.WHITE_FLUTE,
    Item_1.Item.GOLD_BOTTLE_CAP,
    Item_1.Item.ABSORB_BULB,
    Item_1.Item.SACRED_ASH,
    Item_1.Item.COMET_SHARD,
    Item_1.Item.REPEAT_BALL,
    Item_1.Item.GOLD_BOW
];
exports.SYNERGY_COLORS = {
    NORMAL: "#FEFEFE",
    FIRE: "#FF9024",
    WATER: "#2DA2FD",
    GRASS: "#17B300",
    ELECTRIC: "#FDFF4A",
    ICE: "#C3E4EE",
    FIGHTING: "#F33218",
    POISON: "#88D7A0",
    GROUND: "#C6964A",
    FLYING: "#B2E9FF",
    PSYCHIC: "#B955D2",
    BUG: "#FFFE66",
    ROCK: "#E7E5AF",
    GHOST: "#876DAD",
    DRAGON: "#B87333",
    DARK: "#A6A6A6",
    STEEL: "#DBDBDB",
    FAIRY: "#FFAFD1",
    FIELD: "#DE8A4E",
    AQUATIC: "#14C8C8",
    MONSTER: "#00B464",
    AMORPHOUS: "#E5B2F4",
    WILD: "#B22334",
    SOUND: "#FF6095",
    FLORA: "#FF60F1",
    BABY: "#FFD79A",
    HUMAN: "#FDBB8B",
    LIGHT: "#FFF896",
    GOURMET: "#FF8473",
    FOSSIL: "#D2D35B",
    ARTIFICIAL: "#EDEDED"
};
//# sourceMappingURL=synergies.js.map