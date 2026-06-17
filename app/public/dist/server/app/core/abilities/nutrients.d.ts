import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import { AbilityStrategy } from "./ability-strategy";
export declare class NutrientsStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
