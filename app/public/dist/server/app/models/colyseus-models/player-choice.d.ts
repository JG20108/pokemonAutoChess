import { Schema } from "@colyseus/schema";
import { Item } from "../../types/enum/Item";
import { PkmProposition } from "../../types/enum/Pokemon";
import { Synergy } from "../../types/enum/Synergy";
export type PlayerChoiceType = "item" | "addPick" | "starter" | "unique" | "legendary" | "mission_order" | "wand" | "synergy";
export declare class PlayerChoice extends Schema {
    id: string;
    type: PlayerChoiceType;
    items: Item[];
    pokemons: PkmProposition[];
    synergies: Synergy[];
    constructor(args: {
        type: PlayerChoiceType;
        items?: Item[];
        pokemons?: PkmProposition[];
        synergies?: Synergy[];
    });
}
