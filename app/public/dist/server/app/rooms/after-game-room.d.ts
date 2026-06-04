import { Dispatcher } from "@colyseus/command";
import { type Client, Room } from "colyseus";
import type { IAfterGamePlayer } from "../types";
import type { GameMode } from "../types/enum/Game";
import AfterGameState from "./states/after-game-state";
export default class AfterGameRoom extends Room<{
    state: AfterGameState;
}> {
    dispatcher: Dispatcher<this>;
    constructor();
    onCreate(options: {
        players: IAfterGamePlayer[];
        idToken: string;
        eligibleToXP: boolean;
        eligibleToELO: boolean;
        gameMode: GameMode;
    }): void;
    onAuth(client: Client, options: any, context: any): Promise<import("firebase-admin/auth").UserRecord | undefined>;
    onJoin(client: Client): void;
    onDrop(client: Client, code: number): Promise<void>;
    onLeave(client: Client, code: number): Promise<void>;
    onDispose(): void;
}
