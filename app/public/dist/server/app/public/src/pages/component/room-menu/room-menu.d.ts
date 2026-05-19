import { RoomAvailable } from "@colyseus/sdk";
import { GameMode } from "../../../../../types/enum/Game";
import "./room-menu.css";
export default function RoomMenu(): import("react/jsx-runtime").JSX.Element;
export declare function RoomList({ gameMode, onRoomAction }: {
    gameMode?: GameMode;
    onRoomAction: (room: RoomAvailable, action: string) => void;
}): import("react/jsx-runtime").JSX.Element;
