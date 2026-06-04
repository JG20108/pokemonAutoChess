import { DungeonPMDO } from "../../types/enum/Dungeon";
import type { GameMode } from "../../types/enum/Game";
import type { Synergy } from "../../types/enum/Synergy";
export interface Pokemon {
    name: string;
    avatar: string;
    items: string[];
}
export interface IDetailledStatistic {
    playerId: string;
    elo: number;
    time: number;
    name: string;
    rank: number;
    nbplayers: number;
    avatar: string;
    pokemons: Pokemon[];
    synergies: Map<Synergy, number>;
    regions: DungeonPMDO[];
    gameMode: GameMode;
}
declare const _default: import("mongoose").Model<IDetailledStatistic, {}, {}, {}, import("mongoose").Document<unknown, {}, IDetailledStatistic, {}, import("mongoose").DefaultSchemaOptions> & IDetailledStatistic & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IDetailledStatistic>;
export default _default;
