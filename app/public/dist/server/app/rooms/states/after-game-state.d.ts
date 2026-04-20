import { MapSchema, Schema } from "@colyseus/schema";
import AfterGamePlayer from "../../models/colyseus-models/after-game-player";
import { GameMode } from "../../types/enum/Game";
export default class AfterGameState extends Schema {
    players: MapSchema<AfterGamePlayer, string>;
    eligibleToELO: boolean;
    eligibleToXP: boolean;
    gameMode: GameMode;
    constructor({ eligibleToELO, eligibleToXP, gameMode }: {
        eligibleToELO: boolean;
        eligibleToXP: boolean;
        gameMode: GameMode;
    });
}
