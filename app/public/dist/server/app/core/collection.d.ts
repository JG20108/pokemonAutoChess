import { HydratedDocument } from "mongoose";
import { Emotion, PkmWithCustom } from "../types";
import { Booster, BoosterCard } from "../types/Booster";
import { IPokemonCollectionItemClient, IPokemonCollectionItemMongo, IPokemonCollectionItemUnpacked, IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export declare function createBooster(user: IUserMetadataMongo): Booster;
export declare function pickRandomPokemonBooster(user: IUserMetadataMongo, guaranteedUnique: boolean, godPack: boolean): BoosterCard;
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
export declare function migrateShardsOfAltForms(mongoUser: HydratedDocument<IUserMetadataMongo>): Promise<(import("mongoose").Document<unknown, {}, IUserMetadataMongo, {}, import("mongoose").DefaultSchemaOptions> & IUserMetadataMongo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | undefined>;
