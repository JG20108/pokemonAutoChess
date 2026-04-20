import Player from "../models/colyseus-models/player";
import { Pkm } from "../types/enum/Pokemon";
export declare const FLOWER_POTS_POSITIONS_BLUE: number[][];
export declare const FLOWER_POTS_POSITIONS_RED: number[][];
export declare enum FlowerPot {
    PINK = "PINK",
    YELLOW = "YELLOW",
    WHITE = "WHITE",
    BLUE = "BLUE",
    ORANGE = "ORANGE"
}
export declare const FlowerPots: readonly [FlowerPot.PINK, FlowerPot.YELLOW, FlowerPot.WHITE, FlowerPot.BLUE, FlowerPot.ORANGE];
export declare const FlowerMonByPot: Record<FlowerPot, Pkm[]>;
export declare function getFlowerPotsUnlocked(player: Player): FlowerPot[];
export declare function getFlowerMonByPot(pot: FlowerPot): Pkm[];
export declare const FlowerPotMons: Pkm[];
export declare const MulchStockCaps: number[];
