import { MapSchema } from "@colyseus/schema";
import { PkmCustom } from "../types";
import { Pkm } from "../types/enum/Pokemon";
import { TownEncounter } from "../types/enum/TownEncounter";
import Player from "./colyseus-models/player";
import { Pokemon } from "./colyseus-models/pokemon";
import { PVEStage } from "./pve-stages";
export default class PokemonFactory {
    static makePveBoard(pveStage: PVEStage, shinyEncounter: boolean, townEncounter: TownEncounter | null): MapSchema<Pokemon>;
    static createPokemonFromName(name: Pkm, custom?: PkmCustom | Player): Pokemon;
}
export declare function getPokemonBaseline(name: Pkm): Pkm;
export declare function isSameFamily(pkm1: Pkm, pkm2: Pkm): boolean;
