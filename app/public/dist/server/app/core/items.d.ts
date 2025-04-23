import { SetSchema } from "@colyseus/schema";
import { Item } from "../types/enum/Item";
import { Effect, PeriodicEffect } from "./effect";
import { Stat } from "../types/enum/Game";
export declare function getWonderboxItems(existingItems: SetSchema<Item>): Item[];
export declare const ItemStats: {
    [item in Item]?: {
        [stat in Stat]?: number;
    };
};
export declare const ItemEffects: {
    [i in Item]?: Effect[];
};
export declare class SoulDewEffect extends PeriodicEffect {
    constructor();
}
