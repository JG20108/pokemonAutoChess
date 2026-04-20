import { EloRank } from "../../../../../types/enum/EloRank";
import { Item } from "../../../../../types/enum/Item";
import { IItemsStatisticV2 } from "../../../models/items-statistic-v2";
import "./item-history-panel.css";
interface ItemHistoryPanelProps {
    metaItems: IItemsStatisticV2[];
    eloThreshold: EloRank;
    loading: boolean;
    metric: "count" | "rank";
    itemFilter?: readonly Item[];
}
export declare function ItemHistoryPanel({ metaItems, eloThreshold, loading, metric, itemFilter }: ItemHistoryPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
