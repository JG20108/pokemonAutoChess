import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import type { AbilityStrategy } from "./ability-strategy";
export declare function castAbility(abilityStrategy: AbilityStrategy, pokemon: PokemonEntity, board: Board, target: PokemonEntity | null, canCrit?: boolean, preventDefaultAnim?: boolean): void;
