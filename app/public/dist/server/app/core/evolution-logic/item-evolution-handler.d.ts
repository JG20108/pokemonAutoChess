import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import { Item } from "../../types";
import type { ItemEvolutionRule } from "../../types/EvolutionRules";
import { EvolutionHandler } from "./evolution-handler";
export declare class ItemEvolutionHandler extends EvolutionHandler<[Item]> {
    itemsTriggeringEvolution: Item[];
    constructor(evolutionRule: ItemEvolutionRule);
    canEvolve(pokemon: Pokemon, player: Player, itemGiven: Item): boolean;
    evolve(pokemon: Pokemon, player: Player, itemGiven: Item): Pokemon;
}
