import { ITwitchBlacklistedStreamer } from "../models/mongo-models/twitch-blacklisted-streamer";
export type TwitchVerificationStartPayload = {
    authorizeUrl: string;
    expiresAt: string;
};
export type TwitchVerificationResult = {
    uid: string;
    twitchUserId: string;
    twitchLogin: string;
    twitchDisplayName: string;
};
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
export declare function startTwitchAccountVerification(uid: string): Promise<TwitchVerificationStartPayload>;
export declare function completeTwitchAccountVerification(code: string, state: string): Promise<TwitchVerificationResult>;
export declare function unlinkTwitchAccount(uid: string): Promise<void>;
export declare function refreshTwitchBlacklist(): Promise<void>;
export declare function listTwitchBlacklist(): Promise<ITwitchBlacklistedStreamer[]>;
export declare function addTwitchBlacklistEntry(streamerLogin: string, createdBy: string, reason?: string): Promise<void>;
export declare function removeTwitchBlacklistEntry(streamerLogin: string): Promise<boolean>;
export declare function refreshTwitchStreams(): Promise<TwitchStream[]>;
export declare function getTwitchStreamsPayload(): TwitchStreamsPayload;
