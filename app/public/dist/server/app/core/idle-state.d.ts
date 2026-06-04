import type Player from "../models/colyseus-models/player";
import type { Board } from "./board";
import type { PokemonEntity } from "./pokemon-entity";
import PokemonState from "./pokemon-state";
export declare class IdleState extends PokemonState {
    name: string;
    update(pokemon: PokemonEntity, dt: number, board: Board, player: Player): void;
    onEnter(pokemon: PokemonEntity): void;
    onExit(pokemon: PokemonEntity): void;
}
