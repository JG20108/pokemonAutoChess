import { Rarity } from "../../types/enum/Game";
import { Pkm } from "../../types/enum/Pokemon";
export declare const SHOP_SIZE = 6;
export declare const NB_STARTERS = 3;
export declare const NB_UNIQUE_PROPOSITIONS = 8;
export declare const RarityHpCost: {
    [key in Rarity]: number;
};
export declare const RarityCost: {
    [key in Rarity]: number;
};
export declare const RarityColor: {
    [key in Rarity]: string;
};
export declare const BoosterRarityProbability: {
    [key in Rarity]: number;
};
export declare const RarityProbabilityPerLevel: {
    [key: number]: number[];
};
export declare const DITTO_RATE = 0.005;
export declare const MIN_STAGE_FOR_DITTO = 6;
export declare const EEVEE_RATE: number;
export declare const KECLEON_RATE: number;
export declare const ARCEUS_RATE: number;
export declare const UNOWN_PSY3_NB_SHOPS_INTERVAL = 5;
export declare const UNOWN_PSY5_NB_SHOPS_INTERVAL = 3;
export declare const UNOWN_PSY7_NB_SHOPS_INTERVAL = 10;
export declare const FALINKS_TROOPER_RATE: number;
export declare const REMORAID_RATE: number;
export declare const PVE_WILD_CHANCE: number;
export declare const INCENSE_CHANCE: number;
export declare const HONEY_CHANCE: number;
export declare const REPEAT_BALL_LEGENDARY_CAP = 120;
export declare const REPEAT_BALL_UNIQUE_CAP = 80;
export declare const REPEAT_BALL_UNIQUE_INTERVAL = 10;
export declare const AQUA_MONICA_CHANCE: number;
export declare const FIERY_DRUM_CHANCE: number;
export declare const GRASS_CORNET_CHANCE: number;
export declare const ICY_FLUTE_CHANCE: number;
export declare const ROCK_HORN_CHANCE: number;
export declare const SKY_MELODICA_CHANCE: number;
export declare const TERRA_CYMBAL_CHANCE: number;
export declare const HIGH_ROLLER_CHANCE: number;
export declare const SellPrices: {
    EGG: number;
    SHINY_EGG: number;
    DITTO: number;
    EEVEE: number;
    FALINKS_TROOPER: number;
    MELTAN: number;
    MAGIKARP: number;
    GYARADOS: number;
    FEEBAS: number;
    MILOTIC: number;
    WISHIWASHI: number;
    WISHIWASHI_SCHOOL: number;
    REMORAID: number;
    OCTILLERY: number;
    UNOWN: number;
    HATCH: number[];
    UNIQUE: number;
    UNIQUE_DUO: number;
    LEGENDARY: number;
    LEGENDARY_DUO: number;
};
export declare const BuyPrices: {
    DITTO: number;
    FALINKS_TROOPER: number;
    MELTAN: number;
    UNOWN: number;
};
export declare const GYM_BADGE_RARE_CANDY_BLOCKED_EVOLUTIONS: Set<Pkm>;
export declare function isGymBadgeRareCandyBlocked(pokemonName: Pkm, evolutionTarget: Pkm | undefined): boolean;
