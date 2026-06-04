import React from "react";
import { type PkmWithCustom } from "../../../../../types";
import type { Item } from "../../../../../types/enum/Item";
export default function PokemonPicker(props: {
    selected?: PkmWithCustom | Item;
    selectEntity?: React.Dispatch<React.SetStateAction<PkmWithCustom>>;
    addEntity?: (e: PkmWithCustom) => void;
}): import("react/jsx-runtime").JSX.Element;
