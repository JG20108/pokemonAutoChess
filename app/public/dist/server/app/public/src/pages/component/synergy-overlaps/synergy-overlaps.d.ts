import { Synergy } from "../../../../../types/enum/Synergy";
import { IPokemonData } from "../../../../../types/interfaces/PokemonData";
import "./synergy-overlaps.css";
export declare function SynergyOverlaps(props: {
    type: Synergy;
    pokemons: IPokemonData[];
    overlap: Synergy | null;
    setOverlap: (type: Synergy | null) => void;
}): import("react/jsx-runtime").JSX.Element;
