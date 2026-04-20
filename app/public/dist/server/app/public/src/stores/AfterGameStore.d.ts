import { PayloadAction } from "@reduxjs/toolkit";
import { IAfterGamePlayer } from "../../../types";
import { GameMode } from "../../../types/enum/Game";
export interface IUserAfterState {
    players: IAfterGamePlayer[];
    eligibleToXP: boolean;
    eligibleToELO: boolean;
    gameMode: GameMode;
}
export declare const afterSlice: import("@reduxjs/toolkit").Slice<IUserAfterState, {
    addPlayer: (state: {
        players: {
            gameStats: {
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
            };
            elo: number;
            games: number;
            name: string;
            id: string;
            rank: number;
            avatar: string;
            title: string;
            role: import("../../../types").Role;
            pokemons: {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[] | {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[];
            synergies: {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[] | {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[];
        }[];
        eligibleToXP: boolean;
        eligibleToELO: boolean;
        gameMode: GameMode;
    }, action: PayloadAction<IAfterGamePlayer>) => void;
    leaveAfter: () => IUserAfterState;
    setElligibilityToXP: (state: {
        players: {
            gameStats: {
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
            };
            elo: number;
            games: number;
            name: string;
            id: string;
            rank: number;
            avatar: string;
            title: string;
            role: import("../../../types").Role;
            pokemons: {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[] | {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[];
            synergies: {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[] | {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[];
        }[];
        eligibleToXP: boolean;
        eligibleToELO: boolean;
        gameMode: GameMode;
    }, action: PayloadAction<boolean>) => void;
    setElligibilityToELO: (state: {
        players: {
            gameStats: {
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
            };
            elo: number;
            games: number;
            name: string;
            id: string;
            rank: number;
            avatar: string;
            title: string;
            role: import("../../../types").Role;
            pokemons: {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[] | {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[];
            synergies: {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[] | {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[];
        }[];
        eligibleToXP: boolean;
        eligibleToELO: boolean;
        gameMode: GameMode;
    }, action: PayloadAction<boolean>) => void;
    setGameMode: (state: {
        players: {
            gameStats: {
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
            };
            elo: number;
            games: number;
            name: string;
            id: string;
            rank: number;
            avatar: string;
            title: string;
            role: import("../../../types").Role;
            pokemons: {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[] | {
                name: import("../../../types/enum/Pokemon").Pkm;
                items: import("../../../types").Item[] | import("../../../types").Item[];
                avatar: string;
            }[];
            synergies: {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[] | {
                name: import("../../../types/enum/Synergy").Synergy;
                value: number;
            }[];
        }[];
        eligibleToXP: boolean;
        eligibleToELO: boolean;
        gameMode: GameMode;
    }, action: PayloadAction<GameMode>) => void;
}, "after", "after", import("@reduxjs/toolkit").SliceSelectors<IUserAfterState>>;
export declare const addPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IAfterGamePlayer, "after/addPlayer">, leaveAfter: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"after/leaveAfter">, setElligibilityToXP: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToXP">, setElligibilityToELO: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToELO">, setGameMode: import("@reduxjs/toolkit").ActionCreatorWithPayload<GameMode, "after/setGameMode">;
declare const _default: import("redux").Reducer<IUserAfterState>;
export default _default;
