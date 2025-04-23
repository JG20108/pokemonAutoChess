"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttackAnimTimeScale = getAttackAnimTimeScale;
const Animation_1 = require("../../../types/Animation");
const Game_1 = require("../../../types/enum/Game");
const Item_1 = require("../../../types/enum/Item");
const Pokemon_1 = require("../../../types/enum/Pokemon");
const logger_1 = require("../../../utils/logger");
const number_1 = require("../../../utils/number");
const atlas_json_1 = __importDefault(require("../assets/atlas.json"));
const delays_json_1 = __importDefault(require("../../../types/delays.json"));
const durations_json_1 = __importDefault(require("../assets/pokemons/durations.json"));
const precomputed_pokemon_data_1 = require("../../../models/precomputed/precomputed-pokemon-data");
const Passive_1 = require("../../../types/enum/Passive");
const FPS_EFFECTS = 20;
const FPS_POKEMON_ANIMS = 36;
class AnimationManager {
    constructor(game) {
        this.game = game;
        for (const pack in atlas_json_1.default.packs) {
            if (atlas_json_1.default.packs[pack].anims) {
                const doesContainMultipleAnims = Object.keys(atlas_json_1.default.packs[pack].anims).length > 1;
                for (const anim in atlas_json_1.default.packs[pack].anims) {
                    const animConfig = atlas_json_1.default.packs[pack].anims[anim];
                    this.createAnimation(Object.assign({ key: anim, atlas: atlas_json_1.default.packs[pack].name, prefix: doesContainMultipleAnims ? anim + "/" : "" }, animConfig));
                }
            }
        }
        this.createMinigameAnimations();
        this.createEnvironmentAnimations();
    }
    createPokemonAnimations(index, shiny) {
        var _a, _b, _c, _d, _e, _f, _g;
        const pkm = Pokemon_1.PkmByIndex[index];
        if (!pkm && !Pokemon_1.AnimationConfig[pkm]) {
            logger_1.logger.warn(`No animation config for ${pkm}`);
            return;
        }
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const config = Pokemon_1.AnimationConfig[pkm];
        if (config.shinyUnavailable && shiny === Game_1.PokemonTint.SHINY)
            return;
        const actions = new Set([Animation_1.AnimationType.Idle]);
        actions.add((_a = config.hurt) !== null && _a !== void 0 ? _a : Animation_1.AnimationType.Hurt);
        if (pokemonData.passive !== Passive_1.Passive.INANIMATE) {
            actions.add(Animation_1.AnimationType.Walk);
            actions.add((_b = config.sleep) !== null && _b !== void 0 ? _b : Animation_1.AnimationType.Sleep);
            actions.add((_c = config.eat) !== null && _c !== void 0 ? _c : Animation_1.AnimationType.Eat);
            actions.add((_d = config.hop) !== null && _d !== void 0 ? _d : Animation_1.AnimationType.Hop);
            actions.add((_e = config.attack) !== null && _e !== void 0 ? _e : Animation_1.AnimationType.Attack);
            actions.add((_f = config.ability) !== null && _f !== void 0 ? _f : Animation_1.AnimationType.SpAttack);
            actions.add((_g = config.emote) !== null && _g !== void 0 ? _g : Animation_1.AnimationType.Pose);
        }
        actions.forEach((action) => {
            const spriteTypes = config.noShadow
                ? [Game_1.SpriteType.ANIM]
                : [Game_1.SpriteType.ANIM, Game_1.SpriteType.SHADOW];
            spriteTypes.forEach((mode) => {
                const directionArray = Animation_1.AnimationComplete[action] === false
                    ? [Game_1.Orientation.DOWN]
                    : Object.values(Game_1.Orientation);
                directionArray.forEach((direction) => {
                    const durationArray = durations_json_1.default[`${index}/${shiny}/${action}/${mode}`];
                    if (!durationArray && action === Animation_1.AnimationType.Eat) {
                        config.eat = Animation_1.AnimationType.Sleep;
                        return;
                    }
                    if (durationArray) {
                        const frameArray = this.game.anims.generateFrameNames(index, {
                            start: 0,
                            end: durationArray.length - 1,
                            zeroPad: 4,
                            prefix: `${shiny}/${action}/${mode}/${direction}/`
                        });
                        for (let i = 0; i < durationArray.length; i++) {
                            if (frameArray[i]) {
                                frameArray[i]["duration"] =
                                    durationArray[i] * (1000 / FPS_POKEMON_ANIMS);
                            }
                        }
                        const shouldLoop = [
                            Animation_1.AnimationType.Idle,
                            Animation_1.AnimationType.Sleep,
                            Animation_1.AnimationType.Eat,
                            Animation_1.AnimationType.Hop
                        ].includes(action);
                        const key = `${index}/${shiny}/${action}/${mode}/${direction}`;
                        if (!this.game.anims.exists(key)) {
                            this.game.anims.create({
                                key: `${index}/${shiny}/${action}/${mode}/${direction}`,
                                frames: frameArray,
                                repeat: shouldLoop ? -1 : 0
                            });
                        }
                    }
                    else {
                        logger_1.logger.warn("duration array missing for", `${index}/${shiny}/${action}/${mode}`);
                    }
                });
            });
        });
    }
    unloadPokemonAnimations(index, shiny) {
        var _a, _b, _c, _d, _e, _f, _g;
        const pkm = Pokemon_1.PkmByIndex[index];
        if (!pkm && !Pokemon_1.AnimationConfig[pkm]) {
            logger_1.logger.warn(`No animation config for ${pkm}`);
            return;
        }
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const config = Pokemon_1.AnimationConfig[pkm];
        if (config.shinyUnavailable && shiny === Game_1.PokemonTint.SHINY)
            return;
        const actions = new Set([Animation_1.AnimationType.Idle]);
        actions.add((_a = config.hurt) !== null && _a !== void 0 ? _a : Animation_1.AnimationType.Hurt);
        if (pokemonData.passive !== Passive_1.Passive.INANIMATE) {
            actions.add(Animation_1.AnimationType.Walk);
            actions.add((_b = config.sleep) !== null && _b !== void 0 ? _b : Animation_1.AnimationType.Sleep);
            actions.add((_c = config.eat) !== null && _c !== void 0 ? _c : Animation_1.AnimationType.Eat);
            actions.add((_d = config.hop) !== null && _d !== void 0 ? _d : Animation_1.AnimationType.Hop);
            actions.add((_e = config.attack) !== null && _e !== void 0 ? _e : Animation_1.AnimationType.Attack);
            actions.add((_f = config.ability) !== null && _f !== void 0 ? _f : Animation_1.AnimationType.SpAttack);
            actions.add((_g = config.emote) !== null && _g !== void 0 ? _g : Animation_1.AnimationType.Pose);
        }
        actions.forEach((action) => {
            const spriteTypes = config.noShadow
                ? [Game_1.SpriteType.ANIM]
                : [Game_1.SpriteType.ANIM, Game_1.SpriteType.SHADOW];
            spriteTypes.forEach((mode) => {
                const directionArray = Animation_1.AnimationComplete[action] === false
                    ? [Game_1.Orientation.DOWN]
                    : Object.values(Game_1.Orientation);
                directionArray.forEach((direction) => {
                    this.game.anims.remove(`${index}/${shiny}/${action}/${mode}/${direction}`);
                });
            });
        });
    }
    createAnimation({ key, atlas, prefix = "", frames, repeat = 0, fps = FPS_EFFECTS, yoyo = false }) {
        this.game.anims.create({
            key,
            frames: this.game.anims.generateFrameNames(atlas !== null && atlas !== void 0 ? atlas : key, {
                start: 0,
                end: frames - 1,
                zeroPad: 3,
                prefix,
                suffix: ".png"
            }),
            duration: (0, number_1.fpsToDuration)(fps)(frames),
            repeat,
            yoyo
        });
    }
    createMinigameAnimations() {
        this.game.anims.create({
            key: "portal",
            frames: this.game.anims.generateFrameNames("portal", {
                start: 0,
                end: 7,
                zeroPad: 3
            }),
            duration: 600,
            repeat: -1
        });
        this.game.anims.create({
            key: "open_chest",
            frames: this.game.anims.generateFrameNames("chest", {
                start: 1,
                end: 4,
                suffix: ".png"
            }),
            duration: 600,
            repeat: 0
        });
        this.game.anims.create({
            key: "shine",
            frames: this.game.anims.generateFrameNames("shine", {
                start: 0,
                end: 47,
                suffix: ".png"
            }),
            duration: 1000,
            repeat: -1
        });
    }
    createEnvironmentAnimations() {
        Item_1.Berries.forEach((berryName) => {
            for (let step = 1; step <= 3; step++) {
                this.game.anims.create({
                    key: `${berryName}_TREE_STEP_${step}`,
                    frames: this.game.anims.generateFrameNames("berry_trees", {
                        start: step * 2 - 1,
                        end: step * 2,
                        prefix: berryName + "_"
                    }),
                    duration: 600,
                    repeat: -1
                });
            }
        });
        this.game.anims.create({
            key: `CROP`,
            frames: this.game.anims.generateFrameNames("berry_trees", {
                start: 1,
                end: 2,
                prefix: "CROP_"
            }),
            duration: 600,
            repeat: -1
        });
    }
    convertPokemonActionStateToAnimationType(state, entity) {
        var _a, _b, _c, _d, _e, _f;
        const config = Pokemon_1.AnimationConfig[Pokemon_1.PkmByIndex[entity.index]];
        switch (state) {
            case Game_1.PokemonActionState.HOP:
            case Game_1.PokemonActionState.FISH:
                return (_a = config === null || config === void 0 ? void 0 : config.hop) !== null && _a !== void 0 ? _a : Animation_1.AnimationType.Hop;
            case Game_1.PokemonActionState.HURT:
                return (_b = config === null || config === void 0 ? void 0 : config.hurt) !== null && _b !== void 0 ? _b : Animation_1.AnimationType.Hurt;
            case Game_1.PokemonActionState.SLEEP:
                return (_c = config === null || config === void 0 ? void 0 : config.sleep) !== null && _c !== void 0 ? _c : Animation_1.AnimationType.Sleep;
            case Game_1.PokemonActionState.EAT:
                return (_d = config === null || config === void 0 ? void 0 : config.eat) !== null && _d !== void 0 ? _d : Animation_1.AnimationType.Eat;
            case Game_1.PokemonActionState.WALK:
                return Animation_1.AnimationType.Walk;
            case Game_1.PokemonActionState.ATTACK:
                return (_e = config === null || config === void 0 ? void 0 : config.attack) !== null && _e !== void 0 ? _e : Animation_1.AnimationType.Attack;
            case Game_1.PokemonActionState.EMOTE:
                return (_f = config === null || config === void 0 ? void 0 : config.emote) !== null && _f !== void 0 ? _f : Animation_1.AnimationType.Pose;
            case Game_1.PokemonActionState.IDLE:
            default:
                return Animation_1.AnimationType.Idle;
        }
    }
    animatePokemon(entity, action, flip, loop = true) {
        const animation = this.convertPokemonActionStateToAnimationType(action, entity);
        const shouldLock = action === Game_1.PokemonActionState.HOP ||
            action === Game_1.PokemonActionState.HURT ||
            action === Game_1.PokemonActionState.EMOTE;
        const timeScale = action === Game_1.PokemonActionState.ATTACK
            ? getAttackAnimTimeScale(entity.index, entity.speed)
            : 1;
        try {
            this.play(entity, animation, {
                flip,
                lock: shouldLock,
                repeat: loop ? -1 : 0,
                timeScale
            });
        }
        catch (err) {
            logger_1.logger.warn(`Can't play animation ${animation} for ${entity === null || entity === void 0 ? void 0 : entity.name}`, err);
        }
    }
    play(entity, animation, config = {}) {
        var _a, _b, _c;
        if (entity.animationLocked || !((_a = entity.sprite) === null || _a === void 0 ? void 0 : _a.anims))
            return;
        const orientation = config.flip
            ? Game_1.OrientationFlip[entity.orientation]
            : entity.orientation;
        const orientationCorrected = Animation_1.AnimationComplete[animation] === true ? orientation : Game_1.Orientation.DOWN;
        const textureIndex = entity.scene && entity.scene.textures.exists(entity.index)
            ? entity.index
            : "0000";
        const tint = entity.shiny &&
            !Pokemon_1.AnimationConfig[Pokemon_1.PkmByIndex[entity.index]].shinyUnavailable
            ? Game_1.PokemonTint.SHINY
            : Game_1.PokemonTint.NORMAL;
        const animKey = `${textureIndex}/${tint}/${animation}/${Game_1.SpriteType.ANIM}/${orientationCorrected}`;
        const shadowKey = `${textureIndex}/${tint}/${animation}/${Game_1.SpriteType.SHADOW}/${orientationCorrected}`;
        if (((_b = entity.sprite.anims.currentAnim) === null || _b === void 0 ? void 0 : _b.key) === animKey &&
            ((_c = entity.sprite.anims.currentAnim) === null || _c === void 0 ? void 0 : _c.repeat) === -1)
            return;
        entity.sprite.anims.play({
            key: animKey,
            repeat: config.repeat,
            timeScale: config.timeScale
        });
        if (entity.shadow) {
            entity.shadow.anims.play({
                key: shadowKey,
                repeat: config.repeat,
                timeScale: config.timeScale
            });
        }
        if (config.lock) {
            entity.animationLocked = true;
        }
    }
}
exports.default = AnimationManager;
function getAttackAnimTimeScale(pokemonIndex, speed) {
    var _a;
    const t = ((_a = delays_json_1.default[pokemonIndex]) === null || _a === void 0 ? void 0 : _a.t) || 36;
    const timeScale = (t * (0.4 + speed * 0.007)) / FPS_POKEMON_ANIMS;
    return timeScale;
}
//# sourceMappingURL=animation-manager.js.map