import { Emotion } from "../types";
import { Item } from "../types/enum/Item";
import { Pkm } from "../types/enum/Pokemon";
import Player from "./colyseus-models/player";
export type PVEStage = {
    name: string;
    avatar: Pkm;
    emotion?: Emotion;
    shinyChance?: number;
    getRewards?: (player: Player) => Item[];
    getRewardsPropositions?: (player: Player) => Item[];
    board: [pkm: Pkm, x: number, y: number][];
    marowakItems?: Item[][];
};
export declare const PVEStages: {
    [turn: number]: PVEStage;
};
