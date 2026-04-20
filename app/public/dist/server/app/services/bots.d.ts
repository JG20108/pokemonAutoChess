import { mongo } from "mongoose";
import { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
import type { IBot, IStep } from "../types/models/bot-v2";
export type IBotListItem = Omit<IBot, "steps">;
export declare function fetchBotsList(approved?: boolean, usingPkm?: string): Promise<IBotListItem[]>;
export declare function fetchBot(id: string): Promise<IBot | null>;
export declare function addBotToDatabase(bot: {
    name: string;
    avatar: string;
    elo: number;
    author: string;
    steps: IStep[];
}): Promise<IBot>;
export declare function deleteBotFromDatabase(botId: string, user: IUserMetadataMongo): Promise<mongo.DeleteResult>;
export declare function approveBot(botId: string, approved: boolean, user: IUserMetadataMongo): Promise<mongo.UpdateResult>;
