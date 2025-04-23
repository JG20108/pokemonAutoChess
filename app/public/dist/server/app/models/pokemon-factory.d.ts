import { MapSchema } from "@colyseus/schema";
import { PkmCustom } from "../types";
import { Pkm } from "../types/enum/Pokemon";
import { Pokemon } from "./colyseus-models/pokemon";
import { PVEStage } from "./pve-stages";
import { TownEncounter } from "../core/town-encounters";
import Player from "./colyseus-models/player";
export default class PokemonFactory {
    static makePveBoard(pveStage: PVEStage, shinyEncounter: boolean, townEncounter: TownEncounter | null): MapSchema<Pokemon>;
    static getPokemonBaseEvolution(name: Pkm): Pkm;
    static createPokemonFromName(name: Pkm, custom?: PkmCustom | Player): Pokemon;
}
