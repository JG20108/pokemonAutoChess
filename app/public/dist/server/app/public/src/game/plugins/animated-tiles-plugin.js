"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phaser_1 = __importDefault(require("phaser"));
class AnimatedTilesPlugin extends phaser_1.default.Plugins.ScenePlugin {
    constructor(scene, pluginManager, pluginKey) {
        super(scene, pluginManager, pluginKey);
        this.animatedTiles = [];
        this.rate = 1;
        this.active = false;
        this.activeLayer = [];
        this.followTimeScale = true;
        const systems = scene.sys;
        if (systems.settings.isBooted) {
            this.boot();
        }
        else {
            systems.events.once("boot", this.boot, this);
        }
    }
    boot() {
        if (!this.systems)
            return;
        const eventEmitter = this.systems.events;
        eventEmitter.on("postupdate", this.postUpdate, this);
        eventEmitter.on("shutdown", this.shutdown, this);
        eventEmitter.on("destroy", this.destroy, this);
    }
    init(map) {
        const mapAnimData = {
            map,
            animatedTiles: this.getAnimatedTiles(map),
            active: true,
            rate: 1,
            activeLayer: map.layers.map(() => true)
        };
        this.animatedTiles.push(mapAnimData);
        if (this.animatedTiles.length === 1) {
            this.active = true;
        }
    }
    setRate(rate, gid = null, mapIndex = null) {
        if (gid == null) {
            if (mapIndex == null) {
                this.rate = rate;
            }
            else {
                this.animatedTiles[mapIndex].rate = rate;
            }
            return;
        }
        const applyRate = (tileDataList) => {
            tileDataList.forEach((tileData) => {
                if (tileData.index === gid) {
                    tileData.rate = rate;
                }
            });
        };
        if (mapIndex == null) {
            this.animatedTiles.forEach((mapData) => applyRate(mapData.animatedTiles));
        }
        else {
            applyRate(this.animatedTiles[mapIndex].animatedTiles);
        }
    }
    resetRates(mapIndex = null) {
        if (mapIndex == null) {
            this.rate = 1;
            this.animatedTiles.forEach((mapAnimData) => {
                mapAnimData.rate = 1;
                mapAnimData.animatedTiles.forEach((tileAnimData) => {
                    tileAnimData.rate = 1;
                });
            });
            return;
        }
        this.animatedTiles[mapIndex].rate = 1;
        this.animatedTiles[mapIndex].animatedTiles.forEach((tileAnimData) => {
            tileAnimData.rate = 1;
        });
    }
    resume(layerIndex = null, mapIndex = null) {
        if (mapIndex == null) {
            if (layerIndex == null) {
                this.active = true;
                return;
            }
            this.activeLayer[layerIndex] = true;
            this.animatedTiles.forEach((mapData) => {
                mapData.animatedTiles.forEach((animatedTile) => {
                    this.updateLayer(animatedTile, animatedTile.tiles[layerIndex]);
                });
            });
            return;
        }
        const mapData = this.animatedTiles[mapIndex];
        if (!mapData)
            return;
        if (layerIndex == null) {
            mapData.active = true;
            return;
        }
        mapData.activeLayer[layerIndex] = true;
        mapData.animatedTiles.forEach((animatedTile) => {
            this.updateLayer(animatedTile, animatedTile.tiles[layerIndex]);
        });
    }
    pause(layerIndex = null, mapIndex = null) {
        if (mapIndex == null) {
            if (layerIndex == null) {
                this.active = false;
                return;
            }
            this.activeLayer[layerIndex] = false;
            return;
        }
        const mapData = this.animatedTiles[mapIndex];
        if (!mapData)
            return;
        if (layerIndex == null) {
            mapData.active = false;
            return;
        }
        mapData.activeLayer[layerIndex] = false;
    }
    postUpdate(_time, delta) {
        const scene = this.scene;
        if (!scene || !this.active)
            return;
        const globalElapsedTime = delta * this.rate * (this.followTimeScale ? scene.time.timeScale : 1);
        this.animatedTiles.forEach((mapAnimData) => {
            if (!mapAnimData.active)
                return;
            const elapsedTime = globalElapsedTime * mapAnimData.rate;
            mapAnimData.animatedTiles.forEach((animatedTile) => {
                var _a;
                animatedTile.next -= elapsedTime * animatedTile.rate;
                if (animatedTile.next >= 0)
                    return;
                const currentIndex = animatedTile.currentFrame;
                const oldTileId = (_a = animatedTile.frames[currentIndex]) === null || _a === void 0 ? void 0 : _a.tileid;
                if (!oldTileId)
                    return;
                let newIndex = currentIndex + 1;
                if (newIndex > animatedTile.frames.length - 1) {
                    newIndex = 0;
                }
                animatedTile.next = animatedTile.frames[newIndex].duration;
                animatedTile.currentFrame = newIndex;
                animatedTile.tiles.forEach((layerTiles, layerIndex) => {
                    if (!mapAnimData.activeLayer[layerIndex])
                        return;
                    this.updateLayer(animatedTile, layerTiles, oldTileId);
                });
            });
        });
    }
    updateLayer(animatedTile, layerTiles, oldTileId = -1) {
        const tilesToRemove = [];
        const tileId = animatedTile.frames[animatedTile.currentFrame].tileid;
        layerTiles.forEach((tile) => {
            if (oldTileId > -1 && (!tile || tile.index !== oldTileId)) {
                tilesToRemove.push(tile);
            }
            else {
                tile.index = tileId;
            }
        });
        tilesToRemove.forEach((tile) => {
            const pos = layerTiles.indexOf(tile);
            if (pos > -1) {
                layerTiles.splice(pos, 1);
            }
        });
    }
    shutdown() {
        this.animatedTiles.length = 0;
    }
    destroy() {
        this.shutdown();
        super.destroy();
    }
    getAnimatedTiles(map) {
        const animatedTiles = [];
        map.tilesets.forEach((tileset) => {
            const tileData = tileset.tileData;
            Object.keys(tileData).forEach((key) => {
                var _a, _b;
                const index = Number.parseInt(key, 10);
                const entry = tileData[key];
                if (!entry ||
                    !Object.prototype.hasOwnProperty.call(entry, "animation")) {
                    return;
                }
                const frames = entry.animation.map((frameData) => ({
                    duration: frameData.duration,
                    tileid: frameData.tileid + tileset.firstgid
                }));
                const startGid = index + tileset.firstgid;
                const currentFrame = Math.max(0, frames.findIndex((frame) => frame.tileid === startGid));
                const tileAnimData = {
                    index: startGid,
                    frames,
                    currentFrame,
                    tiles: [],
                    rate: 1,
                    next: (_b = (_a = frames[0]) === null || _a === void 0 ? void 0 : _a.duration) !== null && _b !== void 0 ? _b : 0
                };
                map.layers.forEach((layer) => {
                    const layerTiles = [];
                    layer.data.forEach((tileRow) => {
                        tileRow.forEach((tile) => {
                            if (tile && tile.index - tileset.firstgid === index) {
                                layerTiles.push(tile);
                            }
                        });
                    });
                    tileAnimData.tiles.push(layerTiles);
                });
                animatedTiles.push(tileAnimData);
            });
        });
        map.layers.forEach((_layer, layerIndex) => {
            this.activeLayer[layerIndex] = true;
        });
        return animatedTiles;
    }
    updateAnimatedTiles() {
        this.animatedTiles.forEach((mapAnimData) => {
            mapAnimData.animatedTiles.forEach((tileAnimData) => {
                tileAnimData.tiles.forEach((tiles, layerIndex) => {
                    const layer = mapAnimData.map.layers[layerIndex];
                    const data = layer.data;
                    for (let row = 0; row < data.length; row += 1) {
                        for (let col = 0; col < data[row].length; col += 1) {
                            const tile = data[row][col];
                            if (!tile)
                                continue;
                            if (tile.index === tileAnimData.index) {
                                if (tiles.indexOf(tile) === -1) {
                                    tiles.push(tile);
                                }
                                tile.index =
                                    tileAnimData.frames[tileAnimData.currentFrame].tileid;
                            }
                        }
                    }
                });
            });
        });
    }
}
exports.default = AnimatedTilesPlugin;
//# sourceMappingURL=animated-tiles-plugin.js.map