import { Synergy } from "../../../../../types/enum/Synergy";
import { IMetaV2 } from "../../../models/meta-v2";
import "./team-comp.css";
export declare function rankType(a: Synergy, b: Synergy, synergies: {
    [key in Synergy]?: number;
}): number;
export default function TeamComp(props: {
    team: IMetaV2;
    rank: number;
}): import("react/jsx-runtime").JSX.Element;
