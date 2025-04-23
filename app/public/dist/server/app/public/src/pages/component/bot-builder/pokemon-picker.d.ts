import React from "react";
import { PkmWithCustom } from "../../../../../types";
import { Item } from "../../../../../types/enum/Item";
export default function PokemonPicker(props: {
    selected: PkmWithCustom | Item;
    selectEntity: React.Dispatch<React.SetStateAction<PkmWithCustom>>;
    addEntity: (e: PkmWithCustom) => void;
}): import("react/jsx-runtime").JSX.Element;
