import { TownEncounter } from "../../types/enum/TownEncounter";
export declare const TownEncounterSellPrice: {
    [encounter in TownEncounter]?: number;
};
export declare const TownEncountersByStage: {
    [stageLevel: number]: {
        [encounter in TownEncounter]?: number;
    };
};
export declare const OUTLAW_GOLD_REWARD = 10;
export declare const TREASURE_BOX_LIFE_THRESHOLD = 40;
export type TreasureBoxReward = "gold" | "mushrooms" | "sweets" | "componentsAndTickets" | "itemComponents" | "craftableItems" | "goldBow";
export declare function getTreasureBoxReward(): TreasureBoxReward;
