import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import { AbilityStrategy } from "./ability-strategy";
export declare class WaveSplashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
