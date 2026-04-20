import Player from "../models/colyseus-models/player";
import { Pokemon } from "../models/colyseus-models/pokemon";
import GameState from "../rooms/states/game-state";
import { Pkm } from "../types/enum/Pokemon";
export declare function spawnDIAYAvatar(player: Player): Pokemon;
export declare function pickFirstPartners(player: Player, state: GameState): Pkm[];
