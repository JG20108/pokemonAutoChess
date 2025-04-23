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
exports.addWanderingPokemon = addWanderingPokemon;
const schema_1 = require("@colyseus/schema");
const phaser_1 = __importStar(require("phaser"));
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../../../models/precomputed/precomputed-pokemon-data");
const types_1 = require("../../../../types");
const Config_1 = require("../../../../types/Config");
const Ability_1 = require("../../../../types/enum/Ability");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const number_1 = require("../../../../utils/number");
const random_1 = require("../../../../utils/random");
const schemas_1 = require("../../../../utils/schemas");
const utils_1 = require("../../pages/utils/utils");
const preferences_1 = require("../../preferences");
const abilities_animations_1 = require("./abilities-animations");
const draggable_object_1 = __importDefault(require("./draggable-object"));
const items_container_1 = __importDefault(require("./items-container"));
const life_bar_1 = __importDefault(require("./life-bar"));
const pokemon_detail_1 = __importDefault(require("./pokemon-detail"));
const power_bar_1 = __importDefault(require("./power-bar"));
const depths_1 = require("../depths");
const spriteCountPerPokemon = new Map();
class PokemonSprite extends draggable_object_1.default {
    constructor(scene, x, y, pokemon, playerId, inBattle, flip) {
        var _a, _b;
        super(scene, x, y, 75, 75, playerId !== scene.uid);
        this.types = new Set();
        this.detail = null;
        this.animationLocked = false;
        this.skydiving = false;
        this.meal = "";
        this.inBattle = false;
        this.flip = flip;
        this.playerId = playerId;
        this.shouldShowTooltip = true;
        this.stars = pokemon.stars;
        this.stages = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).stages;
        this.evolution = inBattle ? Pokemon_1.Pkm.DEFAULT : pokemon.evolution;
        this.emotion = pokemon.emotion;
        this.shiny = pokemon.shiny;
        this.height = 0;
        this.width = 0;
        this.index = pokemon.index;
        this.name = pokemon.name;
        this.rarity = pokemon.rarity;
        this.id = pokemon.id;
        this.hp = pokemon.hp;
        this.range = pokemon.range;
        this.critChance = Config_1.DEFAULT_CRIT_CHANCE;
        this.atk = pokemon.atk;
        this.def = pokemon.def;
        this.speDef = pokemon.speDef;
        this.attackType = pokemon.attackType;
        this.types = new Set((0, schemas_1.values)(pokemon.types));
        this.maxPP = pokemon.maxPP;
        this.speed = pokemon.speed;
        this.targetX = null;
        this.targetY = null;
        this.skill = pokemon.skill;
        this.passive = pokemon.passive;
        this.positionX = pokemon.positionX;
        this.positionY = pokemon.positionY;
        this.attackSprite = pokemon.attackSprite;
        this.ap = pokemon.ap;
        this.luck = pokemon.luck;
        this.inBattle = inBattle;
        if (this.range > 1) {
            this.rangeType = "range";
        }
        else {
            this.rangeType = "melee";
        }
        const m = scene.plugins.get("rexMoveTo");
        this.moveManager = m.add(this, {
            speed: 300,
            rotateToTarget: false
        });
        this.lazyloadAnimations(scene);
        const isEntity = (pokemon) => {
            return inBattle;
        };
        if (isEntity(pokemon)) {
            this.orientation = pokemon.orientation;
            this.action = pokemon.action;
        }
        else {
            this.orientation = Game_1.Orientation.DOWNLEFT;
            this.action = Game_1.PokemonActionState.IDLE;
        }
        const textureIndex = scene.textures.exists(this.index) ? this.index : "0000";
        this.sprite = new phaser_1.GameObjects.Sprite(scene, 0, 0, textureIndex, `${Game_1.PokemonTint.NORMAL}/${Game_1.PokemonActionState.IDLE}/${Game_1.SpriteType.ANIM}/${Game_1.Orientation.DOWN}/0000`);
        const baseHP = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).hp;
        const sizeBuff = (pokemon.hp - baseHP) / baseHP;
        this.sprite.setScale(2 + sizeBuff).setDepth(depths_1.DEPTH.POKEMON);
        this.sprite.on(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => {
            var _a;
            this.animationLocked = false;
            (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, pokemon.action, this.flip);
        });
        this.height = this.sprite.height;
        this.width = this.sprite.width;
        this.itemsContainer = new items_container_1.default(scene, (_a = pokemon.items) !== null && _a !== void 0 ? _a : new schema_1.SetSchema(), this.width / 2 + 25, -35, this.id, playerId);
        const hasShadow = ((_b = Pokemon_1.AnimationConfig[pokemon.name]) === null || _b === void 0 ? void 0 : _b.noShadow) !== true;
        if (hasShadow) {
            this.shadow = new phaser_1.GameObjects.Sprite(scene, 0, 5, textureIndex);
            this.shadow.setScale(2, 2).setDepth(depths_1.DEPTH.POKEMON_SHADOW);
            this.add(this.shadow);
        }
        this.add(this.sprite);
        if (isEntity(pokemon)) {
            if (pokemon.status.light) {
                this.addLight();
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
        }
        else {
            if (pokemon.items.has(Item_1.Item.SHINY_STONE)) {
                this.addLight();
            }
        }
        this.add(this.itemsContainer);
        if (isEntity(pokemon)) {
            this.setLifeBar(pokemon, scene);
            if (pokemon.maxPP > 0)
                this.setPowerBar(pokemon, scene);
        }
        else {
            if (pokemon.meal !== "") {
                this.updateMeal(pokemon.meal);
            }
        }
        this.draggable =
            playerId === scene.uid &&
                !inBattle &&
                scene.spectate === false;
        if (isEntity(pokemon)) {
            this.pp = pokemon.pp;
            this.team = pokemon.team;
            this.shield = pokemon.shield;
            this.life = pokemon.life;
            this.critPower = pokemon.critPower;
            this.critChance = pokemon.critChance;
        }
        else {
            this.critPower = Config_1.DEFAULT_CRIT_POWER;
            this.critChance = Config_1.DEFAULT_CRIT_CHANCE;
        }
        this.setDepth(depths_1.DEPTH.POKEMON);
        const isGameScene = (scene) => "lastPokemonDetail" in scene;
        if (isGameScene(this.scene) && this.scene.lastPokemonDetail) {
            this.scene.lastPokemonDetail.closeDetail();
            this.scene.lastPokemonDetail = null;
        }
    }
    lazyloadAnimations(scene, unload = false) {
        var _a, _b, _c;
        const tint = this.shiny ? Game_1.PokemonTint.SHINY : Game_1.PokemonTint.NORMAL;
        const pokemonSpriteKey = `${this.index}/${tint}`;
        let spriteCount = (_a = spriteCountPerPokemon.get(pokemonSpriteKey)) !== null && _a !== void 0 ? _a : 0;
        if (unload) {
            spriteCount = (0, number_1.min)(0)(spriteCount - 1);
            if (spriteCount === 0 && (scene === null || scene === void 0 ? void 0 : scene.animationManager)) {
                (_b = scene.animationManager) === null || _b === void 0 ? void 0 : _b.unloadPokemonAnimations(this.index, tint);
            }
        }
        else {
            scene === null || scene === void 0 ? void 0 : scene.animationManager;
            if (spriteCount === 0 && (scene === null || scene === void 0 ? void 0 : scene.animationManager)) {
                (_c = scene.animationManager) === null || _c === void 0 ? void 0 : _c.createPokemonAnimations(this.index, tint);
            }
            spriteCount++;
        }
        spriteCountPerPokemon.set(pokemonSpriteKey, spriteCount);
    }
    updateTooltipPosition() {
        if (this.detail) {
            if (this.input && (0, preferences_1.preference)("showDetailsOnHover")) {
                this.detail.setPosition(this.input.localX + 200, (0, number_1.min)(0)(this.input.localY - 175));
                return;
            }
            const absX = this.x + this.detail.width / 2 + 60;
            const minX = this.detail.width / 2;
            const maxX = window.innerWidth - this.detail.width / 2;
            const absY = this.y - this.detail.height / 2 - 40;
            const minY = this.detail.height / 2;
            const maxY = window.innerHeight - this.detail.height / 2;
            const [x, y] = [
                (0, number_1.clamp)(absX, minX, maxX) - this.x,
                (0, number_1.clamp)(absY, minY, maxY) - this.y
            ];
            this.detail.setPosition(x, y);
        }
    }
    destroy(fromScene) {
        const g = this.scene;
        super.destroy(fromScene);
        this.closeDetail();
        this.lazyloadAnimations(g, true);
    }
    closeDetail() {
        if (this.detail) {
            this.detail.dom.remove();
            this.remove(this.detail, true);
            this.detail = null;
        }
    }
    openDetail() {
        const s = this.scene;
        if (s.lastPokemonDetail && s.lastPokemonDetail !== this) {
            s.lastPokemonDetail.closeDetail();
            s.lastPokemonDetail = null;
        }
        this.detail = new pokemon_detail_1.default(this.scene, 0, 0, this.name, this.rarity, this.life || this.hp, this.atk, this.def, this.speDef, this.range, this.speed, this.critChance, this.critPower, this.ap, this.pp || this.maxPP, this.luck, this.types, this.skill, this.passive, this.emotion, this.shiny, this.index, this.stars, (0, precomputed_pokemon_data_1.getPokemonData)(this.name).stages, this.evolution, this.itemsContainer.items, this.inBattle);
        this.detail
            .setPosition(this.detail.width / 2 + 60, (0, number_1.min)(0)(-this.detail.height / 2 - 40))
            .setDepth(depths_1.DEPTH.TOOLTIP);
        this.detail.removeInteractive();
        this.add(this.detail);
        s.lastPokemonDetail = this;
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
    attackAnimation(targetX, targetY, delayBeforeShoot, travelTime) {
        const isRange = this.attackSprite.endsWith("/range");
        const startX = isRange ? this.positionX : targetX;
        const startY = isRange ? this.positionY : targetY;
        const LATENCY_COMPENSATION = 20;
        let attackSprite = this.attackSprite;
        let tint = 0xffffff;
        if (attackSprite === types_1.AttackSprite.DRAGON_GREEN_RANGE) {
            attackSprite = types_1.AttackSprite.DRAGON_RANGE;
            tint = 0x80ff80;
        }
        if (startX != null && startY != null) {
            const coordinates = (0, utils_1.transformAttackCoordinate)(startX, startY, this.flip);
            const projectile = this.scene.add.sprite(coordinates[0], coordinates[1], "attacks", `${attackSprite}/000.png`);
            const scale = types_1.AttackSpriteScale[attackSprite];
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
            }
            else {
                projectile.anims.play({ key: attackSprite });
                const coordinatesTarget = (0, utils_1.transformAttackCoordinate)(targetX, targetY, this.flip);
                this.scene.tweens.add({
                    targets: projectile,
                    x: coordinatesTarget[0],
                    y: coordinatesTarget[1],
                    ease: "Linear",
                    duration: (0, number_1.min)(250)(travelTime),
                    delay: delayBeforeShoot - LATENCY_COMPENSATION,
                    onComplete: () => projectile.destroy(),
                    onStop: () => projectile.destroy(),
                    onStart: () => projectile.setVisible(true)
                });
            }
        }
    }
    deathAnimation() {
        this.life = 0;
        if (this.lifebar) {
            this.lifebar.setAmount(this.life);
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
    }
    resurectAnimation() {
        if (this.lifebar) {
            this.lifebar.setAmount(0);
        }
        const resurectAnim = this.scene.add.sprite(0, -10, "RESURECT", "000");
        resurectAnim.setDepth(depths_1.DEPTH.BOOST_FRONT);
        resurectAnim.setScale(2, 2);
        resurectAnim.anims.play("RESURECT");
        resurectAnim.once(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => {
            resurectAnim.destroy();
        });
        this.add(resurectAnim);
    }
    displayAnimation(anim) {
        var _a, _b;
        return (0, abilities_animations_1.displayAbility)(this.scene, [], anim, this.orientation, this.positionX, !this.inBattle
            ? this.positionY - 1
            : this.team === Game_1.Team.RED_TEAM
                ? 4 - this.positionY
                : this.positionY, (_a = this.targetX) !== null && _a !== void 0 ? _a : -1, (_b = this.targetY) !== null && _b !== void 0 ? _b : -1, this.flip);
    }
    fishingAnimation() {
        this.displayAnimation("FISHING");
        this.sprite.once(phaser_1.default.Animations.Events.ANIMATION_REPEAT, () => {
            var _a;
            const g = this.scene;
            (_a = g.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.IDLE, this.flip);
        });
    }
    emoteAnimation() {
        var _a;
        const g = this.scene;
        (_a = g.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.EMOTE, this.flip, false);
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
            const itemSprite = this.scene.add.sprite(this.x, this.y, "item", item + ".png");
            itemSprite.setScale(0.5);
            const shinyEffect = this.scene.add.sprite(this.x, this.y, "shine");
            shinyEffect.setScale(2);
            shinyEffect.play("shine");
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
    updateMeal(meal) {
        var _a;
        this.meal = meal;
        (_a = this.mealSprite) === null || _a === void 0 ? void 0 : _a.destroy();
        if (meal) {
            this.mealSprite = this.scene.add
                .sprite(0, 20, "item", meal + ".png")
                .setScale(0.25);
            this.add(this.mealSprite);
        }
    }
    specialAttackAnimation(group, ultCount) {
        if (this.skill && this.skill === Ability_1.Ability.GROWTH) {
            this.sprite.setScale(2 + 0.5 * ultCount);
        }
    }
    setLifeBar(pokemon, scene) {
        if (pokemon.life !== undefined) {
            this.lifebar = new life_bar_1.default(scene, 0, this.height / 2 + 6, 60, pokemon.life + pokemon.shield, pokemon.shield, pokemon.team, this.flip);
            this.lifebar.setAmount(pokemon.life);
            this.lifebar.setShieldAmount(pokemon.shield);
            this.add(this.lifebar);
        }
    }
    setPowerBar(pokemon, scene) {
        if (pokemon.pp !== undefined) {
            this.powerbar = new power_bar_1.default(scene, 0, this.height / 2 + 12, 60, pokemon.maxPP);
            this.powerbar.setAmount(pokemon.pp);
            this.add(this.powerbar);
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
    addPoison() {
        if (!this.poison) {
            this.poison = this.scene.add
                .sprite(0, -30, "status", "POISON/000.png")
                .setScale(2);
            this.poison.anims.play("POISON");
            this.add(this.poison);
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
            this.moveManager.setSpeed(800);
            this.moveManager.moveTo(this.x, -100);
        }
    }
    skydiveDown() {
        var _a, _b;
        if (this.skydiving) {
            const landingCoordinates = (0, utils_1.transformAttackCoordinate)((_a = this.targetX) !== null && _a !== void 0 ? _a : this.positionX, (_b = this.targetY) !== null && _b !== void 0 ? _b : this.positionY, this.flip);
            const finalCoordinates = (0, utils_1.transformAttackCoordinate)(this.positionX, this.positionY, this.flip);
            this.x = landingCoordinates[0];
            this.y = landingCoordinates[1];
            this.moveManager.setSpeed(3);
            this.moveManager.moveTo(finalCoordinates[0], finalCoordinates[1]);
            this.skydiving = false;
        }
    }
    addResurection() {
        if (!this.resurection) {
            this.resurection = this.scene.add
                .sprite(0, -45, "status", "RESURECTION/000.png")
                .setScale(2);
            this.resurection.anims.play("RESURECTION");
            this.add(this.resurection);
        }
    }
    removeResurection() {
        if (this.resurection) {
            this.remove(this.resurection, true);
            this.resurection = undefined;
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
    addSpikeArmor() {
        if (!this.spikeArmor) {
            this.spikeArmor = this.scene.add
                .sprite(0, -5, "abilities", `${Ability_1.Ability.SPIKY_SHIELD}/000.png`)
                .setScale(2);
            this.spikeArmor.anims.play(Ability_1.Ability.SPIKY_SHIELD);
            this.add(this.spikeArmor);
        }
    }
    removeSpikeArmor() {
        if (this.spikeArmor) {
            this.remove(this.spikeArmor, true);
            this.spikeArmor = undefined;
        }
    }
    addMagicBounce() {
        if (!this.magicBounce) {
            this.magicBounce = this.scene.add
                .sprite(0, -5, "abilities", `${Ability_1.Ability.SPIKY_SHIELD}/000.png`)
                .setScale(2)
                .setTint(0xffa0ff);
            this.magicBounce.anims.play(Ability_1.Ability.MAGIC_BOUNCE);
            this.add(this.magicBounce);
        }
    }
    removeMagicBounce() {
        if (this.magicBounce) {
            this.remove(this.magicBounce, true);
            this.magicBounce = undefined;
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
    addElectricField() {
        if (!this.electricField) {
            this.electricField = this.scene.add
                .sprite(0, 10, "status", "ELECTRIC_FIELD/000.png")
                .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                .setScale(1.5);
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
                .setScale(1);
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
    removeRageEffect() {
        this.sprite.clearTint();
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
}
exports.default = PokemonSprite;
function addWanderingPokemon(scene, id, pkm, onClick) {
    var _a;
    const fromLeft = (0, random_1.chance)(1 / 2);
    const [startX, endX] = fromLeft
        ? [-100, +window.innerWidth + 100]
        : [+window.innerWidth + 100, -100];
    const [startY, endY] = [
        100 + Math.round(Math.random() * 500),
        100 + Math.round(Math.random() * 500)
    ];
    const SPEED = 0.3;
    const pokemon = new PokemonSprite(scene, startX, startY, pokemon_factory_1.default.createPokemonFromName(pkm), "wanderer", false, false);
    pokemon.orientation = fromLeft ? Game_1.Orientation.RIGHT : Game_1.Orientation.LEFT;
    (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(pokemon, Game_1.PokemonActionState.WALK, false);
    const tween = scene.tweens.add({
        targets: pokemon,
        x: endX,
        y: endY,
        ease: "Linear",
        duration: window.innerWidth / SPEED,
        onComplete: () => {
            if (pokemon) {
                pokemon.destroy();
            }
        }
    });
    pokemon.draggable = false;
    pokemon.sprite.setInteractive();
    pokemon.sprite.on("pointerdown", (pointer) => {
        onClick(pokemon, id, pointer, tween);
    });
}
//# sourceMappingURL=pokemon.js.map