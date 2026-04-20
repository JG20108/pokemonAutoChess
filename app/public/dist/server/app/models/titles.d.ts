import GameState from "../rooms/states/game-state";
import { IPlayer } from "../types";
import { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export declare function updatePlayerTitlesAfterFight(player: IPlayer, state: GameState): void;
export declare function updatePlayerTitlesAfterGame(player: IPlayer, usr: IUserMetadataMongo, rank: number): void;
