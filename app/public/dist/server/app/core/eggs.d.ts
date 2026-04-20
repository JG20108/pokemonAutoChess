import Player from "../models/colyseus-models/player";
import { Egg } from "../models/colyseus-models/pokemon";
export declare function createRandomEgg(player: Player, shiny: boolean): Egg;
export declare function giveRandomEgg(player: Player, shiny?: boolean): Egg | undefined;
