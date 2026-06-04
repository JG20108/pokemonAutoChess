import { type ChatRoom } from "../../../network";
import "./chat.css";
export default function Chat(props: {
    source: ChatRoom;
    canWrite: boolean;
}): import("react/jsx-runtime").JSX.Element;
