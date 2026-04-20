import { Stat } from "../../types/enum/Game";
import { Item, ItemsSoldAtTown } from "../../types/enum/Item";
export declare const ItemStats: {
    [item in Item]?: {
        [stat in Stat]?: number;
    };
};
export declare const ItemSellPricesAtTown: {
    [item in ItemsSoldAtTown]?: number;
};
