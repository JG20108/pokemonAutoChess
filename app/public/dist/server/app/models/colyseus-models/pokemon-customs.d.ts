import { MapSchema } from "@colyseus/schema";
import { Emotion, PkmWithCustom } from "../../types";
import { IPokemonCollectionItem } from "../mongo-models/user-metadata";
export declare const EmotionIndex: Record<Emotion, number>;
export declare const EmotionByIndex: {
    [k: string]: Emotion;
};
export declare class PokemonCustoms extends MapSchema<number> {
    constructor(pokemonCollection: Map<string, IPokemonCollectionItem>);
}
export declare function getPkmWithCustom(index: string, customs?: PokemonCustoms): PkmWithCustom;
