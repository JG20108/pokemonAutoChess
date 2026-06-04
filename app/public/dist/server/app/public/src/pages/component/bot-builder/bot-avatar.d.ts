import { type PkmWithCustom } from "../../../../../types";
import type { IBot } from "../../../models/bot-v2";
export default function BotAvatar(props: {
    bot: IBot;
    onChangeAvatar: (pkm: PkmWithCustom) => void;
    onClick: () => void;
}): import("react/jsx-runtime").JSX.Element;
