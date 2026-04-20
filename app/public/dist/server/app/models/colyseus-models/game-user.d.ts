import { Schema } from "@colyseus/schema";
import { Role } from "../../types";
export interface IGameUser {
    uid: string;
    name: string;
    avatar: string;
    ready: boolean;
    isBot: boolean;
    elo: number;
    games: number;
    title: string;
    role: Role;
    anonymous: boolean;
}
export declare class GameUser extends Schema implements IGameUser {
    uid: string;
    name: string;
    avatar: string;
    ready: boolean;
    isBot: boolean;
    elo: number;
    games: number;
    title: string;
    role: Role;
    anonymous: boolean;
    constructor(uid: string, name: string, elo: number, games: number, avatar: string, isBot: boolean, ready: boolean, title: string, role: Role, anonymous: boolean);
}
