import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import { AbilityStrategy } from "./ability-strategy";
declare class MeditateStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare const meditateStrategy: MeditateStrategy;
export {};
