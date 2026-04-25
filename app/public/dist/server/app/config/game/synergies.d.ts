import { Rarity } from "../../types/enum/Game";
import { FishingRod, Item } from "../../types/enum/Item";
import { Synergy } from "../../types/enum/Synergy";
export declare const SynergyTriggers: {
    [key in Synergy]: number[];
};
export declare const FishRarityProbability: {
    [rod in FishingRod]: {
        [key in Rarity]?: number;
    };
};
export declare const MONSTER_ATTACK_BUFF_PER_SYNERGY_LEVEL: number[];
export declare const MONSTER_AP_BUFF_PER_SYNERGY_LEVEL: number[];
export declare const MONSTER_MAX_HP_BUFF_FACTOR_PER_SYNERGY_LEVEL: number[];
export declare const FIELD_HEAL_PER_SYNERGY_LEVEL: number[];
export declare const FIELD_SPEED_BUFF_PER_SYNERGY_LEVEL: number[];
export declare const FAIRY_WANDS_BY_SYNERGY_LEVEL: Item[][];
export declare const UNOWN_ENCOUNTER_CHANCE = 0.033;
export declare const SHINY_UNOWN_ENCOUNTER_CHANCE = 0.05;
export declare const SHARDS_PER_UNOWN_WANDERER = 50;
export declare const SHARDS_PER_SHINY_UNOWN_WANDERER = 250;
export declare const GOLDEN_BERRY_TREE_TYPES: Item[];
export declare const GoldenEggItems: (Item.DYNAMAX_BAND | Item.SHINY_STONE | Item.RARE_CANDY | Item.EVIOLITE | Item.WHITE_FLUTE | Item.GOLD_BOTTLE_CAP | Item.ABSORB_BULB | Item.SACRED_ASH | Item.COMET_SHARD | Item.REPEAT_BALL | Item.GOLD_BOW)[];
export declare const SYNERGY_COLORS: Record<Synergy, `#${string}`>;
