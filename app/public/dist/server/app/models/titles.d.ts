import type GameState from "../rooms/states/game-state";
import { type IPlayer } from "../types";
import type { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export declare function updatePlayerTitlesAfterFight(player: IPlayer, state: GameState): void;
export declare function updatePlayerTitlesAfterGame(player: IPlayer, usr: IUserMetadataMongo, rank: number): void;
