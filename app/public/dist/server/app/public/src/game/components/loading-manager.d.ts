import { GameObjects } from "phaser";
import type Player from "../../../../models/colyseus-models/player";
export default class LoadingManager {
    scene: Phaser.Scene;
    loadingBar: GameObjects.Container | null;
    statusMessage: string;
    constructor(scene: Phaser.Scene);
    preload(): Promise<void>;
}
export declare function loadEnvironmentMultiAtlas(scene: Phaser.Scene): void;
export declare function preloadPortraits(scene: Phaser.Scene, player: Player): void;
