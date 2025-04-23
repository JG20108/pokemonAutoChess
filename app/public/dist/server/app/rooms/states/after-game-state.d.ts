import { MapSchema, Schema } from "@colyseus/schema";
import AfterGamePlayer from "../../models/colyseus-models/after-game-player";
import { GameMode } from "../../types/enum/Game";
export default class AfterGameState extends Schema {
    players: MapSchema<AfterGamePlayer, string>;
    elligibleToELO: boolean;
    elligibleToXP: boolean;
    gameMode: GameMode;
    constructor({ elligibleToELO, elligibleToXP, gameMode }: {
        elligibleToELO: boolean;
        elligibleToXP: boolean;
        gameMode: GameMode;
    });
}
