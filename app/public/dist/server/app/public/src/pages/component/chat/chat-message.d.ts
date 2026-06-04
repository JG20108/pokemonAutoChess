import { type IChatV2 } from "../../../../../types";
import { type ChatRoom } from "../../../network";
export default function ChatMessage(props: {
    message: IChatV2;
    source: ChatRoom;
}): import("react/jsx-runtime").JSX.Element;
