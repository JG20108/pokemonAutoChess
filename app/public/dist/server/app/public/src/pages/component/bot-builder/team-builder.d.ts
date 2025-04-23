import { IBot, IDetailledPokemon } from "../../../../../models/mongo-models/bot-v2";
import { PkmWithCustom } from "../../../../../types";
import "./team-builder.css";
export default function TeamBuilder(props: {
    bot?: IBot;
    onChangeAvatar?: (pkm: PkmWithCustom) => void;
    board: IDetailledPokemon[];
    updateBoard: (board: IDetailledPokemon[]) => void;
    error?: string;
}): import("react/jsx-runtime").JSX.Element;
