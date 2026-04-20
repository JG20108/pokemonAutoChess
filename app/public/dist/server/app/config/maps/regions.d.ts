import { DungeonMusic, DungeonPMDO } from "../../types/enum/Dungeon";
import { Dish } from "../../types/enum/Item";
import { Synergy } from "../../types/enum/Synergy";
export interface RegionDetail {
    synergies: Synergy[];
    music: DungeonMusic;
    regionalSpeciality: Dish;
    tint?: number;
}
export declare const RegionDetails: {
    [key in DungeonPMDO | "town"]: RegionDetail;
};
export declare function getRegionTint(region: DungeonPMDO | "town", colorblindMode?: boolean): number;
export declare function countRegionsBySynergy(): Record<Synergy, number>;
