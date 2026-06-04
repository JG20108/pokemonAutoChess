import { Schema } from "@colyseus/schema";
import type { Pkm } from "../../types/enum/Pokemon";
import type { WandererBehavior, WandererType } from "../../types/enum/Wanderer";
export declare class Wanderer extends Schema {
    id: string;
    pkm: Pkm;
    shiny: boolean;
    type: WandererType;
    behavior: WandererBehavior;
    data: string;
    constructor({ id, pkm, shiny, type, behavior, data }: {
        id: string;
        pkm: Pkm;
        shiny: boolean;
        type: WandererType;
        behavior: WandererBehavior;
        data?: string;
    });
}
