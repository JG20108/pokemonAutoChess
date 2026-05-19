import { ArraySchema, Schema } from "@colyseus/schema";
import { IAfterGamePlayer, Role, Title } from "../../types";
import { Synergy } from "../../types/enum/Synergy";
import { GameStats } from "../../types/interfaces/GameStats";
import { IPokemonRecord } from "./game-record";
import { GameStatsSchema } from "./game-stats";
export declare class SampleSynergy extends Schema {
    name: Synergy;
    value: number;
    constructor(name: Synergy, value: number);
}
export default class AfterGamePlayer extends Schema implements IAfterGamePlayer {
    id: string;
    name: string;
    avatar: string;
    rank: number;
    pokemons: ArraySchema<IPokemonRecord>;
    elo: number;
    games: number;
    title: Title | "";
    role: Role;
    synergies: ArraySchema<{
        name: Synergy;
        value: number;
    }>;
    gameStats: GameStatsSchema;
    constructor(id: string, name: string, avatar: string, rank: number, pokemons: IPokemonRecord[] | ArraySchema<IPokemonRecord>, title: Title | "", role: Role, synergies: Array<{
        name: Synergy;
        value: number;
    }> | ArraySchema<{
        name: Synergy;
        value: number;
    }>, elo: number, games: number, gameStats: GameStats);
}
