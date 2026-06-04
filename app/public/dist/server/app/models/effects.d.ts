import { type MapSchema, SetSchema } from "@colyseus/schema";
import type { Pokemon } from "../models/colyseus-models/pokemon";
import { EffectEnum } from "../types/enum/Effect";
import type Synergies from "./colyseus-models/synergies";
export declare class Effects extends SetSchema<EffectEnum> {
    update(synergies: Synergies, board: MapSchema<Pokemon>): void;
}
