import { Schema } from "@colyseus/schema";
import type { Role, Title } from "../../types";
export interface IGameUser {
    uid: string;
    name: string;
    avatar: string;
    ready: boolean;
    isBot: boolean;
    elo: number;
    games: number;
    title: Title | "";
    role: Role;
    anonymous: boolean;
    twitchLogin: string;
    twitchDisplayName: string;
}
export declare class GameUser extends Schema implements IGameUser {
    uid: string;
    name: string;
    avatar: string;
    ready: boolean;
    isBot: boolean;
    elo: number;
    games: number;
    title: Title | "";
    role: Role;
    anonymous: boolean;
    twitchLogin: string;
    twitchDisplayName: string;
    constructor(uid: string, name: string, elo: number, games: number, avatar: string, isBot: boolean, ready: boolean, title: Title | "", role: Role, anonymous: boolean, twitchLogin?: string, twitchDisplayName?: string);
}
