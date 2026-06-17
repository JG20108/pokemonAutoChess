import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import { AbilityStrategy } from "./ability-strategy";
export declare class PsychoCutStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
