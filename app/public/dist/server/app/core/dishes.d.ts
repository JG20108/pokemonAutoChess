import { Dishes, Item } from "../types/enum/Item";
import { Pkm } from "../types/enum/Pokemon";
import { Effect } from "./effect";
export declare const DishByPkm: {
    [pkm in Pkm]?: Item;
};
export declare const DishEffects: Record<(typeof Dishes)[number], Effect[]>;
