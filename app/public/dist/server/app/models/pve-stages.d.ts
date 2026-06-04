import { Emotion } from "../types";
import { Stat } from "../types/enum/Game";
import { Item } from "../types/enum/Item";
import { Pkm } from "../types/enum/Pokemon";
import type Player from "./colyseus-models/player";
export type PVEStagesNames = `pkm.${Pkm}` | "tower_duo" | "legendary_birds" | "legendary_beasts" | "super_ancients" | "legendary_giants";
export type PVEStage = {
    name: PVEStagesNames;
    avatar: Pkm;
    emotion?: Emotion;
    shinyChance?: number;
    rewards?: Item[];
    getRewards?: (player: Player, shinyEncounter: boolean) => Item[];
    getRewardsPropositions?: (player: Player, shinyEncounter: boolean) => Item[];
    board: [pkm: Pkm, x: number, y: number][];
    marowakItems?: Item[][];
    statBoosts?: {
        [stat in Stat]?: number;
    };
};
export declare const PVEStages: {
    [turn: number]: PVEStage;
};
