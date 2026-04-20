import { MapSchema, SetSchema } from "@colyseus/schema";
import { Pokemon } from "../models/colyseus-models/pokemon";
import { EffectEnum } from "../types/enum/Effect";
import { Synergy } from "../types/enum/Synergy";
import Synergies from "./colyseus-models/synergies";
export declare class Effects extends SetSchema<EffectEnum> {
    update(synergies: Synergies, board: MapSchema<Pokemon>): void;
}
export declare const SynergyEffects: {
    [key in Synergy]: readonly EffectEnum[];
};
