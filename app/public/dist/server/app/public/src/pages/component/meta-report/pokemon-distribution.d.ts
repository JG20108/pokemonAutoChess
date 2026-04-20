import { EloRank } from "../../../../../types/enum/EloRank";
import { Rarity } from "../../../../../types/enum/Game";
import { Pkm } from "../../../../../types/enum/Pokemon";
import { Synergy } from "../../../../../types/enum/Synergy";
import { IPokemonsStatisticV2 } from "../../../models/pokemons-statistic-v2";
import "./pokemon-distribution.css";
interface PokemonDistributionProps {
    metaPokemons: IPokemonsStatisticV2[];
    eloThreshold: EloRank;
    loading: boolean;
    synergy?: Synergy | "all";
    rarity?: Rarity | "all";
    pool?: string;
    tier?: string;
    selectedPkm?: Pkm | "";
}
export declare function PokemonDistribution({ metaPokemons, eloThreshold, loading, synergy, rarity, pool, tier, selectedPkm }: PokemonDistributionProps): import("react/jsx-runtime").JSX.Element;
export {};
