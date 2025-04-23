import { IItemsStatistic } from "../models/mongo-models/items-statistic";
import { IPokemonsStatisticV2 } from "../models/mongo-models/pokemons-statistic-v2";
export declare function fetchMetaReports(): Promise<[IItemsStatistic[], IPokemonsStatisticV2[]]>;
export declare function fetchMetaItems(): Promise<IItemsStatistic[]>;
export declare function fetchMetaPokemons(): Promise<IPokemonsStatisticV2[]>;
export declare function getMetaPokemons(): IPokemonsStatisticV2[];
export declare function getMetaItems(): IItemsStatistic[];
