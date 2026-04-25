import { Emotion } from "../types";
import type { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export type CollectionMutationResult = {
    userDoc: IUserMetadataMongo;
};
export declare function changeSelectedEmotionForUser(uid: string, index: string, emotion: Emotion | null, shiny: boolean): Promise<CollectionMutationResult | null>;
export declare function buyEmotionForUser(uid: string, index: string, emotion: Emotion, shiny: boolean): Promise<CollectionMutationResult | null>;
