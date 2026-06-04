import type Player from "../models/colyseus-models/player";
import type GameState from "../rooms/states/game-state";
import type { IPlayer } from "../types";
export type Matchup = {
    bluePlayer: Player;
    redPlayer: Player;
    count: number;
    distance: number;
    ghost?: boolean;
};
export declare function selectMatchups(state: GameState): Matchup[];
export declare function getCount(a: IPlayer, b: IPlayer, bIsGhost: boolean): number;
export declare function getDistance(a: IPlayer, b: IPlayer, bIsGhost: boolean): number;
