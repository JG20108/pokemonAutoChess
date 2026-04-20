import { ISimplePlayer } from "../types";
import { GameMode } from "../types/enum/Game";
export declare function computeElo(player: ISimplePlayer, rank: number, previousElo: number, players: ISimplePlayer[], gameMode: GameMode, isBot?: boolean): number;
