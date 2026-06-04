import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import type { IPlayer } from "../../types";
import { type EvolutionRule } from "../../types/EvolutionRules";
import { Pkm } from "../../types/enum/Pokemon";
import type { EvolutionHandler } from "./evolution-handler";
export declare const EvolutionManager: {
    getHandler(evolutionRule: EvolutionRule): EvolutionHandler<any[]>;
    tryEvolve(pokemon: Pokemon, player: Player, ...additionalArgs: unknown[]): void | Pokemon;
    evolve(pokemon: Pokemon, player: Player, ...additionalArgs: unknown[]): Pokemon;
    afterEvolve(pokemonEvolved: Pokemon, pokemonBeforeEvolution: Pokemon, player: Player, ...additionalArgs: unknown[]): void;
    getEvolution(pokemon: Pokemon, player: IPlayer, ...additionalArgs: unknown[]): Pkm;
    canEvolve(pokemon: Pokemon, player: Player, ...additionalArgs: unknown[]): boolean;
    canEvolveIfGettingOne(pokemon: Pokemon, player: Player): boolean;
    updateHatch(pokemon: Pokemon, player: Player): void;
};
