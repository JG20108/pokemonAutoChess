import { IGameRecord } from "../../../../../models/colyseus-models/game-record";
import "./game-history.css";
export default function GameHistory(props: {
    uid: string;
    onUpdate?: (history: IGameRecord[]) => void;
}): import("react/jsx-runtime").JSX.Element;
