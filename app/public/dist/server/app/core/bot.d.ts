import type Player from "../models/colyseus-models/player";
import type { IBot } from "../types/models/bot-v2";
export default class Bot {
    player: Player;
    step: number;
    progress: number;
    scenario: IBot | undefined;
    constructor(player: Player);
    initialize(): Promise<void>;
    updateProgress(): void;
    updatePlayerTeam(): void;
    updateFlowerPots(): void;
}
