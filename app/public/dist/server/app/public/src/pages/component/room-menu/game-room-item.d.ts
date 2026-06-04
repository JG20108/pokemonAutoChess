import type { RoomAvailable } from "@colyseus/sdk";
import { type IGameMetadata } from "../../../../../types";
import "./room-item.css";
export default function GameRoomItem(props: {
    room: RoomAvailable<IGameMetadata>;
    click: (action: string) => void;
}): import("react/jsx-runtime").JSX.Element;
