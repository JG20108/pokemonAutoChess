import "./item-distribution.css";
import type { EloRank } from "../../../../../types/enum/EloRank";
import type { Item } from "../../../../../types/enum/Item";
import type { IItemsStatisticV2 } from "../../../models/items-statistic-v2";
interface ItemDistributionProps {
    metaItems: IItemsStatisticV2[];
    eloThreshold: EloRank;
    loading: boolean;
    itemFilter?: readonly Item[];
}
export declare function ItemDistribution({ metaItems, eloThreshold, loading, itemFilter }: ItemDistributionProps): import("react/jsx-runtime").JSX.Element;
export {};
