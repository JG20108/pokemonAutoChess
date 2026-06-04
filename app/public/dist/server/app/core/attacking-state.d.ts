import type Player from "../models/colyseus-models/player";
import type { IPokemonEntity } from "../types";
import type { Board } from "./board";
import type { PokemonEntity } from "./pokemon-entity";
import PokemonState from "./pokemon-state";
export default class AttackingState extends PokemonState {
    name: string;
    update(pokemon: PokemonEntity, dt: number, board: Board, player: Player): void;
    onEnter(pokemon: any): void;
    onExit(pokemon: any): void;
}
export declare function getAttackTimings(pokemon: IPokemonEntity): {
    delayBeforeShoot: number;
    travelTime: number;
    attackDuration: number;
};
