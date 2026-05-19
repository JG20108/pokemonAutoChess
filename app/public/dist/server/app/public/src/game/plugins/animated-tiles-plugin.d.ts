import Phaser from "phaser";
export default class AnimatedTilesPlugin extends Phaser.Plugins.ScenePlugin {
    private animatedTiles;
    private rate;
    private active;
    private activeLayer;
    followTimeScale: boolean;
    constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager, pluginKey: string);
    boot(): void;
    init(map: Phaser.Tilemaps.Tilemap): void;
    setRate(rate: number, gid?: number | null, mapIndex?: number | null): void;
    resetRates(mapIndex?: number | null): void;
    resume(layerIndex?: number | null, mapIndex?: number | null): void;
    pause(layerIndex?: number | null, mapIndex?: number | null): void;
    postUpdate(_time: number, delta: number): void;
    private updateLayer;
    shutdown(): void;
    destroy(): void;
    private getAnimatedTiles;
    updateAnimatedTiles(): void;
}
