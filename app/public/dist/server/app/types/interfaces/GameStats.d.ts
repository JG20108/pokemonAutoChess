export interface GameStats {
    maxHP: number;
    maxAttack: number;
    maxDefense: number;
    maxAP: number;
    maxSpecialDefense: number;
    maxSpeed: number;
    maxPhysicalDamage: number;
    maxSpecialDamage: number;
    maxTrueDamage: number;
    maxShield: number;
    maxHeal: number;
    maxWinStreak: number;
    dittosUsed: number;
    rerollCount: number;
    totalMoneyEarned: number;
    totalPlayerDamageDealt: number;
}
export type GameStat = keyof GameStats;
export declare const initialGameStats: GameStats;
export declare const GameStatsList: GameStat[];
