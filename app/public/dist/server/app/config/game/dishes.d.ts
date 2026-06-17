import { Item } from "../../types/enum/Item";
import { Pkm } from "../../types/enum/Pokemon";
export declare const DishByPkm: {
    [pkm in Pkm]?: Item | null;
};
