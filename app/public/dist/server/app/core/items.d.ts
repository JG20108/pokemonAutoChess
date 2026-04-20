import { SetSchema } from "@colyseus/schema";
import { Item } from "../types/enum/Item";
import { Stat } from "../types/enum/Game";
export declare function getWonderboxItems(existingItems: SetSchema<Item>): Item[];
export declare const ItemStats: {
    [item in Item]?: {
        [stat in Stat]?: number;
    };
};
