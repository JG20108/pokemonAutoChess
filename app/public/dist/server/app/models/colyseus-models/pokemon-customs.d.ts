import { MapSchema } from "@colyseus/schema";
import { type PkmWithCustom } from "../../types";
import type { IPokemonCollectionItemMongo } from "../../types/interfaces/UserMetadata";
export declare class PokemonCustoms extends MapSchema<number> {
    constructor(pokemonCollection: Map<string, IPokemonCollectionItemMongo>);
}
export declare function getPkmWithCustom(index: string, customs?: PokemonCustoms): PkmWithCustom;
