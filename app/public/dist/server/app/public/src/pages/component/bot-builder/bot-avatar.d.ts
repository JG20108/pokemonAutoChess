import { IBot } from "../../../../../models/mongo-models/bot-v2";
import { PkmWithCustom } from "../../../../../types";
export default function BotAvatar(props: {
    bot: IBot;
    onChangeAvatar: (pkm: PkmWithCustom) => void;
    onClick: () => void;
}): import("react/jsx-runtime").JSX.Element;
