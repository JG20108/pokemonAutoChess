import { Emotion } from "../types";
import { Stat } from "../types/enum/Game";
import { Item } from "../types/enum/Item";
import { Pkm } from "../types/enum/Pokemon";
import Player from "./colyseus-models/player";
export type PVEStage = {
    name: string;
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
