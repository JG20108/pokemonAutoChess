import type { EloRank } from "../../../../../types/enum/EloRank";
import { Rarity } from "../../../../../types/enum/Game";
import { type Pkm } from "../../../../../types/enum/Pokemon";
import type { Synergy } from "../../../../../types/enum/Synergy";
import type { IPokemonsStatisticV2 } from "../../../models/pokemons-statistic-v2";
import "./pokemon-history-panel.css";
import type { PoolType } from "../../../../../types/enum/PoolType";
interface PokemonHistoryPanelProps {
    metaPokemons: IPokemonsStatisticV2[];
    eloThreshold: EloRank;
    loading: boolean;
    metric: "count" | "rank";
    synergy?: Synergy | "all";
    rarity?: Rarity | "all";
    pool?: PoolType | "all";
    tier?: string;
    selectedPkm?: Pkm | "";
}
export declare function PokemonHistoryPanel({ metaPokemons, eloThreshold, loading, metric, synergy, rarity, pool, tier, selectedPkm }: PokemonHistoryPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
