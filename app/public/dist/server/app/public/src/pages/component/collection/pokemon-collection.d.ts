import { type Dispatch, type SetStateAction } from "react";
import { Pkm } from "../../../../../types/enum/Pokemon";
import { Synergy } from "../../../../../types/enum/Synergy";
import "./pokemon-collection.css";
export type CollectionFilterState = {
    mode: "collection" | "shiny" | "pokedex";
    filter: "all" | "unlockable" | "locked" | "unlocked" | "refundable" | "new" | "favorite";
    sort: "index" | "shards" | "played" | "unlocked";
};
export default function PokemonCollection(): import("react/jsx-runtime").JSX.Element;
export declare function PokemonCollectionList(props: {
    type: Synergy | "all";
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
    filterState: CollectionFilterState;
}): import("react/jsx-runtime").JSX.Element;
