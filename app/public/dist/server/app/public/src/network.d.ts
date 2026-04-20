import { Room } from "@colyseus/sdk";
import { User } from "@firebase/auth-types";
import AfterGameState from "../../rooms/states/after-game-state";
import GameState from "../../rooms/states/game-state";
import LobbyState from "../../rooms/states/lobby-state";
import PreparationState from "../../rooms/states/preparation-state";
import { Emotion, Item, Role, Title } from "../../types";
import { EloRank } from "../../types/enum/EloRank.js";
import { BotDifficulty } from "../../types/enum/Game.js";
import { PkmProposition } from "../../types/enum/Pokemon.js";
import { SpecialGameRule } from "../../types/enum/SpecialGameRule.js";
import { IBot } from "./models/bot-v2";
export declare const client: import("@colyseus/sdk").ColyseusSDK<import("colyseus").Server<{
    "after-game": import("colyseus").RegisteredHandler<import("../../rooms/after-game-room.js").default>;
    lobby: import("colyseus").RegisteredHandler<import("../../rooms/custom-lobby-room.js").default>;
    preparation: import("colyseus").RegisteredHandler<import("../../rooms/preparation-room.js").default>;
    game: import("colyseus").RegisteredHandler<import("../../rooms/game-room.js").default>;
}, {
    handler: (request: Request) => Promise<Response>;
    endpoints: Record<string, import("colyseus").Endpoint>;
    addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
    findRoute: (method: string, path: string) => {
        data: import("colyseus").Endpoint & {
            path: string;
        };
        params: Record<string, string>;
    };
    extend: <NE extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE) => {
        handler: (request: Request) => Promise<Response>;
        endpoints: Record<string, import("colyseus").Endpoint> & NE;
        addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
        findRoute: (method: string, path: string) => {
            data: ((inputCtx: any) => Promise<any>) & {
                options: import("colyseus").EndpointOptions;
                path: string;
            } & {
                path: string;
            };
            params: Record<string, string>;
        };
        extend: <NE_1 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_1) => {
            handler: (request: Request) => Promise<Response>;
            endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1;
            addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
            findRoute: (method: string, path: string) => {
                data: ((inputCtx: any) => Promise<any>) & {
                    options: import("colyseus").EndpointOptions;
                    path: string;
                } & {
                    path: string;
                };
                params: Record<string, string>;
            };
            extend: <NE_2 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_2) => {
                handler: (request: Request) => Promise<Response>;
                endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2;
                addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                findRoute: (method: string, path: string) => {
                    data: ((inputCtx: any) => Promise<any>) & {
                        options: import("colyseus").EndpointOptions;
                        path: string;
                    } & {
                        path: string;
                    };
                    params: Record<string, string>;
                };
                extend: <NE_3 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_3) => {
                    handler: (request: Request) => Promise<Response>;
                    endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2 & NE_3;
                    addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                    findRoute: (method: string, path: string) => {
                        data: ((inputCtx: any) => Promise<any>) & {
                            options: import("colyseus").EndpointOptions;
                            path: string;
                        } & {
                            path: string;
                        };
                        params: Record<string, string>;
                    };
                    extend: <NE_4 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_4) => {
                        handler: (request: Request) => Promise<Response>;
                        endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2 & NE_3 & NE_4;
                        addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                        findRoute: (method: string, path: string) => {
                            data: ((inputCtx: any) => Promise<any>) & {
                                options: import("colyseus").EndpointOptions;
                                path: string;
                            } & {
                                path: string;
                            };
                            params: Record<string, string>;
                        };
                        extend: <NE_5 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_5) => {
                            handler: (request: Request) => Promise<Response>;
                            endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2 & NE_3 & NE_4 & NE_5;
                            addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                            findRoute: (method: string, path: string) => {
                                data: ((inputCtx: any) => Promise<any>) & {
                                    options: import("colyseus").EndpointOptions;
                                    path: string;
                                } & {
                                    path: string;
                                };
                                params: Record<string, string>;
                            };
                            extend: <NE_6 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_6) => {
                                handler: (request: Request) => Promise<Response>;
                                endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2 & NE_3 & NE_4 & NE_5 & NE_6;
                                addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                                findRoute: (method: string, path: string) => {
                                    data: ((inputCtx: any) => Promise<any>) & {
                                        options: import("colyseus").EndpointOptions;
                                        path: string;
                                    } & {
                                        path: string;
                                    };
                                    params: Record<string, string>;
                                };
                                extend: <NE_7 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_7) => {
                                    handler: (request: Request) => Promise<Response>;
                                    endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2 & NE_3 & NE_4 & NE_5 & NE_6 & NE_7;
                                    addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                                    findRoute: (method: string, path: string) => {
                                        data: ((inputCtx: any) => Promise<any>) & {
                                            options: import("colyseus").EndpointOptions;
                                            path: string;
                                        } & {
                                            path: string;
                                        };
                                        params: Record<string, string>;
                                    };
                                    extend: <NE_8 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_8) => {
                                        handler: (request: Request) => Promise<Response>;
                                        endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2 & NE_3 & NE_4 & NE_5 & NE_6 & NE_7 & NE_8;
                                        addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                                        findRoute: (method: string, path: string) => {
                                            data: ((inputCtx: any) => Promise<any>) & {
                                                options: import("colyseus").EndpointOptions;
                                                path: string;
                                            } & {
                                                path: string;
                                            };
                                            params: Record<string, string>;
                                        };
                                        extend: <NE_9 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_9) => {
                                            handler: (request: Request) => Promise<Response>;
                                            endpoints: Record<string, import("colyseus").Endpoint> & NE & NE_1 & NE_2 & NE_3 & NE_4 & NE_5 & NE_6 & NE_7 & NE_8 & NE_9;
                                            addEndpoint: (endpoint: import("colyseus").Endpoint) => void;
                                            findRoute: (method: string, path: string) => {
                                                data: ((inputCtx: any) => Promise<any>) & {
                                                    options: import("colyseus").EndpointOptions;
                                                    path: string;
                                                } & {
                                                    path: string;
                                                };
                                                params: Record<string, string>;
                                            };
                                            extend: <NE_10 extends Record<string, import("colyseus").Endpoint>>(newEndpoints: NE_10) => any;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
}>, any>;
export declare function authenticateUser(): Promise<User>;
export declare function fetchProfile(forceRefresh?: boolean): Promise<void | import("../../types/interfaces/UserMetadata").IUserMetadataUnpacked>;
export declare const rooms: {
    lobby: Room<{
        state: LobbyState;
    }> | undefined;
    preparation: Room<PreparationState> | undefined;
    game: Room<GameState> | undefined;
    after: Room<AfterGameState> | undefined;
};
export declare function leaveRoom(roomName: keyof typeof rooms, allowReconnect?: boolean): Promise<number>;
export declare function leaveAllRooms(): Promise<[PromiseSettledResult<number>, PromiseSettledResult<number>, PromiseSettledResult<number>, PromiseSettledResult<number>]>;
export declare function joinLobby(room: Room<{
    state: LobbyState;
}>): void;
export declare function joinPreparation(room: Room<PreparationState>, reconnectionTokenExpirationTimeInSeconds?: number): void;
export declare function joinGame(room: Room<GameState>, reconnectionTokenExpirationTimeInSeconds?: number): void;
export declare function joinAfter(room: Room<AfterGameState>): void;
export type ChatRoom = "lobby" | "preparation";
export declare function sendMessage(message: string, source: ChatRoom): void;
export declare function removeMessage(message: {
    id: string;
}, source: ChatRoom): void;
export declare function addBot(bot: BotDifficulty | IBot): void;
export declare function removeBot(id: string): void;
export declare function toggleReady(ready: boolean): void;
export declare function setNoElo(noElo: boolean): void;
export declare function lockShop(): void;
export declare function levelClick(): void;
export declare function buyInShop(id: number): void;
export declare function pickPokemonProposition(proposition: PkmProposition): void;
export declare function pickItem(item: Item): void;
export declare function gameStartRequest(token: string): void;
export declare function changeRoomName(name: string): void;
export declare function changeRoomPassword(password: string | null): void;
export declare function changeRoomMinMaxRanks(params: {
    minRank: EloRank | null;
    maxRank: EloRank | null;
}): void;
export declare function setSpecialRule(rule: SpecialGameRule | null): void;
export declare function buyEmotion(params: {
    index: string;
    emotion: Emotion;
    shiny: boolean;
}): void;
export declare function buyBooster(params: {
    index: string;
}): void;
export declare function openBooster(): void;
export declare function showEmote(emote?: string): void;
export declare function searchById(id: string): void;
export declare function deleteTournament(params: {
    id: string;
}): void;
export declare function remakeTournamentLobby(params: {
    tournamentId: string;
    bracketId: string;
}): void;
export declare function participateInTournament(params: {
    tournamentId: string;
    participate: boolean;
}): void;
export declare function giveBooster(params: {
    uid: string;
    numberOfBoosters: number;
}): void;
export declare function heapSnapshot(): void;
export declare function deleteAccount(): void;
export declare function giveRole(params: {
    uid: string;
    role: Role;
}): void;
export declare function giveTitle(params: {
    uid: string;
    title: Title;
}): void;
export declare function kick(playerId: string): void;
export declare function searchMessages(query: string): Promise<import("../../types").IChatV2[]>;
export declare function renameAccount(uid: string, newName: string): Promise<{
    displayName: string;
}>;
export type TwitchBlacklistEntry = {
    streamerLogin: string;
    reason?: string;
    createdBy: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare function getTwitchBlacklist(): Promise<TwitchBlacklistEntry[]>;
export declare function addTwitchBlacklist(streamerLogin: string, reason?: string): Promise<void>;
export declare function removeTwitchBlacklist(streamerLogin: string): Promise<void>;
export declare function ban(params: {
    uid: string;
    reason: string;
}): void;
export declare function unban(params: {
    uid: string;
    reason: string;
}): void;
export declare function createTournament(params: {
    name: string;
    startDate: string;
}): void;
