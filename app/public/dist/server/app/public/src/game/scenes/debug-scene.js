"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugScene = void 0;
const phaser_1 = __importDefault(require("phaser"));
const config_1 = require("../../../../config");
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const Animation_1 = require("../../../../types/Animation");
const Game_1 = require("../../../../types/enum/Game");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const Status_1 = require("../../../../types/enum/Status");
const Weather_1 = require("../../../../types/enum/Weather");
const logger_1 = require("../../../../utils/logger");
const number_1 = require("../../../../utils/number");
const orientation_1 = require("../../../../utils/orientation");
const audio_1 = require("../../pages/utils/audio");
const utils_1 = require("../../pages/utils/utils");
const preferences_1 = require("../../preferences");
const animation_manager_1 = __importDefault(require("../animation-manager"));
const abilities_animations_1 = require("../components/abilities-animations");
const loading_manager_1 = __importDefault(require("../components/loading-manager"));
const pokemon_1 = __importStar(require("../components/pokemon"));
const pokemon_animations_1 = require("../components/pokemon-animations");
const weather_manager_1 = __importDefault(require("../components/weather-manager"));
const depths_1 = require("../depths");
class DebugScene extends phaser_1.default.Scene {
    constructor(height, width, onProgress, onComplete) {
        super();
        this.animationManager = null;
        this.loadingManager = null;
        this.uid = "debug";
        this.mapName = "town";
        this.colorFilter = null;
        this.music = null;
        this.landscape = [];
        this.height = height;
        this.width = width;
        this.onProgress = onProgress;
        this.onComplete = onComplete;
    }
    preload() {
        (0, pokemon_1.resetSpriteCounts)();
        this.loadingManager = new loading_manager_1.default(this);
        this.load.on("progress", (value) => {
            this.onProgress(value);
        });
        this.load.once("complete", () => {
            this.animationManager = new animation_manager_1.default(this);
            this.onComplete();
        });
    }
    create() {
        this.abilitiesVfxGroup = this.add.group();
        this.weatherManager = new weather_manager_1.default(this);
    }
    updateSprite(pkm, orientation, animationType, status, shiny) {
        var _a;
        if (this.pokemonSprite) {
            this.pokemonSprite.destroy();
        }
        (0, abilities_animations_1.clearAbilityAnimations)(this);
        if (this.target) {
            this.target.destroy();
            clearInterval(this.attackAnimInterval);
        }
        const [px, py] = (0, utils_1.transformEntityCoordinates)(3, 3, false);
        this.pokemonSprite = new pokemon_1.default(this, px, py, pokemon_factory_1.default.createPokemonFromName(pkm, { shiny }), "debug", false, false);
        this.pokemonSprite.orientation = orientation;
        this.pokemonSprite.pokemon.positionX = 3;
        this.pokemonSprite.pokemon.positionY = 3;
        this.pokemonSprite.sprite.setTint((0, config_1.getRegionTint)(this.mapName, (0, preferences_1.preference)("colorblindMode")));
        let animationName = Animation_1.AnimationType[animationType];
        const anims = Object.assign(Object.assign({}, pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG), ((_a = pokemon_animations_1.PokemonAnimations[pkm]) !== null && _a !== void 0 ? _a : {}));
        if (animationType === "Attack") {
            animationName = anims.attack;
            this.showTarget();
            this.addAttackAnim();
        }
        if (animationType === "Ability") {
            animationName = anims.ability;
            this.showTarget();
            this.addAbilityAnim();
        }
        if (animationType === "Emote") {
            animationName = anims.emote;
        }
        if (animationType === "Hop") {
            animationName = anims.hop;
        }
        if (animationType === "Hurt") {
            animationName = anims.hurt;
        }
        if (animationType === "Sleep") {
            animationName = anims.sleep;
        }
        if (animationType === "Eat") {
            animationName = anims.eat;
        }
        this.pokemonSprite.once("loaded", () => {
            var _a;
            try {
                (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.play(this.pokemonSprite, animationName, {
                    repeat: -1
                });
            }
            catch (err) {
                logger_1.logger.error(`Error playing animation ${this.pokemonSprite.name} ${animationType}: ${animationName}`, err);
            }
            this.applyStatusAnimation(status);
        });
    }
    updateMap(mapName) {
        if (this.map)
            this.map.destroy();
        this.mapName = mapName;
        if (mapName === "town") {
            return new Promise((resolve) => {
                var _a, _b, _c;
                this.map = this.add.tilemap("town");
                const tileset = this.map.addTilesetImage("town_tileset", "town_tileset");
                (_a = this.map.createLayer("layer0", tileset, 0, 0)) === null || _a === void 0 ? void 0 : _a.setScale(2, 2);
                (_b = this.map.createLayer("layer1", tileset, 0, 0)) === null || _b === void 0 ? void 0 : _b.setScale(2, 2);
                (_c = this.map.createLayer("layer2", tileset, 0, 0)) === null || _c === void 0 ? void 0 : _c.setScale(2, 2);
                const sys = this.sys;
                if (sys.animatedTiles) {
                    sys.animatedTiles.pause();
                }
                (0, audio_1.playMusic)(this, config_1.RegionDetails[mapName].music);
                resolve();
            });
        }
        return fetch(`/tilemap/${mapName}`)
            .then((res) => res.json())
            .then((tilemap) => {
            this.tilemap = tilemap;
            return new Promise((resolve) => {
                this.load.reset();
                tilemap.tilesets.forEach((t) => {
                    this.load.image(mapName + "/" + t.name, "/assets/tilesets/" + mapName + "/" + t.image);
                });
                this.load.tilemapTiledJSON(mapName, tilemap);
                (0, audio_1.preloadMusic)(this, config_1.RegionDetails[mapName].music);
                this.load.once("complete", resolve);
                this.load.start();
            });
        })
            .then(() => {
            const map = this.make.tilemap({ key: mapName });
            this.map = map;
            this.tilemap.layers.forEach((layer) => {
                var _a;
                const tileset = map.addTilesetImage(layer.name, mapName + "/" + layer.name);
                (_a = map.createLayer(layer.name, tileset, 0, 0)) === null || _a === void 0 ? void 0 : _a.setScale(2, 2);
            });
            this.sys.animatedTiles.init(map);
            (0, audio_1.playMusic)(this, config_1.RegionDetails[mapName].music);
        })
            .then(() => {
            this.updateSprite(Pokemon_1.Pkm.SMEARGLE, Game_1.Orientation.DOWNLEFT, "Idle", "", false);
            this.updateLandscape();
        });
    }
    updateColorFilter({ red, green, blue, alpha }) {
        var _a;
        (_a = this.colorFilter) === null || _a === void 0 ? void 0 : _a.destroy();
        this.colorFilter = this.add.existing(new phaser_1.default.GameObjects.Rectangle(this, 1500, 1000, 3000, 2000, new phaser_1.default.Display.Color(red, green, blue).color, alpha / 100).setDepth(depths_1.DEPTH.WEATHER_FX));
    }
    updateLandscape() {
        if (!this.map)
            return;
        const tint = (0, config_1.getRegionTint)(this.mapName, (0, preferences_1.preference)("colorblindMode"));
        this.landscape.forEach((sprite) => sprite.destroy());
        this.landscape = [
            this.scene.scene.add.sprite(850, 600, "ground_holes", `trench3.png`),
            this.scene.scene.add.sprite(1200, 600, "ground_holes", `hole5.png`),
            this.scene.scene.add.sprite(420, 660, "berry_trees", "ASPEAR_BERRY_4.png"),
            this.scene.scene.add.sprite(360, 660, "berry_trees", "BABIRI_BERRY_6.png"),
            this.scene.scene.add.sprite(300, 660, "berry_trees", "LIECHI_BERRY_3.png"),
            this.scene.scene.add.sprite(320, 580, "flower_pots", "BLUE.png"),
            this.scene.scene.add.sprite(420, 580, "flower_pots", "PINK.png")
        ];
        this.landscape.forEach((sprite) => sprite.setScale(2).setTint(tint));
    }
    applyStatusAnimation(status) {
        if (this.pokemonSprite) {
            this.pokemonSprite.sprite.setTint((0, config_1.getRegionTint)(this.mapName, (0, preferences_1.preference)("colorblindMode")));
            this.pokemonSprite.removePoison();
            this.pokemonSprite.removeSleep();
            this.pokemonSprite.removeBurn();
            this.pokemonSprite.removeSilence();
            this.pokemonSprite.removeFatigue();
            this.pokemonSprite.removeConfusion();
            this.pokemonSprite.removeFreeze();
            this.pokemonSprite.removeProtect();
            this.pokemonSprite.removeWound();
            this.pokemonSprite.removeResurrection();
            this.pokemonSprite.removeParalysis();
            this.pokemonSprite.removePokerus();
            this.pokemonSprite.removeLocked();
            this.pokemonSprite.removeBlinded();
            this.pokemonSprite.removeArmorReduction();
            this.pokemonSprite.removeCharm();
            this.pokemonSprite.removeRuneProtect();
            this.pokemonSprite.removePossessed();
            this.pokemonSprite.removeReflectShieldAnim();
            this.pokemonSprite.removeFlinch();
            this.pokemonSprite.removeCurse();
            this.pokemonSprite.removeElectricField();
            this.pokemonSprite.removePsychicField();
            this.pokemonSprite.removeGrassField();
            this.pokemonSprite.removeFairyField();
            if (status === Status_1.Status.POISONNED) {
                this.pokemonSprite.addPoison(1);
            }
            if (status === "POISONNED_BADLY") {
                this.pokemonSprite.addPoison(3);
            }
            if (status === Status_1.Status.SLEEP) {
                this.pokemonSprite.addSleep();
            }
            if (status === Status_1.Status.BURN) {
                this.pokemonSprite.addBurn();
            }
            if (status == Status_1.Status.SILENCE) {
                this.pokemonSprite.addSilence();
            }
            if (status == Status_1.Status.FATIGUE) {
                this.pokemonSprite.addFatigue();
            }
            if (status == Status_1.Status.CONFUSION) {
                this.pokemonSprite.addConfusion();
            }
            if (status == Status_1.Status.FREEZE) {
                this.pokemonSprite.addFreeze();
            }
            if (status == Status_1.Status.PROTECT) {
                this.pokemonSprite.addProtect();
            }
            if (status == Status_1.Status.WOUND) {
                this.pokemonSprite.addWound();
            }
            if (status == Status_1.Status.RESURRECTION) {
                this.pokemonSprite.addResurrection();
            }
            if (status == Status_1.Status.RESURRECTING) {
                this.pokemonSprite.resurrectAnimation();
            }
            if (status == Status_1.Status.PARALYSIS) {
                this.pokemonSprite.addParalysis();
            }
            if (status == Status_1.Status.POKERUS) {
                this.pokemonSprite.addPokerus();
            }
            if (status == Status_1.Status.ARMOR_BREAK) {
                this.pokemonSprite.addArmorReduction();
            }
            if (status == Status_1.Status.CHARM) {
                this.pokemonSprite.addCharm();
            }
            if (status === Status_1.Status.FLINCH) {
                this.pokemonSprite.addFlinch();
            }
            if (status === Status_1.Status.CURSE) {
                this.pokemonSprite.addCurse();
            }
            if (status == Status_1.Status.RUNE_PROTECT) {
                this.pokemonSprite.addRuneProtect();
            }
            if (status == Status_1.Status.RAGE) {
                this.pokemonSprite.addRageEffect();
            }
            if (status == Status_1.Status.LOCKED) {
                this.pokemonSprite.addLocked();
            }
            if (status == Status_1.Status.POSSESSED) {
                this.pokemonSprite.addPossessed();
            }
            if (status == Status_1.Status.BLINDED) {
                this.pokemonSprite.addBlinded();
            }
            if (status == Status_1.Status.SPIKY_SHIELD) {
                this.pokemonSprite.addReflectShieldAnim();
            }
            if (status == Status_1.Status.MAGIC_BOUNCE) {
                this.pokemonSprite.addReflectShieldAnim(0xffa0ff);
            }
            if (status == Status_1.Status.REFLECT) {
                this.pokemonSprite.addReflectShieldAnim(0xff3030);
            }
            if (status == Status_1.Status.ELECTRIC_FIELD) {
                this.pokemonSprite.addElectricField();
            }
            if (status == Status_1.Status.PSYCHIC_FIELD) {
                this.pokemonSprite.addPsychicField();
            }
            if (status == Status_1.Status.GRASS_FIELD) {
                this.pokemonSprite.addGrassField();
            }
            if (status == Status_1.Status.FAIRY_FIELD) {
                this.pokemonSprite.addFairyField();
            }
            if (status === "BALM_MUSHROOM") {
                this.pokemonSprite.addBalmMushroomEffect();
            }
            if (status === "BOOST/ATK") {
                this.pokemonSprite.displayBoost(Game_1.Stat.ATK, true);
            }
            if (status === "BOOST/AP") {
                this.pokemonSprite.displayBoost(Game_1.Stat.AP, true);
            }
            if (status === "BOOST/DEF") {
                this.pokemonSprite.displayBoost(Game_1.Stat.DEF, true);
            }
            if (status === "BOOST/SPE_DEF") {
                this.pokemonSprite.displayBoost(Game_1.Stat.SPE_DEF, true);
            }
            if (status === "BOOST/SHIELD") {
                this.pokemonSprite.displayBoost(Game_1.Stat.SHIELD, true);
            }
            if (status === "BOOST/SPEED") {
                this.pokemonSprite.displayBoost(Game_1.Stat.SPEED, true);
            }
        }
    }
    showTarget() {
        var _a;
        const or = this.pokemonSprite.orientation;
        const range = (0, number_1.max)(2)(this.pokemonSprite.pokemon.range);
        const tx = this.pokemonSprite.positionX + orientation_1.OrientationVector[or][0] * range;
        const ty = this.pokemonSprite.positionY + orientation_1.OrientationVector[or][1] * range;
        this.pokemonSprite.targetX = tx;
        this.pokemonSprite.targetY = ty;
        const [rtx, rty] = (0, utils_1.transformEntityCoordinates)(tx, ty, false);
        this.target = new pokemon_1.default(this, rtx, rty, pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SUBSTITUTE), "debug", false, false);
        this.target.pokemon.positionX = tx;
        this.target.pokemon.positionY = ty;
        (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.play(this.target, Animation_1.AnimationType.Idle, { repeat: -1 });
    }
    addAttackAnim() {
        const attack = () => {
            if (!this.pokemonSprite)
                return;
            this.pokemonSprite.attackAnimation(this.pokemonSprite.targetX || 0, this.pokemonSprite.targetY || 0, 0, 1000, () => {
                var _a, _b;
                if (!this.pokemonSprite)
                    return;
                const [x, y] = (0, utils_1.transformEntityCoordinates)(this.pokemonSprite.targetX || 0, this.pokemonSprite.targetY || 0, false);
                (0, abilities_animations_1.displayHit)(this, (_b = (_a = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[this.pokemonSprite.pokemon.index]]) === null || _a === void 0 ? void 0 : _a.hitSprite) !== null && _b !== void 0 ? _b : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG.hitSprite, x, y, false);
            });
        };
        attack();
        this.attackAnimInterval = setInterval(attack, 2000);
    }
    addAbilityAnim() {
        const showAbilityAnim = () => {
            var _a, _b;
            (0, abilities_animations_1.displayAbility)({
                scene: this,
                pokemonsOnBoard: [this.target],
                ability: this.pokemonSprite.pokemon.skill,
                orientation: this.pokemonSprite.orientation,
                positionX: this.pokemonSprite.positionX,
                positionY: this.pokemonSprite.positionY,
                targetX: (_a = this.pokemonSprite.targetX) !== null && _a !== void 0 ? _a : -1,
                targetY: (_b = this.pokemonSprite.targetY) !== null && _b !== void 0 ? _b : -1,
                flip: this.pokemonSprite.flip,
                ap: 0
            });
        };
        showAbilityAnim();
        this.attackAnimInterval = setInterval(showAbilityAnim, 2000);
    }
    shakeCamera(options) {
        var _a, _b;
        this.cameras.main.shake((_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : 250, (_b = options === null || options === void 0 ? void 0 : options.intensity) !== null && _b !== void 0 ? _b : 0.01);
    }
    setWeather(weather) {
        if (!this.weatherManager)
            return;
        this.weatherManager.clearWeather();
        if (weather === Weather_1.Weather.RAIN) {
            this.weatherManager.addRain();
        }
        else if (weather === Weather_1.Weather.ZENITH) {
            this.weatherManager.addSun();
        }
        else if (weather === Weather_1.Weather.DROUGHT) {
            this.weatherManager.addDrought();
        }
        else if (weather === Weather_1.Weather.SANDSTORM) {
            this.weatherManager.addSandstorm();
        }
        else if (weather === Weather_1.Weather.SNOW) {
            this.weatherManager.addSnow();
        }
        else if (weather === Weather_1.Weather.NIGHT) {
            this.weatherManager.addNight();
        }
        else if (weather === Weather_1.Weather.BLOODMOON) {
            this.weatherManager.addBloodMoon();
        }
        else if (weather === Weather_1.Weather.WINDY) {
            this.weatherManager.addWind();
        }
        else if (weather === Weather_1.Weather.STORM) {
            this.weatherManager.addStorm();
        }
        else if (weather === Weather_1.Weather.MISTY) {
            this.weatherManager.addMist();
        }
        else if (weather === Weather_1.Weather.SMOG) {
            this.weatherManager.addSmog();
        }
        else if (weather === Weather_1.Weather.MURKY) {
            this.weatherManager.addMurky();
        }
        else if (weather === "dawn") {
            this.weatherManager.setTownDaytime(0);
        }
        else if (weather === "sunset") {
            this.weatherManager.setTownDaytime(20);
        }
        else if (weather === "nighttime") {
            this.weatherManager.setTownDaytime(30);
        }
    }
}
exports.DebugScene = DebugScene;
//# sourceMappingURL=debug-scene.js.map