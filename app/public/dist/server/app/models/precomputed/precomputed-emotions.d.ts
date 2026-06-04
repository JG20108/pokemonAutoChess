import { Emotion } from "../../types";
import type { Pkm, PkmIndex } from "../../types/enum/Pokemon";
export declare const PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX: {
    [pkm: (typeof PkmIndex)[Pkm]]: number[];
};
export declare function getAvailableEmotions(index: string, shiny: boolean): Emotion[];
