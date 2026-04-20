"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnimationOriented = void 0;
exports.getAttackAnimTimeScale = getAttackAnimTimeScale;
const precomputed_pokemon_data_1 = require("../../../models/precomputed/precomputed-pokemon-data");
const Animation_1 = require("../../../types/Animation");
const delays_json_1 = __importDefault(require("../../../types/delays.json"));
const Game_1 = require("../../../types/enum/Game");
const Item_1 = require("../../../types/enum/Item");
const Passive_1 = require("../../../types/enum/Passive");
const Pokemon_1 = require("../../../types/enum/Pokemon");
const logger_1 = require("../../../utils/logger");
const number_1 = require("../../../utils/number");
const atlas_json_1 = __importDefault(require("../assets/atlas.json"));
const durations_json_1 = __importDefault(require("../assets/pokemons/durations.json"));
const pokemon_animations_1 = require("./components/pokemon-animations");
const FPS_EFFECTS = 20;
const FPS_POKEMON_ANIMS = 36;
const isAnimationOriented = (action, index) => {
    var _a;
    const defaultsOverrides = (_a = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[index]]) === null || _a === void 0 ? void 0 : _a.animationsOriented;
    if (Animation_1.AnimationOriented[action] === false) {
        return (defaultsOverrides === null || defaultsOverrides === void 0 ? void 0 : defaultsOverrides[action]) === true;
    }
    else {
        return (defaultsOverrides === null || defaultsOverrides === void 0 ? void 0 : defaultsOverrides[action]) !== false;
    }
};
exports.isAnimationOriented = isAnimationOriented;
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
        var _a, _b;
        const pkm = Pokemon_1.PkmByIndex[index];
        if (!pkm && !pokemon_animations_1.PokemonAnimations[pkm]) {
            logger_1.logger.warn(`No animation config declared for ${pkm}`);
            return;
        }
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const config = Object.assign(Object.assign({}, pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG), ((_a = pokemon_animations_1.PokemonAnimations[pkm]) !== null && _a !== void 0 ? _a : {}));
        if (config.shinyUnavailable && shiny === Game_1.PokemonTint.SHINY)
            return;
        const actions = new Set([Animation_1.AnimationType.Idle]);
        actions.add((_b = config.hurt) !== null && _b !== void 0 ? _b : Animation_1.AnimationType.Hurt);
        if (pokemonData.passive !== Passive_1.Passive.INANIMATE) {
            actions.add(config.walk);
            actions.add(config.sleep);
            actions.add(config.eat);
            actions.add(config.hop);
            actions.add(config.attack);
            actions.add(config.ability);
            actions.add(config.emote);
        }
        actions.forEach((action) => {
            const spriteTypes = config.noShadow
                ? [Game_1.SpriteType.ANIM]
                : [Game_1.SpriteType.ANIM, Game_1.SpriteType.SHADOW];
            spriteTypes.forEach((mode) => {
                const directionArray = (0, exports.isAnimationOriented)(action, index)
                    ? Object.values(Game_1.Orientation)
                    : [Game_1.Orientation.DOWN];
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
        var _a;
        const pkm = Pokemon_1.PkmByIndex[index];
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const config = Object.assign(Object.assign({}, pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG), ((_a = pokemon_animations_1.PokemonAnimations[pkm]) !== null && _a !== void 0 ? _a : {}));
        if (config.shinyUnavailable && shiny === Game_1.PokemonTint.SHINY)
            return;
        const actions = new Set([Animation_1.AnimationType.Idle]);
        actions.add(config.hurt);
        if (pokemonData.passive !== Passive_1.Passive.INANIMATE) {
            actions.add(Animation_1.AnimationType.Walk);
            actions.add(config.sleep);
            actions.add(config.eat);
            actions.add(config.hop);
            actions.add(config.attack);
            actions.add(config.ability);
            actions.add(config.emote);
        }
        actions.forEach((action) => {
            const spriteTypes = config.noShadow
                ? [Game_1.SpriteType.ANIM]
                : [Game_1.SpriteType.ANIM, Game_1.SpriteType.SHADOW];
            spriteTypes.forEach((mode) => {
                const directionArray = (0, exports.isAnimationOriented)(action, index)
                    ? Object.values(Game_1.Orientation)
                    : [Game_1.Orientation.DOWN];
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
                        prefix: berryName + "_",
                        suffix: ".png"
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
                prefix: "CROP_",
                suffix: ".png"
            }),
            duration: 600,
            repeat: -1
        });
        this.game.anims.create({
            key: "loading_pokeball",
            frames: this.game.anims.generateFrameNames("loading_pokeball", {
                frames: [2, 1, 0, 1, 2, 3, 4, 3],
                suffix: ".png"
            }),
            frameRate: 8,
            repeat: -1
        });
    }
    convertPokemonActionStateToAnimationType(state, pkmSprite) {
        var _a;
        const config = Object.assign(Object.assign({}, pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG), ((_a = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[pkmSprite.pokemon.index]]) !== null && _a !== void 0 ? _a : {}));
        switch (state) {
            case Game_1.PokemonActionState.HOP:
            case Game_1.PokemonActionState.FISH:
            case Game_1.PokemonActionState.BLOSSOM:
                return config.hop;
            case Game_1.PokemonActionState.HURT:
                return config.hurt;
            case Game_1.PokemonActionState.SLEEP:
                return config.sleep;
            case Game_1.PokemonActionState.EAT:
                return config.eat;
            case Game_1.PokemonActionState.WALK:
                return config.walk;
            case Game_1.PokemonActionState.ATTACK:
                return config.attack;
            case Game_1.PokemonActionState.EMOTE:
                return config.emote;
            case Game_1.PokemonActionState.IDLE:
            default:
                return config.idle;
        }
    }
    animatePokemon(pokemonSprite, action, flip, loop = true) {
        var _a;
        let animation = this.convertPokemonActionStateToAnimationType(action, pokemonSprite);
        const shouldLock = action === Game_1.PokemonActionState.HOP ||
            action === Game_1.PokemonActionState.HURT ||
            action === Game_1.PokemonActionState.EMOTE;
        const timeScale = action === Game_1.PokemonActionState.ATTACK
            ? getAttackAnimTimeScale(pokemonSprite.pokemon.index, pokemonSprite.pokemon.speed)
            : 1;
        if (pokemonSprite.pokemon.passive === Passive_1.Passive.DRUMMER &&
            pokemonSprite.targetY == null &&
            action === Game_1.PokemonActionState.WALK) {
            animation =
                (_a = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[pokemonSprite.pokemon.index]].emote) !== null && _a !== void 0 ? _a : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG.emote;
            pokemonSprite.orientation = Game_1.Orientation.DOWN;
        }
        if (action === Game_1.PokemonActionState.EAT &&
            this.game.anims.exists(`${pokemonSprite.pokemon.index}/${pokemonSprite.pokemon.shiny ? Game_1.PokemonTint.SHINY : Game_1.PokemonTint.NORMAL}/${animation}/${Game_1.SpriteType.ANIM}/${Game_1.Orientation.DOWN}`) === false) {
            animation = this.convertPokemonActionStateToAnimationType(Game_1.PokemonActionState.SLEEP, pokemonSprite);
        }
        try {
            this.play(pokemonSprite, animation, {
                flip,
                lock: shouldLock,
                repeat: loop ? -1 : 0,
                timeScale
            });
        }
        catch (err) {
            logger_1.logger.warn(`Can't play animation ${animation} for ${pokemonSprite === null || pokemonSprite === void 0 ? void 0 : pokemonSprite.name}`, err);
        }
        if (pokemonSprite.troopers) {
            pokemonSprite.troopers.forEach((trooper) => {
                trooper.orientation = pokemonSprite.orientation;
                this.animatePokemon(trooper, action, flip, loop);
            });
        }
    }
    play(pkmSprite, animation, config = {}) {
        var _a, _b, _c;
        if (pkmSprite.animationLocked || !((_a = pkmSprite.sprite) === null || _a === void 0 ? void 0 : _a.anims))
            return;
        if (pkmSprite.sprite.texture.key === "loading_pokeball")
            return;
        let orientation = config.flip
            ? Game_1.OrientationFlip[pkmSprite.orientation]
            : pkmSprite.orientation;
        if ((0, exports.isAnimationOriented)(animation, pkmSprite.pokemon.index) === false) {
            orientation = Game_1.Orientation.DOWN;
        }
        const textureIndex = pkmSprite.scene &&
            pkmSprite.scene.textures.exists(pkmSprite.pokemon.index)
            ? pkmSprite.pokemon.index
            : "0000";
        const tint = pkmSprite.pokemon.shiny &&
            !pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[pkmSprite.pokemon.index]].shinyUnavailable
            ? Game_1.PokemonTint.SHINY
            : Game_1.PokemonTint.NORMAL;
        const animKey = `${textureIndex}/${tint}/${animation}/${Game_1.SpriteType.ANIM}/${orientation}`;
        const shadowKey = `${textureIndex}/${tint}/${animation}/${Game_1.SpriteType.SHADOW}/${orientation}`;
        if (((_b = pkmSprite.sprite.anims.currentAnim) === null || _b === void 0 ? void 0 : _b.key) === animKey &&
            ((_c = pkmSprite.sprite.anims.currentAnim) === null || _c === void 0 ? void 0 : _c.repeat) === -1)
            return;
        pkmSprite.sprite.anims.play({
            key: animKey,
            repeat: config.repeat,
            timeScale: config.timeScale
        });
        if (pkmSprite.shadow) {
            pkmSprite.shadow.anims.play({
                key: shadowKey,
                repeat: config.repeat,
                timeScale: config.timeScale
            });
        }
        if (config.lock) {
            pkmSprite.animationLocked = true;
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