import { Command } from "@colyseus/command";
import { Client } from "colyseus";
import { Emotion, Role, Title } from "../../types";
import { EloRank } from "../../types/enum/EloRank";
import { GameMode } from "../../types/enum/Game";
import { Language } from "../../types/enum/Language";
import { IUserMetadataMongo } from "../../types/interfaces/UserMetadata";
import CustomLobbyRoom from "../custom-lobby-room";
export declare class OnJoinCommand extends Command<CustomLobbyRoom, {
    client: Client;
    user: IUserMetadataMongo | null;
}> {
    execute({ client, user }: {
        client: Client;
        user: IUserMetadataMongo | null;
    }): Promise<void>;
}
export declare class OnLeaveCommand extends Command<CustomLobbyRoom, {
    client: Client;
}> {
    execute({ client }: {
        client: Client;
    }): void;
}
export declare class GiveTitleCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    title: Title;
}> {
    execute({ client, uid, title }: {
        client: Client;
        uid: string;
        title: Title;
    }): Promise<void>;
}
export declare class DeleteAccountCommand extends Command<CustomLobbyRoom> {
    execute({ client }: {
        client: Client;
    }): Promise<void>;
}
export declare class HeapSnapshotCommand extends Command<CustomLobbyRoom, {
    client: Client;
}> {
    execute({ client }: {
        client: Client;
    }): void;
}
export declare class GiveBoostersCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    numberOfBoosters: number;
}> {
    execute({ client, uid, numberOfBoosters }: {
        client: Client;
        uid: string;
        numberOfBoosters: number;
    }): Promise<void>;
}
export declare class GiveAllPortraitsCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
}> {
    execute({ client, uid }: {
        client: Client;
        uid: string;
    }): Promise<void>;
}
export declare class GiveRoleCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    role: Role;
}> {
    execute({ client, uid, role }: {
        client: Client;
        uid: string;
        role: Role;
    }): Promise<void>;
}
export declare class OnNewMessageCommand extends Command<CustomLobbyRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message }: {
        client: Client;
        message: string;
    }): void;
}
export declare class RemoveMessageCommand extends Command<CustomLobbyRoom, {
    client: Client;
    messageId: string;
}> {
    execute({ client, messageId }: {
        client: Client;
        messageId: string;
    }): void;
}
export declare class ChangeNameCommand extends Command<CustomLobbyRoom, {
    client: Client;
    name: string;
}> {
    execute({ client, name }: {
        client: Client;
        name: string;
    }): Promise<void>;
}
export declare class ChangeTitleCommand extends Command<CustomLobbyRoom, {
    client: Client;
    title: Title | "";
}> {
    execute({ client, title }: {
        client: Client;
        title: Title | "";
    }): Promise<void>;
}
export declare class ChangeAvatarCommand extends Command<CustomLobbyRoom, {
    client: Client;
    index: string;
    emotion: Emotion;
    shiny: boolean;
}> {
    execute({ client, index, emotion, shiny }: {
        client: Client;
        index: string;
        emotion: Emotion;
        shiny: boolean;
    }): Promise<void>;
}
export declare class OnSearchByIdCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
}> {
    execute({ client, uid }: {
        client: Client;
        uid: string;
    }): Promise<void>;
}
export declare class BanUserCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    reason: string;
}> {
    execute({ client, uid, reason }: {
        client: Client;
        uid: string;
        reason: string;
    }): Promise<void>;
}
export declare class UnbanUserCommand extends Command<CustomLobbyRoom, {
    client: Client;
    uid: string;
    reason: string;
}> {
    execute({ client, uid, reason }: {
        client: Client;
        uid: string;
        reason: string;
    }): Promise<void>;
}
export declare class SelectLanguageCommand extends Command<CustomLobbyRoom, {
    client: Client;
    message: Language;
}> {
    execute({ client, message }: {
        client: Client;
        message: Language;
    }): Promise<void>;
}
export declare class JoinOrOpenRoomCommand extends Command<CustomLobbyRoom, {
    client: Client;
    gameMode: GameMode;
}> {
    execute({ client, gameMode }: {
        client: Client;
        gameMode: GameMode;
    }): Promise<OpenGameCommand[] | undefined>;
}
export declare class OpenGameCommand extends Command<CustomLobbyRoom, {
    gameMode: GameMode;
    client: Client;
    minRank?: EloRank;
    maxRank?: EloRank;
}> {
    execute({ gameMode, client, minRank, maxRank }: {
        gameMode: GameMode;
        client: Client;
        minRank?: EloRank;
        maxRank?: EloRank;
    }): Promise<void>;
}
export declare class DeleteRoomCommand extends Command<CustomLobbyRoom, {
    client: Client;
    roomId?: string;
    tournamentId?: string;
    bracketId?: string;
}> {
    execute({ client, roomId, tournamentId, bracketId }: {
        client: any;
        roomId: any;
        tournamentId: any;
        bracketId: any;
    }): Promise<void>;
}
