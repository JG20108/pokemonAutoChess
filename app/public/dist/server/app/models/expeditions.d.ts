import { IPlayer } from "../types";
import { Expedition } from "../types/enum/Expedition";
import { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export declare function updatePlayerExpeditionsAfterGame(player: IPlayer, usr: IUserMetadataMongo): boolean;
export declare function checkExpeditionCompletion(player: IPlayer, expedition: Expedition): boolean;
