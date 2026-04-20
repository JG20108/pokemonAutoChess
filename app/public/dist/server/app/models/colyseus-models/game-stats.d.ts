import { Schema } from "@colyseus/schema";
import { GameStats } from "../../types/interfaces/GameStats";
export declare class GameStatsSchema extends Schema implements GameStats {
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
    constructor(...args: any[]);
}
