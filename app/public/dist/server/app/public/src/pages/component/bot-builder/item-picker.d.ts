import type React from "react";
import type { PkmWithCustom } from "../../../../../types";
import { Item } from "../../../../../types/enum/Item";
export default function ItemPicker(props: {
    selected?: PkmWithCustom | Item;
    selectEntity?: React.Dispatch<React.SetStateAction<PkmWithCustom | Item>>;
}): import("react/jsx-runtime").JSX.Element;
