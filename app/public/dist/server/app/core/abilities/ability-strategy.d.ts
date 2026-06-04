import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
export declare class AbilityStrategy {
    copyable: boolean;
    requiresTarget: boolean;
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity | null, crit: boolean, preventDefaultAnim?: boolean): void;
}
