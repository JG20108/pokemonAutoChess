import { Rarity } from "../../../../../types/enum/Game";
import type { Synergy } from "../../../../../types/enum/Synergy";
import type { IPokemonStatV2 } from "../../../models/pokemons-statistic-v2";
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
