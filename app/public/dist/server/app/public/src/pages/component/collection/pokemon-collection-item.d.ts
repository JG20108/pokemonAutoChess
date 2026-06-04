import type { Dispatch, SetStateAction } from "react";
import type { Pkm } from "../../../../../types/enum/Pokemon";
import type { IPokemonCollectionItemUnpacked } from "../../../../../types/interfaces/UserMetadata";
import type { CollectionFilterState } from "./pokemon-collection";
import "./pokemon-collection-item.css";
export default function PokemonCollectionItem(props: {
    name: Pkm;
    index: string;
    item: IPokemonCollectionItemUnpacked | undefined;
    isNew: boolean;
    isFavorite: boolean;
    isUnlocked: boolean;
    isUnlockable: boolean;
    filterState: CollectionFilterState;
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
}): import("react/jsx-runtime").JSX.Element | null;
