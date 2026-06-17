import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import { EvolutionHandler } from "./evolution-handler";
export declare class StackEvolutionHandler extends EvolutionHandler {
    canEvolve(pokemon: Pokemon, player: Player): boolean;
    evolve(pokemon: Pokemon, player: Player): Pokemon;
}
