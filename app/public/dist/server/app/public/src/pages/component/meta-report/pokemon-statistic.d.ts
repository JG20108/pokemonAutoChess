import { Rarity } from "../../../../../types/enum/Game";
import { Synergy } from "../../../../../types/enum/Synergy";
import { IPokemonStatV2 } from "../../../models/pokemons-statistic-v2";
import "./pokemon-statistic.css";
export default function PokemonStatistic(props: {
    pokemons: IPokemonStatV2[];
    rankingBy: string;
    synergy: Synergy | "all";
    rarity: Rarity | "all";
    pool: string;
    tier: string;
    selectedPkm: string;
}): import("react/jsx-runtime").JSX.Element;
