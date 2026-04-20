import { type Presence } from "@colyseus/core";
interface PendingGame {
    gameId: string;
    reconnectionDeadline: Date;
    isExpired: boolean;
}
export declare function isPlayerTimeout(presence: Presence, playerId: string): Promise<boolean>;
export declare function givePlayerTimeout(presence: Presence, playerId: string): Promise<boolean>;
export declare function getPendingGame(presence: Presence, playerId: string): Promise<PendingGame | null>;
export declare function setPendingGame(presence: Presence, playerId: string, gameId: string): Promise<boolean>;
export declare function clearPendingGame(presence: Presence, playerId: string): Promise<boolean>;
export declare function clearPendingGamesOnRoomDispose(presence: Presence, playerId: string, roomId: string): Promise<void>;
export {};
