import { type IPreferencesState } from "../../../preferences";
import "./pokemon-filters.css";
import { type Pkm } from "../../../../../types/enum/Pokemon";
export declare function PokemonFilters(): import("react/jsx-runtime").JSX.Element;
export declare function filterPokemonsAccordingToPreferences(pokemons: Pkm[], preferences: IPreferencesState, includesNonPkm?: boolean): Pkm[];
