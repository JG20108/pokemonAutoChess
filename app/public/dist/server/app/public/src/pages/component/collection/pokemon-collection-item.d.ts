import { Dispatch, SetStateAction } from "react";
import { Pkm } from "../../../../../types/enum/Pokemon";
import { IPokemonCollectionItemUnpacked } from "../../../../../types/interfaces/UserMetadata";
import { CollectionFilterState } from "./pokemon-collection";
import "./pokemon-collection-item.css";
export default function PokemonCollectionItem(props: {
    name: Pkm;
    index: string;
    item: IPokemonCollectionItemUnpacked | undefined;
    filterState: CollectionFilterState;
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
}): import("react/jsx-runtime").JSX.Element | null;
