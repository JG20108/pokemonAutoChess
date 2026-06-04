import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import type { CountEvolutionRule } from "../../types/EvolutionRules";
import { EvolutionHandler } from "./evolution-handler";
export declare class CountEvolutionHandler extends EvolutionHandler {
    numberRequired: number;
    constructor(evolutionRule: CountEvolutionRule);
    canEvolve(pokemon: Pokemon, player: Player): boolean;
    canEvolveIfGettingOne(pokemon: Pokemon, player: Player): boolean;
    evolve(pokemon: Pokemon, player: Player): Pokemon;
}
