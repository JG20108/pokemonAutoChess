import type { MapSchema } from "@colyseus/schema";
import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import type { PlacementEvolutionRule } from "../../types/EvolutionRules";
import { EvolutionHandler } from "./evolution-handler";
type PlacementCondition = (pokemon: Pokemon, player: Player, board: MapSchema<Pokemon>) => boolean;
export declare class PlacementEvolutionHandler extends EvolutionHandler<[
    MapSchema<Pokemon>
]> {
    condition: PlacementCondition;
    constructor(evolutionRule: PlacementEvolutionRule);
    canEvolve(pokemon: Pokemon, player: Player, board: MapSchema<Pokemon>): boolean;
    evolve(pokemon: Pokemon, player: Player, board: MapSchema<Pokemon>): Pokemon;
}
export {};
