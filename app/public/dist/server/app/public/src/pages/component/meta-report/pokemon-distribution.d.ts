import type { EloRank } from "../../../../../types/enum/EloRank";
import { Rarity } from "../../../../../types/enum/Game";
import { type Pkm } from "../../../../../types/enum/Pokemon";
import type { Synergy } from "../../../../../types/enum/Synergy";
import type { IPokemonsStatisticV2 } from "../../../models/pokemons-statistic-v2";
import "./pokemon-distribution.css";
import type { PoolType } from "../../../../../types/enum/PoolType";
interface PokemonDistributionProps {
    metaPokemons: IPokemonsStatisticV2[];
    eloThreshold: EloRank;
    loading: boolean;
    synergy?: Synergy | "all";
    rarity?: Rarity | "all";
    pool?: PoolType | "all";
    tier?: string;
    selectedPkm?: Pkm | "";
}
export declare function PokemonDistribution({ metaPokemons, eloThreshold, loading, synergy, rarity, pool, tier, selectedPkm }: PokemonDistributionProps): import("react/jsx-runtime").JSX.Element;
export {};
