import { Dispatcher } from "@colyseus/command";
import { Client, ClientArray, Room } from "colyseus";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { EloRank } from "../types/enum/EloRank";
import { GameMode } from "../types/enum/Game";
import PreparationState from "./states/preparation-state";
export default class PreparationRoom extends Room<{
    state: PreparationState;
}> {
    dispatcher: Dispatcher<this>;
    clients: ClientArray<Client<{
        auth: UserRecord;
    }>>;
    private roomPassword;
    constructor();
    setName(name: string): Promise<void>;
    setPassword(password: string | null): Promise<void>;
    setNoElo(noElo: boolean): Promise<void>;
    setMinMaxRanks(minRank: EloRank, maxRank: EloRank): Promise<void>;
    setGameStarted(gameStartedAt: string): Promise<void>;
    onCreate(options: {
        ownerId?: string;
        roomName: string;
        minRank?: EloRank;
        maxRank?: EloRank;
        gameMode: GameMode;
        noElo?: boolean;
        password?: string;
        autoStartDelayInSeconds?: number;
        whitelist?: string[];
        blacklist?: string[];
        tournamentId?: string;
        bracketId?: string;
    }): void;
    onAuth(client: Client, options: any, context: any): Promise<UserRecord | undefined>;
    onJoin(client: Client<{
        auth: UserRecord;
    }>, options: any, auth: UserRecord | undefined): Promise<void>;
    onDrop(client: Client, code: number): Promise<void>;
    onLeave(client: Client, code: number): Promise<void>;
    onDispose(): void;
    onServerAnnouncement(message: string): void;
    onGameStart({ gameId, preparationId }: {
        gameId: string;
        preparationId: string;
    }): void;
    onRoomDeleted(roomId: any): void;
    updatePlayersInfo(): void;
}
