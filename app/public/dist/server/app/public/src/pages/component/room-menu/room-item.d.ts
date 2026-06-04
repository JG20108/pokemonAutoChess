import type { RoomAvailable } from "@colyseus/sdk";
import { type IPreparationMetadata } from "../../../../../types";
import "./room-item.css";
export default function RoomItem(props: {
    room: RoomAvailable<IPreparationMetadata>;
    click: (action: string) => void;
}): import("react/jsx-runtime").JSX.Element;
