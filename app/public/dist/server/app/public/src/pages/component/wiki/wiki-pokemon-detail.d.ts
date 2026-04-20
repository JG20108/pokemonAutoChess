import { Pkm } from "../../../../../types/enum/Pokemon";
import "./wiki-pokemon-detail.css";
export default function WikiPokemonDetail(props: {
    pokemon: Pkm;
    selectPkm: (pkm: Pkm) => void;
}): import("react/jsx-runtime").JSX.Element;
