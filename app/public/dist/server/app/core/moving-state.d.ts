import type Player from "../models/colyseus-models/player";
import type { Board } from "./board";
import type { PokemonEntity } from "./pokemon-entity";
import PokemonState from "./pokemon-state";
export default class MovingState extends PokemonState {
    name: string;
    update(pokemon: PokemonEntity, dt: number, board: Board, player: Player): void;
    move(pokemon: PokemonEntity, board: Board, coordinates: {
        x: number;
        y: number;
    }): void;
    onMove(pokemon: PokemonEntity, board: Board, oldX: number, oldY: number, newX: number, newY: number): void;
    onEnter(pokemon: PokemonEntity): void;
    onExit(pokemon: PokemonEntity): void;
}
