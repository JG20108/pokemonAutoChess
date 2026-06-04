import type { IPokemon, IPokemonEntity } from "../types";
export declare function getUnitScore(pokemon: IPokemonEntity | IPokemon): number;
export declare function getStrongestUnit<T extends IPokemon | IPokemonEntity>(pokemons: T[]): T;
