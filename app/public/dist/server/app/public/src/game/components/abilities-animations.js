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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilitiesAnimations = void 0;
exports.displayHit = displayHit;
exports.hiddenPowerAnimation = hiddenPowerAnimation;
exports.addAbilitySprite = addAbilitySprite;
exports.displayAbility = displayAbility;
exports.clearAbilityAnimations = clearAbilityAnimations;
exports.displayBoost = displayBoost;
const phaser_1 = __importStar(require("phaser"));
const config_1 = require("../../../../config");
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const Animation_1 = require("../../../../types/Animation");
const Ability_1 = require("../../../../types/enum/Ability");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const array_1 = require("../../../../utils/array");
const distance_1 = require("../../../../utils/distance");
const logger_1 = require("../../../../utils/logger");
const number_1 = require("../../../../utils/number");
const orientation_1 = require("../../../../utils/orientation");
const random_1 = require("../../../../utils/random");
const utils_1 = require("../../pages/utils/utils");
const depths_1 = require("../depths");
const pokemon_1 = __importDefault(require("./pokemon"));
const FeatherBaseAngles = {
    HEALTH_FEATHER: 0,
    MUSCLE_FEATHER: -30,
    RESIST_FEATHER: 30,
    GENIUS_FEATHER: -15,
    CLEVER_FEATHER: 15,
    SWIFT_FEATHER: 45,
    PRETTY_FEATHER: -45
};
function displayHit(scene, hitSpriteTypes, x, y, flip) {
    var _a, _b;
    const hitSpriteType = Array.isArray(hitSpriteTypes)
        ? (0, random_1.pickRandomIn)(hitSpriteTypes)
        : hitSpriteTypes;
    const frame = `${hitSpriteType}/000.png`;
    if (!scene.textures.exists("attacks") ||
        !scene.textures.get("attacks").has(frame)) {
        logger_1.logger.warn(`Missing frame: ${frame} in attacks texture`);
        return null;
    }
    if (!scene.anims.exists(hitSpriteType)) {
        logger_1.logger.warn(`Missing animation: ${hitSpriteType}`);
        return null;
    }
    const hitSprite = scene.add.sprite(x + (Math.random() - 0.5) * 30, y + (Math.random() - 0.5) * 30, "attacks", `${hitSpriteType}/000.png`);
    hitSprite
        .setOrigin(0.5, 0.5)
        .setDepth(depths_1.DEPTH.HIT_FX_ABOVE_POKEMON)
        .setScale(...((_a = Animation_1.AttackSpriteScale[hitSpriteType]) !== null && _a !== void 0 ? _a : [1, 1]));
    hitSprite.anims.play(hitSpriteType);
    hitSprite.once(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => {
        hitSprite.destroy();
    });
    (_b = scene.abilitiesVfxGroup) === null || _b === void 0 ? void 0 : _b.add(hitSprite);
}
function featherAnimation(args) {
    var _a, _b;
    const { scene, positionX, positionY, flip, ability } = args;
    const frame = `FEATHER_DANCE/${ability}.png`;
    if (!scene.textures.exists("abilities") ||
        !scene.textures.get("abilities").has(frame)) {
        return;
    }
    const destination = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
    const driftDir = Math.random() < 0.5 ? -1 : 1;
    const driftWidth = (0, random_1.randomBetween)(25, 45);
    const startHeight = (0, random_1.randomBetween)(100, 160);
    const baseAngle = (_a = FeatherBaseAngles[ability]) !== null && _a !== void 0 ? _a : 0;
    const startX = destination[0] + driftDir * driftWidth * 1.5;
    const startY = destination[1] - startHeight;
    const midX = destination[0] - driftDir * driftWidth * 0.5;
    const midY = destination[1] - startHeight * 0.45;
    const landX = destination[0] + (0, random_1.randomBetween)(-6, 6);
    const landY = destination[1] + (0, random_1.randomBetween)(-4, 4);
    const feather = scene.add
        .image(startX, startY, "abilities", frame)
        .setOrigin(0.5, 0.5)
        .setDepth(depths_1.DEPTH.ABILITY)
        .setAlpha(0)
        .setAngle(baseAngle);
    (_b = scene.abilitiesVfxGroup) === null || _b === void 0 ? void 0 : _b.add(feather);
    scene.tweens.chain({
        targets: feather,
        tweens: [
            {
                x: midX,
                y: midY,
                alpha: 1,
                angle: baseAngle + driftDir * 35,
                ease: phaser_1.default.Math.Easing.Sine.Out,
                duration: 500
            },
            {
                x: landX,
                y: landY,
                angle: baseAngle - driftDir * 20,
                ease: phaser_1.default.Math.Easing.Quadratic.In,
                duration: 500
            },
            {
                angle: baseAngle - driftDir * 5,
                ease: phaser_1.default.Math.Easing.Back.Out,
                duration: 120
            },
            {
                angle: baseAngle,
                ease: phaser_1.default.Math.Easing.Sine.InOut,
                duration: 180
            },
            {
                alpha: 0,
                scaleX: 0.6,
                scaleY: 0.6,
                ease: phaser_1.default.Math.Easing.Sine.In,
                duration: 600,
                delay: 400
            }
        ],
        onComplete: () => {
            feather === null || feather === void 0 ? void 0 : feather.destroy();
        }
    });
}
function tidalWaveAnimation(args) {
    var _a;
    const { scene, targetY, orientation, flip } = args;
    const down = orientation === Game_1.Orientation.DOWN;
    const startCoords = (0, utils_1.transformEntityCoordinates)(3.6, -4, flip);
    const endCoords = (0, utils_1.transformEntityCoordinates)(3.6, 10, flip);
    const wave = scene.add
        .sprite(startCoords[0], startCoords[1], "abilities", `TIDAL_WAVE/00${targetY}.png`)
        .setOrigin(0.5, 0.5)
        .setDepth(depths_1.DEPTH.ABILITY_MINOR)
        .setScale(3)
        .setAlpha(0)
        .setRotation(down ? Math.PI : 0);
    scene.tweens.add({
        targets: wave,
        x: endCoords[0],
        y: endCoords[1],
        ease: "linear",
        duration: 1800,
        onComplete: () => {
            wave.destroy();
        },
        onUpdate: function (tween) {
            if (tween.progress < 0.2) {
                wave.setAlpha(tween.progress * 5);
            }
            else if (tween.progress > 0.8) {
                wave.setAlpha((1 - tween.progress) * 5);
            }
        }
    });
    (_a = scene.abilitiesVfxGroup) === null || _a === void 0 ? void 0 : _a.add(wave);
}
const UNOWNS_PER_ABILITY = new Map([
    [
        Ability_1.Ability.HIDDEN_POWER_A,
        [Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_B, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_A]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_B,
        [Pokemon_1.Pkm.UNOWN_B, Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_N]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_C,
        [Pokemon_1.Pkm.UNOWN_C, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_N]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_D,
        [Pokemon_1.Pkm.UNOWN_D, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_T, Pokemon_1.Pkm.UNOWN_O]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_E,
        [Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_S]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_F,
        [Pokemon_1.Pkm.UNOWN_F, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_H]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_G,
        [Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_D]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_H,
        [Pokemon_1.Pkm.UNOWN_H, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_L]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_I,
        [Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_T, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_M]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_J,
        [Pokemon_1.Pkm.UNOWN_J, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_W, Pokemon_1.Pkm.UNOWN_S]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_K,
        [Pokemon_1.Pkm.UNOWN_K, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_C, Pokemon_1.Pkm.UNOWN_K]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_L,
        [Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_C, Pokemon_1.Pkm.UNOWN_K]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_M,
        [Pokemon_1.Pkm.UNOWN_M, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_N, Pokemon_1.Pkm.UNOWN_A]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_N,
        [Pokemon_1.Pkm.UNOWN_N, Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_K, Pokemon_1.Pkm.UNOWN_E]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_O,
        [Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_V, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_N]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_P,
        [Pokemon_1.Pkm.UNOWN_P, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_T]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_Q,
        [Pokemon_1.Pkm.UNOWN_Q, Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_T]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_R,
        [Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_L]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_S,
        [Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_F]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_T,
        [Pokemon_1.Pkm.UNOWN_T, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_E]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_U,
        [Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_X, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_E]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_V,
        [Pokemon_1.Pkm.UNOWN_V, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_T]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_W,
        [Pokemon_1.Pkm.UNOWN_W, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_H]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_X,
        [Pokemon_1.Pkm.UNOWN_X, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_Y]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_Y,
        [Pokemon_1.Pkm.UNOWN_Y, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_A]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_Z,
        [Pokemon_1.Pkm.UNOWN_Z, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_O]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_EM,
        [
            Pokemon_1.Pkm.UNOWN_EXCLAMATION,
            Pokemon_1.Pkm.UNOWN_EXCLAMATION,
            Pokemon_1.Pkm.UNOWN_EXCLAMATION,
            Pokemon_1.Pkm.UNOWN_EXCLAMATION
        ]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_QM,
        [
            Pokemon_1.Pkm.UNOWN_QUESTION,
            Pokemon_1.Pkm.UNOWN_QUESTION,
            Pokemon_1.Pkm.UNOWN_QUESTION,
            Pokemon_1.Pkm.UNOWN_QUESTION
        ]
    ]
]);
function hiddenPowerAnimation(args) {
    const { scene, ability, positionX, positionY, flip } = args;
    const [x, y] = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
    const unownsGroup = scene.add.group();
    const letters = UNOWNS_PER_ABILITY.get(ability);
    for (let n = 0; n < 8; n++) {
        letters === null || letters === void 0 ? void 0 : letters.forEach((letter, i) => {
            var _a;
            const unown = new pokemon_1.default(scene, x, y, pokemon_factory_1.default.createPokemonFromName(letter), "unown", false, flip);
            unown.draggable = false;
            unownsGroup.add(unown);
            (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(unown, Game_1.PokemonActionState.IDLE, flip);
        });
    }
    const circle = new phaser_1.default.Geom.Circle(x, y, 10);
    phaser_1.default.Actions.PlaceOnCircle(unownsGroup.getChildren(), circle);
    scene.tweens.add({
        targets: circle,
        radius: 500,
        ease: phaser_1.default.Math.Easing.Quartic.Out,
        duration: 2500,
        onUpdate: function (tween) {
            phaser_1.default.Actions.RotateAroundDistance(unownsGroup.getChildren(), { x, y }, -0.02 * (1 - tween.progress), circle.radius);
            if (tween.progress > 0.8) {
                unownsGroup.setAlpha((1 - tween.progress) * 5);
            }
        },
        onComplete() {
            unownsGroup.destroy(true, true);
        }
    });
}
function addAbilitySprite(scene, ability, ap, position, options = {}) {
    var _a, _b, _c;
    const frame = (_a = options.frame) !== null && _a !== void 0 ? _a : `${ability}/000.png`;
    const textureKey = (_b = options.textureKey) !== null && _b !== void 0 ? _b : "abilities";
    if (!scene.textures.exists(textureKey) ||
        !scene.textures.get(textureKey).has(frame)) {
        logger_1.logger.warn(`Missing frame "${frame}" in texture "${textureKey}"`);
        return null;
    }
    if (ability && !scene.anims.exists(ability)) {
        logger_1.logger.warn(`Missing animation: ${ability}`);
        return null;
    }
    const sprite = scene.add.sprite(position[0], position[1], textureKey, frame);
    (_c = scene.abilitiesVfxGroup) === null || _c === void 0 ? void 0 : _c.add(sprite);
    const { origin, scale, depth, tint, tintFill, rotation, angle, alpha, flipX, flipY, destroyOnComplete = true, animOptions = {} } = options;
    sprite.setOrigin(...(Array.isArray(origin)
        ? origin
        : origin !== undefined
            ? [origin]
            : [0.5, 0.5]));
    const scaleX = (0, number_1.max)(10)((Array.isArray(scale) ? scale[0] : (scale !== null && scale !== void 0 ? scale : 2)) * (1 + ap / 200));
    const scaleY = (0, number_1.max)(10)((Array.isArray(scale) ? scale[1] : (scale !== null && scale !== void 0 ? scale : 2)) * (1 + ap / 200));
    sprite.setScale(scaleX, scaleY);
    sprite.setDepth(depth !== null && depth !== void 0 ? depth : depths_1.DEPTH.ABILITY);
    if (tint)
        sprite.setTint(tint);
    if (tintFill)
        sprite.setTintFill(tintFill);
    if (rotation !== undefined)
        sprite.setRotation(rotation);
    if (angle !== undefined)
        sprite.setAngle(angle);
    if (alpha !== undefined)
        sprite.setAlpha(alpha);
    if (flipX)
        sprite.flipX = true;
    if (flipY)
        sprite.flipY = true;
    if (destroyOnComplete) {
        sprite.once(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => {
            sprite.destroy();
        });
    }
    if (ability)
        sprite.play(Object.assign({ key: ability }, animOptions));
    return sprite;
}
const staticAnimation = (options) => (args) => {
    var _a, _b;
    let rotation = options.rotation;
    if (options === null || options === void 0 ? void 0 : options.oriented) {
        const coordinates = (0, utils_1.transformEntityCoordinates)(args.positionX, args.positionY, args.flip);
        const coordinatesTarget = (0, utils_1.transformEntityCoordinates)(args.targetX, args.targetY, args.flip);
        rotation = (0, number_1.angleBetween)(coordinates, coordinatesTarget) + (rotation !== null && rotation !== void 0 ? rotation : 0);
    }
    const delay = (_b = (_a = options.delay) !== null && _a !== void 0 ? _a : args.delay) !== null && _b !== void 0 ? _b : 0;
    setTimeout(() => {
        var _a, _b, _c, _d, _e;
        addAbilitySprite(args.scene, (_a = options.ability) !== null && _a !== void 0 ? _a : args.ability, args.ap, [
            options.x + ((_c = (_b = options === null || options === void 0 ? void 0 : options.positionOffset) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 0),
            options.y + ((_e = (_d = options === null || options === void 0 ? void 0 : options.positionOffset) === null || _d === void 0 ? void 0 : _d[1]) !== null && _e !== void 0 ? _e : 0)
        ], Object.assign(Object.assign({}, options), { rotation }));
    }, delay);
};
const onCaster = (options) => (args) => {
    const [x, y] = (0, utils_1.transformEntityCoordinates)(args.positionX, args.positionY, args.flip);
    return staticAnimation(Object.assign({ x, y }, options))(args);
};
const onTarget = (options) => (args) => {
    const [x, y] = (0, utils_1.transformEntityCoordinates)(args.targetX, args.targetY, args.flip);
    return staticAnimation(Object.assign({ x, y }, options))(args);
};
const onCasterScale1 = onCaster({ scale: 1 });
const onCasterScale2 = onCaster({ scale: 2 });
const onCasterScale3 = onCaster({ scale: 3 });
const onCasterScale4 = onCaster({ scale: 4 });
const onTargetScale1 = onTarget({ scale: 1 });
const onTargetScale2 = onTarget({ scale: 2 });
const onTargetScale3 = onTarget({ scale: 3 });
const onTargetScale4 = onTarget({ scale: 4 });
const onSprite = (handler) => (args) => {
    const casterSprite = args.pokemonsOnBoard.find((pkmUI) => pkmUI.positionX === args.positionX && pkmUI.positionY === args.positionY);
    const targetSprite = args.pokemonsOnBoard.find((pkmUI) => pkmUI.positionX === args.targetX && pkmUI.positionY === args.targetY);
    handler(Object.assign({ casterSprite, targetSprite }, args));
};
const parseCoordinates = (coords, args) => {
    if (coords === "caster") {
        return [args.positionX, args.positionY, args.flip];
    }
    else if (coords === "target") {
        return [args.targetX, args.targetY, args.flip];
    }
    return coords;
};
const tweenAnimation = (options = {}) => (args) => {
    var _a, _b, _c;
    const { scene, flip } = args;
    let { rotation } = options;
    const [startRow, startCol, startFlip] = parseCoordinates((_a = options.startCoords) !== null && _a !== void 0 ? _a : "caster", args);
    const delay = (_c = (_b = options.delay) !== null && _b !== void 0 ? _b : args.delay) !== null && _c !== void 0 ? _c : 0;
    setTimeout(() => {
        var _a, _b;
        const startPosition = options.startPosition ||
            (0, utils_1.transformEntityCoordinates)(startRow, startCol, startFlip !== null && startFlip !== void 0 ? startFlip : flip).map((coord, i) => { var _a, _b; return coord + ((_b = (_a = options.startPositionOffset) === null || _a === void 0 ? void 0 : _a[i]) !== null && _b !== void 0 ? _b : 0); });
        if (options === null || options === void 0 ? void 0 : options.oriented) {
            const coordinates = (0, utils_1.transformEntityCoordinates)(args.positionX, args.positionY, args.flip);
            const coordinatesTarget = (0, utils_1.transformEntityCoordinates)(args.targetX, args.targetY, args.flip);
            rotation =
                (0, number_1.angleBetween)(coordinates, coordinatesTarget) + (rotation !== null && rotation !== void 0 ? rotation : 0);
        }
        const sprite = addAbilitySprite(scene, (_a = options.ability) !== null && _a !== void 0 ? _a : args.ability, args.ap, startPosition, Object.assign(Object.assign({ destroyOnComplete: false }, options), { rotation }));
        if (!sprite)
            return null;
        const tweenConfig = Object.assign({ targets: sprite, duration: options.duration || 500, ease: options.ease || "linear", onComplete: () => {
                if (options.destroyOnTweenComplete !== false)
                    sprite === null || sprite === void 0 ? void 0 : sprite.destroy();
                if (options.hitAnim)
                    options.hitAnim(args);
            } }, ((_b = options.tweenProps) !== null && _b !== void 0 ? _b : {}));
        scene.tweens.add(tweenConfig);
    }, delay);
};
const projectile = (options = {}) => (args) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    let { startCoords, endCoords, oriented, rotation, distance, orientation } = options;
    let endPosition;
    if (distance !== undefined || orientation !== undefined) {
        let ox, oy;
        if (endCoords !== undefined) {
            ;
            [ox, oy] = parseCoordinates(endCoords !== null && endCoords !== void 0 ? endCoords : "caster", args);
        }
        else {
            ;
            [ox, oy] = parseCoordinates(startCoords !== null && startCoords !== void 0 ? startCoords : "caster", args);
        }
        let dx, dy;
        if (options.orientation !== undefined) {
            ;
            [dx, dy] =
                orientation_1.OrientationVector[options.orientation === true
                    ? args.orientation
                    : options.orientation];
        }
        else {
            const angleToTarget = Math.atan2(args.targetY - args.positionY, args.targetX - args.positionX);
            dx = Math.cos(angleToTarget);
            dy = Math.sin(angleToTarget);
        }
        endPosition = (0, utils_1.transformEntityCoordinates)(ox + dx * ((_a = options.distance) !== null && _a !== void 0 ? _a : 12), oy + dy * ((_b = options.distance) !== null && _b !== void 0 ? _b : 12), args.flip);
        if (oriented) {
            rotation = (0, number_1.angleBetween)([dx, -dy], [0, 0]) + (rotation !== null && rotation !== void 0 ? rotation : 0);
            oriented = false;
        }
    }
    else {
        const [endRow, endCol, endFlip] = parseCoordinates(endCoords !== null && endCoords !== void 0 ? endCoords : "target", args);
        endPosition = (0, utils_1.transformEntityCoordinates)(endRow, endCol, endFlip !== null && endFlip !== void 0 ? endFlip : args.flip);
    }
    endPosition[0] += (_d = (_c = options.endPositionOffset) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : 0;
    endPosition[1] += (_f = (_e = options.endPositionOffset) === null || _e === void 0 ? void 0 : _e[1]) !== null && _f !== void 0 ? _f : 0;
    return tweenAnimation(Object.assign(Object.assign({}, options), { oriented,
        rotation,
        startCoords,
        endCoords, tweenProps: Object.assign({ x: {
                value: endPosition[0],
                ease: (_h = (_g = options.easeX) !== null && _g !== void 0 ? _g : options.ease) !== null && _h !== void 0 ? _h : "linear"
            }, y: {
                value: endPosition[1],
                ease: (_k = (_j = options.easeY) !== null && _j !== void 0 ? _j : options.ease) !== null && _k !== void 0 ? _k : "linear"
            } }, ((_l = options.tweenProps) !== null && _l !== void 0 ? _l : {})) }))(args);
};
const skyfall = (options) => (args) => {
    return projectile(Object.assign(Object.assign({}, options), { startCoords: [args.targetX, 9, false] }))(args);
};
const shakeCamera = (options) => ({ scene }) => scene.shakeCamera(options);
const poppingIcon = (options) => (args) => {
    var _a, _b, _c;
    return tweenAnimation(Object.assign(Object.assign({}, options), { startCoords: options.startCoords === "target"
            ? [args.targetX, args.targetY]
            : [args.positionX, args.positionY], ease: phaser_1.default.Math.Easing.Cubic.Out, scale: (_a = options.scale) !== null && _a !== void 0 ? _a : 0.25, tweenProps: Object.assign({ scale: (_b = options === null || options === void 0 ? void 0 : options.maxScale) !== null && _b !== void 0 ? _b : 3 }, ((_c = options.tweenProps) !== null && _c !== void 0 ? _c : {})) }))(args);
};
exports.AbilitiesAnimations = {
    [Ability_1.Ability.DIAMOND_STORM]: onCasterScale2,
    [Ability_1.Ability.THRASH]: onCasterScale2,
    [Ability_1.Ability.HELPING_HAND]: onCasterScale2,
    [Ability_1.Ability.ENCORE]: onCaster({ ability: Ability_1.Ability.HELPING_HAND }),
    [Ability_1.Ability.FLORAL_HEALING]: onCasterScale2,
    [Ability_1.Ability.ILLUSION]: onCasterScale2,
    [Ability_1.Ability.ROAR_OF_TIME]: onCasterScale2,
    [Ability_1.Ability.HAPPY_HOUR]: onCasterScale2,
    [Ability_1.Ability.TELEPORT]: onCasterScale2,
    [Ability_1.Ability.PSYCHO_BOOST]: onCasterScale2,
    [Ability_1.Ability.SHIELDS_UP]: onCasterScale2,
    [Ability_1.Ability.AQUA_RING]: onCasterScale2,
    [Ability_1.Ability.INGRAIN]: onCasterScale2,
    [Ability_1.Ability.DEFENSE_CURL]: onCasterScale2,
    [Ability_1.Ability.RECOVER]: onCasterScale2,
    [Ability_1.Ability.METRONOME]: onCasterScale2,
    [Ability_1.Ability.LUNAR_BLESSING]: onCasterScale2,
    [Ability_1.Ability.MAGIC_POWDER]: onCasterScale2,
    [Ability_1.Ability.LANDS_WRATH]: onCasterScale2,
    [Ability_1.Ability.POWER_WHIP]: [
        onCaster({
            oriented: true,
            scale: 4,
            origin: [0.5, 1],
            rotation: Math.PI / 2
        }),
        onTarget({ ability: "POWER_WHIP/hit", scale: 2, delay: 100 })
    ],
    [Ability_1.Ability.STORED_POWER]: onCaster({
        ability: Ability_1.Ability.POWER_WHIP,
        tint: 0xff80ff
    }),
    [Ability_1.Ability.YAWN]: onCasterScale2,
    [Ability_1.Ability.WISE_YAWN]: projectile({
        scale: 2,
        ability: Ability_1.Ability.YAWN
    }),
    [Ability_1.Ability.MEDITATE]: onCasterScale2,
    [Ability_1.Ability.MUD_BUBBLE]: onCasterScale2,
    [Ability_1.Ability.SOFT_BOILED]: onCasterScale2,
    [Ability_1.Ability.FAKE_TEARS]: onCasterScale2,
    [Ability_1.Ability.TEA_TIME]: onCasterScale2,
    [Ability_1.Ability.FUTURE_SIGHT]: onCaster({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    [Ability_1.Ability.PETAL_DANCE]: onCasterScale2,
    [Ability_1.Ability.AROMATHERAPY]: onCasterScale2,
    [Ability_1.Ability.BOUNCE]: onCasterScale2,
    [Ability_1.Ability.BRICK_BREAK]: onTargetScale2,
    [Ability_1.Ability.RETURN]: onTarget({ ability: Ability_1.Ability.BRICK_BREAK, scale: 2 }),
    [Ability_1.Ability.BULK_UP]: onCasterScale2,
    [Ability_1.Ability.FLASH]: onCasterScale2,
    [Ability_1.Ability.METEOR_MASH]: onTarget({ ability: Ability_1.Ability.FLASH }),
    [Ability_1.Ability.STEEL_WING]: onCasterScale2,
    [Ability_1.Ability.HYPNOSIS]: projectile({
        oriented: true,
        textureKey: "attacks",
        ability: Animation_1.AttackSprite.PSYCHIC_RANGE,
        scale: 2,
        distance: 1
    }),
    ["FIELD_DEATH"]: onCasterScale2,
    ["FAIRY_CRIT"]: onCasterScale2,
    ["POWER_LENS"]: onCasterScale2,
    ["STAR_DUST"]: onCasterScale2,
    ["HEAL_ORDER"]: onCasterScale2,
    ["ATTACK_ORDER"]: onCasterScale2,
    ["FOSSIL_RESURRECT"]: onCasterScale2,
    ["LANDS_WRATH/hit"]: onCasterScale2,
    [Ability_1.Ability.BUG_BUZZ]: onTargetScale2,
    [Ability_1.Ability.VENOSHOCK]: onTarget({ scale: 2, origin: [0.5, 1] }),
    [Ability_1.Ability.LEECH_LIFE]: onTargetScale2,
    [Ability_1.Ability.THIEF]: onTargetScale2,
    [Ability_1.Ability.STUN_SPORE]: onTargetScale2,
    [Ability_1.Ability.CRABHAMMER]: onTargetScale2,
    [Ability_1.Ability.JAW_LOCK]: onTarget({
        ability: Ability_1.Ability.ICE_FANG,
        scale: 2,
        tint: 0x798f8d
    }),
    [Ability_1.Ability.BARED_FANGS]: onTarget({
        ability: Ability_1.Ability.ICE_FANG,
        scale: 2,
        tint: 0x8b0000
    }),
    [Ability_1.Ability.RAZOR_WIND]: onTargetScale2,
    [Ability_1.Ability.SEISMIC_TOSS]: onTargetScale2,
    [Ability_1.Ability.ASSURANCE]: onTargetScale2,
    [Ability_1.Ability.CRUSH_GRIP]: onTargetScale2,
    [Ability_1.Ability.METAL_BURST]: onTargetScale2,
    [Ability_1.Ability.SHADOW_SNEAK]: onTargetScale2,
    [Ability_1.Ability.IVY_CUDGEL]: onTargetScale2,
    [Ability_1.Ability.FACADE]: onTargetScale2,
    [Ability_1.Ability.SHIELDS_DOWN]: onTargetScale2,
    [Ability_1.Ability.BRAVE_BIRD]: onTargetScale2,
    [Ability_1.Ability.DYNAMIC_PUNCH]: onTargetScale2,
    [Ability_1.Ability.ELECTRO_WEB]: onTargetScale2,
    [Ability_1.Ability.PSYSHIELD_BASH]: onTargetScale2,
    [Ability_1.Ability.LIQUIDATION]: onTargetScale2,
    [Ability_1.Ability.ACID_ARMOR]: onCasterScale2,
    [Ability_1.Ability.AIR_SLASH]: onTargetScale2,
    [Ability_1.Ability.DREAM_EATER]: onTargetScale2,
    [Ability_1.Ability.BURN_UP]: onTargetScale3,
    [Ability_1.Ability.ICE_HAMMER]: onTargetScale2,
    [Ability_1.Ability.MANTIS_BLADES]: onTargetScale2,
    [Ability_1.Ability.PSYCHIC_FANGS]: onTargetScale2,
    [Ability_1.Ability.THUNDER_FANG]: onTargetScale2,
    [Ability_1.Ability.ICE_FANG]: onTargetScale2,
    [Ability_1.Ability.FIRE_FANG]: onTargetScale2,
    [Ability_1.Ability.POPULATION_BOMB]: onTargetScale2,
    [Ability_1.Ability.SCREECH]: onTargetScale2,
    [Ability_1.Ability.SAND_TOMB]: onTargetScale2,
    [Ability_1.Ability.FIRST_IMPRESSION]: onTarget({ ability: "PUFF_BROWN", scale: 3 }),
    [Ability_1.Ability.PLAY_ROUGH]: onTargetScale2,
    [Ability_1.Ability.ANCHOR_SHOT]: onTargetScale1,
    [Ability_1.Ability.LEAF_BLADE]: onTargetScale2,
    [Ability_1.Ability.SLASHING_CLAW]: onTargetScale2,
    [Ability_1.Ability.DIRE_CLAW]: onTarget({ ability: Ability_1.Ability.SLASHING_CLAW, scale: 3 }),
    [Ability_1.Ability.HEX]: onTargetScale2,
    [Ability_1.Ability.PLASMA_FIST]: onTargetScale2,
    [Ability_1.Ability.LEECH_SEED]: onTargetScale2,
    [Ability_1.Ability.TRIPLE_DIVE]: onTarget({ ability: Ability_1.Ability.WATERFALL, scale: 2 }),
    [Ability_1.Ability.LOCK_ON]: onTargetScale2,
    [Ability_1.Ability.DISABLE]: onTargetScale2,
    [Ability_1.Ability.ROCK_SMASH]: onTargetScale2,
    [Ability_1.Ability.BLAZE_KICK]: onTarget({ positionOffset: [0, -35] }),
    [Ability_1.Ability.BITE]: onTargetScale2,
    [Ability_1.Ability.DRAGON_TAIL]: onTargetScale2,
    [Ability_1.Ability.SOAK]: onTargetScale2,
    [Ability_1.Ability.IRON_TAIL]: onTargetScale2,
    [Ability_1.Ability.ICICLE_CRASH]: onTargetScale2,
    [Ability_1.Ability.DRAIN_PUNCH]: onTargetScale2,
    [Ability_1.Ability.LICK]: onTargetScale2,
    [Ability_1.Ability.OCTOLOCK]: onTargetScale2,
    [Ability_1.Ability.SPITE]: onTarget({ ability: Ability_1.Ability.ACID_SPRAY, scale: 2 }),
    [Ability_1.Ability.SPIRIT_BREAK]: onTargetScale2,
    [Ability_1.Ability.PSYSHOCK]: onTargetScale2,
    [Ability_1.Ability.SHEER_COLD]: onTargetScale2,
    [Ability_1.Ability.COTTON_SPORE]: onTargetScale2,
    [Ability_1.Ability.CEASELESS_EDGE]: onTargetScale2,
    [Ability_1.Ability.RETALIATE]: onTargetScale2,
    [Ability_1.Ability.THUNDER_CAGE]: onTargetScale2,
    ["FIGHTING_KNOCKBACK"]: onTargetScale2,
    [Ability_1.Ability.FIRE_BLAST]: onTargetScale3,
    [Ability_1.Ability.CLOSE_COMBAT]: onTargetScale3,
    [Ability_1.Ability.SUPER_FANG]: onTargetScale3,
    [Ability_1.Ability.VINE_WHIP]: onTargetScale3,
    [Ability_1.Ability.STOMP]: onTargetScale3,
    [Ability_1.Ability.GUILLOTINE]: onTargetScale3,
    [Ability_1.Ability.CROSS_POISON]: onTargetScale3,
    [Ability_1.Ability.FIERY_DANCE]: onTarget({ ability: Ability_1.Ability.FIRE_BLAST, scale: 2 }),
    [Ability_1.Ability.FIRE_SPIN]: onTarget({ ability: Ability_1.Ability.MAGMA_STORM, scale: 2 }),
    [Ability_1.Ability.DRACO_ENERGY]: onTarget({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    [Ability_1.Ability.GRUDGE_DIVE]: projectile({
        ability: Ability_1.Ability.DRACO_ENERGY,
        tint: 0xcbc3e3
    }),
    [Ability_1.Ability.ROCK_WRECKER]: onSprite((_a) => {
        var _b, _c;
        var { casterSprite } = _a, args = __rest(_a, ["casterSprite"]);
        return projectile({
            duration: 200,
            ability: "",
            frame: `ROCK_WRECKER/${((_c = (_b = casterSprite === null || casterSprite === void 0 ? void 0 : casterSprite.pokemon) === null || _b === void 0 ? void 0 : _b.stars) !== null && _c !== void 0 ? _c : 0) > 1 ? "001" : "000"}.png`,
            hitAnim: onTarget({ ability: "SMOKE_BALL", scale: 2 })
        })(args);
    }),
    [Ability_1.Ability.DYNAMAX_CANNON]: onCaster({
        origin: [0.5, 0],
        oriented: true,
        rotation: -Math.PI / 2
    }),
    [Ability_1.Ability.MOONGEIST_BEAM]: onCaster({
        origin: [0.5, 0],
        oriented: true,
        rotation: -Math.PI / 2
    }),
    [Ability_1.Ability.FREEZING_GLARE]: onCaster({
        origin: [0.5, 0.98],
        positionOffset: [0, -50],
        oriented: true,
        rotation: +Math.PI / 2
    }),
    [Ability_1.Ability.MYSTICAL_FIRE]: onTarget({ positionOffset: [0, -50] }),
    [Ability_1.Ability.FLAME_CHARGE]: onCaster({
        oriented: true,
        rotation: +Math.PI / 2,
        origin: [0.5, 1],
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.PASTEL_VEIL]: onCaster({
        oriented: true,
        rotation: +Math.PI,
        origin: [1, 1],
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.AQUA_JET]: onCaster({ oriented: true, rotation: -Math.PI / 2 }),
    [Ability_1.Ability.STOCKPILE]: onCaster({
        oriented: true,
        rotation: -Math.PI / 2,
        ability: Ability_1.Ability.AQUA_JET
    }),
    [Ability_1.Ability.EXTREME_SPEED]: [onCaster({}), onTarget({})],
    [Ability_1.Ability.SALT_CURE]: onCaster({
        ability: Ability_1.Ability.MAGIC_POWDER,
        tint: 0xb0ff80,
        scale: 2
    }),
    [Ability_1.Ability.SPICY_EXTRACT]: onCaster({
        ability: Ability_1.Ability.MAGIC_POWDER,
        tint: 0xff9000,
        scale: 3
    }),
    [Ability_1.Ability.SWEET_SCENT]: onCaster({
        ability: Ability_1.Ability.MAGIC_POWDER,
        tint: 0xffc0c0,
        scale: 3
    }),
    [Ability_1.Ability.DARK_VOID]: onTarget({
        scale: 6,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.SEED_FLARE]: onCasterScale3,
    [Ability_1.Ability.MULTI_ATTACK]: onCasterScale4,
    [Ability_1.Ability.ROCK_SLIDE]: onTarget({ scale: 2, origin: [0.5, 0.9] }),
    [Ability_1.Ability.FLAMETHROWER]: onCaster({
        oriented: true,
        rotation: +Math.PI / 2,
        origin: [0.5, 1]
    }),
    [Ability_1.Ability.SUPER_HEAT]: [
        onCaster({
            oriented: true,
            origin: [0, 0.5],
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        }),
        onCaster({
            oriented: true,
            origin: [0, 0.5],
            rotation: Math.PI / 4,
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        }),
        onCaster({
            oriented: true,
            origin: [0, 0.5],
            rotation: -Math.PI / 4,
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        })
    ],
    [Ability_1.Ability.BLOOD_MOON]: [
        onCaster({ ability: "COSMIC_POWER", tint: 0xff5060, origin: [0.5, 1] }),
        (args) => {
            const coordinates = (0, utils_1.transformEntityCoordinates)(args.positionX, args.positionY, args.flip);
            const [dx, dy] = orientation_1.OrientationVector[args.orientation];
            return staticAnimation({
                ability: Ability_1.Ability.DYNAMAX_CANNON,
                x: coordinates[0] + dx * 16,
                y: coordinates[1] - dy * 16 - 24,
                tint: 0xff5060,
                origin: [0.5, 0],
                oriented: true,
                rotation: -Math.PI / 2
            })(args);
        }
    ],
    [Ability_1.Ability.PSYBEAM]: onCaster({
        oriented: true,
        rotation: -Math.PI / 2,
        origin: [0.5, 0],
        scale: [1, 2]
    }),
    [Ability_1.Ability.TWIN_BEAM]: onCaster({
        ability: Ability_1.Ability.PSYBEAM,
        oriented: true,
        rotation: -Math.PI / 2,
        origin: [0.5, 0],
        scale: [1, 2]
    }),
    [Ability_1.Ability.HYPER_BEAM]: onCaster({
        ability: Ability_1.Ability.PSYBEAM,
        oriented: true,
        rotation: -Math.PI / 2,
        origin: [0.5, 0],
        scale: [2, 2],
        tint: 0xffffa0
    }),
    ["HYPER_BEAM_CHARGE"]: onCasterScale2,
    [Ability_1.Ability.THUNDER_SHOCK]: onTarget({
        ability: Ability_1.Ability.THUNDER,
        scale: 2,
        origin: [0.5, 1]
    }),
    [Ability_1.Ability.HYDRO_PUMP]: onCaster({
        oriented: true,
        rotation: Math.PI / 2,
        origin: [0.5, 1]
    }),
    [Ability_1.Ability.SWALLOW]: onCaster({
        ability: Ability_1.Ability.HYDRO_PUMP,
        oriented: true,
        rotation: +Math.PI / 2,
        origin: [0.5, 1],
        tint: 0x60ff60
    }),
    [Ability_1.Ability.DRACO_METEOR]: onTarget({ origin: [0.5, 0.9] }),
    [Ability_1.Ability.WISH]: onCasterScale3,
    [Ability_1.Ability.GRAVITY]: onCaster({
        ability: Ability_1.Ability.MEDITATE,
        scale: 3,
        tint: 0xccff33,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.COSMIC_POWER_MOON]: onCaster({
        ability: "COSMIC_POWER",
        tint: 0xccb0ff,
        origin: [0.5, 1]
    }),
    [Ability_1.Ability.COSMIC_POWER_SUN]: onCaster({
        ability: "COSMIC_POWER",
        tint: 0xffffd0,
        origin: [0.5, 1]
    }),
    [Ability_1.Ability.FORECAST]: onCaster({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    [Ability_1.Ability.CHATTER]: onCasterScale2,
    [Ability_1.Ability.BOOMBURST]: onCaster({ ability: Ability_1.Ability.CHATTER, scale: 3 }),
    [Ability_1.Ability.BLAST_BURN]: onCasterScale3,
    [Ability_1.Ability.CHARGE]: onCaster({
        scale: 4,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        origin: [0.5, 0.8]
    }),
    [Ability_1.Ability.DISCHARGE]: onCasterScale3,
    [Ability_1.Ability.SHOCKWAVE]: onCasterScale3,
    [Ability_1.Ability.OVERDRIVE]: onCasterScale2,
    [Ability_1.Ability.SMOG]: onCaster({ scale: 4, depth: depths_1.DEPTH.ABILITY_MINOR }),
    [Ability_1.Ability.POISON_GAS]: onCaster({
        ability: Ability_1.Ability.SMOG,
        scale: 3,
        tint: 0xa0f0f0,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.SLUDGE]: onTarget({
        ability: Ability_1.Ability.SMOG,
        scale: 3,
        tint: 0xa0c020
    }),
    [Ability_1.Ability.CRUNCH]: onTarget({ ability: Ability_1.Ability.BITE, scale: 3 }),
    [Ability_1.Ability.PUMMELING_PAYBACK]: onTarget({
        ability: Ability_1.Ability.BITE,
        scale: 3,
        tint: 0xc89d7c
    }),
    [Ability_1.Ability.CAVERNOUS_CHOMP]: onTarget({
        ability: Ability_1.Ability.BITE,
        scale: 2,
        tint: 0x804000
    }),
    [Ability_1.Ability.FROST_BREATH]: onCaster({
        oriented: true,
        positionOffset: [0, -30],
        origin: [-0.1, 0.5],
        scale: 4
    }),
    [Ability_1.Ability.TORMENT]: onCaster({ positionOffset: [0, -50] }),
    [Ability_1.Ability.RAGING_BULL]: onCaster({
        positionOffset: [0, -50],
        ability: Ability_1.Ability.TORMENT
    }),
    [Ability_1.Ability.RAGE]: onCaster({
        ability: Ability_1.Ability.TORMENT,
        positionOffset: [0, -50],
        tint: 0xff0000
    }),
    [Ability_1.Ability.NIGHT_SLASH]: onTargetScale2,
    [Ability_1.Ability.KOWTOW_CLEAVE]: onTarget({ ability: Ability_1.Ability.NIGHT_SLASH, scale: 3 }),
    [Ability_1.Ability.FELL_STINGER]: onTarget({
        ability: Ability_1.Ability.VENOSHOCK,
        tint: 0xc0ffc0,
        origin: [0.5, 1]
    }),
    [Ability_1.Ability.NASTY_PLOT]: onCaster({ positionOffset: [0, -50] }),
    [Ability_1.Ability.ROCK_TOMB]: onTarget({ origin: [0.5, 0.9], scale: 1 }),
    [Ability_1.Ability.SLACK_OFF]: onCaster({ ability: Ability_1.Ability.ILLUSION, scale: 1 }),
    [Ability_1.Ability.FISHIOUS_REND]: onCaster({ oriented: true, rotation: -Math.PI / 2 }),
    [Ability_1.Ability.HORN_ATTACK]: onTarget({ ability: Ability_1.Ability.CUT, scale: 3 }),
    [Ability_1.Ability.HORN_DRILL]: onTarget({ ability: Ability_1.Ability.CUT, scale: 4 }),
    [Ability_1.Ability.CUT]: [
        onTargetScale3,
        onCaster({
            ability: Ability_1.Ability.FISHIOUS_REND,
            oriented: true,
            rotation: -Math.PI / 2
        })
    ],
    [Ability_1.Ability.PAYDAY]: [
        onTargetScale2,
        onTarget({ ability: Ability_1.Ability.FACADE, scale: 1 })
    ],
    [Ability_1.Ability.VOLT_SWITCH]: onTarget({
        origin: [0.5, 0],
        oriented: true,
        rotation: -Math.PI / 2,
        scale: 2
    }),
    [Ability_1.Ability.BEHEMOTH_BLADE]: onCaster({
        ability: Ability_1.Ability.VOLT_SWITCH,
        origin: [0.5, 0],
        oriented: true,
        rotation: -Math.PI / 2,
        tint: 0xffc0ff
    }),
    [Ability_1.Ability.MUDDY_WATER]: onTarget({ origin: [0.5, 1] }),
    [Ability_1.Ability.FAIRY_LOCK]: onTargetScale1,
    [Ability_1.Ability.STEAM_ERUPTION]: onTargetScale3,
    [Ability_1.Ability.SEARING_SHOT]: onCaster({
        ability: Ability_1.Ability.STEAM_ERUPTION,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        scale: 3
    }),
    [Ability_1.Ability.VOLT_SURGE]: onCaster({
        ability: Ability_1.Ability.PARABOLIC_CHARGE,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        scale: 3
    }),
    [Ability_1.Ability.POWER_HUG]: onTarget({ ability: Ability_1.Ability.ANCHOR_SHOT }),
    [Ability_1.Ability.HEAVY_SLAM]: [onCasterScale2, shakeCamera({})],
    [Ability_1.Ability.MORTAL_SPIN]: onCaster({
        ability: Ability_1.Ability.HEAVY_SLAM,
        scale: 1.5,
        tint: 0xa0ff90
    }),
    [Ability_1.Ability.BODY_SLAM]: shakeCamera({}),
    [Ability_1.Ability.BULLDOZE]: [
        onCaster({ ability: Ability_1.Ability.HEAVY_SLAM, scale: 1.5 }),
        shakeCamera({})
    ],
    [Ability_1.Ability.EAR_DIG]: [
        onTarget({ ability: Ability_1.Ability.HEAVY_SLAM, scale: 1 }),
        (args) => {
            var _a, _b, _c;
            const [x, y] = (0, utils_1.transformEntityCoordinates)(args.targetX, args.targetY, args.flip);
            const hole = (_a = args.delay) !== null && _a !== void 0 ? _a : 0;
            if (hole > 0) {
                const groundHole = args.scene.add
                    .sprite(x, y + 10, "ground_holes", `hole${hole}.png`)
                    .setScale(2)
                    .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL);
                (_b = args.scene.abilitiesVfxGroup) === null || _b === void 0 ? void 0 : _b.add(groundHole);
                args.scene.tweens.add({
                    alpha: 0,
                    delay: 15000,
                    duration: 2000,
                    targets: groundHole,
                    onComplete() {
                        groundHole.destroy();
                    }
                });
                (_c = args.scene.abilitiesVfxGroup) === null || _c === void 0 ? void 0 : _c.add(groundHole);
            }
        }
    ],
    [Ability_1.Ability.FAKE_OUT]: onCaster({ ability: Ability_1.Ability.FACADE }),
    [Ability_1.Ability.FILLET_AWAY]: onCaster({ ability: Ability_1.Ability.SHIELDS_UP }),
    [Ability_1.Ability.BITTER_BLADE]: onCasterScale3,
    [Ability_1.Ability.MIND_BEND]: onTarget({
        ability: Ability_1.Ability.ASSURANCE,
        positionOffset: [0, -20]
    }),
    [Ability_1.Ability.ATTRACT]: onCaster({ positionOffset: [0, -70] }),
    [Ability_1.Ability.MAGNET_RISE]: onCaster({ ability: Ability_1.Ability.ELECTRO_BOOST }),
    [Ability_1.Ability.FORCE_PALM]: onTarget({ ability: Ability_1.Ability.ANCHOR_SHOT }),
    [Ability_1.Ability.WATERFALL]: onCaster({
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        positionOffset: [0, -50]
    }),
    [Ability_1.Ability.MAGMA_STORM]: onTargetScale1,
    [Ability_1.Ability.ABSORB]: onCaster({ depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL }),
    [Ability_1.Ability.GIGATON_HAMMER]: [
        onTarget({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
        shakeCamera({})
    ],
    [Ability_1.Ability.COUNTER]: onCasterScale2,
    [Ability_1.Ability.HIGH_HORSEPOWER]: onCaster({
        ability: Ability_1.Ability.COUNTER,
        scale: 2,
        tint: 0xc4a484
    }),
    [Ability_1.Ability.CITY_SHUTTLE]: onCaster({
        ability: "SMOKE_BROWN",
        scale: 2,
        tint: 0xc19a6b
    }),
    [Ability_1.Ability.SPECTRAL_THIEF]: [onTargetScale2, onCasterScale2],
    [Ability_1.Ability.SACRED_SWORD_IRON]: onTarget({
        ability: "SACRED_SWORD",
        origin: [0.5, 0.2],
        rotation: Math.PI
    }),
    [Ability_1.Ability.SACRED_SWORD_GRASS]: onTarget({
        ability: "SACRED_SWORD",
        origin: [0.5, 0.2],
        rotation: Math.PI,
        tint: 0xb0ffa0
    }),
    [Ability_1.Ability.SACRED_SWORD_CAVERN]: onTarget({
        ability: "SACRED_SWORD",
        origin: [0.5, 0.2],
        rotation: Math.PI,
        tint: 0xe0c0a0
    }),
    [Ability_1.Ability.SECRET_SWORD]: projectile({
        ability: "SACRED_SWORD",
        startCoords: "target",
        startPositionOffset: [0, -30],
        tint: 0xfff0b0,
        tweenProps: {
            angle: 540,
            duration: 400
        }
    }),
    [Ability_1.Ability.JUDGEMENT]: onTarget({ origin: [0.5, 1] }),
    [Ability_1.Ability.DIVE]: onCaster({ scale: 3, depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    [Ability_1.Ability.SMOKE_SCREEN]: onTargetScale3,
    [Ability_1.Ability.BARB_BARRAGE]: onTargetScale2,
    [Ability_1.Ability.OUTRAGE]: onTargetScale2,
    [Ability_1.Ability.KNOCK_OFF]: onTargetScale2,
    [Ability_1.Ability.SLASH]: onTargetScale2,
    [Ability_1.Ability.SHADOW_CLONE]: onCasterScale2,
    [Ability_1.Ability.ECHO]: onCaster({ origin: [0.5, 0.7] }),
    [Ability_1.Ability.UPROAR]: onCaster({
        ability: Ability_1.Ability.ECHO,
        origin: [0.5, 0.7],
        scale: 2
    }),
    [Ability_1.Ability.EXPLOSION]: [
        onCasterScale2,
        shakeCamera({ duration: 400, intensity: 0.01 })
    ],
    [Ability_1.Ability.CHLOROBLAST]: [
        onCaster({ ability: Ability_1.Ability.EXPLOSION, tint: 0x90ffd0 }),
        shakeCamera({ duration: 300, intensity: 0.015 })
    ],
    [Ability_1.Ability.CLANGOROUS_SOUL]: onCasterScale2,
    [Ability_1.Ability.GROWL]: onCaster({ oriented: true, rotation: -Math.PI / 2 }),
    [Ability_1.Ability.FAIRY_WIND]: onCasterScale2,
    [Ability_1.Ability.TAKE_HEART]: onCaster({
        ability: Ability_1.Ability.FAIRY_WIND,
        tint: 0xc0c0ff
    }),
    [Ability_1.Ability.HEART_SWAP]: [
        onCaster({
            ability: Ability_1.Ability.FAIRY_WIND,
            tint: 0xc0c0ff
        }),
        onTarget({
            ability: Ability_1.Ability.FAIRY_WIND,
            tint: 0xc0c0ff
        })
    ],
    [Ability_1.Ability.GRASSY_SURGE]: onCaster({
        ability: Ability_1.Ability.FAIRY_WIND,
        tint: 0x80ff80
    }),
    [Ability_1.Ability.ELECTRIC_SURGE]: onCaster({
        ability: Ability_1.Ability.FAIRY_WIND,
        tint: 0xffff80
    }),
    [Ability_1.Ability.PSYCHIC_SURGE]: onCaster({
        ability: Ability_1.Ability.FAIRY_WIND,
        tint: 0xc050ff
    }),
    [Ability_1.Ability.MISTY_SURGE]: onCaster({
        ability: Ability_1.Ability.FAIRY_WIND,
        tint: 0xffa0ff
    }),
    [Ability_1.Ability.RELIC_SONG]: onCasterScale2,
    [Ability_1.Ability.SING]: poppingIcon({ ability: Ability_1.Ability.RELIC_SONG, maxScale: 2 }),
    [Ability_1.Ability.DISARMING_VOICE]: onCaster({ ability: Ability_1.Ability.RELIC_SONG }),
    [Ability_1.Ability.LOVELY_KISS]: poppingIcon({
        textureKey: "attacks",
        ability: Animation_1.AttackSprite.FAIRY_MELEE,
        maxScale: 2,
        startPositionOffset: [0, -50]
    }),
    [Ability_1.Ability.CHARM]: poppingIcon({
        textureKey: "attacks",
        ability: Animation_1.AttackSprite.FAIRY_MELEE,
        maxScale: 3,
        startPositionOffset: [0, -50]
    }),
    [Ability_1.Ability.HIGH_JUMP_KICK]: onTargetScale2,
    [Ability_1.Ability.LUNGE]: onTarget({ ability: Ability_1.Ability.HIGH_JUMP_KICK }),
    [Ability_1.Ability.TROP_KICK]: onTargetScale2,
    [Ability_1.Ability.SHELL_TRAP]: onCaster({ ability: Ability_1.Ability.COUNTER }),
    [Ability_1.Ability.SHELL_SMASH]: onCaster({ ability: Ability_1.Ability.COUNTER }),
    [Ability_1.Ability.SONG_OF_DESIRE]: onTarget({ positionOffset: [0, -60] }),
    [Ability_1.Ability.CONFUSING_MIND]: [onTargetScale2, onCasterScale2],
    [Ability_1.Ability.DOUBLE_SHOCK]: [onTargetScale1, onCasterScale1],
    [Ability_1.Ability.FIRE_LASH]: onCaster({
        ability: Ability_1.Ability.FISHIOUS_REND,
        tint: 0xff6000,
        oriented: true,
        rotation: -Math.PI / 2,
        scale: 3
    }),
    [Ability_1.Ability.WONDER_GUARD]: onCaster({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    [Ability_1.Ability.X_SCISSOR]: onTargetScale2,
    [Ability_1.Ability.DEATH_WING]: onTargetScale2,
    [Ability_1.Ability.GEOMANCY]: onCaster({
        positionOffset: [0, -50],
        depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL
    }),
    [Ability_1.Ability.BLIZZARD]: onCaster({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    [Ability_1.Ability.OVERHEAT]: onCaster({
        ability: Ability_1.Ability.FIRE_BLAST,
        scale: 4,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.FIERY_WRATH]: onCaster({
        ability: Ability_1.Ability.FIRE_BLAST,
        scale: 4,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        tint: 0xb000ff
    }),
    ["LINK_CABLE_link"]: (args) => {
        const distance = (0, distance_1.distanceE)(args.positionX, args.positionY, args.targetX, args.targetY);
        return onCaster({
            ability: Ability_1.Ability.LINK_CABLE,
            origin: [0.5, 0],
            oriented: true,
            rotation: -Math.PI / 2,
            scale: [2, distance * 0.36]
        })(args);
    },
    ["LINK_CABLE_discharge"]: onCaster({ ability: Ability_1.Ability.DISCHARGE }),
    ["GRASS_HEAL"]: onCaster({ depth: depths_1.DEPTH.BOOST_BACK }),
    ["FLAME_HIT"]: onCaster({ depth: depths_1.DEPTH.HIT_FX_BELOW_POKEMON }),
    [Ability_1.Ability.TEETER_DANCE]: (args) => {
        args.pokemonsOnBoard.forEach((pkmUI) => {
            const coordinates = (0, utils_1.transformEntityCoordinates)(pkmUI.positionX, pkmUI.positionY, args.flip);
            addAbilitySprite(args.scene, Ability_1.Ability.TEETER_DANCE, args.ap, coordinates, {
                depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
            });
        });
    },
    [Ability_1.Ability.STRUGGLE_BUG]: onCaster({ ability: Ability_1.Ability.PSYCHIC }),
    [Ability_1.Ability.SPIN_OUT]: projectile({
        distance: 1,
        duration: 400,
        oriented: true,
        rotation: 0,
        scale: 4,
        destroyOnComplete: true
    }),
    [Ability_1.Ability.SPACIAL_REND]: (args) => addAbilitySprite(args.scene, args.ability, args.ap, (0, utils_1.transformEntityCoordinates)(4, args.targetY, args.flip), {
        scale: 4
    }),
    [Ability_1.Ability.PETAL_BLIZZARD]: onCasterScale3,
    [Ability_1.Ability.NIGHTMARE]: onCaster({ origin: [0.5, 1] }),
    [Ability_1.Ability.AQUA_TAIL]: projectile({
        ability: Ability_1.Ability.SPIN_OUT,
        tint: 0x80eeff,
        distance: 1,
        duration: 400,
        oriented: true,
        rotation: 0,
        scale: 3,
        destroyOnComplete: true
    }),
    [Ability_1.Ability.WAVE_SPLASH]: projectile({
        distance: 2,
        duration: 600,
        oriented: true,
        rotation: -Math.PI / 2,
        scale: 3,
        destroyOnComplete: true
    }),
    [Ability_1.Ability.RAPID_SPIN]: onTarget({ scale: 1.5 }),
    [Ability_1.Ability.COTTON_GUARD]: onCaster({ ability: Ability_1.Ability.COTTON_SPORE, scale: 3 }),
    ["FLOWER_TRICK_EXPLOSION"]: onCaster({ ability: "PUFF_PINK", scale: 3 }),
    [Ability_1.Ability.FLOWER_TRICK]: onSprite(({ targetSprite }) => targetSprite === null || targetSprite === void 0 ? void 0 : targetSprite.addFlowerTrick()),
    [Ability_1.Ability.ENTRAINMENT]: onSprite(({ targetSprite }) => targetSprite === null || targetSprite === void 0 ? void 0 : targetSprite.emoteAnimation()),
    [Ability_1.Ability.SCHOOLING]: onCaster({
        scale: 4,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.STONE_AXE]: onTargetScale2,
    [Ability_1.Ability.CRUSH_CLAW]: onTargetScale2,
    [Ability_1.Ability.ICE_SPINNER]: onTarget({ scale: 1 }),
    [Ability_1.Ability.METAL_CLAW]: onTarget({ ability: Ability_1.Ability.CRUSH_CLAW, scale: 2 }),
    [Ability_1.Ability.DRAGON_CLAW]: onTargetScale1,
    [Ability_1.Ability.PRECIPICE_BLADES]: [onCasterScale3, shakeCamera({ duration: 350 })],
    [Ability_1.Ability.OCTAZOOKA]: projectile({
        ability: Ability_1.Ability.ARMOR_CANNON,
        scale: 1,
        tint: 0x303030,
        hitAnim: onTarget({
            ability: Ability_1.Ability.SMOKE_SCREEN,
            tint: 0x303030,
            scale: 3
        })
    }),
    [Ability_1.Ability.WOOD_HAMMER]: onTarget({ scale: 1, origin: [0.5, 1] }),
    [Ability_1.Ability.TRICK_OR_TREAT]: onTarget({ origin: [0.5, 1] }),
    [Ability_1.Ability.HEADBUTT]: onTarget({ ability: "FIGHTING_KNOCKBACK" }),
    [Ability_1.Ability.DIZZY_PUNCH]: onTarget({ ability: "FIGHTING_KNOCKBACK" }),
    [Ability_1.Ability.HEAD_SMASH]: onTarget({
        ability: "FIGHTING_KNOCKBACK",
        tint: 0xffffa0
    }),
    [Ability_1.Ability.IRON_HEAD]: onTarget({
        ability: "FIGHTING_KNOCKBACK",
        tint: 0x8090a0
    }),
    [Ability_1.Ability.DOUBLE_EDGE]: onTarget({
        ability: "FIGHTING_KNOCKBACK",
        scale: 2,
        tint: 0x606060
    }),
    ["GROUND_GROW"]: onCaster({ scale: 1.5 }),
    ["FISHING"]: onCaster({
        ability: Ability_1.Ability.DIVE,
        scale: 1,
        origin: [0.5, -1],
        depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL
    }),
    ["SPAWN"]: onCaster({ origin: [0.5, -0.5], depth: depths_1.DEPTH.BOOST_BACK }),
    ["EVOLUTION"]: onCaster({ origin: [0.5, 0.4], depth: depths_1.DEPTH.BOOST_BACK }),
    ["HATCH"]: onCaster({
        ability: "SOFT_BOILED",
        origin: [0.5, 0.4],
        depth: depths_1.DEPTH.BOOST_BACK
    }),
    ["FLYING_TAKEOFF"]: onCaster({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    ["DIG"]: [
        onCaster({
            ability: "DIG",
            origin: [0, 1],
            scale: [1, 2],
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        }),
        onCaster({
            ability: "DIG",
            origin: [1, 1],
            flipX: true,
            delay: 250,
            scale: [1, 2],
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        })
    ],
    [Ability_1.Ability.SAND_SPIT]: [
        onCaster({ ability: "DIG", oriented: true, origin: [0, 1], scale: [3, 3] }),
        onCaster({ ability: "DIG", oriented: true, origin: [0, 1], scale: [3, -3] })
    ],
    [Ability_1.Ability.PLASMA_FISSION]: [
        (args) => {
            const distance = (0, distance_1.distanceM)(args.positionX, args.positionY, args.targetX, args.targetY);
            const speed = 0.01;
            const duration = distance / speed;
            return projectile({
                scale: 2,
                duration: duration
            })(args);
        }
    ],
    [Ability_1.Ability.PLASMA_TEMPEST]: projectile({
        ability: Ability_1.Ability.PLASMA_FISSION,
        scale: 3,
        duration: 500
    }),
    [Ability_1.Ability.DEEP_FREEZE]: projectile({
        ability: Ability_1.Ability.PLASMA_FISSION,
        scale: 2,
        duration: 300
    }),
    [Ability_1.Ability.PLASMA_FLASH]: projectile({
        ability: Ability_1.Ability.PLASMA_FISSION,
        scale: 2,
        duration: 300,
        tint: 0xffea00
    }),
    [Ability_1.Ability.HYPER_DRILL]: [
        projectile({
            startCoords: "target",
            startPositionOffset: [0, -40],
            duration: 1000,
            scale: 2,
            rotation: Math.PI / 2,
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        }),
        onTarget({
            ability: "DIG",
            origin: [0, 1],
            scale: [1, 2],
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        }),
        onTarget({
            ability: "DIG",
            origin: [1, 1],
            flipX: true,
            scale: [1, 2],
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        }),
        (args) => {
            var _a, _b, _c;
            const [x, y] = (0, utils_1.transformEntityCoordinates)(args.targetX, args.targetY, args.flip);
            const hole = (_a = args.delay) !== null && _a !== void 0 ? _a : 0;
            if (hole > 0) {
                const groundHole = args.scene.add
                    .sprite(x, y + 10, "ground_holes", `hole${hole}.png`)
                    .setScale(2)
                    .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL);
                (_b = args.scene.abilitiesVfxGroup) === null || _b === void 0 ? void 0 : _b.add(groundHole);
                args.scene.tweens.add({
                    alpha: 0,
                    delay: 15000,
                    duration: 2000,
                    targets: groundHole,
                    onComplete() {
                        groundHole.destroy();
                    }
                });
                (_c = args.scene.abilitiesVfxGroup) === null || _c === void 0 ? void 0 : _c.add(groundHole);
            }
        }
    ],
    [Ability_1.Ability.PURIFY]: [
        onTarget({ ability: Ability_1.Ability.SMOG, scale: 1 }),
        onCaster({ ability: Ability_1.Ability.MUD_BUBBLE, scale: 1 })
    ],
    [Ability_1.Ability.FOUL_PLAY]: onTarget({ ability: Ability_1.Ability.NIGHT_SLASH }),
    [Ability_1.Ability.WONDER_ROOM]: onTargetScale4,
    [Ability_1.Ability.DOUBLE_IRON_BASH]: onTarget({ ability: Ability_1.Ability.DRAIN_PUNCH }),
    [Ability_1.Ability.FOCUS_PUNCH]: onTargetScale2,
    ["FOCUS_PUNCH_CHARGE"]: onCaster({
        ability: "HYPER_BEAM_CHARGE",
        scale: 1,
        tint: 0xffc0c0
    }),
    ["FOCUS_PUNCH_EJECT"]: onSprite(({ targetSprite, orientation, positionX, positionY, scene, flip }) => {
        const [dx, dy] = orientation_1.OrientationVector[orientation];
        const [x, y] = (0, utils_1.transformEntityCoordinates)(positionX + dx * 8, positionY + dy * 8, flip);
        scene.tweens.add({
            targets: targetSprite,
            duration: 1000,
            delay: 100,
            x,
            y
        });
    }),
    [Ability_1.Ability.STONE_EDGE]: onCaster({ ability: Ability_1.Ability.TORMENT }),
    [Ability_1.Ability.MAGNET_PULL]: onCaster({
        ability: Ability_1.Ability.THUNDER_CAGE,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.BIDE]: onCaster({ ability: Ability_1.Ability.COUNTER, scale: 3 }),
    [Ability_1.Ability.SHORE_UP]: onCaster({ ability: Ability_1.Ability.PRECIPICE_BLADES }),
    [Ability_1.Ability.DRUM_BEATING]: onCaster({ positionOffset: [-20, -40], angle: -45 }),
    [Ability_1.Ability.TAUNT]: onCaster({ positionOffset: [0, -30] }),
    ["TAUNT_HIT"]: onTarget({ positionOffset: [0, -30] }),
    ["SMOKE_BALL"]: onCasterScale3,
    [Ability_1.Ability.EXPANDING_FORCE]: onCaster({
        ability: Ability_1.Ability.PSYCHIC,
        tint: 0xff90d0,
        scale: 3,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.TAILWIND]: onCaster({
        oriented: true,
        rotation: -Math.PI / 2,
        scale: 4,
        alpha: 0.5
    }),
    [Ability_1.Ability.SILVER_WIND]: projectile({ ability: Ability_1.Ability.EXTREME_SPEED }),
    [Ability_1.Ability.INFERNAL_PARADE]: projectile({
        ease: "Power2",
        tweenProps: { yoyo: true }
    }),
    [Ability_1.Ability.BLUE_FLARE]: projectile({ scale: 3 }),
    [Ability_1.Ability.GLACIATE]: projectile({ scale: 3, duration: 1000 }),
    [Ability_1.Ability.WHEEL_OF_FIRE]: projectile({
        ease: "Power2",
        tweenProps: { yoyo: true }
    }),
    [Ability_1.Ability.SHADOW_BALL]: projectile({
        duration: 1000,
        scale: 2
    }),
    [Ability_1.Ability.GRUDGE]: projectile({
        duration: 750,
        scale: 2,
        ability: Ability_1.Ability.DARK_HARVEST
    }),
    [Ability_1.Ability.FUSION_BOLT]: projectile({ duration: 750, scale: 3 }),
    [Ability_1.Ability.SOLAR_BEAM]: projectile({
        oriented: true,
        rotation: Math.PI / 2,
        origin: [0.5, 1]
    }),
    [Ability_1.Ability.HYDRO_STEAM]: onCaster({
        ability: Ability_1.Ability.SOLAR_BEAM,
        oriented: true,
        rotation: Math.PI / 2,
        origin: [0.5, 1],
        alpha: 0.8,
        tint: 0xa0c0ff,
        positionOffset: [0, -36],
        scale: [4, 2]
    }),
    [Ability_1.Ability.POWDER]: onCaster({
        ability: "PUFF_PINK",
        scale: 3
    }),
    [Ability_1.Ability.ORIGIN_PULSE]: (args) => projectile({
        startCoords: [0, args.targetY],
        endCoords: [8, args.targetY],
        scale: 3,
        duration: 1000
    })(args),
    ["SCALE_SHOT_CHARGE"]: (args) => projectile({
        ability: Ability_1.Ability.SCALE_SHOT,
        duration: args.delay,
        delay: 0,
        animOptions: { repeat: -1, duration: 300 }
    })(args),
    [Ability_1.Ability.SCALE_SHOT]: projectile({ duration: 400 }),
    [Ability_1.Ability.LAST_RESPECTS]: projectile({
        duration: 800,
        ability: "SMOKE_PURPLE",
        scale: 3
    }),
    ["SOLAR_BLADE_CHARGE"]: projectile({
        ability: Ability_1.Ability.RECOVER,
        animOptions: { repeat: -1, duration: 500 },
        duration: 2000,
        scale: 3
    }),
    [Ability_1.Ability.GOLD_RUSH]: projectile({ duration: 1000 }),
    [Ability_1.Ability.MAKE_IT_RAIN]: projectile({
        ability: Ability_1.Ability.GOLD_RUSH,
        duration: 1000,
        scale: 3
    }),
    [Ability_1.Ability.MUD_SHOT]: projectile({ scale: 4, duration: 350 }),
    [Ability_1.Ability.MOONBLAST]: (args) => projectile({
        scale: 1,
        duration: 200,
        delay: args.delay,
        tweenProps: { scale: 2 },
        hitAnim: onTarget({ ability: "PUFF_PINK" })
    })(args),
    [Ability_1.Ability.POLTERGEIST]: projectile({
        scale: 3,
        duration: 750,
        animOptions: { repeat: -1 },
        startPositionOffset: [0, -50]
    }),
    [Ability_1.Ability.ZAP_CANNON]: projectile({ scale: 3, duration: 500 }),
    [Ability_1.Ability.ELECTRO_BALL]: (args) => {
        var _a;
        return projectile({
            ability: Ability_1.Ability.ZAP_CANNON,
            duration: (_a = args.delay) !== null && _a !== void 0 ? _a : 300,
            hitAnim: onTarget({ ability: Ability_1.Ability.DISCHARGE, scale: 1 })
        })(args);
    },
    [Ability_1.Ability.SPARKLING_ARIA]: projectile({ scale: 3, duration: 1000 }),
    ["FLYING_SKYDIVE"]: skyfall({}),
    [Ability_1.Ability.SKY_ATTACK]: skyfall({ scale: 1.5, duration: 500 }),
    [Ability_1.Ability.SKY_ATTACK_SHADOW]: skyfall({ scale: 1.5, duration: 500 }),
    [Ability_1.Ability.FLYING_PRESS]: skyfall({
        hitAnim: onTarget({ ability: Ability_1.Ability.HEAVY_SLAM })
    }),
    [Ability_1.Ability.ORDER_UP]: [
        skyfall({
            scale: 1,
            ease: phaser_1.default.Math.Easing.Bounce.Out,
            duration: 1000
        }),
        onTarget({ ability: Ability_1.Ability.HEAVY_SLAM, scale: 1, delay: 300 })
    ],
    [Ability_1.Ability.SUNSTEEL_STRIKE]: skyfall({ hitAnim: shakeCamera({}), scale: 1 }),
    ["COMET_CRASH"]: skyfall({
        ability: Ability_1.Ability.SUNSTEEL_STRIKE,
        scale: 0.5,
        duration: 500,
        tint: 0x2020ff
    }),
    [Ability_1.Ability.ACROBATICS]: (args) => projectile({
        startCoords: [args.targetX + 1, args.targetY + 1],
        duration: 300
    })(args),
    [Ability_1.Ability.ROLLOUT]: projectile({ duration: 1000 }),
    [Ability_1.Ability.ICE_BALL]: projectile({ duration: (8 * 1000) / 15 }),
    [Ability_1.Ability.PRESENT]: projectile({ duration: 1000 }),
    [Ability_1.Ability.TOPSY_TURVY]: projectile({}),
    [Ability_1.Ability.WHIRLWIND]: projectile({ duration: 1000 }),
    [Ability_1.Ability.ACID_SPRAY]: projectile({ duration: 1000 }),
    [Ability_1.Ability.WATER_PULSE]: projectile({ duration: 1000, scale: 3 }),
    [Ability_1.Ability.POWER_WASH]: skyfall({
        ability: Ability_1.Ability.PLASMA_FISSION,
        scale: 2,
        duration: 400,
        hitAnim: onTarget({ ability: "SMOKE_BLACK" })
    }),
    [Ability_1.Ability.GRAV_APPLE]: skyfall({
        ability: Ability_1.Ability.NUTRIENTS,
        scale: 3,
        duration: 400,
        hitAnim: onTarget({ ability: "PUFF_RED" })
    }),
    [Ability_1.Ability.NUTRIENTS]: projectile({
        scale: 2,
        duration: 400,
        hitAnim: onTarget({ ability: "PUFF_GREEN" })
    }),
    [Ability_1.Ability.SYRUP_BOMB]: projectile({
        ability: Ability_1.Ability.NUTRIENTS,
        scale: 2,
        duration: 400,
        hitAnim: onTarget({ ability: "PUFF_RED" })
    }),
    [Ability_1.Ability.APPLE_ACID]: projectile({
        ability: Ability_1.Ability.NUTRIENTS,
        scale: 2,
        duration: 400,
        hitAnim: onTarget({ ability: "PUFF_RED" })
    }),
    [Ability_1.Ability.FICKLE_BEAM]: projectile({ duration: 400 }),
    [Ability_1.Ability.POLLEN_PUFF]: projectile({
        ability: Ability_1.Ability.HEAL_ORDER,
        duration: 1000
    }),
    [Ability_1.Ability.PSYSTRIKE]: projectile({ duration: 1000 }),
    [Ability_1.Ability.EGG_BOMB]: projectile({ duration: 800, scale: 3 }),
    [Ability_1.Ability.SPARK]: projectile({ duration: 250 }),
    [Ability_1.Ability.SUCTION_HEAL]: projectile({
        scale: 3,
        startCoords: "target",
        endCoords: "caster"
    }),
    [Ability_1.Ability.HORN_LEECH]: [
        projectile({
            ability: Ability_1.Ability.SUCTION_HEAL,
            tint: 0x80ff90,
            scale: 3,
            startCoords: "target",
            endCoords: "caster"
        }),
        onTarget({ ability: "FIGHTING_KNOCKBACK", scale: 2, tint: 0x80ff90 })
    ],
    [Ability_1.Ability.ANCIENT_POWER]: projectile({ duration: 1000 }),
    [Ability_1.Ability.MOON_DREAM]: projectile({
        startPositionOffset: [0, -100],
        endCoords: "caster",
        scale: 1.5,
        duration: 500,
        tweenProps: { scale: 0.5 }
    }),
    [Ability_1.Ability.MAGICAL_LEAF]: [
        projectile({}),
        onCaster({ ability: "MAGICAL_LEAF_CHARGE" })
    ],
    [Ability_1.Ability.NATURAL_GIFT]: projectile({ duration: 1000 }),
    [Ability_1.Ability.NIGHT_SHADE]: projectile({ duration: 1000 }),
    [Ability_1.Ability.PARABOLIC_CHARGE]: projectile({ duration: 750 }),
    [Ability_1.Ability.ARMOR_CANNON]: (args) => { var _a; return projectile({ duration: 400, scale: 2 - ((_a = args.delay) !== null && _a !== void 0 ? _a : 0) * 0.5 })(args); },
    [Ability_1.Ability.FISSURE]: [
        projectile({
            scale: 1,
            tweenProps: { scale: 3, yoyo: true },
            startCoords: "target",
            endCoords: "target",
            duration: 800,
            ease: phaser_1.default.Math.Easing.Sine.InOut,
            depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL
        })
    ],
    [Ability_1.Ability.ERUPTION]: projectile({
        startCoords: "target",
        startPositionOffset: [72, 72]
    }),
    [Ability_1.Ability.THOUSAND_ARROWS]: (args) => projectile({
        startCoords: [args.targetX, config_1.BOARD_HEIGHT - 1, false],
        scale: 4,
        duration: 300
    })(args),
    [Ability_1.Ability.TRI_ATTACK]: projectile({}),
    [Ability_1.Ability.AURA_WHEEL]: projectile({ scale: 1 }),
    [Ability_1.Ability.PSYCHIC]: projectile({ duration: 1000, scale: 2 }),
    [Ability_1.Ability.PYRO_BALL]: projectile({
        scale: 1,
        tweenProps: { scale: 2 },
        duration: 500
    }),
    [Ability_1.Ability.SLUDGE_WAVE]: projectile({
        scale: 1,
        duration: 800,
        tweenProps: { scale: 2 },
        hitAnim: onTarget({
            ability: Ability_1.Ability.DIVE,
            scale: 3,
            tint: 0xf060a0,
            depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL
        })
    }),
    [Ability_1.Ability.LAVA_PLUME]: projectile({
        ability: Ability_1.Ability.SLUDGE_WAVE,
        scale: 1,
        duration: 800,
        tint: 0xffc020,
        tweenProps: { scale: 2 },
        hitAnim: onTarget({ ability: "FLAME_HIT", scale: 2 })
    }),
    [Ability_1.Ability.PRISMATIC_LASER]: (args) => projectile({
        startCoords: [args.targetX, args.flip ? config_1.BOARD_HEIGHT : 0, args.flip],
        endCoords: [args.targetX, args.flip ? 0 : config_1.BOARD_HEIGHT, args.flip],
        scale: 5
    })(args),
    ["GULP_MISSILE/pikachu"]: (args) => projectile({
        duration: (0, distance_1.distanceM)(args.positionX, args.positionY, args.targetX, args.targetY) *
            150,
        oriented: true,
        rotation: -Math.PI / 2
    })(args),
    ["GULP_MISSILE/arrokuda"]: (args) => projectile({
        duration: (0, distance_1.distanceM)(args.positionX, args.positionY, args.targetX, args.targetY) *
            150,
        oriented: true,
        rotation: -Math.PI / 2
    })(args),
    [Ability_1.Ability.DRAGON_DARTS]: projectile({
        scale: 1,
        oriented: true,
        positionOffset: [0, -30],
        duration: 400,
        rotation: -Math.PI / 2,
        hitAnim: onTarget({ ability: "PUFF_PINK", scale: 1 })
    }),
    [Ability_1.Ability.ASTRAL_BARRAGE]: (args) => {
        const pokemonSprite = args.pokemonsOnBoard.find((p) => p.positionX === args.positionX && p.positionY === args.positionY);
        projectile({
            scale: 1,
            oriented: true,
            startPosition: pokemonSprite
                ? [pokemonSprite.x, pokemonSprite.y]
                : undefined,
            rotation: -Math.PI
        })(args);
    },
    [Ability_1.Ability.MACH_PUNCH]: poppingIcon({
        ability: "FIGHTING/FIST",
        maxScale: 2,
        startCoords: "target"
    }),
    [Ability_1.Ability.MEGA_PUNCH]: poppingIcon({
        ability: "FIGHTING/FIST",
        maxScale: 3,
        startCoords: "target"
    }),
    [Ability_1.Ability.MAWASHI_GERI]: poppingIcon({
        ability: "FIGHTING/FOOT",
        maxScale: 2,
        startCoords: "target"
    }),
    [Ability_1.Ability.THUNDEROUS_KICK]: poppingIcon({
        ability: "FIGHTING/FOOT",
        maxScale: 3,
        startPositionOffset: [0, -20],
        startCoords: "target"
    }),
    [Ability_1.Ability.TRIPLE_KICK]: [
        poppingIcon({
            ability: "FIGHTING/PAW",
            scale: 1.5,
            maxScale: 2,
            duration: 250,
            startPositionOffset: [50, 0],
            startCoords: "target"
        }),
        poppingIcon({
            ability: "FIGHTING/PAW",
            scale: 1.5,
            maxScale: 2,
            duration: 250,
            delay: 200,
            startPositionOffset: [-25, 43],
            startCoords: "target"
        }),
        poppingIcon({
            ability: "FIGHTING/PAW",
            scale: 1.5,
            maxScale: 2,
            duration: 250,
            delay: 400,
            startPositionOffset: [-25, -43],
            startCoords: "target"
        })
    ],
    [Ability_1.Ability.STRING_SHOT]: projectile({
        duration: 1000,
        ease: phaser_1.default.Math.Easing.Cubic.Out,
        alpha: 0.5,
        scale: 0.25,
        tweenProps: { scale: 2, alpha: 0.9 }
    }),
    [Ability_1.Ability.STICKY_WEB]: projectile({
        duration: 1000,
        ease: phaser_1.default.Math.Easing.Cubic.Out,
        alpha: 0.5,
        scale: 0.25,
        tint: 0xccffcc,
        tweenProps: { scale: 2, alpha: 1 }
    }),
    [Ability_1.Ability.ENTANGLING_THREAD]: projectile({
        ability: Ability_1.Ability.STICKY_WEB,
        duration: 1200,
        ease: phaser_1.default.Math.Easing.Cubic.Out,
        alpha: 0.5,
        scale: 0.25,
        tweenProps: { scale: 3, alpha: 0.9 }
    }),
    [Ability_1.Ability.AERIAL_ACE]: (args) => projectile({ startCoords: [args.targetX, 8, false] })(args),
    [Ability_1.Ability.SPIKES]: projectile({
        scale: 1,
        oriented: true,
        rotation: -Math.PI / 2
    }),
    ["TOXIC_SPIKES"]: projectile({
        scale: 2,
        oriented: true,
        rotation: -Math.PI / 2
    }),
    [Ability_1.Ability.TORCH_SONG]: projectile({ oriented: true, rotation: -Math.PI / 2 }),
    ["CURSE_EFFECT"]: tweenAnimation({
        textureKey: "status",
        duration: 1500,
        endCoords: "caster",
        endPositionOffset: [0, -80]
    }),
    [Ability_1.Ability.MAGNET_BOMB]: projectile({ duration: 400 }),
    ["ELECTRO_SHOT_CHARGE"]: onCaster({
        ability: Ability_1.Ability.MAGNET_BOMB,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        animOptions: { repeat: 5 }
    }),
    [Ability_1.Ability.ELECTRO_SHOT]: onCaster({
        scale: 4,
        origin: [0, 0.5],
        oriented: true,
        animOptions: { repeat: 3 }
    }),
    [Ability_1.Ability.GUNK_SHOT]: projectile({
        duration: 700,
        ease: "Power2",
        hitAnim: onTarget({
            ability: Ability_1.Ability.DIVE,
            scale: 1.5,
            tint: 0xf060a0,
            depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL
        })
    }),
    [Ability_1.Ability.TOXIC]: projectile({
        ability: Ability_1.Ability.GUNK_SHOT,
        scale: 1.5,
        duration: 500,
        tint: 0xc0ffa0,
        hitAnim: onTarget({
            ability: Ability_1.Ability.DIVE,
            scale: 1.5,
            tint: 0xc06080,
            depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL
        })
    }),
    [Ability_1.Ability.CHAIN_CRAZED]: onCaster({
        ability: Ability_1.Ability.STUN_SPORE,
        tint: 0xff60ff,
        scale: 2
    }),
    [Ability_1.Ability.MALIGNANT_CHAIN]: (args) => {
        const distance = (0, distance_1.distanceE)(args.positionX, args.positionY, args.targetX, args.targetY);
        return tweenAnimation({
            scale: [1, 0],
            origin: [0.5, 0],
            oriented: true,
            rotation: -Math.PI / 2,
            duration: 600,
            tweenProps: {
                scaleY: distance * 1.2
            }
        })(args);
    },
    [Ability_1.Ability.SURF]: projectile({
        duration: 600,
        oriented: true,
        rotation: -(3 / 4) * Math.PI
    }),
    [Ability_1.Ability.JET_PUNCH]: [
        projectile({
            ability: Ability_1.Ability.SURF,
            duration: 300,
            oriented: true,
            rotation: -(3 / 4) * Math.PI,
            ease: phaser_1.default.Math.Easing.Quadratic.Out
        }),
        projectile({
            ability: "FIGHTING/FIST",
            duration: 200,
            oriented: false,
            scale: 2,
            tweenProps: { scale: 3 },
            tint: 0xa0c0ff,
            ease: phaser_1.default.Math.Easing.Quadratic.Out
        })
    ],
    [Ability_1.Ability.BURNING_JEALOUSY]: projectile({
        duration: 400
    }),
    [Ability_1.Ability.STRENGTH]: projectile({
        duration: 450,
        startCoords: "target",
        startPositionOffset: [0, -150],
        ease: phaser_1.default.Math.Easing.Quadratic.In
    }),
    [Ability_1.Ability.DRAGON_PULSE]: projectile({
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        tweenProps: { scale: 4 }
    }),
    [Ability_1.Ability.FREEZE_DRY]: projectile({
        duration: 250,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        destroyOnComplete: true,
        destroyOnTweenComplete: false
    }),
    [Ability_1.Ability.BOLT_BEAK]: projectile({
        duration: 250,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.DARK_LARIAT]: projectile({ depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON }),
    [Ability_1.Ability.FIRESTARTER]: projectile({
        duration: 800,
        startCoords: "target",
        startPositionOffset: [0, -25],
        endPositionOffset: [0, +25]
    }),
    [Ability_1.Ability.GLAIVE_RUSH]: projectile({
        scale: 3,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        oriented: true,
        rotation: -Math.PI / 2
    }),
    [Ability_1.Ability.PSYCHO_SHIFT]: [
        projectile({
            ability: Ability_1.Ability.PRESENT,
            duration: 300,
            tweenProps: { yoyo: true, repeat: 1 }
        }),
        projectile({
            ability: Ability_1.Ability.PRESENT,
            duration: 300,
            tweenProps: { yoyo: true, repeat: 1 },
            startCoords: "target",
            endCoords: "caster"
        })
    ],
    [Ability_1.Ability.HYPER_VOICE]: (args) => projectile({
        startCoords: [0, args.targetY, args.flip],
        endCoords: [config_1.BOARD_WIDTH, args.targetY, args.flip],
        duration: 1000
    })(args),
    [Ability_1.Ability.WHIRLPOOL]: (0, array_1.range)(1, 3).map((i) => projectile({
        duration: 1000,
        delay: i * 100,
        scale: 0.5,
        ease: "Power1",
        tweenProps: { scale: 2 }
    })),
    [Ability_1.Ability.HEAT_CRASH]: projectile({
        ability: Ability_1.Ability.SUNSTEEL_STRIKE,
        oriented: true,
        rotation: -Math.PI / 2,
        scale: 0.5,
        duration: 300,
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
    }),
    [Ability_1.Ability.HIDDEN_POWER_A]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_B]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_C]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_D]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_E]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_F]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_G]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_H]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_I]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_J]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_K]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_L]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_M]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_N]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_O]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_P]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_Q]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_R]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_S]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_T]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_U]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_V]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_W]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_X]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_Y]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_Z]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_QM]: hiddenPowerAnimation,
    [Ability_1.Ability.HIDDEN_POWER_EM]: hiddenPowerAnimation,
    [Ability_1.Ability.ICY_WIND]: projectile({ duration: 2000, distance: 12 }),
    [Ability_1.Ability.POWDER_SNOW]: projectile({ duration: 1600, distance: 12 }),
    [Ability_1.Ability.EERIE_SPELL]: projectile({
        duration: 400,
        ability: Ability_1.Ability.FISSURE,
        tint: 0xff00bf
    }),
    [Ability_1.Ability.HURRICANE]: projectile({ duration: 1000, distance: 5 }),
    [Ability_1.Ability.DRILL_RUN]: projectile({
        ability: Ability_1.Ability.HURRICANE,
        duration: 500,
        distance: 1,
        oriented: true,
        rotation: -Math.PI / 2
    }),
    [Ability_1.Ability.DRILL_PECK]: projectile({
        ability: Ability_1.Ability.HURRICANE,
        duration: 500,
        distance: 1,
        oriented: true,
        rotation: -Math.PI / 2
    }),
    [Ability_1.Ability.ROAR]: projectile({
        ability: Ability_1.Ability.WHIRLWIND,
        oriented: true,
        rotation: Math.PI / 2,
        duration: 400,
        distance: 2
    }),
    [Ability_1.Ability.FLEUR_CANNON]: projectile({ duration: 2000, distance: 8 }),
    [Ability_1.Ability.SANDSEAR_STORM]: projectile({ duration: 2000, distance: 12 }),
    [Ability_1.Ability.WILDBOLT_STORM]: projectile({ duration: 2000, distance: 12 }),
    [Ability_1.Ability.BLEAKWIND_STORM]: projectile({ duration: 2000, distance: 12 }),
    [Ability_1.Ability.SPRINGTIDE_STORM]: projectile({ duration: 2000, distance: 12 }),
    [Ability_1.Ability.SOLAR_BLADE]: projectile({
        distance: 1,
        scale: 2,
        oriented: true,
        rotation: -Math.PI / 2,
        duration: 400
    }),
    [Ability_1.Ability.DRAGON_BREATH]: onCaster({
        oriented: true,
        origin: [0.5, 1],
        rotation: Math.PI / 2
    }),
    [Ability_1.Ability.BONEMERANG]: projectile({
        distance: 5,
        duration: 1000,
        ease: "Power2",
        tweenProps: { yoyo: true }
    }),
    [Ability_1.Ability.SHADOW_BONE]: projectile({
        ability: Ability_1.Ability.BONEMERANG,
        distance: 5,
        duration: 1000,
        tint: 0x301030
    }),
    [Ability_1.Ability.AURORA_BEAM]: onCaster({
        ability: Ability_1.Ability.MOONGEIST_BEAM,
        origin: [0.5, 0],
        scale: [1, 2],
        oriented: true,
        rotation: -Math.PI / 2
    }),
    [Ability_1.Ability.SPIRIT_SHACKLE]: projectile({
        distance: 8,
        scale: 1,
        duration: 2000,
        oriented: true
    }),
    [Ability_1.Ability.RAZOR_LEAF]: projectile({ distance: 8, duration: 2000 }),
    [Ability_1.Ability.PSYCHO_CUT]: (0, array_1.range)(1, 3).map((i) => projectile({
        distance: 8,
        duration: 1000,
        oriented: true,
        rotation: +Math.PI / 2,
        tweenProps: { delay: i * 100 }
    })),
    [Ability_1.Ability.MIST_BALL]: projectile({
        distance: 4,
        duration: 1000,
        scale: 1,
        ease: "Power2",
        tweenProps: { yoyo: true }
    }),
    [Ability_1.Ability.LUSTER_PURGE]: projectile({
        distance: 4,
        duration: 1000,
        scale: 1,
        ease: "Power2",
        tweenProps: { yoyo: true }
    }),
    [Ability_1.Ability.STEALTH_ROCKS]: projectile({
        distance: 1,
        scale: 2,
        depth: depths_1.DEPTH.ABILITY_GROUND_LEVEL
    }),
    [Ability_1.Ability.SPIKY_SHIELD]: orientation_1.OrientationArray.map((orientation) => projectile({
        orientation,
        distance: 8,
        ability: "SPIKE",
        oriented: true,
        rotation: -Math.PI / 2,
        duration: 1000
    })),
    [Ability_1.Ability.SHELTER]: onCaster({
        ability: Ability_1.Ability.REFLECT,
        tint: 0xa080ff,
        positionOffset: [0, -15],
        scale: 2.5,
        animOptions: { repeat: 1 }
    }),
    [Ability_1.Ability.AURASPHERE]: projectile({
        distance: 8,
        duration: 2000,
        oriented: true
    }),
    [Ability_1.Ability.ULTRA_THRUSTERS]: [
        onCaster({ ability: Ability_1.Ability.LANDS_WRATH }),
        (args) => {
            const [dx, dy] = orientation_1.OrientationVector[args.orientation];
            const coordinatesTarget = (0, utils_1.transformEntityCoordinates)(args.targetX, args.targetY, args.flip);
            return tweenAnimation({
                ability: Ability_1.Ability.MYSTICAL_FIRE,
                startCoords: [args.positionX, args.positionY, args.flip],
                startPositionOffset: [dx * 32, dy * 32],
                tweenProps: { x: coordinatesTarget[0], y: coordinatesTarget[1] },
                scale: 2,
                origin: [0.5, 1],
                duration: 750,
                oriented: true,
                rotation: -Math.PI / 2
            })(args);
        }
    ],
    [Ability_1.Ability.BONE_ARMOR]: orientation_1.OrientationArray.map((orientation) => projectile({
        orientation,
        distance: 0.5,
        ability: Ability_1.Ability.BONEMERANG,
        startCoords: "target",
        endCoords: "caster",
        duration: 1000
    })),
    [Ability_1.Ability.CORE_ENFORCER]: [
        onTarget({ positionOffset: [-96, -96], origin: [0, 0.5] }),
        onTarget({
            positionOffset: [+100, -90],
            origin: [0, 0.5],
            rotation: (Math.PI * 3) / 4,
            delay: 100
        }),
        onTarget({ positionOffset: [-96, +96], origin: [0, 0.5], delay: 200 })
    ],
    [Ability_1.Ability.FOLLOW_ME]: poppingIcon({ maxScale: 1, tweenProps: { yoyo: true } }),
    [Ability_1.Ability.AFTER_YOU]: poppingIcon({ maxScale: 1, tweenProps: { yoyo: true } }),
    [Ability_1.Ability.HYPERSPACE_FURY]: (args) => {
        let nbHits = Number(args.orientation);
        if (isNaN(nbHits) || nbHits < 1 || nbHits > 12) {
            nbHits = 4;
        }
        for (let i = 0; i < nbHits; i++) {
            onTarget({
                scale: 1,
                positionOffset: [(0, random_1.randomBetween)(-30, +30), (0, random_1.randomBetween)(-30, +30)],
                rotation: -Math.PI / 2,
                tint: 0xc080ff,
                delay: i * 150
            })(args);
        }
    },
    [Ability_1.Ability.WATER_SHURIKEN]: (args) => {
        const orientations = [
            args.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(args.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(args.orientation) + 7) % 8]
        ];
        orientations.forEach((orientation) => {
            projectile({ orientation, distance: 8, duration: 1000 })(args);
        });
    },
    [Ability_1.Ability.SHADOW_FORCE]: (args) => {
        orientation_1.OrientationArray.forEach((orientation) => {
            projectile({
                orientation,
                distance: 1,
                ability: "SMOKE_BLACK",
                duration: 1000
            })(args);
        });
    },
    [Ability_1.Ability.SNIPE_SHOT]: (args) => {
        var _a;
        const targetAngle = (0, number_1.angleBetween)([args.positionX, args.positionY], [args.targetX, args.targetY]);
        const orientationAngle = (_a = orientation_1.OrientationAngle[args.orientation]) !== null && _a !== void 0 ? _a : 0;
        const coordinates = (0, utils_1.transformEntityCoordinates)(args.positionX, args.positionY, args.flip);
        projectile({
            ability: "SNIPE_SHOT/projectile",
            scale: 3,
            duration: 1000,
            rotation: -targetAngle,
            endCoords: [
                args.positionX + Math.round(Math.cos(targetAngle) * 10),
                args.positionY + Math.round(Math.sin(targetAngle) * 10),
                args.flip
            ]
        })(args);
        staticAnimation({
            ability: "SNIPE_SHOT/shoot",
            x: coordinates[0] + Math.round(Math.cos(orientationAngle) * 30),
            y: coordinates[1] - Math.round(Math.sin(orientationAngle) * 50) - 10,
            scale: 1,
            oriented: true,
            rotation: Math.PI / 2,
            origin: [0.5, 1]
        })(args);
    },
    [Ability_1.Ability.GLACIAL_LANCE]: (args) => {
        var _a;
        const targetAngle = (0, number_1.angleBetween)([args.positionX, args.positionY], [args.targetX, args.targetY]);
        const orientationAngle = (_a = orientation_1.OrientationAngle[args.orientation]) !== null && _a !== void 0 ? _a : 0;
        const coordinates = (0, utils_1.transformEntityCoordinates)(args.positionX, args.positionY, args.flip);
        projectile({
            ability: Ability_1.Ability.GLACIAL_LANCE,
            scale: 1.5,
            duration: 500,
            rotation: -targetAngle - Math.PI / 2,
            hitAnim: onTarget({ ability: Ability_1.Ability.SHEER_COLD, scale: 2 })
        })(args);
        staticAnimation({
            ability: "SNIPE_SHOT/shoot",
            x: coordinates[0] + Math.round(Math.cos(orientationAngle) * 30),
            y: coordinates[1] - Math.round(Math.sin(orientationAngle) * 50) - 10,
            scale: 1,
            oriented: true,
            rotation: Math.PI / 2,
            origin: [0.5, 0.6]
        })(args);
    },
    [Ability_1.Ability.DARK_HARVEST]: ({ scene, positionX, positionY, flip, ap }) => {
        var _a, _b;
        const darkHarvestGroup = scene.add.group();
        const [x, y] = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
        for (let i = 0; i < 5; i++) {
            const darkHarvestSprite = (_a = scene.add
                .sprite(0, 0, "abilities", `${Ability_1.Ability.DARK_HARVEST}/000.png`)) === null || _a === void 0 ? void 0 : _a.setScale(2 * (1 + ap / 200));
            darkHarvestSprite.anims.play({
                key: Ability_1.Ability.DARK_HARVEST,
                frameRate: 8
            });
            darkHarvestGroup.add(darkHarvestSprite);
            (_b = scene.abilitiesVfxGroup) === null || _b === void 0 ? void 0 : _b.add(darkHarvestSprite);
        }
        const circle = new phaser_1.default.Geom.Circle(x, y, 48);
        phaser_1.default.Actions.PlaceOnCircle(darkHarvestGroup.getChildren(), circle);
        scene.tweens.add({
            targets: circle,
            radius: 96,
            ease: phaser_1.default.Math.Easing.Quartic.Out,
            duration: 1000,
            onUpdate: function (tween) {
                phaser_1.default.Actions.RotateAroundDistance(darkHarvestGroup.getChildren(), { x, y }, 0.08, circle.radius);
            },
            onComplete: function () {
                darkHarvestGroup.destroy(true, true);
            }
        });
    },
    [Ability_1.Ability.TWISTER]: ({ scene, positionX, positionY, flip, ap }) => {
        var _a, _b, _c;
        let [x, y] = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
        y -= 30;
        const tornadoSprite = (_b = (_a = scene.add
            .sprite(0, 0, "abilities", `${Ability_1.Ability.TWISTER}/000.png`)) === null || _a === void 0 ? void 0 : _a.setScale(2 * (1 + ap / 200))) === null || _b === void 0 ? void 0 : _b.setTint(0xc0fff0);
        tornadoSprite.anims.play({
            key: Ability_1.Ability.TWISTER,
            frameRate: 15
        });
        (_c = scene.abilitiesVfxGroup) === null || _c === void 0 ? void 0 : _c.add(tornadoSprite);
        const circle = new phaser_1.default.Geom.Circle(x, y, 48);
        phaser_1.default.Actions.PlaceOnCircle([tornadoSprite], circle, Math.PI);
        scene.tweens.add({
            targets: circle,
            radius: 96,
            ease: phaser_1.default.Math.Easing.Quartic.Out,
            duration: 1000,
            onUpdate: function (tween) {
                phaser_1.default.Actions.RotateAroundDistance([tornadoSprite], { x, y }, 0.05, circle.radius);
            },
            onComplete: function () {
                tornadoSprite.destroy(true);
            }
        });
    },
    [Ability_1.Ability.TRIMMING_MOWER]: ({ scene, positionX, positionY, flip, ap }) => {
        var _a, _b;
        const group = scene.add.group();
        const [x, y] = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
        for (let i = 0; i < 5; i++) {
            const sprite = (_a = scene.add
                .sprite(0, 0, "abilities", `${Ability_1.Ability.DARK_HARVEST}/000.png`)) === null || _a === void 0 ? void 0 : _a.setScale(2 * (1 + ap / 200));
            sprite.setTint(0x90ee90);
            sprite.anims.play({
                key: Ability_1.Ability.PLASMA_FISSION,
                frameRate: 8
            });
            group.add(sprite);
            (_b = scene.abilitiesVfxGroup) === null || _b === void 0 ? void 0 : _b.add(sprite);
        }
        const circle = new phaser_1.default.Geom.Circle(x, y, 48);
        phaser_1.default.Actions.PlaceOnCircle(group.getChildren(), circle);
        scene.tweens.add({
            targets: circle,
            radius: 96,
            ease: phaser_1.default.Math.Easing.Quartic.Out,
            duration: 1000,
            onUpdate: function (tween) {
                phaser_1.default.Actions.RotateAroundDistance(group.getChildren(), { x, y }, 0.08, circle.radius);
            },
            onComplete: function () {
                group.destroy(true, true);
            }
        });
    },
    [Ability_1.Ability.SHADOW_CLAW]: (args) => {
        const orientations = [
            args.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(args.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(args.orientation) + 7) % 8]
        ];
        orientations.forEach((orientation) => {
            projectile({
                scale: 2,
                orientation,
                distance: 1,
                duration: 500,
                ability: "DARK_HARVEST"
            })(args);
        });
    },
    [Ability_1.Ability.DECORATE]: ({ scene, targetX, targetY, flip, ap }) => {
        const decorateGroup = scene.add.group();
        const [x, y] = (0, utils_1.transformEntityCoordinates)(targetX, targetY, flip);
        Item_1.Sweets.forEach((sweet) => {
            var _a;
            const sweetSprite = (_a = scene.add
                .sprite(0, 0, "item", `${sweet}.png`)) === null || _a === void 0 ? void 0 : _a.setScale(0.3 * (1 + (0, number_1.max)(1000)(ap) / 200));
            decorateGroup.add(sweetSprite);
        });
        const circle = new phaser_1.default.Geom.Circle(x, y, 30);
        phaser_1.default.Actions.PlaceOnCircle(decorateGroup.getChildren(), circle);
        scene.tweens.add({
            targets: circle,
            radius: 60,
            ease: phaser_1.default.Math.Easing.Quartic.Out,
            duration: 1000,
            onUpdate: function (tween) {
                phaser_1.default.Actions.RotateAroundDistance(decorateGroup.getChildren(), { x, y }, 0.08, circle.radius);
            },
            onComplete: function () {
                decorateGroup.destroy(true, true);
            }
        });
    },
    ["HAIL_PROJECTILE"]: projectile({
        startCoords: "target",
        startPositionOffset: [+60, -240],
        scale: 1,
        duration: 800,
        delay: (0, random_1.randomBetween)(0, 300),
        hitAnim: onTarget({ ability: Ability_1.Ability.SHEER_COLD, scale: 1 })
    }),
    [Ability_1.Ability.INFESTATION]: (args) => {
        const { positionX, positionY, targetX, targetY } = args;
        if (positionY === 8 || positionY === 0) {
            const duration = (0, distance_1.distanceM)(positionX, positionY, targetX, targetY) * 150;
            projectile({ ability: "HEAL_ORDER", scale: 3, duration })(args);
        }
        else {
            onTarget({ ability: "ATTACK_ORDER" })(args);
        }
    },
    ["TIDAL_WAVE"]: tidalWaveAnimation,
    [Ability_1.Ability.COLUMN_CRUSH]: (args) => {
        var _a;
        const distance = (0, number_1.min)(1)((0, distance_1.distanceE)(args.positionX, args.positionY, args.targetX, args.targetY));
        const pillarType = (_a = [Pokemon_1.Pkm.PILLAR_WOOD, Pokemon_1.Pkm.PILLAR_IRON, Pokemon_1.Pkm.PILLAR_CONCRETE][args.orientation]) !== null && _a !== void 0 ? _a : Pokemon_1.Pkm.PILLAR_WOOD;
        const animKey = `${Pokemon_1.PkmIndex[pillarType]}/${Game_1.PokemonTint.NORMAL}/${Animation_1.AnimationType.Idle}/${Game_1.SpriteType.ANIM}/${Game_1.Orientation.DOWN}`;
        const frame = `${Game_1.PokemonTint.NORMAL}/${Animation_1.AnimationType.Idle}/${Game_1.SpriteType.ANIM}/${Game_1.Orientation.DOWN}/0000`;
        return projectile({
            textureKey: Pokemon_1.PkmIndex[pillarType],
            frame,
            ability: animKey,
            duration: distance * 200,
            tweenProps: { angle: 270 }
        })(args);
    },
    [Ability_1.Ability.SHELL_SIDE_ARM]: projectile({
        duration: 400,
        ability: Ability_1.Ability.FISSURE,
        tint: 0xff00bf
    }),
    ["ZYGARDE_CELL"]: (args) => {
        let orientation = (0, orientation_1.getOrientation)(args.targetX, args.targetY, args.positionX, args.positionY);
        if (!args.flip)
            orientation = Game_1.OrientationFlip[orientation];
        const distance = (0, number_1.min)(1)((0, distance_1.distanceE)(args.positionX, args.positionY, args.targetX, args.targetY));
        const animName = `ZYGARDE_CELL/${orientation}`;
        const duration = (0, number_1.max)(2000)(Math.round(distance * 400));
        return projectile({
            frame: `${animName}/000.png`,
            ability: animName,
            duration,
            delay: (0, random_1.randomBetween)(0, (0, number_1.max)(500)(2000 - duration)),
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
            startCoords: "target",
            endCoords: "caster",
            scale: 1
        })(args);
    },
    [Ability_1.Ability.ICICLE_MISSILE]: (args) => {
        const { scene, ability, ap, delay, positionX, positionY, targetX, targetY, flip } = args;
        const coordinates = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
        const coordinatesTarget = (0, utils_1.transformEntityCoordinates)(targetX, targetY, flip);
        const dx = delay === 1 ? -3 : delay === 2 ? +3 : 0;
        const topCoords = (0, utils_1.transformEntityCoordinates)(targetX + dx, positionY + 5, false);
        const angle1 = (0, number_1.angleBetween)(coordinates, topCoords) - Math.PI / 2;
        const angle2 = (0, number_1.angleBetween)(topCoords, coordinatesTarget) - Math.PI / 2;
        const missile = addAbilitySprite(scene, ability, ap, coordinates, {
            rotation: angle1
        });
        scene.tweens.chain({
            targets: missile,
            tweens: [
                {
                    x: topCoords[0],
                    y: topCoords[1],
                    rotation: angle2,
                    duration: 500,
                    ease: phaser_1.default.Math.Easing.Quadratic.Out
                },
                {
                    x: coordinatesTarget[0],
                    y: coordinatesTarget[1],
                    duration: 500,
                    ease: phaser_1.default.Math.Easing.Quadratic.In
                }
            ],
            onComplete: () => {
                missile === null || missile === void 0 ? void 0 : missile.destroy();
            }
        });
    },
    [Ability_1.Ability.MIND_BLOWN]: (args) => {
        const { scene, ability, ap, positionX, positionY, targetX, targetY, flip } = args;
        const coordinates = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
        const topCoords = (0, utils_1.transformEntityCoordinates)(targetX, targetY + 1, false);
        const head = addAbilitySprite(scene, ability, ap, [
            coordinates[0],
            coordinates[1] - 32 * (flip ? -1 : 1)
        ]);
        scene.add.tween({
            targets: head,
            x: { value: topCoords[0], ease: phaser_1.default.Math.Easing.Linear },
            y: {
                value: topCoords[1],
                ease: Math.sign(targetY - positionY) === Math.sign(flip ? +1 : -1)
                    ? phaser_1.default.Math.Easing.Back.In
                    : phaser_1.default.Math.Easing.Back.Out
            },
            duration: 1000,
            onComplete: () => {
                head === null || head === void 0 ? void 0 : head.destroy();
            }
        });
    },
    ["MIND_BLOWN_FIREWORK"]: (args) => {
        var _a;
        return onTarget({
            ability: Ability_1.Ability.MAGIC_POWDER,
            scale: 3,
            tintFill: [0xd369c3, 0x41acf0, 0xe9ef4d, 0xfefff9][(_a = args.delay) !== null && _a !== void 0 ? _a : 0],
            positionOffset: [(0, random_1.randomBetween)(-50, 50), (0, random_1.randomBetween)(-50, 50)],
            delay: (0, random_1.randomBetween)(0, 200)
        })(args);
    },
    [Ability_1.Ability.ARM_THRUST]: (args) => {
        var _a;
        for (let i = 0; i < ((_a = args.delay) !== null && _a !== void 0 ? _a : 2); i++) {
            tweenAnimation({
                ability: Ability_1.Ability.BRICK_BREAK,
                startCoords: "target",
                startPositionOffset: [(0, random_1.randomBetween)(-30, 30), (0, random_1.randomBetween)(-30, 30)],
                tweenProps: { alpha: 0, delay: i * 250 }
            })(args);
        }
    },
    ["PARTING_SHOT"]: ({ scene, ability, ap, positionX, positionY, flip }) => {
        setTimeout(() => {
            const coordinates = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
            const anim = addAbilitySprite(scene, ability, ap, coordinates);
            scene.tweens.chain({
                targets: anim,
                tweens: [
                    {
                        scaleX: 1.2,
                        scaleY: 1.2,
                        ease: phaser_1.default.Math.Easing.Quadratic.Out,
                        duration: 100
                    },
                    {
                        scaleX: 1,
                        scaleY: 1,
                        ease: phaser_1.default.Math.Easing.Quadratic.In,
                        duration: 200
                    },
                    {
                        alpha: 0,
                        duration: 200
                    }
                ],
                onComplete: () => {
                    anim === null || anim === void 0 ? void 0 : anim.destroy();
                }
            });
        }, 750);
    },
    [Ability_1.Ability.ROCK_ARTILLERY]: skyfall({
        frame: "ROCK_ARTILLERY/001.png",
        duration: 200,
        scale: 0.75,
        hitAnim: onTarget({ ability: "ROCK_ARTILLERY", scale: 0.75 })
    }),
    [Ability_1.Ability.MOUNTAIN_GALE]: onSprite((_a) => {
        var _b, _c, _d;
        var { casterSprite } = _a, args = __rest(_a, ["casterSprite"]);
        const { scene, ability, ap, delay, positionX, positionY, targetX, targetY, flip } = args;
        const coordinates = (0, utils_1.transformEntityCoordinates)(positionX, positionY, flip);
        const coordinatesTarget = (0, utils_1.transformEntityCoordinates)(targetX, targetY, flip);
        const isBergmite = delay !== undefined && delay >= 0;
        const topCoords = (0, utils_1.transformEntityCoordinates)((positionX + targetX) / 2, targetY + 2, false);
        const angle1 = (0, number_1.angleBetween)(coordinates, topCoords) - Math.PI / 2;
        const angle2 = (0, number_1.angleBetween)(topCoords, coordinatesTarget) - Math.PI / 2;
        const midAngle = (0, number_1.angleBetween)(coordinates, coordinatesTarget) - Math.PI / 2;
        const tint = ((_b = casterSprite === null || casterSprite === void 0 ? void 0 : casterSprite.pokemon) === null || _b === void 0 ? void 0 : _b.shiny)
            ? Game_1.PokemonTint.SHINY
            : Game_1.PokemonTint.NORMAL;
        const orientation = (_c = casterSprite === null || casterSprite === void 0 ? void 0 : casterSprite.orientation) !== null && _c !== void 0 ? _c : Game_1.Orientation.DOWN;
        const animKey = isBergmite
            ? `${Pokemon_1.PkmIndex.BERGMITE}/${tint}/${Animation_1.AnimationType.Idle}/${Game_1.SpriteType.ANIM}/${orientation}`
            : ability;
        const frame = isBergmite
            ? `${tint}/${Animation_1.AnimationType.Idle}/${Game_1.SpriteType.ANIM}/${orientation}/0000`
            : undefined;
        const missile = addAbilitySprite(scene, animKey, ap, coordinates, {
            scale: isBergmite ? 2 : 1.5,
            flipY: isBergmite,
            textureKey: isBergmite ? Pokemon_1.PkmIndex.BERGMITE : undefined,
            frame,
            rotation: angle1
        });
        scene.tweens.chain({
            targets: missile,
            tweens: [
                {
                    x: topCoords[0],
                    y: topCoords[1],
                    rotation: midAngle,
                    duration: isBergmite ? 250 : 150,
                    ease: phaser_1.default.Math.Easing.Quadratic.Out
                },
                {
                    x: coordinatesTarget[0],
                    y: coordinatesTarget[1],
                    rotation: angle2,
                    duration: isBergmite ? 150 : 250,
                    ease: phaser_1.default.Math.Easing.Quadratic.In
                }
            ],
            onComplete: () => {
                missile === null || missile === void 0 ? void 0 : missile.destroy();
                onTarget({ ability: Ability_1.Ability.ICE_BALL, scale: 2 })(Object.assign(Object.assign({}, args), { positionX: targetX, positionY: targetY }));
            }
        });
        if (!casterSprite)
            return;
        (_d = casterSprite.troopers) === null || _d === void 0 ? void 0 : _d.forEach((trooper, i) => {
            setTimeout(() => trooper.destroy(), (i + 3) * 200);
        });
        casterSprite.troopers = [];
    }),
    [Ability_1.Ability.ZING_ZAP]: onCaster({
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        ability: Ability_1.Ability.DISCHARGE
    }),
    [Ability_1.Ability.STATIC_SHOCK]: onCaster({
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        ability: Ability_1.Ability.DISCHARGE
    }),
    [Ability_1.Ability.SOUL_TRAP]: onCaster({
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        ability: Ability_1.Ability.DARK_VOID,
        scale: 2
    }),
    ["WISP"]: projectile({
        duration: 1000,
        rotation: Math.PI / 2,
        ability: "WISP",
        oriented: true,
        scale: 1,
        startCoords: "target",
        endCoords: "caster",
        hitAnim: onCaster({
            ability: "BARB_BARRAGE",
            scale: 2,
            depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON
        })
    }),
    [Ability_1.Ability.GEAR_GRIND]: [
        projectile({
            duration: 500,
            scale: 1,
            hitAnim: onTarget({
                ability: "STEEL/hit",
                textureKey: "attacks",
                oriented: true,
                rotation: (-3 * Math.PI) / 4
            })
        }),
        projectile({
            duration: 500,
            delay: 250,
            scale: 1,
            hitAnim: onTarget({
                ability: "STEEL/hit",
                textureKey: "attacks",
                oriented: true,
                rotation: (-3 * Math.PI) / 4
            })
        })
    ],
    ["SUPERCHARGE"]: ({ scene, pokemonsOnBoard, positionX, positionY }) => {
        const pokemon = pokemonsOnBoard.find((p) => p.positionX === positionX && p.positionY === positionY);
        if (pokemon) {
            pokemon.superchargeAnimation(scene, false, true);
        }
    },
    ["HEALTH_FEATHER"]: featherAnimation,
    ["MUSCLE_FEATHER"]: featherAnimation,
    ["RESIST_FEATHER"]: featherAnimation,
    ["GENIUS_FEATHER"]: featherAnimation,
    ["CLEVER_FEATHER"]: featherAnimation,
    ["SWIFT_FEATHER"]: featherAnimation,
    ["PRETTY_FEATHER"]: featherAnimation,
    ["LOADED_DICE"]: projectile({
        tweenProps: {
            angle: 480,
            easeY: phaser_1.default.Math.Easing.Back.In
        },
        hitAnim: onTarget({ ability: "PUFF_GREEN", scale: 1 }),
        scale: 0.25
    }),
    ["GALARIAN_DARMANITAN_ZEN_BURN"]: onCaster({
        ability: "INFERNO",
        depth: depths_1.DEPTH.ABILITY_BELOW_POKEMON,
        scale: 2
    })
};
function displayAbility(args) {
    const anims = exports.AbilitiesAnimations[args.ability];
    if (Array.isArray(anims)) {
        anims.forEach((anim) => anim(args));
    }
    else if (anims) {
        anims(args);
    }
}
function clearAbilityAnimations(scene) {
    var _a;
    (_a = scene.abilitiesVfxGroup) === null || _a === void 0 ? void 0 : _a.clear(true, true);
}
function displayBoost(pokemonSprite, stat, dX = 0, dY = 0, debug) {
    var _a;
    const tint = (_a = {
        [Game_1.Stat.AP]: 0xff00aa,
        [Game_1.Stat.PP]: 0x8080ff,
        [Game_1.Stat.SPEED]: 0xffaa44,
        [Game_1.Stat.ATK]: 0xff6633,
        [Game_1.Stat.DEF]: 0xffaa66,
        [Game_1.Stat.SPE_DEF]: 0xff99cc,
        [Game_1.Stat.SHIELD]: 0xffcc99
    }[stat]) !== null && _a !== void 0 ? _a : 0xffffff;
    const boost = new phaser_1.GameObjects.Sprite(pokemonSprite.scene, 0 + dX * config_1.CELL_WIDTH, dY * config_1.CELL_HEIGHT - 20, "abilities", `BOOST/000.png`)
        .setDepth(depths_1.DEPTH.BOOST_BACK)
        .setScale(2)
        .setTint(tint);
    pokemonSprite.add(boost);
    boost.anims.play({
        key: "BOOST",
        repeat: debug ? 5 : 0
    });
    boost.once(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => {
        boost.destroy();
    });
}
//# sourceMappingURL=abilities-animations.js.map