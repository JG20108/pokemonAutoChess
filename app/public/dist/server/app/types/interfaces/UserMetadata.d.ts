import { Emotion, Role, Title } from "..";
import { Language } from "../enum/Language";
interface IUserMetadata {
    uid: string;
    displayName: string;
    language: Language | "";
    avatar: string;
    games: number;
    wins: number;
    exp: number;
    level: number;
    elo: number;
    maxElo: number;
    eventPoints: number;
    maxEventPoints: number;
    eventFinishTime: Date | null;
    booster: number;
    titles: Title[];
    title: "" | Title;
    role: Role;
    banned?: boolean;
    pokemonCollection: Map<string, IPokemonCollectionItem>;
}
interface IPokemonCollectionItem {
    id: string;
    selectedEmotion: Emotion | null;
    selectedShiny: boolean;
    dust: number;
    played: number;
}
export interface IUserMetadataMongo extends IUserMetadata {
    pokemonCollection: Map<string, IPokemonCollectionItemMongo>;
}
export interface IPokemonCollectionItemMongo extends IPokemonCollectionItem {
    unlocked: Uint8Array;
}
export type IPokemonCollectionItemLean = Omit<IPokemonCollectionItemMongo, "unlocked"> & {
    unlocked: Uint8Array | {
        buffer: ArrayBuffer;
    } | undefined;
};
export type IUserMetadataLean = Omit<IUserMetadataMongo, "pokemonCollection"> & {
    pokemonCollection: Record<string, IPokemonCollectionItemLean>;
};
export interface IUserMetadataClient extends IUserMetadata {
    pokemonCollection: Map<string, IPokemonCollectionItemClient>;
}
export interface IPokemonCollectionItemClient extends IPokemonCollectionItem {
    unlockedb64: string;
}
export type IPokemonCollectionItemUnpacked = Omit<IPokemonCollectionItem, "unlockedb64"> & {
    emotions: Emotion[];
    shinyEmotions: Emotion[];
};
export interface IUserMetadataUnpacked extends IUserMetadata {
    pokemonCollection: Map<string, IPokemonCollectionItemUnpacked>;
}
export type IUserMetadataJSON = Omit<IUserMetadataClient, "pokemonCollection"> & {
    pokemonCollection: {
        [index: string]: IPokemonCollectionItemClient;
    };
};
export {};
