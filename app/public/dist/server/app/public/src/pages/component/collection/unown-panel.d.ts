import { Dispatch, SetStateAction } from "react";
import { Pkm } from "../../../../../types/enum/Pokemon";
import { CollectionFilterState } from "./pokemon-collection";
import "./unown-panel.css";
export default function UnownPanel(props: {
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
    filterState: CollectionFilterState;
}): import("react/jsx-runtime").JSX.Element;
