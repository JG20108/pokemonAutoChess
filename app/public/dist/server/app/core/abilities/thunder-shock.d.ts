import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import { AbilityStrategy } from "./ability-strategy";
declare class ThunderShockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare const thunderShockStrategy: ThunderShockStrategy;
export {};
