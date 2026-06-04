import { type IPlayer } from "../types";
import { type Expedition } from "../types/enum/Expedition";
import type { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export declare function updatePlayerExpeditionsAfterGame(player: IPlayer, usr: IUserMetadataMongo): boolean;
export declare function checkExpeditionCompletion(player: IPlayer, expedition: Expedition): boolean;
