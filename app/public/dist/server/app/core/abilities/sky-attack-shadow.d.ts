import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import { AbilityStrategy } from "./ability-strategy";
export declare class SkyAttackShadowStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
