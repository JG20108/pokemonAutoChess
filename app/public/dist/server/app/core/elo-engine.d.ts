export declare class EloEngine {
    K: number;
    getExpected(a: number, b: number): number;
    updateRating(expected: number, actual: number, current: number, nbGamesPlayed: number): number;
}
