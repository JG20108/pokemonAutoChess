import type Phaser from "phaser";
import { GameObjects } from "phaser";
import type { ISynergySymbol } from "../../../../types";
import type { Synergy } from "../../../../types/enum/Synergy";
export declare class Portal extends GameObjects.Container {
    sprite: GameObjects.Sprite;
    id: string;
    constructor(scene: Phaser.Scene, id: string, x: number, y: number);
}
export declare class SynergySymbol extends GameObjects.Sprite implements ISynergySymbol {
    id: string;
    synergy: Synergy;
    portalId: string;
    constructor(scene: Phaser.Scene, id: string, x: number, y: number, synergy: Synergy, portalId: string);
}
