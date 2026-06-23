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
exports.isEntity = void 0;
exports.resetSpriteCounts = resetSpriteCounts;
exports.loadCompressedAtlas = loadCompressedAtlas;
const schema_1 = require("@colyseus/schema");
const phaser_1 = __importStar(require("phaser"));
const package_json_1 = __importDefault(require("../../../../../package.json"));
const config_1 = require("../../../../config");
const flower_pots_1 = require("../../../../core/flower-pots");
const precomputed_pokemon_data_1 = require("../../../../models/precomputed/precomputed-pokemon-data");
const types_1 = require("../../../../types");
const Animation_1 = require("../../../../types/Animation");
const Ability_1 = require("../../../../types/enum/Ability");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const number_1 = require("../../../../utils/number");
const orientation_1 = require("../../../../utils/orientation");
const random_1 = require("../../../../utils/random");
const schemas_1 = require("../../../../utils/schemas");
const game_pokemon_detail_1 = require("../../pages/component/game/game-pokemon-detail");
const utils_1 = require("../../pages/utils/utils");
const preferences_1 = require("../../preferences");
const depths_1 = require("../depths");
const abilities_animations_1 = require("./abilities-animations");
const draggable_object_1 = __importDefault(require("./draggable-object"));
const emote_bubble_1 = require("./emote-bubble");
const items_container_1 = __importDefault(require("./items-container"));
const life_bar_1 = __importDefault(require("./life-bar"));
const pokemon_animations_1 = require("./pokemon-animations");
const spriteCountPerPokemon = new Map();
function resetSpriteCounts() {
    spriteCountPerPokemon.clear();
}
const isGameScene = (scene) => "lastPokemonDetail" in scene;
class PokemonSprite extends draggable_object_1.default {
    constructor(scene, x, y, pokemon, playerId, inBattle, flip) {
        var _a, _b, _c, _d;
        super(scene, x, y, config_1.CELL_VISUAL_WIDTH, config_1.CELL_VISUAL_HEIGHT, playerId !== scene.uid);
        this.detail = null;
        this.animationLocked = false;
        this.skydiving = false;
        this.dishes = [];
        this.dishesSprites = [];
        this.inBattle = false;
        this.isTeleporting = false;
        this.scene = scene;
        this.flip = flip;
        this.playerId = playerId;
        this.shouldShowTooltip = true;
        this.pokemon = pokemon;
        this.stages = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).stages;
        this.evolution = inBattle ? Pokemon_1.Pkm.DEFAULT : pokemon.evolution;
        this.width = config_1.CELL_VISUAL_WIDTH;
        this.height = config_1.CELL_VISUAL_HEIGHT;
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.targetX = null;
        this.targetY = null;
        this.emoteBubble = null;
        this.attackSprite =
            (_b = (_a = pokemon_animations_1.PokemonAnimations[pokemon.name]) === null || _a === void 0 ? void 0 : _a.attackSprite) !== null && _b !== void 0 ? _b : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG.attackSprite;
        this.inBattle = inBattle;
        const m = scene.plugins.get("rexMoveTo");
        this.moveManager = m.add(this, {
            speed: 300,
            rotateToTarget: false
        });
        if ((0, exports.isEntity)(pokemon)) {
            this.orientation = pokemon.orientation;
            this.action = pokemon.action;
        }
        else {
            this.orientation = Game_1.Orientation.DOWNLEFT;
            this.action = Game_1.PokemonActionState.IDLE;
        }
        const textureIndex = scene.textures.exists(this.pokemon.index)
            ? this.pokemon.index
            : "0000";
        this.sprite = new phaser_1.GameObjects.Sprite(scene, 0, 0, "loading_pokeball");
        this.sprite.anims.play("loading_pokeball");
        const baseHP = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).hp;
        const maxHP = inBattle
            ? pokemon.maxHP
            : (0, schemas_1.schemaValues)(pokemon.items).reduce((acc, item) => { var _a, _b; return acc + ((_b = (_a = config_1.ItemStats[item]) === null || _a === void 0 ? void 0 : _a[Game_1.Stat.HP]) !== null && _b !== void 0 ? _b : 0); }, pokemon.maxHP);
        const scale = 2 * Math.sqrt(1 + (pokemon.maxHP - baseHP) / baseHP);
        this.sprite
            .setScale(scale)
            .setDepth(depths_1.DEPTH.POKEMON)
            .setTint((0, config_1.getRegionTint)(scene.mapName, (0, preferences_1.preference)("colorblindMode")));
        this.itemsContainer = new items_container_1.default(scene, (_c = pokemon.items) !== null && _c !== void 0 ? _c : new schema_1.SetSchema(), this.sprite.width / 2 + 25, -35, this.id, playerId);
        const hasShadow = ((_d = pokemon_animations_1.PokemonAnimations[pokemon.name]) === null || _d === void 0 ? void 0 : _d.noShadow) !== true;
        if (hasShadow) {
            this.shadow = new phaser_1.GameObjects.Sprite(scene, 0, 5, textureIndex);
            this.shadow
                .setVisible(false)
                .setScale(2, 2)
                .setDepth(depths_1.DEPTH.POKEMON_SHADOW);
            if ((0, preferences_1.preference)("colorblindMode") &&
                (0, exports.isEntity)(pokemon) &&
                playerId !== scene.uid &&
                isGameScene(scene) &&
                scene.spectate === false) {
                this.shadow.setTint(0xff0000).setTintMode(phaser_1.default.TintModes.FILL);
            }
            this.add(this.shadow);
        }
        this.add(this.sprite);
        if ((0, exports.isEntity)(pokemon)) {
            this.addStatusEffectsSprites(pokemon);
        }
        else {
            if (pokemon.items.has(Item_1.Item.SHINY_STONE)) {
                this.addLight();
            }
        }
        if (pokemon.items.has(Item_1.Item.BERSERK_GENE)) {
            this.addBerserkEffect();
        }
        if (pokemon.items.has(Item_1.Item.AIR_BALLOON)) {
            this.addFloatingAnimation();
        }
        this.add(this.itemsContainer);
        if ((0, exports.isEntity)(pokemon)) {
            this.setLifeBar(pokemon, scene);
        }
        else {
            if (pokemon.dishes.size > 0) {
                this.updateDishes((0, schemas_1.schemaValues)(pokemon.dishes));
            }
        }
        this.draggable =
            playerId === scene.uid &&
                !inBattle &&
                isGameScene(scene) &&
                scene.spectate === false;
        this.setDepth(depths_1.DEPTH.POKEMON);
        if (isGameScene(this.scene) && this.scene.lastPokemonDetail) {
            this.scene.lastPokemonDetail.closeDetail();
            this.scene.lastPokemonDetail = null;
        }
        this.lazyLoadAnimations(scene).then(() => {
            var _a, _b;
            if (!this.sprite.scene)
                return;
            this.sprite.setTexture(scene.textures.exists(this.pokemon.index) ? this.pokemon.index : "0000");
            this.sprite.on(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => {
                var _a;
                this.animationLocked = false;
                (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, pokemon.action, this.flip);
            });
            (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, pokemon.action, this.flip);
            (_b = this.shadow) === null || _b === void 0 ? void 0 : _b.setVisible(true);
            if (!(0, exports.isEntity)(pokemon) && pokemon.supercharged) {
                this.superchargeAnimation(scene, true, false);
            }
            this.emit("loaded");
        });
    }
    get positionX() {
        return this.pokemon.positionX;
    }
    get positionY() {
        return this.pokemon.positionY;
    }
    lazyLoadAnimations(scene) {
        return new Promise((resolve) => {
            var _a;
            const tint = this.pokemon.shiny ? Game_1.PokemonTint.SHINY : Game_1.PokemonTint.NORMAL;
            const pokemonSpriteKey = `${this.pokemon.index}/${tint}`;
            const loadAnimations = () => {
                var _a;
                (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.createPokemonAnimations(this.pokemon.index, tint);
                resolve();
            };
            let spriteCount = (_a = spriteCountPerPokemon.get(pokemonSpriteKey)) !== null && _a !== void 0 ? _a : 0;
            if (spriteCount === 0 && (scene === null || scene === void 0 ? void 0 : scene.animationManager)) {
                if (scene.textures.exists(this.pokemon.index) === false) {
                    loadCompressedAtlas(scene, this.pokemon.index).then(loadAnimations);
                }
                else {
                    loadAnimations();
                }
            }
            else {
                if (scene === null || scene === void 0 ? void 0 : scene.load.isLoading()) {
                    scene.load.once("complete", loadAnimations);
                }
                else {
                    loadAnimations();
                }
            }
            spriteCount++;
            spriteCountPerPokemon.set(pokemonSpriteKey, spriteCount);
        });
    }
    unloadAnimations(scene, indexToUnload, tintToUnload) {
        var _a, _b;
        const pokemonSpriteKey = `${indexToUnload}/${tintToUnload}`;
        let spriteCount = (_a = spriteCountPerPokemon.get(pokemonSpriteKey)) !== null && _a !== void 0 ? _a : 0;
        spriteCount = (0, number_1.min)(0)(spriteCount - 1);
        if (spriteCount === 0 && (scene === null || scene === void 0 ? void 0 : scene.animationManager)) {
            (_b = scene.animationManager) === null || _b === void 0 ? void 0 : _b.unloadPokemonAnimations(indexToUnload, tintToUnload);
        }
        spriteCountPerPokemon.set(pokemonSpriteKey, spriteCount);
    }
    updateTooltipPosition() {
        if (this.detail) {
            const pkmCenter = this.sprite.getCenter(undefined, true);
            const boundsScene = this.scene.cameras.main.worldView;
            let x = +60;
            let y = -175;
            const tooltipWidth = this.detail.dom.clientWidth;
            const tooltipHeight = this.detail.dom.clientHeight;
            const showDetailsOnHover = (0, preferences_1.preference)("showDetailsOnHover");
            if (this.input && showDetailsOnHover) {
                x += this.input.localX;
                y += this.input.localY;
            }
            if (pkmCenter.x + x + tooltipWidth > boundsScene.right) {
                x = -80 - tooltipWidth;
                if (this.input && showDetailsOnHover) {
                    x += this.input.localX;
                }
            }
            const tooltipBottom = pkmCenter.y + y + tooltipHeight;
            if (pkmCenter.y + y < boundsScene.top) {
                y = boundsScene.top - pkmCenter.y + 10;
            }
            else if (tooltipBottom > boundsScene.bottom) {
                y -= tooltipBottom - boundsScene.bottom + 10;
            }
            this.detail.setPosition(x, y);
        }
    }
    destroy(fromScene) {
        const g = this.scene;
        super.destroy(fromScene);
        this.closeDetail();
        this.unloadAnimations(g, this.pokemon.index, this.pokemon.shiny ? Game_1.PokemonTint.SHINY : Game_1.PokemonTint.NORMAL);
    }
    closeDetail() {
        if (this.detail) {
            this.detail.dom.remove();
            this.remove(this.detail, true);
            this.detail = null;
        }
    }
    openDetail() {
        if (!isGameScene(this.scene))
            return;
        this.scene.closeTooltips();
        if (this.scene.lastPokemonDetail && this.scene.lastPokemonDetail !== this) {
            this.scene.lastPokemonDetail = null;
        }
        this.detail = new game_pokemon_detail_1.GamePokemonDetailDOMWrapper(this.scene, 0, 0, this.pokemon, this.inBattle ? "battle" : "team", this.playerId === this.scene.uid);
        this.detail.setDepth(depths_1.DEPTH.TOOLTIP).setOrigin(0, 0);
        this.updateTooltipPosition();
        this.detail.removeInteractive();
        this.add(this.detail);
        this.scene.lastPokemonDetail = this;
    }
    onPointerDown(pointer, event) {
        super.onPointerDown(pointer, event);
        if (this.shouldShowTooltip &&
            !(0, preferences_1.preference)("showDetailsOnHover") &&
            pointer.rightButtonDown() &&
            this.scene &&
            !this.detail) {
            this.openDetail();
        }
        else {
            this.closeDetail();
        }
        if (pointer.leftButtonDown() && !this.inBattle) {
            this.emoteAnimation();
        }
    }
    onPointerUp() {
        super.onPointerUp();
        if (this.shouldShowTooltip &&
            (0, preferences_1.preference)("showDetailsOnHover") &&
            !this.detail) {
            this.openDetail();
        }
    }
    onPointerOut() {
        super.onPointerOut();
        if (this.shouldShowTooltip && (0, preferences_1.preference)("showDetailsOnHover")) {
            this.closeDetail();
        }
    }
    onPointerOver(pointer) {
        super.onPointerOver(pointer);
        if ((0, preferences_1.preference)("showDetailsOnHover") &&
            this.shouldShowTooltip &&
            this.detail == null &&
            !pointer.leftButtonDown()) {
            this.openDetail();
        }
    }
    attackAnimation(targetX, targetY, delayBeforeShoot, travelTime, onComplete) {
        const isRange = this.attackSprite.endsWith("/range");
        const startX = isRange ? this.positionX : targetX;
        const startY = isRange ? this.positionY : targetY;
        const LATENCY_COMPENSATION = 20;
        let attackSprite = this.attackSprite;
        let tint = 0xffffff;
        if (startX != null && startY != null) {
            const coordinates = (0, utils_1.transformEntityCoordinates)(startX, startY, this.flip);
            let scale = Animation_1.AttackSpriteScale[attackSprite];
            if (attackSprite === Animation_1.AttackSprite.DRAGON_GREEN_RANGE) {
                attackSprite = Animation_1.AttackSprite.DRAGON_RANGE;
                scale = [1.5, 1.5];
                tint = 0x80ff60;
            }
            const projectile = this.scene.add.sprite(coordinates[0], coordinates[1] - 10, "attacks", `${attackSprite}/000.png`);
            projectile
                .setScale(scale[0], scale[1])
                .setTint(tint)
                .setDepth(depths_1.DEPTH.PROJECTILE)
                .setVisible(false);
            if (!isRange) {
                projectile.anims.play({
                    key: attackSprite,
                    showOnStart: true,
                    delay: delayBeforeShoot - LATENCY_COMPENSATION
                });
                projectile.once(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => projectile.destroy());
                onComplete === null || onComplete === void 0 ? void 0 : onComplete();
            }
            else {
                projectile.anims.play({ key: attackSprite });
                const coordinatesTarget = (0, utils_1.transformEntityCoordinates)(targetX, targetY, this.flip);
                this.scene.tweens.add({
                    targets: projectile,
                    x: coordinatesTarget[0] + (0, random_1.randomBetween)(-5, 5),
                    y: coordinatesTarget[1] + (0, random_1.randomBetween)(-5, 5),
                    ease: "Linear",
                    duration: (0, number_1.min)(250)(travelTime),
                    delay: delayBeforeShoot - LATENCY_COMPENSATION,
                    onComplete: () => {
                        projectile.destroy();
                        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
                    },
                    onStop: () => projectile.destroy(),
                    onStart: () => projectile.setVisible(true)
                });
            }
        }
    }
    deathAnimation() {
        if (this.lifebar) {
            this.lifebar.setHp(0);
        }
        this.scene.add.tween({
            targets: [this],
            ease: "Linear",
            duration: 1500,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            onComplete: () => {
                this.destroy();
            }
        });
        if (this.troopers) {
            this.troopers.forEach((trooper, i) => {
                trooper.addFlinch();
                trooper.orientation = orientation_1.OrientationArray[(i + 6) % 8];
                const [dx, dy] = orientation_1.OrientationVector[(i + 5) % 8];
                const endX = trooper.x + 1000 * dx;
                const endY = trooper.y + 1000 * dy;
                this.scene.tweens.add({
                    targets: trooper,
                    x: endX,
                    y: endY,
                    ease: "Linear",
                    duration: 5000,
                    delay: 500,
                    onStart: () => {
                        var _a;
                        trooper.animationLocked = false;
                        (_a = this.scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(trooper, Game_1.PokemonActionState.WALK, false);
                    },
                    onComplete: () => {
                        trooper.destroy();
                    }
                });
            });
        }
    }
    resurrectAnimation() {
        if (this.lifebar) {
            this.lifebar.setHp(0);
        }
        const resurrectAnim = this.scene.add.sprite(0, -10, "RESURRECT", "000");
        resurrectAnim.setDepth(depths_1.DEPTH.BOOST_FRONT);
        resurrectAnim.setScale(2, 2);
        resurrectAnim.anims.play("RESURRECT");
        resurrectAnim.once(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => {
            resurrectAnim.destroy();
        });
        this.add(resurrectAnim);
    }
    displayAnimation(anim, args = {}) {
        var _a, _b;
        return (0, abilities_animations_1.displayAbility)(Object.assign({ scene: this.scene, pokemonsOnBoard: [], ability: anim, orientation: this.orientation, positionX: this.positionX, positionY: !this.inBattle
                ? this.positionY - 1
                : "team" in this.pokemon && this.pokemon.team === Game_1.Team.RED_TEAM
                    ? 4 - this.positionY
                    : this.positionY, targetX: (_a = this.targetX) !== null && _a !== void 0 ? _a : -1, targetY: (_b = this.targetY) !== null && _b !== void 0 ? _b : -1, flip: this.flip, ap: this.pokemon.ap }, args));
    }
    fishingAnimation() {
        var _a;
        this.displayAnimation("FISHING");
        const g = this.scene;
        (_a = g.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.HOP, this.flip);
        this.sprite.once(phaser_1.default.Animations.Events.ANIMATION_REPEAT, () => {
            var _a;
            const g = this.scene;
            (_a = g.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.IDLE, this.flip);
        });
    }
    blossomAnimation() {
        var _a, _b, _c;
        const scene = this.scene;
        const flowerPot = types_1.FlowerPots.find((pot) => flower_pots_1.FlowerMonByPot[pot].includes(Pokemon_1.PkmByIndex[this.pokemon.index]));
        if (flowerPot) {
            (_b = (_a = scene.board) === null || _a === void 0 ? void 0 : _a.flowerPokemonsInPots.find((p) => p.pokemon.index === this.pokemon.index)) === null || _b === void 0 ? void 0 : _b.destroy();
            const positions = "team" in this.pokemon && this.pokemon.team === Game_1.Team.RED_TEAM
                ? this.flip
                    ? flower_pots_1.FLOWER_POTS_POSITIONS_BLUE
                    : flower_pots_1.FLOWER_POTS_POSITIONS_RED
                : this.flip
                    ? flower_pots_1.FLOWER_POTS_POSITIONS_RED
                    : flower_pots_1.FLOWER_POTS_POSITIONS_BLUE;
            const [startX, startY] = positions[types_1.FlowerPots.indexOf(flowerPot)];
            (0, abilities_animations_1.addAbilitySprite)(scene, Ability_1.Ability.PETAL_BLIZZARD, 0, [startX, startY - 24]);
            this.moveManager.setEnable(false);
            this.setPosition(startX, startY);
            const [x, y] = (0, utils_1.transformEntityCoordinates)(this.positionX, this.positionY, this.flip);
            (_c = scene.animationManager) === null || _c === void 0 ? void 0 : _c.animatePokemon(this, Game_1.PokemonActionState.HOP, this.flip, false);
            scene.tweens.add({
                targets: this,
                x,
                y,
                duration: 1000,
                onComplete: () => {
                    this.moveManager.setEnable(true);
                }
            });
        }
    }
    emoteAnimation() {
        const g = this.scene;
        if (!g.animationManager)
            return;
        g.animationManager.animatePokemon(this, Game_1.PokemonActionState.EMOTE, this.flip, false);
    }
    evolutionAnimation() {
        this.displayAnimation("EVOLUTION");
        this.emoteAnimation();
    }
    spawnAnimation() {
        this.displayAnimation("SPAWN");
        this.emoteAnimation();
    }
    hatchAnimation() {
        var _a;
        this.displayAnimation("HATCH");
        const g = this.scene;
        (_a = g.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.EMOTE, this.flip, false);
    }
    cookAnimation(dishes) {
        this.emoteAnimation();
        dishes.forEach((item, i) => {
            const shinyEffect = this.scene.add.sprite(this.x, this.y, "shine");
            shinyEffect.setScale(2).setDepth(depths_1.DEPTH.ITEM_FOUND);
            shinyEffect.play("shine");
            const itemSprite = this.scene.add.sprite(this.x, this.y, "item", item + ".png");
            itemSprite.setScale(0.5).setDepth(depths_1.DEPTH.ITEM_FOUND);
            this.scene.tweens.add({
                targets: [itemSprite, shinyEffect],
                ease: phaser_1.default.Math.Easing.Quadratic.Out,
                duration: 1000,
                y: this.y - 70,
                x: this.x + (i - (dishes.length - 1) / 2) * 70,
                onComplete: () => {
                    setTimeout(() => {
                        itemSprite.destroy();
                        shinyEffect.destroy();
                    }, 1000);
                }
            });
        });
    }
    digAnimation(buriedItem) {
        var _a;
        this.orientation = Game_1.Orientation.UP;
        const g = this.scene;
        (_a = g.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.WALK, false, true);
        this.displayAnimation("DIG");
        setTimeout(() => {
            var _a;
            this.orientation = Game_1.Orientation.DOWNLEFT;
            this.animationLocked = false;
            (_a = g.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.IDLE, false);
            if (buriedItem) {
                this.emoteAnimation();
                const shinyEffect = this.scene.add.sprite(this.x, this.y, "shine");
                shinyEffect.setScale(2).setDepth(depths_1.DEPTH.ITEM_FOUND);
                shinyEffect.play("shine");
                const itemSprite = this.scene.add.sprite(this.x, this.y, "item", buriedItem + ".png");
                itemSprite.setScale(0.5).setDepth(depths_1.DEPTH.ITEM_FOUND);
                this.scene.tweens.add({
                    targets: [itemSprite, shinyEffect],
                    ease: phaser_1.default.Math.Easing.Quadratic.Out,
                    duration: 1000,
                    y: this.y - 70,
                    x: this.x,
                    onComplete: () => {
                        setTimeout(() => {
                            itemSprite.destroy();
                            shinyEffect.destroy();
                            if (buriedItem === Item_1.Item.COIN) {
                                g.displayMoneyGain(this.x, this.y - 70, 1);
                            }
                            else if (buriedItem === Item_1.Item.NUGGET) {
                                g.displayMoneyGain(this.x, this.y - 70, 3);
                            }
                            else if (buriedItem === Item_1.Item.BIG_NUGGET) {
                                g.displayMoneyGain(this.x, this.y - 70, 10);
                            }
                        }, 1000);
                    }
                });
            }
        }, 1000);
    }
    superchargeAnimation(scene, alreadyActive, onEntity) {
        var _a;
        this.addElectricField();
        this.sprite.enableFilters();
        (_a = this.sprite.filters) === null || _a === void 0 ? void 0 : _a.internal.addGlow(0xffff00, 4, 0, 0.1);
        this.emoteAnimation();
        if (!alreadyActive) {
            if (!(0, preferences_1.preference)("disableCameraShake"))
                scene.cameras.main.flash(250);
            this.displayAnimation(Ability_1.Ability.THUNDER_SHOCK, {
                targetX: this.positionX,
                targetY: onEntity ? this.positionY : this.positionY - 1
            });
        }
    }
    updateDishes(dishes) {
        this.dishes = dishes;
        this.dishesSprites.forEach((sprite) => sprite.destroy());
        if (dishes.length > 0) {
            dishes.forEach((dish, i) => {
                const dishSprite = this.scene.add
                    .sprite((i - (dishes.length - 1) / 2) * 20, 20, "item", dish + ".png")
                    .setScale(0.25);
                this.add(dishSprite);
                this.dishesSprites.push(dishSprite);
            });
        }
    }
    specialAttackAnimation(pokemon) {
        var _a, _b, _c;
        let anim = (_a = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[pokemon.index]].ability) !== null && _a !== void 0 ? _a : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG.ability;
        if (pokemon.skill === Ability_1.Ability.LASER_BLADE && pokemon.count.ult % 2 === 0) {
            anim =
                (_b = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[pokemon.index]].emote) !== null && _b !== void 0 ? _b : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG.emote;
        }
        if (pokemon.skill === Ability_1.Ability.GROWTH) {
            this.sprite.setScale(2 + 0.5 * pokemon.count.ult);
        }
        (_c = this.scene.animationManager) === null || _c === void 0 ? void 0 : _c.play(this, anim, {
            flip: this.flip,
            lock: true,
            repeat: 0
        });
    }
    setLifeBar(pokemon, scene) {
        if (pokemon.hp !== undefined) {
            this.lifebar = new life_bar_1.default(scene, 0, 25, pokemon.maxHP, pokemon.hp, pokemon.shield, pokemon.team, this.flip);
            this.lifebar.setShield(pokemon.shield);
            this.add(this.lifebar);
            if (pokemon.pp !== undefined && pokemon.maxPP > 0)
                this.lifebar.setMaxPP(pokemon.maxPP);
        }
    }
    addStatusEffectsSprites(pokemon) {
        if (pokemon.status.light) {
            this.addLight();
        }
        if (pokemon.status.wound) {
            this.addWound();
        }
        if (pokemon.status.burn) {
            this.addBurn();
        }
        if (pokemon.status.sleep) {
            this.addSleep();
        }
        if (pokemon.status.silence) {
            this.addSilence();
        }
        if (pokemon.status.fatigue) {
            this.addFatigue();
        }
        if (pokemon.status.freeze) {
            this.addFreeze();
        }
        if (pokemon.status.confusion) {
            this.addConfusion();
        }
        if (pokemon.status.paralysis) {
            this.addParalysis();
        }
        if (pokemon.status.pokerus) {
            this.addPokerus();
        }
        if (pokemon.status.possessed) {
            this.addPossessed();
        }
        if (pokemon.status.locked) {
            this.addLocked();
        }
        if (pokemon.status.blinded) {
            this.addBlinded();
        }
        if (pokemon.status.armorReduction) {
            this.addArmorReduction();
        }
        if (pokemon.status.charm) {
            this.addCharm();
        }
        if (pokemon.status.flinch) {
            this.addFlinch();
        }
        if (pokemon.status.curse) {
            this.addCurse();
        }
        if (pokemon.status.poisonStacks > 0) {
            this.addPoison(pokemon.status.poisonStacks);
        }
        if (pokemon.status.protect) {
            this.addProtect();
        }
        if (pokemon.status.resurrection) {
            this.addResurrection();
        }
        if (pokemon.status.runeProtect) {
            this.addRuneProtect();
        }
        if (pokemon.status.spikeArmor) {
            this.addReflectShieldAnim();
        }
        if (pokemon.status.magicBounce) {
            this.addReflectShieldAnim(0xffa0ff);
        }
        if (pokemon.status.reflect) {
            this.addReflectShieldAnim(0xff3030);
        }
        if (pokemon.status.electricField) {
            this.addElectricField();
        }
        if (pokemon.status.psychicField) {
            this.addPsychicField();
        }
        if (pokemon.status.grassField) {
            this.addGrassField();
        }
        if (pokemon.status.fairyField) {
            this.addFairyField();
        }
        if (pokemon.status.curseVulnerability) {
            this.addCurseVulnerability();
        }
        if (pokemon.status.curseWeakness) {
            this.addCurseWeakness();
        }
        if (pokemon.status.curseTorment) {
            this.addCurseTorment();
        }
        if (pokemon.status.curseFate) {
            this.addCurseFate();
        }
    }
    addWound() {
        if (!this.wound) {
            this.wound = this.scene.add
                .sprite(0, -30, "status", "WOUND/000.png")
                .setScale(2);
            this.wound.anims.play("WOUND");
            this.add(this.wound);
        }
    }
    removeWound() {
        if (this.wound) {
            this.remove(this.wound, true);
            this.wound = undefined;
        }
    }
    addBurn() {
        if (!this.burn) {
            this.burn = this.scene.add
                .sprite(0, -30, "status", "BURN/000.png")
                .setScale(2);
            this.burn.anims.play("BURN");
            this.add(this.burn);
        }
    }
    removeBurn() {
        if (this.burn) {
            this.remove(this.burn, true);
            this.burn = undefined;
        }
    }
    addSleep() {
        if (!this.sleep) {
            this.sleep = this.scene.add
                .sprite(0, -30, "status", "SLEEP/000.png")
                .setScale(2);
            this.sleep.anims.play("SLEEP");
            this.add(this.sleep);
        }
    }
    removeSleep() {
        if (this.sleep) {
            this.remove(this.sleep, true);
            this.sleep = undefined;
        }
    }
    addSilence() {
        if (!this.silence) {
            this.silence = this.scene.add
                .sprite(0, -30, "status", "SILENCE/000.png")
                .setScale(2);
            this.silence.anims.play("SILENCE");
            this.add(this.silence);
        }
    }
    removeSilence() {
        if (this.silence) {
            this.remove(this.silence, true);
            this.silence = undefined;
        }
    }
    addFatigue() {
        if (!this.fatigue) {
            this.fatigue = this.scene.add
                .sprite(0, -10, "status", "FATIGUE/000.png")
                .setScale(2);
            this.fatigue.anims.play("FATIGUE");
            this.add(this.fatigue);
        }
    }
    removeFatigue() {
        if (this.fatigue) {
            this.remove(this.fatigue, true);
            this.fatigue = undefined;
        }
    }
    addFreeze() {
        if (!this.freeze) {
            this.freeze = this.scene.add
                .sprite(0, 0, "status", "FREEZE/000.png")
                .setScale(2);
            this.freeze.anims.play("FREEZE");
            this.add(this.freeze);
        }
    }
    removeFreeze() {
        if (this.freeze) {
            this.remove(this.freeze, true);
            this.freeze = undefined;
        }
    }
    addConfusion() {
        if (!this.confusion) {
            this.confusion = this.scene.add
                .sprite(0, -30, "status", "CONFUSION/000.png")
                .setScale(2);
            this.confusion.anims.play("CONFUSION");
            this.add(this.confusion);
        }
    }
    removeConfusion() {
        if (this.confusion) {
            this.remove(this.confusion, true);
            this.confusion = undefined;
        }
    }
    addParalysis() {
        if (!this.paralysis) {
            this.paralysis = this.scene.add
                .sprite(0, -30, "status", "PARALYSIS/000.png")
                .setScale(2);
            this.paralysis.anims.play("PARALYSIS");
            this.add(this.paralysis);
        }
    }
    removeParalysis() {
        if (this.paralysis) {
            this.remove(this.paralysis, true);
            this.paralysis = undefined;
        }
    }
    addPokerus() {
        if (!this.pokerus) {
            this.pokerus = this.scene.add
                .sprite(0, -50, "status", "POKERUS/000.png")
                .setScale(2);
            this.pokerus.anims.play("POKERUS");
            this.add(this.pokerus);
        }
    }
    removePokerus() {
        if (this.pokerus) {
            this.remove(this.pokerus, true);
            this.pokerus = undefined;
        }
    }
    addPossessed() {
        if (!this.possessed) {
            this.possessed = this.scene.add
                .sprite(-16, -24, "status", "POSSESSED/000.png")
                .setScale(2);
            this.possessed.anims.play("POSSESSED");
            this.sprite.setTint(0xff50ff);
            this.add(this.possessed);
        }
    }
    removePossessed() {
        if (this.possessed) {
            this.sprite.clearTint();
            this.remove(this.possessed, true);
            this.possessed = undefined;
        }
    }
    addLocked() {
        if (!this.locked) {
            this.locked = this.scene.add
                .sprite(0, -30, "status", "LOCKED/000.png")
                .setScale(2);
            this.locked.anims.play("LOCKED");
            this.add(this.locked);
        }
    }
    removeLocked() {
        if (this.locked) {
            this.remove(this.locked, true);
            this.locked = undefined;
        }
    }
    addBlinded() {
        if (!this.blinded) {
            this.blinded = this.scene.add
                .sprite(0, -30, "status", "BLINDED/000.png")
                .setScale(3);
            this.blinded.anims.play("BLINDED");
            this.add(this.blinded);
        }
    }
    removeBlinded() {
        if (this.blinded) {
            this.remove(this.blinded, true);
            this.blinded = undefined;
        }
    }
    addArmorReduction() {
        if (!this.armorReduction) {
            this.armorReduction = this.scene.add
                .sprite(0, -40, "status", "ARMOR_BREAK/000.png")
                .setScale(2);
            this.armorReduction.anims.play("ARMOR_BREAK");
            this.add(this.armorReduction);
        }
    }
    removeArmorReduction() {
        if (this.armorReduction) {
            this.remove(this.armorReduction, true);
            this.armorReduction = undefined;
        }
    }
    addCharm() {
        if (!this.charm) {
            this.charm = this.scene.add
                .sprite(0, -40, "status", "CHARM/000.png")
                .setScale(2);
            this.charm.anims.play("CHARM");
            this.add(this.charm);
        }
    }
    removeCharm() {
        if (this.charm) {
            this.remove(this.charm, true);
            this.charm = undefined;
        }
    }
    addFlinch() {
        if (!this.flinch) {
            this.flinch = this.scene.add
                .sprite(0, -40, "status", "FLINCH/000.png")
                .setScale(2);
            this.flinch.anims.play("FLINCH");
            this.add(this.flinch);
        }
    }
    removeFlinch() {
        if (this.flinch) {
            this.remove(this.flinch, true);
            this.flinch = undefined;
        }
    }
    addCurse() {
        if (!this.curse) {
            this.curse = this.scene.add
                .sprite(0, -65, "status", "CURSE/000.png")
                .setScale(1.5);
            this.curse.anims.play("CURSE");
            this.add(this.curse);
        }
    }
    removeCurse() {
        if (this.curse) {
            this.remove(this.curse, true);
            this.curse = undefined;
        }
    }
    addCurseVulnerability() {
        if (!this.curseVulnerability) {
            this.curseVulnerability = this.scene.add
                .sprite(0, 15, "abilities", "CURSE_OF_VULNERABILITY/000.png")
                .setScale(1);
            this.curseVulnerability.anims.play("CURSE_OF_VULNERABILITY");
            this.add(this.curseVulnerability);
        }
    }
    addCurseWeakness() {
        if (!this.curseWeakness) {
            this.curseWeakness = this.scene.add
                .sprite(-30, -15, "abilities", "CURSE_OF_WEAKNESS/000.png")
                .setScale(1);
            this.curseWeakness.anims.play("CURSE_OF_WEAKNESS");
            this.add(this.curseWeakness);
        }
    }
    addCurseTorment() {
        if (!this.curseTorment) {
            this.curseTorment = this.scene.add
                .sprite(30, -15, "abilities", "CURSE_OF_TORMENT/000.png")
                .setScale(1);
            this.curseTorment.anims.play("CURSE_OF_TORMENT");
            this.add(this.curseTorment);
        }
    }
    addCurseFate() {
        if (!this.curseFate) {
            this.curseFate = this.scene.add
                .sprite(0, -45, "abilities", "CURSE_OF_FATE/000.png")
                .setScale(1);
            this.curseFate.anims.play("CURSE_OF_FATE");
            this.add(this.curseFate);
        }
    }
    addPoison(stacks) {
        var _a;
        const poisonTexture = stacks >= 3 ? "POISON_BADLY" : "POISON";
        if (!this.poison) {
            this.poison = this.scene.add
                .sprite(0, -30, "status", `${poisonTexture}/000.png`)
                .setScale(2);
            this.poison.anims.play(poisonTexture);
            this.add(this.poison);
        }
        else if (((_a = this.poison.anims.currentAnim) === null || _a === void 0 ? void 0 : _a.key) !== poisonTexture) {
            this.poison.setTexture("status", `${poisonTexture}/000.png`);
            this.poison.anims.play(poisonTexture);
        }
    }
    removePoison() {
        if (this.poison) {
            this.remove(this.poison, true);
            this.poison = undefined;
        }
    }
    addProtect() {
        if (!this.protect) {
            this.protect = this.scene.add
                .sprite(0, -30, "status", "PROTECT/000.png")
                .setScale(2);
            this.protect.anims.play("PROTECT");
            this.add(this.protect);
        }
    }
    removeProtect() {
        if (this.protect) {
            this.remove(this.protect, true);
            this.protect = undefined;
        }
    }
    skydiveUp() {
        if (!this.skydiving) {
            this.skydiving = true;
            this.moveManager.setSpeed(1000);
            this.moveManager.moveTo(this.x, -100);
        }
    }
    skydiveDown() {
        var _a, _b;
        if (this.skydiving) {
            const landingCoordinates = (0, utils_1.transformEntityCoordinates)((_a = this.targetX) !== null && _a !== void 0 ? _a : this.positionX, (_b = this.targetY) !== null && _b !== void 0 ? _b : this.positionY, this.flip);
            const finalCoordinates = (0, utils_1.transformEntityCoordinates)(this.positionX, this.positionY, this.flip);
            this.x = landingCoordinates[0];
            this.y = landingCoordinates[1];
            this.moveManager.setSpeed(1000);
            this.moveManager.moveTo(finalCoordinates[0], finalCoordinates[1]);
            this.skydiving = false;
        }
    }
    addResurrection() {
        if (!this.resurrection) {
            this.resurrection = this.scene.add
                .sprite(0, -45, "status", "RESURRECTION/000.png")
                .setScale(2);
            this.resurrection.anims.play("RESURRECTION");
            this.add(this.resurrection);
        }
    }
    removeResurrection() {
        if (this.resurrection) {
            this.remove(this.resurrection, true);
            this.resurrection = undefined;
        }
    }
    addRuneProtect() {
        if (!this.runeProtect) {
            this.runeProtect = this.scene.add
                .sprite(0, -40, "status", "RUNE_PROTECT/000.png")
                .setScale(2);
            this.runeProtect.anims.play("RUNE_PROTECT");
            this.add(this.runeProtect);
        }
    }
    removeRuneProtect() {
        if (this.runeProtect) {
            this.remove(this.runeProtect, true);
            this.runeProtect = undefined;
        }
    }
    addReflectShieldAnim(colorVariation = 0xffffff) {
        if (!this.reflectShield) {
            this.reflectShield = this.scene.add
                .sprite(0, -5, "abilities", `${Ability_1.Ability.REFLECT}/000.png`)
                .setScale(2)
                .setTint(colorVariation);
            this.reflectShield.anims.play(Ability_1.Ability.REFLECT);
            this.add(this.reflectShield);
        }
    }
    removeReflectShieldAnim() {
        if (this.reflectShield) {
            this.remove(this.reflectShield, true);
            this.reflectShield = undefined;
        }
    }
    addLight() {
        if (this.light)
            return;
        this.light = this.scene.add
            .sprite(0, 0, "abilities", "LIGHT_CELL/000.png")
            .setScale(1.5, 1.5)
            .setDepth(depths_1.DEPTH.LIGHT_CELL);
        this.light.anims.play("LIGHT_CELL");
        this.add(this.light);
        this.sendToBack(this.light);
    }
    removeLight() {
        if (this.light) {
            this.remove(this.light, true);
            this.light = undefined;
        }
    }
    addElectricField() {
        if (!this.electricField) {
            this.electricField = this.scene.add
                .sprite(3, 3, "status", "ELECTRIC_FIELD/000.png")
                .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                .setScale(1);
            this.electricField.anims.play("ELECTRIC_FIELD");
            this.add(this.electricField);
            this.bringToTop(this.sprite);
        }
    }
    removeElectricField() {
        if (this.electricField) {
            this.remove(this.electricField, true);
            this.electricField = undefined;
        }
    }
    addGrassField() {
        if (!this.grassField) {
            this.grassField = this.scene.add
                .sprite(0, 10, "abilities", "GRASSY_FIELD/000.png")
                .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                .setScale(2);
            this.scene.add.existing(this.grassField);
            this.grassField.anims.play("GRASSY_FIELD");
            this.add(this.grassField);
            this.bringToTop(this.sprite);
        }
    }
    removeGrassField() {
        if (this.grassField) {
            this.remove(this.grassField, true);
            this.grassField = undefined;
        }
    }
    addFairyField() {
        if (!this.fairyField) {
            this.fairyField = this.scene.add
                .sprite(0, 10, "status", "FAIRY_FIELD/000.png")
                .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                .setScale(1.5);
            this.fairyField.anims.play("FAIRY_FIELD");
            this.add(this.fairyField);
            this.bringToTop(this.sprite);
        }
    }
    removeFairyField() {
        if (this.fairyField) {
            this.remove(this.fairyField, true);
            this.fairyField = undefined;
        }
    }
    addPsychicField() {
        if (!this.psychicField) {
            this.psychicField = this.scene.add
                .sprite(0, 10, "status", "PSYCHIC_FIELD/000.png")
                .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                .setScale(1);
            this.psychicField.anims.play("PSYCHIC_FIELD");
            this.add(this.psychicField);
            this.bringToTop(this.sprite);
        }
    }
    removePsychicField() {
        if (this.psychicField) {
            this.remove(this.psychicField, true);
            this.psychicField = undefined;
        }
    }
    addRageEffect() {
        this.sprite.setTint(0xff0000);
    }
    addBalmMushroomEffect() {
        let i = 0;
        const hsv = phaser_1.default.Display.Color.HSVColorWheel(0.7, 1);
        const updateBalmMushroomEffect = () => {
            const top = hsv[i].color;
            const bottom = hsv[359 - i].color;
            this.sprite.setTint(top, top, bottom, bottom);
            i = (i + 1) % 360;
        };
        this.scene.events.on("update", updateBalmMushroomEffect);
        this.sprite.once("destroy", () => {
            this.scene.events.off("update", updateBalmMushroomEffect);
        });
    }
    removeRageEffect(hasBerserkGene = false) {
        if (hasBerserkGene) {
            this.addBerserkEffect();
        }
        else {
            this.sprite.clearTint();
        }
    }
    addBerserkEffect() {
        this.sprite.setTint(0x00ff00);
    }
    removeBerserkEffect() {
        this.sprite.clearTint();
    }
    addFloatingAnimation() {
        this.floatingTween = this.scene.tweens.add({
            targets: this.sprite,
            y: { from: this.sprite.y - 10, to: this.sprite.y - 20 },
            duration: 500,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: -1
        });
    }
    removeFloatingAnimation() {
        if (this.floatingTween) {
            this.floatingTween.stop();
            this.floatingTween = undefined;
        }
    }
    addFlowerTrick() {
        const flowerTrick = this.scene.add.container();
        for (let i = 0; i < 5; i++) {
            const flowerSprite = this.scene.add
                .sprite(0, 0, "abilities", `${Ability_1.Ability.FLOWER_TRICK}/000.png`)
                .setScale(2);
            flowerSprite.anims.play({
                key: Ability_1.Ability.FLOWER_TRICK,
                frameRate: 7,
                repeat: -1
            });
            flowerTrick.add(flowerSprite);
        }
        const circle = new phaser_1.Geom.Circle(0, 0, 48);
        phaser_1.default.Actions.PlaceOnCircle(flowerTrick.getAll(), circle);
        this.add(flowerTrick);
        this.scene.tweens.add({
            targets: circle,
            radius: 50,
            ease: phaser_1.default.Math.Easing.Quartic.Out,
            duration: 3000,
            onUpdate: function (tween) {
                phaser_1.default.Actions.RotateAroundDistance(flowerTrick.getAll(), { x: 0, y: 0 }, 0.08, circle.radius);
            },
            onComplete: function () {
                flowerTrick.destroy(true);
            }
        });
    }
    displayBoost(stat, debug) {
        (0, abilities_animations_1.displayBoost)(this, stat, 0, 0, debug);
    }
    drawSpeechBubble(emoteAvatar, isOpponent) {
        this.emoteBubble = new emote_bubble_1.EmoteBubble(this.scene, emoteAvatar, isOpponent);
        this.add(this.emoteBubble);
        const x = isOpponent ? -40 : +40;
        const y = isOpponent ? +100 : -120;
        this.emoteBubble.setPosition(x, y);
        setTimeout(() => {
            if (this.emoteBubble) {
                this.emoteBubble.destroy();
                this.emoteBubble = null;
            }
        }, 3000);
    }
}
exports.default = PokemonSprite;
const isEntity = (pokemon) => {
    return "status" in pokemon;
};
exports.isEntity = isEntity;
const lazyLoadingRequests = {};
function loadCompressedAtlas(scene, index) {
    if (index in lazyLoadingRequests) {
        return lazyLoadingRequests[index];
    }
    lazyLoadingRequests[index] = new Promise((resolve) => {
        scene.load.once(`filecomplete-json-pokemon-atlas-${index}`, (key, type, data) => {
            var _a;
            const image = data.i;
            function traverse(obj, path, frames) {
                if (Array.isArray(obj)) {
                    const [sourceSizew, sourceSizeh, spriteSourceSizex, spriteSourceSizey, spriteSourceSizew, spriteSourceSizeh, framex, framey, framew, frameh] = obj;
                    frames.push({
                        filename: path,
                        rotated: false,
                        trimmed: true,
                        sourceSize: {
                            w: sourceSizew,
                            h: sourceSizeh
                        },
                        spriteSourceSize: {
                            x: spriteSourceSizex,
                            y: spriteSourceSizey,
                            w: spriteSourceSizew,
                            h: spriteSourceSizeh
                        },
                        frame: {
                            x: framex,
                            y: framey,
                            w: framew,
                            h: frameh
                        }
                    });
                }
                else if (obj instanceof Object) {
                    for (const key in obj) {
                        traverse(obj[key], path ? path + "/" + key : key, frames);
                    }
                }
            }
            const frames = [];
            traverse(data.a, "", frames);
            const multiatlas = {
                textures: [
                    {
                        image: `${image}?v=${package_json_1.default.assetsVersion}`,
                        format: "RGBA8888",
                        size: {
                            w: data.s[0],
                            h: data.s[1]
                        },
                        scale: (_a = data.s[2]) !== null && _a !== void 0 ? _a : 1,
                        frames
                    }
                ]
            };
            const index = image.replace(".png", "");
            scene.textures.once(`addtexture-${index}`, () => {
                delete lazyLoadingRequests[index];
                resolve(index);
            });
            scene.load.multiatlas(index, multiatlas, "/assets/pokemons").start();
        });
        scene.load
            .json(`pokemon-atlas-${index}`, `/assets/pokemons/${index}.json?v=${package_json_1.default.assetsVersion}`)
            .start();
    });
    return lazyLoadingRequests[index];
}
//# sourceMappingURL=pokemon.js.map