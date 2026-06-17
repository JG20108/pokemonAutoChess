import { Emotion, type PkmWithCustom } from "../types";
import type { IPokemonCollectionItemClient, IPokemonCollectionItemMongo, IPokemonCollectionItemUnpacked } from "../types/interfaces/UserMetadata";
export declare class CollectionUtils {
    private static readonly EMOTION_VALUES;
    private static hasNodeBuffer;
    private static allocMask;
    static hasUnlockedCustom(collection: Map<string, IPokemonCollectionItemMongo>, card: PkmWithCustom): boolean;
    static toMongoCollectionItem(item: IPokemonCollectionItemClient): IPokemonCollectionItemMongo;
    static toCollectionItemClient(item: IPokemonCollectionItemMongo): IPokemonCollectionItemClient;
    static unpackCollectionItem(item: IPokemonCollectionItemClient): IPokemonCollectionItemUnpacked;
    static getEmotionMask(emotions?: Emotion[], shinyEmotions?: Emotion[]): Uint8Array;
    static encodeBase64(buffer: Uint8Array): string;
    static decodeBase64(base64: string): Uint8Array;
    static getEmotionsUnlocked(item?: IPokemonCollectionItemMongo | IPokemonCollectionItemClient): {
        emotions: Emotion[];
        shinyEmotions: Emotion[];
    };
    static hasUnlocked(mask: Uint8Array, emotion: Emotion, shiny?: boolean): boolean;
    static unlockEmotion(mask: Uint8Array, emotion: Emotion, shiny?: boolean): void;
    private static setBit;
    private static getBit;
}
