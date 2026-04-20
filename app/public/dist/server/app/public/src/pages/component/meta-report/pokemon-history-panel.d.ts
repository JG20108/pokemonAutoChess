import { EloRank } from "../../../../../types/enum/EloRank";
import { Rarity } from "../../../../../types/enum/Game";
import { Pkm } from "../../../../../types/enum/Pokemon";
import { Synergy } from "../../../../../types/enum/Synergy";
import { IPokemonsStatisticV2 } from "../../../models/pokemons-statistic-v2";
import "./pokemon-history-panel.css";
interface PokemonHistoryPanelProps {
    metaPokemons: IPokemonsStatisticV2[];
    eloThreshold: EloRank;
    loading: boolean;
    metric: "count" | "rank";
    synergy?: Synergy | "all";
    rarity?: Rarity | "all";
    pool?: string;
    tier?: string;
    selectedPkm?: Pkm | "";
}
export declare function PokemonHistoryPanel({ metaPokemons, eloThreshold, loading, metric, synergy, rarity, pool, tier, selectedPkm }: PokemonHistoryPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
