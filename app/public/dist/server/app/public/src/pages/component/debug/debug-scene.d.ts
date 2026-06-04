import { Orientation } from "../../../../../types/enum/Game";
import { Pkm } from "../../../../../types/enum/Pokemon";
import type { Status } from "../../../../../types/enum/Status";
import "./debug-scene.css";
export default function DebugSceneContainer({ pkm, orientation, animationType, shiny, status, height, width }: {
    pkm?: Pkm;
    orientation?: Orientation;
    animationType?: string;
    shiny: boolean;
    status: Status | "";
    height?: number;
    width?: number;
}): import("react/jsx-runtime").JSX.Element;
