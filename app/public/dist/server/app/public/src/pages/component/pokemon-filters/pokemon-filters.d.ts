import { IPreferencesState } from "../../../preferences";
import "./pokemon-filters.css";
import { Pkm } from "../../../../../types/enum/Pokemon";
export declare function PokemonFilters(): import("react/jsx-runtime").JSX.Element;
export declare function filterPokemonsAccordingToPreferences(pokemons: Pkm[], preferences: IPreferencesState, includesNonPkm?: boolean): Pkm[];
