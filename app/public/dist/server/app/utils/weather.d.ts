import type { MapSchema } from "@colyseus/schema";
import type Player from "../models/colyseus-models/player";
import type { Pokemon } from "../models/colyseus-models/pokemon";
import { Weather } from "../types/enum/Weather";
export declare function getWeather(bluePlayer: Player, redPlayer: Player | null, redPlayerBoard: MapSchema<Pokemon, string>, isGhostBattle?: boolean): Weather;
