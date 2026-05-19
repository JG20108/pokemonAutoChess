import { GameMode } from "../../../../../types/enum/Game";
import "./room-selection-menu.css";
export declare function RoomSelectionMenu(props: {
    show: boolean;
    onClose: () => void;
    onSelectMode: (mode: GameMode) => void;
}): import("react/jsx-runtime").JSX.Element;
