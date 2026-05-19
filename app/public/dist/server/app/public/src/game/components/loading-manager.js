"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvironmentMultiAtlas = loadEnvironmentMultiAtlas;
exports.preloadPortraits = preloadPortraits;
const i18next_1 = require("i18next");
const package_json_1 = __importDefault(require("../../../../../package.json"));
const config_1 = require("../../../../config");
const music_1 = require("../../../../config/game/music");
const pokemon_customs_1 = require("../../../../models/colyseus-models/pokemon-customs");
const Dungeon_1 = require("../../../../types/enum/Dungeon");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../utils/avatar");
const schemas_1 = require("../../../../utils/schemas");
const atlas_json_1 = __importDefault(require("../../assets/atlas.json"));
const audio_1 = require("../../pages/utils/audio");
const animated_tiles_plugin_1 = __importDefault(require("../plugins/animated-tiles-plugin"));
const game_scene_1 = __importDefault(require("../scenes/game-scene"));
const pokemon_1 = require("./pokemon");
class LoadingManager {
    constructor(scene) {
        this.loadingBar = null;
        this.scene = scene;
        this.statusMessage = (0, i18next_1.t)("loading");
        this.scene.load.on("fileprogress", (file, percentComplete) => {
            this.statusMessage = (0, i18next_1.t)("loading_asset") + " " + file.key;
        });
        this.scene.load.on("complete", () => {
            this.statusMessage = (0, i18next_1.t)("loading_complete");
        });
        this.preload();
    }
    preload() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const scene = this.scene;
            scene.load.xhr.timeout = 5000;
            scene.load.image("town_tileset", "/assets/tilesets/Town/tileset.png");
            scene.load.tilemapTiledJSON("town", "/assets/tilesets/Town/town.json");
            (0, audio_1.preloadMusic)(scene, (0, music_1.getMusicAlt)(Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_0));
            (0, audio_1.preloadMusic)(scene, (0, music_1.getMusicAlt)(Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_10));
            (0, audio_1.preloadMusic)(scene, (0, music_1.getMusicAlt)(Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_20));
            (0, audio_1.preloadMusic)(scene, Dungeon_1.DungeonMusic.CARNIVAL_LUDICOLO);
            scene.load.image("rain", "/assets/environment/rain.png");
            scene.load.image("sand", "/assets/environment/sand.png");
            scene.load.image("wind", "/assets/environment/wind.png");
            scene.load.image("smog", "/assets/environment/smog.png");
            scene.load.image("fog", "/assets/environment/fog.png");
            scene.load.image("sun", "/assets/environment/sun.png");
            scene.load.image("clouds", "/assets/environment/clouds.png");
            scene.load.image("distort", "/assets/environment/noise.png");
            scene.load.multiatlas("snowflakes", "/assets/environment/snowflakes.json", "/assets/environment/");
            scene.load.image("money", "/assets/icons/money.svg");
            scene.load.image("arrowDown", "/assets/ui/arrowDown.png");
            scene.load.spritesheet({
                key: "cell",
                url: "/assets/ui/cell.png",
                frameConfig: {
                    frameWidth: 64,
                    frameHeight: 64,
                    startFrame: 0,
                    endFrame: 23
                }
            });
            scene.load.spritesheet({
                key: "board_cell",
                url: "/assets/ui/board_cell.png",
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 1
                }
            });
            for (const pack in atlas_json_1.default.packs) {
                scene.load.multiatlas(atlas_json_1.default.packs[pack].name, `/assets/${pack}/${atlas_json_1.default.packs[pack].name}.json?v=${package_json_1.default.assetsVersion}`, `/assets/${pack}/`);
            }
            loadEnvironmentMultiAtlas(this.scene);
            if (scene instanceof game_scene_1.default) {
                const players = (0, schemas_1.schemaValues)((_a = scene.room) === null || _a === void 0 ? void 0 : _a.state.players);
                const player = (_b = players.find((p) => p.id === scene.uid)) !== null && _b !== void 0 ? _b : players[0];
                yield scene.preloadMaps(players
                    .map((p) => p.map)
                    .filter((map) => map !== "town"));
                (0, audio_1.preloadMusic)(scene, config_1.RegionDetails[player.map].music);
                preloadPortraits(this.scene, player);
            }
            (0, pokemon_1.loadCompressedAtlas)(scene, "0000");
            scene.load.scenePlugin("animatedTiles", animated_tiles_plugin_1.default, "animatedTiles", "animatedTiles");
        });
    }
}
exports.default = LoadingManager;
function loadEnvironmentMultiAtlas(scene) {
    scene.load.multiatlas("portal", "/assets/environment/portal.json", "/assets/environment/");
    scene.load.multiatlas("chest", "/assets/environment/chest.json", "/assets/environment/");
    scene.load.multiatlas("shine", "/assets/environment/shine.json", "/assets/environment/");
    scene.load.multiatlas("berry_trees", "/assets/environment/berry_trees.json?tempcacheburst=68", "/assets/environment/");
    scene.load.multiatlas("flower_pots", "/assets/environment/flower_pots.json", "/assets/environment/");
    scene.load.multiatlas("ground_holes", "/assets/environment/ground_holes.json", "/assets/environment/");
    scene.load.multiatlas("loading_pokeball", "/assets/environment/loading_pokeball.json", "/assets/environment/");
    scene.load.multiatlas("training_bag", "/assets/environment/training_bag.json", "/assets/environment/");
}
function preloadPortraits(scene, player) {
    Object.values(Pokemon_1.PkmIndex).forEach((index) => {
        const pokemonCustom = (0, pokemon_customs_1.getPkmWithCustom)(index, player.pokemonCustoms);
        scene.load.image(`portrait-${index}`, (0, avatar_1.getPortraitSrc)(index, pokemonCustom.shiny, pokemonCustom.emotion));
    });
}
//# sourceMappingURL=loading-manager.js.map