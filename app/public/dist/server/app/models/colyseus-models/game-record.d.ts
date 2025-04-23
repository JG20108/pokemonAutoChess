import { ArraySchema, Schema } from "@colyseus/schema";
import { Item } from "../../types/enum/Item";
import { Pkm } from "../../types/enum/Pokemon";
import { GameMode } from "../../types/enum/Game";
export interface IPokemonRecord {
    name: Pkm;
    items: Item[] | ArraySchema<Item>;
    avatar: string;
}
export declare class PokemonRecord extends Schema implements IPokemonRecord {
    name: Pkm;
    avatar: string;
    items: ArraySchema<Item>;
    constructor(mongoPokemon: IPokemonRecord);
}
export interface IGameRecord {
    time: number;
    rank: number;
    pokemons: IPokemonRecord[] | ArraySchema<IPokemonRecord>;
    elo: number;
    gameMode: GameMode;
}
export declare class GameRecord extends Schema implements IGameRecord {
    time: number;
    rank: number;
    pokemons: ArraySchema<IPokemonRecord>;
    elo: number;
    gameMode: GameMode;
    constructor(time: number, rank: number, elo: number, pokemons: any[], gameMode: GameMode);
}
