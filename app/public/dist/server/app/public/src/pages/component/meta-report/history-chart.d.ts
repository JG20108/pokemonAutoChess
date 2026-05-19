import { IHistoryEntry } from "../../../models/pokemons-statistic-v2";
import "./history-chart.css";
export declare function HistoryChart(props: {
    entries: IHistoryEntry[];
    label?: "count" | "average_place";
    color?: string;
    invertY?: boolean;
    portraitSrc?: string;
}): import("react/jsx-runtime").JSX.Element | null;
