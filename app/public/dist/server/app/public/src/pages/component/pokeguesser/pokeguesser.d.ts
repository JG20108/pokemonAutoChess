import { type Dispatch, type SetStateAction } from "react";
import type { Pokemon } from "../../../../../models/colyseus-models/pokemon";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./pokeguesser.css";
export default function Pokeguesser(props: {
    show: boolean;
    handleClose: Dispatch<SetStateAction<void>>;
}): import("react/jsx-runtime").JSX.Element;
type PokemonSelectProps = {
    value: Pkm | "";
    setValue: (v: Pkm | "") => void;
    onSubmit?: (p: Pkm) => void;
};
export declare function PokemonSelect({ value, setValue, onSubmit }: PokemonSelectProps): import("react/jsx-runtime").JSX.Element;
export declare function PokemonAttempt({ pokemon, solution, index, difficulty }: {
    pokemon: Pokemon;
    solution: Pokemon;
    index: number;
    difficulty: "easy" | "normal" | "hard";
}): import("react/jsx-runtime").JSX.Element;
export {};
