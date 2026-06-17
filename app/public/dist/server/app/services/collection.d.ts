import type { HydratedDocument } from "mongoose";
import { Emotion } from "../types";
import type { Booster, BoosterCard } from "../types/Booster";
import type { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export type CollectionMutationResult = {
    userDoc: IUserMetadataMongo;
};
export declare function changeSelectedEmotionForUser(uid: string, index: string, emotion: Emotion | null, shiny: boolean): Promise<CollectionMutationResult | null>;
export declare function buyEmotionForUser(uid: string, index: string, emotion: Emotion, shiny: boolean): Promise<CollectionMutationResult | null>;
export declare function migrateShardsOfAltForms(mongoUser: HydratedDocument<IUserMetadataMongo>): Promise<(import("mongoose").Document<unknown, {}, IUserMetadataMongo, {}, import("mongoose").DefaultSchemaOptions> & IUserMetadataMongo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | undefined>;
export declare function createBooster(user: IUserMetadataMongo): Booster;
export declare function pickRandomPokemonBooster(user: IUserMetadataMongo, guaranteedUnique: boolean, godPack: boolean): BoosterCard;
