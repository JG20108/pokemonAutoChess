"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYNERGY_COLORS = exports.GoldenEggItems = exports.GOLDEN_BERRY_TREE_TYPES = exports.SHARDS_PER_SHINY_UNOWN_WANDERER = exports.SHARDS_PER_UNOWN_WANDERER = exports.SHINY_UNOWN_ENCOUNTER_CHANCE = exports.UNOWN_ENCOUNTER_CHANCE = exports.FAIRY_WANDS_BY_SYNERGY_LEVEL = exports.FIELD_SPEED_BUFF_PER_SYNERGY_LEVEL = exports.FIELD_HEAL_PER_SYNERGY_LEVEL = exports.MONSTER_MAX_HP_BUFF_FACTOR_PER_SYNERGY_LEVEL = exports.MONSTER_AP_BUFF_PER_SYNERGY_LEVEL = exports.MONSTER_ATTACK_BUFF_PER_SYNERGY_LEVEL = exports.FishRarityProbability = exports.SynergyTriggers = exports.SynergyEffects = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Synergy_1 = require("../../types/enum/Synergy");
exports.SynergyEffects = {
    [Synergy_1.Synergy.NORMAL]: [
        Effect_1.EffectEnum.STAMINA,
        Effect_1.EffectEnum.STRENGTH,
        Effect_1.EffectEnum.ENDURE,
        Effect_1.EffectEnum.PURE_POWER
    ],
    [Synergy_1.Synergy.GRASS]: [
        Effect_1.EffectEnum.INGRAIN,
        Effect_1.EffectEnum.GROWTH,
        Effect_1.EffectEnum.SPORE,
        Effect_1.EffectEnum.OVERGROW
    ],
    [Synergy_1.Synergy.FIRE]: [
        Effect_1.EffectEnum.FLAME_BODY,
        Effect_1.EffectEnum.WILDFIRE,
        Effect_1.EffectEnum.BLAZE,
        Effect_1.EffectEnum.DESOLATE_LAND
    ],
    [Synergy_1.Synergy.WATER]: [
        Effect_1.EffectEnum.RAIN_DANCE,
        Effect_1.EffectEnum.DRIZZLE,
        Effect_1.EffectEnum.PRIMORDIAL_SEA
    ],
    [Synergy_1.Synergy.ELECTRIC]: [
        Effect_1.EffectEnum.RISING_VOLTAGE,
        Effect_1.EffectEnum.POWER_SURGE,
        Effect_1.EffectEnum.SUPERCHARGED
    ],
    [Synergy_1.Synergy.FIGHTING]: [
        Effect_1.EffectEnum.GUTS,
        Effect_1.EffectEnum.STURDY,
        Effect_1.EffectEnum.DEFIANT,
        Effect_1.EffectEnum.COACHING
    ],
    [Synergy_1.Synergy.PSYCHIC]: [
        Effect_1.EffectEnum.PRECOGNITION,
        Effect_1.EffectEnum.AURA,
        Effect_1.EffectEnum.TRANSCENDENCE
    ],
    [Synergy_1.Synergy.DARK]: [
        Effect_1.EffectEnum.HONE_CLAWS,
        Effect_1.EffectEnum.ASSURANCE,
        Effect_1.EffectEnum.BEAT_UP
    ],
    [Synergy_1.Synergy.STEEL]: [
        Effect_1.EffectEnum.STEEL_SURGE,
        Effect_1.EffectEnum.STEEL_SPIKE,
        Effect_1.EffectEnum.CORKSCREW_CRASH,
        Effect_1.EffectEnum.MAX_MELTDOWN
    ],
    [Synergy_1.Synergy.GROUND]: [
        Effect_1.EffectEnum.TILLER,
        Effect_1.EffectEnum.DIGGER,
        Effect_1.EffectEnum.DRILLER,
        Effect_1.EffectEnum.DEEP_MINER
    ],
    [Synergy_1.Synergy.POISON]: [
        Effect_1.EffectEnum.POISONOUS,
        Effect_1.EffectEnum.VENOMOUS,
        Effect_1.EffectEnum.TOXIC
    ],
    [Synergy_1.Synergy.DRAGON]: [
        Effect_1.EffectEnum.DRAGON_ENERGY,
        Effect_1.EffectEnum.DRAGON_SCALES,
        Effect_1.EffectEnum.DRAGON_DANCE
    ],
    [Synergy_1.Synergy.FIELD]: [
        Effect_1.EffectEnum.BULK_UP,
        Effect_1.EffectEnum.RAGE,
        Effect_1.EffectEnum.ANGER_POINT
    ],
    [Synergy_1.Synergy.MONSTER]: [
        Effect_1.EffectEnum.PURSUIT,
        Effect_1.EffectEnum.BRUTAL_SWING,
        Effect_1.EffectEnum.POWER_TRIP,
        Effect_1.EffectEnum.MERCILESS
    ],
    [Synergy_1.Synergy.HUMAN]: [
        Effect_1.EffectEnum.MEDITATE,
        Effect_1.EffectEnum.FOCUS_ENERGY,
        Effect_1.EffectEnum.CALM_MIND
    ],
    [Synergy_1.Synergy.AQUATIC]: [
        Effect_1.EffectEnum.SWIFT_SWIM,
        Effect_1.EffectEnum.HYDRATION,
        Effect_1.EffectEnum.WATER_VEIL,
        Effect_1.EffectEnum.SURGE_SURFER
    ],
    [Synergy_1.Synergy.BUG]: [
        Effect_1.EffectEnum.COCOON,
        Effect_1.EffectEnum.INFESTATION,
        Effect_1.EffectEnum.HORDE,
        Effect_1.EffectEnum.HEART_OF_THE_SWARM
    ],
    [Synergy_1.Synergy.FLYING]: [
        Effect_1.EffectEnum.TAILWIND,
        Effect_1.EffectEnum.FEATHER_DANCE,
        Effect_1.EffectEnum.MAX_AIRSTREAM,
        Effect_1.EffectEnum.SKYDIVE
    ],
    [Synergy_1.Synergy.FLORA]: [
        Effect_1.EffectEnum.COTTONWEED,
        Effect_1.EffectEnum.FLYCATCHER,
        Effect_1.EffectEnum.FRAGRANT,
        Effect_1.EffectEnum.FLOWER_POWER
    ],
    [Synergy_1.Synergy.ROCK]: [
        Effect_1.EffectEnum.BATTLE_ARMOR,
        Effect_1.EffectEnum.MOUTAIN_RESISTANCE,
        Effect_1.EffectEnum.DIAMOND_STORM
    ],
    [Synergy_1.Synergy.GHOST]: [
        Effect_1.EffectEnum.CURSE_OF_VULNERABILITY,
        Effect_1.EffectEnum.CURSE_OF_WEAKNESS,
        Effect_1.EffectEnum.CURSE_OF_TORMENT,
        Effect_1.EffectEnum.CURSE_OF_FATE
    ],
    [Synergy_1.Synergy.FAIRY]: [
        Effect_1.EffectEnum.AROMATIC_MIST,
        Effect_1.EffectEnum.FAIRY_WIND,
        Effect_1.EffectEnum.STRANGE_STEAM,
        Effect_1.EffectEnum.MOON_FORCE
    ],
    [Synergy_1.Synergy.ICE]: [
        Effect_1.EffectEnum.CHILLY,
        Effect_1.EffectEnum.FROSTY,
        Effect_1.EffectEnum.FREEZING,
        Effect_1.EffectEnum.SHEER_COLD
    ],
    [Synergy_1.Synergy.FOSSIL]: [
        Effect_1.EffectEnum.ANCIENT_POWER,
        Effect_1.EffectEnum.ELDER_POWER,
        Effect_1.EffectEnum.FORGOTTEN_POWER
    ],
    [Synergy_1.Synergy.SOUND]: [Effect_1.EffectEnum.LARGO, Effect_1.EffectEnum.ALLEGRO, Effect_1.EffectEnum.PRESTO],
    [Synergy_1.Synergy.ARTIFICIAL]: [
        Effect_1.EffectEnum.DUBIOUS_DISC,
        Effect_1.EffectEnum.LINK_CABLE,
        Effect_1.EffectEnum.GOOGLE_SPECS
    ],
    [Synergy_1.Synergy.BABY]: [
        Effect_1.EffectEnum.HATCHER,
        Effect_1.EffectEnum.BREEDER,
        Effect_1.EffectEnum.GOLDEN_EGGS
    ],
    [Synergy_1.Synergy.LIGHT]: [
        Effect_1.EffectEnum.SHINING_RAY,
        Effect_1.EffectEnum.LIGHT_PULSE,
        Effect_1.EffectEnum.ETERNAL_LIGHT,
        Effect_1.EffectEnum.MAX_ILLUMINATION
    ],
    [Synergy_1.Synergy.WILD]: [
        Effect_1.EffectEnum.QUICK_FEET,
        Effect_1.EffectEnum.RUN_AWAY,
        Effect_1.EffectEnum.HUSTLE,
        Effect_1.EffectEnum.BERSERK
    ],
    [Synergy_1.Synergy.AMORPHOUS]: [
        Effect_1.EffectEnum.FLUID,
        Effect_1.EffectEnum.SHAPELESS,
        Effect_1.EffectEnum.ETHEREAL
    ],
    [Synergy_1.Synergy.GOURMET]: [
        Effect_1.EffectEnum.APPETIZER,
        Effect_1.EffectEnum.LUNCH_BREAK,
        Effect_1.EffectEnum.BANQUET
    ]
};
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