import { MapSchema } from "@colyseus/schema";
import type { IPlayer, IPokemon } from "../../types";
import { SpecialGameRule } from "../../types/enum/SpecialGameRule";
import { Synergy } from "../../types/enum/Synergy";
export default class Synergies extends MapSchema<number, Synergy> {
    constructor(synergies?: Map<Synergy, number>);
    hasSynergyActive(type: Synergy): boolean;
    hasSynergyTriggerOrMore(type: Synergy, level: number): boolean;
    countActiveSynergies(): number;
    getTopSynergies(amount?: number): Synergy[];
    toMap(): Map<Synergy, number>;
}
export declare function computeSynergies(board: IPokemon[], bonusSynergies?: Map<Synergy, number>, specialGameRule?: SpecialGameRule | null): Map<Synergy, number>;
export declare function addSynergiesGivenByItems(pkm: IPokemon): void;
export declare function getSynergyStep(synergies: Map<Synergy, number> | MapSchema<number, Synergy>, type: Synergy): number;
export declare function getWildChance(player: IPlayer, stageLevel: number): number;
