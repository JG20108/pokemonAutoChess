import { Emotion } from "../../types/enum/Emotion";
import { Rarity } from "../../types/enum/Game";
export declare const DUST_PER_BOOSTER = 50;
export declare const DUST_PER_SHINY = 250;
export declare const EmotionCost: {
    [key in Emotion]: number;
};
export declare function getEmotionCost(emotion: Emotion, isShiny: boolean): number;
export declare const BoosterPriceByRarity: {
    [key in Rarity]: number;
};
