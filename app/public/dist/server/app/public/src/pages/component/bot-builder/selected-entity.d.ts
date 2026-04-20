import { PkmWithCustom } from "../../../../../types";
import { Item } from "../../../../../types/enum/Item";
export default function SelectedEntity(props: {
    entity: Item | PkmWithCustom;
    onChange: (pkm: PkmWithCustom) => void;
}): import("react/jsx-runtime").JSX.Element | null;
