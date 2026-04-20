import { MapSchema } from "@colyseus/schema";
import { PkmWithCustom } from "../../types";
import { IPokemonCollectionItemMongo } from "../../types/interfaces/UserMetadata";
export declare class PokemonCustoms extends MapSchema<number> {
    constructor(pokemonCollection: Map<string, IPokemonCollectionItemMongo>);
}
export declare function getPkmWithCustom(index: string, customs?: PokemonCustoms): PkmWithCustom;
