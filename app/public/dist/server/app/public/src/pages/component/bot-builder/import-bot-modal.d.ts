import { IBot } from "../../../models/bot-v2";
export default function ImportBotModal(props: {
    bot: IBot;
    hideModal: () => void;
    importBot: (text: string) => void;
    visible: boolean;
}): import("react/jsx-runtime").JSX.Element;
