import type { ITypeStatistics } from "../../../types/meta";
import type { IPokemonsStatisticV2 } from "../../../types/models/pokemons-statistic-v2";
export type { IHistoryEntry, IPokemonStatV2, IPokemonsStatisticV2 } from "../../../types/models/pokemons-statistic-v2";
export declare function fetchMetaPokemons(): Promise<IPokemonsStatisticV2[]>;
export declare function fetchMetaTypes(): Promise<ITypeStatistics>;
