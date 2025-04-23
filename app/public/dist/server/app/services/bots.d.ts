import { IBot, IStep } from "../models/mongo-models/bot-v2";
import { mongo } from "mongoose";
export declare function fetchBots(): Promise<Map<string, IBot>>;
export declare function getBotsList(): Promise<Partial<IBot>[]>;
export declare function getBotData(id: string): Promise<IBot | undefined>;
export declare function addBotToDatabase(json: {
    name: string;
    avatar: string;
    elo: number;
    author: string;
    steps: IStep[];
}): Promise<IBot>;
export declare function deleteBotFromDatabase(id: string): Promise<mongo.DeleteResult>;
