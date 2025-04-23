import { Command } from '@colyseus/command';
import { Client } from 'colyseus';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { GameUser, IGameUser } from '../../models/colyseus-models/game-user';
import { IBot } from '../../models/mongo-models/bot-v2';
import { EloRank } from '../../types/Config';
import { BotDifficulty, GameMode } from '../../types/enum/Game';
import { SpecialGameRule } from '../../types/enum/SpecialGameRule';
import PreparationRoom from '../preparation-room';
import { Schema, MapSchema } from '@colyseus/schema';
export declare abstract class PreparationCommand extends Command<PreparationRoom> {
    static readonly CHANGE_SPECIAL_RULE = "CHANGE_SPECIAL_RULE";
    static readonly ADD_BOT = "ADD_BOT";
    static readonly REMOVE_BOT = "REMOVE_BOT";
    static readonly TOGGLE_READY = "TOGGLE_READY";
    static readonly CHANGE_GAME_MODE = "CHANGE_GAME_MODE";
    static readonly CHANGE_MIN_RANK = "CHANGE_MIN_RANK";
    static readonly CHANGE_MAX_RANK = "CHANGE_MAX_RANK";
    static readonly TOGGLE_NO_ELO = "TOGGLE_NO_ELO";
    static readonly CHANGE_PASSWORD = "CHANGE_PASSWORD";
    static readonly CHANGE_NAME = "CHANGE_NAME";
}
export declare class PreparationState extends Schema {
    ownerId: string;
    ownerName: string;
    gameMode: GameMode;
    noElo: boolean;
    minRank: EloRank | null;
    maxRank: EloRank | null;
    specialGameRule: SpecialGameRule | null;
    gameStartedAt: number | null;
    users: MapSchema<GameUser, string>;
    password: string | null;
    name: string;
    abortOnPlayerLeave?: AbortController;
    isOwner(client: Client<any>): boolean;
    addMessage(message: {
        authorId: string;
        payload: string;
        avatar?: string;
    }): void;
    removeMessage(messageId: string): void;
}
export declare class OnJoinCommand extends Command<PreparationRoom, {
    client: Client<undefined, UserRecord>;
    options: any;
    auth: UserRecord;
}> {
    execute({ client, options, auth }: {
        client: any;
        options: any;
        auth: any;
    }): Promise<void>;
}
export declare class OnGameStartRequestCommand extends Command<PreparationRoom, {
    client?: Client;
}> {
    execute({ client }?: {
        client?: Client;
    }): Promise<void>;
}
export declare class OnNewMessageCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message }: {
        client: Client;
        message: string;
    }): void;
}
export declare class RemoveMessageCommand extends Command<PreparationRoom, {
    client: Client;
    messageId: string;
}> {
    execute({ client, messageId }: {
        client: Client;
        messageId: string;
    }): void;
}
export declare class OnRoomNameCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message: roomName }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnRoomPasswordCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message: password }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnRoomChangeRankCommand extends Command<PreparationRoom, {
    client: Client;
    minRank: EloRank | null;
    maxRank: EloRank | null;
}> {
    execute({ client, minRank, maxRank }: {
        client: any;
        minRank: any;
        maxRank: any;
    }): void;
}
export declare class OnRoomChangeSpecialRule extends Command<PreparationRoom, {
    client: Client;
    specialRule: SpecialGameRule | null;
}> {
    execute({ client, specialRule }: {
        client: any;
        specialRule: any;
    }): void;
}
export declare class OnChangeNoEloCommand extends Command<PreparationRoom, {
    client: Client;
    message: boolean;
}> {
    execute({ client, message: noElo }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnKickPlayerCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message: userId }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnLeaveCommand extends Command<PreparationRoom, {
    client: Client;
    consented: boolean;
}> {
    execute({ client, consented }: {
        client: any;
        consented: any;
    }): void;
}
export declare class OnToggleReadyCommand extends Command<PreparationRoom, {
    client: Client;
    ready: boolean;
}> {
    execute({ client, ready }: {
        client: any;
        ready: any;
    }): CheckAutoStartRoom | undefined;
}
export declare class CheckAutoStartRoom extends Command<PreparationRoom, void> {
    execute(): Promise<OnGameStartRequestCommand | undefined>;
}
export declare class InitializeBotsCommand extends Command<PreparationRoom, {
    ownerId: string;
}> {
    execute({ ownerId }: {
        ownerId: any;
    }): Promise<void>;
}
type OnAddBotPayload = {
    type: IBot | BotDifficulty;
    user: IGameUser;
};
export declare class OnAddBotCommand extends Command<PreparationRoom, OnAddBotPayload> {
    execute(data: OnAddBotPayload): Promise<void>;
}
export declare class OnRemoveBotCommand extends Command<PreparationRoom, {
    target?: string | undefined;
    user?: IGameUser | undefined;
}> {
    execute({ target, user }: {
        target: any;
        user: any;
    }): void;
}
export {};
