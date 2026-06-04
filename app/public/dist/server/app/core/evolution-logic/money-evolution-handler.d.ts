import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import type { MoneyEvolutionRule } from "../../types/EvolutionRules";
import { EvolutionHandler } from "./evolution-handler";
export declare class MoneyEvolutionHandler extends EvolutionHandler<[number]> {
    moneyRequired: number;
    constructor(evolutionRule: MoneyEvolutionRule);
    canEvolve(pokemon: Pokemon, player: Player, money: number): boolean;
    evolve(pokemon: Pokemon, player: Player, money: number): Pokemon;
}
