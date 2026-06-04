import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import type { IPlayer } from "../../types";
import type { DivergentEvolution, EvolutionRule } from "../../types/EvolutionRules";
import type { Pkm } from "../../types/enum/Pokemon";
export declare abstract class EvolutionHandler<AdditionalArgs extends any[] = []> {
    abstract canEvolve(pokemon: Pokemon, player: Player, ...additionalArgs: AdditionalArgs): boolean;
    abstract evolve(pokemon: Pokemon, player: Player, ...additionalArgs: AdditionalArgs): Pokemon;
    divergentEvolution?: DivergentEvolution<AdditionalArgs>;
    constructor(evolutionRule: EvolutionRule);
    getEvolution(pokemon: Pokemon, player: IPlayer, ...additionalArgs: AdditionalArgs): Pkm;
}
export declare function carryOverPermanentStats(pokemonEvolved: Pokemon, pokemonsBeforeEvolution: Pokemon[]): void;
