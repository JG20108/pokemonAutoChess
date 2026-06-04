import { type PkmWithCustom } from "../types";
import type { Booster } from "../types/Booster";
import type { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
export type OpenBoosterResult = {
    userDoc: IUserMetadataMongo;
    boosterContent: Booster;
};
export type BuyBoosterResult = {
    userDoc: IUserMetadataMongo;
};
export declare function buyBoosterForUser(uid: string, index: string): Promise<BuyBoosterResult | null>;
export declare function openBoosterForUser(uid: string): Promise<OpenBoosterResult | null>;
export declare function checkTitlesAfterEmotionUnlocked(mongoUser: IUserMetadataMongo, unlocked: PkmWithCustom[]): void;
