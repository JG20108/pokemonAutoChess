import { Dispatch, SetStateAction } from "react";
import { IPokemonCollectionItem } from "../../../../../models/mongo-models/user-metadata";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./pokemon-collection-item.css";
export default function PokemonCollectionItem(props: {
    name: Pkm;
    index: string;
    config: IPokemonCollectionItem | undefined;
    filter: string;
    shinyOnly: boolean;
    refundableOnly: boolean;
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
}): import("react/jsx-runtime").JSX.Element | null;
