import { type Dispatch, type SetStateAction } from "react";
import type { IMetaV2 } from "../../../models/meta-v2";
import "./meta-chart.css";
export declare function MetaChart(props: {
    meta: IMetaV2[];
    setSelectedComposition: Dispatch<SetStateAction<string | undefined>>;
    setHoveredCluster: Dispatch<SetStateAction<IMetaV2 | undefined>>;
    selectedCluster?: string;
}): import("react/jsx-runtime").JSX.Element;
