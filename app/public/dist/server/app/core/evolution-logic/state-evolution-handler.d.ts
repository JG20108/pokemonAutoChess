import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import type GameState from "../../rooms/states/game-state";
import type { StateEvolutionRule } from "../../types/EvolutionRules";
import { EvolutionHandler } from "./evolution-handler";
type EvolutionCondition = (pokemon: Pokemon, player: Player, state: GameState) => boolean;
export declare class StateEvolutionHandler extends EvolutionHandler<[GameState]> {
    condition: EvolutionCondition;
    constructor(evolutionRule: StateEvolutionRule);
    canEvolve(pokemon: Pokemon, player: Player, state: GameState): boolean;
    evolve(pokemon: Pokemon, player: Player, state: GameState): Pokemon;
}
export {};
