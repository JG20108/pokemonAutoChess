import type { IBot } from "../../../models/bot-v2";
import "./bot-builder.css";
export default function BotBuilder(): import("react/jsx-runtime").JSX.Element;
export declare function SubmitBotModal(props: {
    bot: IBot;
    hideModal: () => void;
    visible: boolean;
}): import("react/jsx-runtime").JSX.Element;
