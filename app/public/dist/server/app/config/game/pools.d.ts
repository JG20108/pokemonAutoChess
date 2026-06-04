import { Rarity } from "../../types/enum/Game";
import { type PkmProposition } from "../../types/enum/Pokemon";
export declare const PoolSize: {
    [key in Rarity]: [number, number, number];
};
export declare const UniquePool: PkmProposition[];
export declare const LegendaryPool: PkmProposition[];
