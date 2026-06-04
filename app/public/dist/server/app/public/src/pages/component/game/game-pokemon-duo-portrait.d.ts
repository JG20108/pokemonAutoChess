import React from "react";
import { type PkmDuo } from "../../../../../types/enum/Pokemon";
import "./game-pokemon-portrait.css";
export default function GamePokemonDuoPortrait(props: {
    index: number;
    origin: "proposition";
    duo: PkmDuo;
    click?: React.MouseEventHandler<HTMLDivElement>;
    inPlanner?: boolean;
}): import("react/jsx-runtime").JSX.Element;
