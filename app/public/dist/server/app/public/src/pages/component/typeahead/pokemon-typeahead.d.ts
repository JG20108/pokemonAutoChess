import { Pkm } from "../../../../../types/enum/Pokemon";
import "./pokemon-typeahead.css";
export declare function PokemonTypeahead({ onChange, value, options }: {
    value: string;
    options?: string[];
    onChange: (value: Pkm | "") => void;
}): import("react/jsx-runtime").JSX.Element;
