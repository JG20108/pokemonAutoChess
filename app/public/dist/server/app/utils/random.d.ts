export declare function chance(probability: number, pokemon?: {
    luck: number;
}, cap?: number): boolean;
export declare function randomWeighted<T extends string>(weights: {
    [item in T]?: number;
}, totalWeight?: number, ap?: number, apScaling?: number, luck?: number): T | null;
export declare function randomBetween(min: number, max: number): number;
export declare function pickRandomIn<T>(list: T[] | readonly T[] | Record<string, T>): T;
export declare function pickNRandomIn<T>(array: T[] | readonly T[], number: number): T[];
export declare function shuffleArray<T extends Array<unknown>>(array: T): T;
export declare function simpleHashSeededCoinFlip(seed: string): boolean;
