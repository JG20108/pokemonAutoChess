import { ITwitchBlacklistedStreamer } from "../models/mongo-models/twitch-blacklisted-streamer";
export type TwitchStream = {
    id: string;
    userName: string;
    userLogin: string;
    title: string;
    language: string;
    thumbnailUrl: string;
    url: string;
    viewerCount: number;
    startedAt: string;
    tags: string[];
};
export type TwitchStreamsPayload = {
    streams: TwitchStream[];
    lastRefreshAt: string | null;
    isConfigured: boolean;
    error: string | null;
};
export declare function refreshTwitchBlacklist(): Promise<void>;
export declare function listTwitchBlacklist(): Promise<ITwitchBlacklistedStreamer[]>;
export declare function addTwitchBlacklistEntry(streamerLogin: string, createdBy: string, reason?: string): Promise<void>;
export declare function removeTwitchBlacklistEntry(streamerLogin: string): Promise<boolean>;
export declare function refreshTwitchStreams(): Promise<TwitchStream[]>;
export declare function getTwitchStreamsPayload(): TwitchStreamsPayload;
