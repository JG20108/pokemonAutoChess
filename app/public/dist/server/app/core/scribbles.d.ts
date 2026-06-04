import type Player from "../models/colyseus-models/player";
import type { Pokemon } from "../models/colyseus-models/pokemon";
import type GameState from "../rooms/states/game-state";
import { Pkm } from "../types/enum/Pokemon";
import { Synergy } from "../types/enum/Synergy";
type PseudoStats = {
    hp: number;
    atk: number;
    def: number;
    speDef: number;
};
export declare const PSEUDO_JOURNEY_NORMALIZED_STATS: Partial<Record<Pkm, PseudoStats>>;
export declare function applyPseudoJourneyNormalizedStats(pokemon: Pokemon): void;
export declare const PseudoLegendaryPool: Pkm[];
export declare function pickPseudoLegendaries(): Pkm[];
export declare function pickAllSynergies(): Synergy[];
export declare function spawnDIAYAvatar(player: Player): Pokemon;
export declare function pickFirstPartners(player: Player, state: GameState): Pkm[];
export {};
