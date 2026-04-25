"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phaser_1 = require("phaser");
const config_1 = require("../../../../config");
const attacking_state_1 = require("../../../../core/attacking-state");
const pokemon_entity_1 = require("../../../../core/pokemon-entity");
const pokemon_1 = require("../../../../models/colyseus-models/pokemon");
const precomputed_pokemon_data_1 = require("../../../../models/precomputed/precomputed-pokemon-data");
const Ability_1 = require("../../../../types/enum/Ability");
const Effect_1 = require("../../../../types/enum/Effect");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const Passive_1 = require("../../../../types/enum/Passive");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const board_1 = require("../../../../utils/board");
const number_1 = require("../../../../utils/number");
const orientation_1 = require("../../../../utils/orientation");
const random_1 = require("../../../../utils/random");
const game_pokemon_detail_1 = require("../../pages/component/game/game-pokemon-detail");
const utils_1 = require("../../pages/utils/utils");
const depths_1 = require("../depths");
const abilities_animations_1 = require("./abilities-animations");
const pokemon_2 = __importDefault(require("./pokemon"));
const pokemon_animations_1 = require("./pokemon-animations");
class BattleManager {
    constructor(scene, group, simulation, animationManager, player) {
        this.pokemonSprites = new Map();
        this.group = group;
        this.scene = scene;
        this.animationManager = animationManager;
        this.player = player;
        this.boardEventSprites = Array.from({ length: config_1.BOARD_WIDTH * config_1.BOARD_HEIGHT }, () => []);
        this.pokemonSprites = new Map();
        if (simulation)
            this.setSimulation(simulation);
    }
    get flip() {
        var _a;
        return this.player.id !== ((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.bluePlayerId);
    }
    buildPokemons() {
        var _a, _b;
        (_a = this.simulation) === null || _a === void 0 ? void 0 : _a.blueTeam.forEach((pkm, key) => {
            var _a;
            ((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) &&
                this.addPokemonEntitySprite(this.simulation.id, pkm, this.simulation.bluePlayerId);
        });
        (_b = this.simulation) === null || _b === void 0 ? void 0 : _b.redTeam.forEach((pkm, key) => {
            var _a;
            ((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) &&
                this.addPokemonEntitySprite(this.simulation.id, pkm, this.simulation.redPlayerId);
        });
    }
    addPokemonEntitySprite(simulationId, pokemon, playerId) {
        var _a, _b, _c;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) === simulationId &&
            this.pokemonSprites.has(pokemon.id) === false) {
            const coordinates = (0, utils_1.transformEntityCoordinates)(pokemon.positionX, pokemon.positionY, this.flip);
            const pokemonUI = new pokemon_2.default(this.scene, coordinates[0], coordinates[1], pokemon, playerId, true, this.flip);
            pokemonUI.setVisible((_c = (_b = this.simulation) === null || _b === void 0 ? void 0 : _b.started) !== null && _c !== void 0 ? _c : false);
            this.group.add(pokemonUI);
            this.pokemonSprites.set(pokemon.id, pokemonUI);
            if (pokemon.name === Pokemon_1.Pkm.FALINKS_BRASS ||
                pokemon.passive === Passive_1.Passive.AVALUGG) {
                this.addTroopers(pokemon, pokemonUI, simulationId);
            }
            if (pokemon.action === Game_1.PokemonActionState.BLOSSOM) {
                pokemonUI.blossomAnimation();
            }
            else {
                this.animationManager.animatePokemon(pokemonUI, pokemon.status.tree
                    ? Game_1.PokemonActionState.IDLE
                    : Game_1.PokemonActionState.WALK, this.flip);
            }
        }
    }
    clear() {
        this.group.clear(true, true);
        this.boardEventSprites = Array.from({ length: config_1.BOARD_WIDTH * config_1.BOARD_HEIGHT }, () => []);
        this.pokemonSprites.clear();
        this.closeTooltips();
    }
    closeTooltips() {
        this.pokemonSprites.forEach((pokemon) => {
            if (pokemon.detail) {
                pokemon.closeDetail();
            }
        });
    }
    removePokemon(simulationId, pokemon) {
        var _a;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) == simulationId &&
            this.pokemonSprites.has(pokemon.id)) {
            const pokemonSprite = this.pokemonSprites.get(pokemon.id);
            if (pokemon.passive === Passive_1.Passive.INANIMATE && pokemon.hp > 0) {
                setTimeout(() => pokemonSprite.destroy(), 500);
            }
            else {
                this.animationManager.animatePokemon(pokemonSprite, Game_1.PokemonActionState.HURT, this.flip);
                pokemonSprite.deathAnimation();
            }
        }
    }
    updatePokemonItems(simulationId, pokemon) {
        var _a;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) === simulationId &&
            this.pokemonSprites.has(pokemon.id)) {
            const pkm = this.pokemonSprites.get(pokemon.id);
            pkm.itemsContainer.render(pokemon.items);
        }
    }
    changeStatus(simulationId, pokemon, field, previousValue) {
        var _a;
        if (pokemon.passive === Passive_1.Passive.INANIMATE)
            return;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) == simulationId &&
            this.pokemonSprites.has(pokemon.id)) {
            const pkm = this.pokemonSprites.get(pokemon.id);
            if (field === "poisonStacks") {
                if (pokemon.status.poisonStacks > 0) {
                    pkm.addPoison(pokemon.status.poisonStacks);
                }
                else {
                    pkm.removePoison();
                }
            }
            else if (field === "sleep") {
                if (pokemon.status.sleep) {
                    pkm.addSleep();
                    this.animationManager.animatePokemon(pkm, Game_1.PokemonActionState.SLEEP, this.flip);
                }
                else {
                    pkm.removeSleep();
                }
            }
            else if (field === "burn") {
                if (pokemon.status.burn) {
                    pkm.addBurn();
                }
                else {
                    pkm.removeBurn();
                }
            }
            else if (field === "silence") {
                if (pokemon.status.silence) {
                    pkm.addSilence();
                }
                else {
                    pkm.removeSilence();
                }
            }
            else if (field === "fatigue") {
                if (pokemon.status.fatigue) {
                    pkm.addFatigue();
                }
                else {
                    pkm.removeFatigue();
                }
            }
            else if (field === "confusion") {
                if (pokemon.status.confusion) {
                    pkm.addConfusion();
                }
                else {
                    pkm.removeConfusion();
                }
            }
            else if (field === "freeze") {
                if (pokemon.status.freeze) {
                    pkm.addFreeze();
                }
                else {
                    pkm.removeFreeze();
                }
            }
            else if (field === "protect") {
                if (pokemon.status.protect) {
                    pkm.addProtect();
                }
                else {
                    pkm.removeProtect();
                }
            }
            else if (field === "skydiving") {
                if (pokemon.status.skydiving) {
                    pkm.skydiveUp();
                }
                else {
                    pkm.skydiveDown();
                }
            }
            else if (field === "wound") {
                if (pokemon.status.wound) {
                    pkm.addWound();
                }
                else {
                    pkm.removeWound();
                }
            }
            else if (field === "resurrection") {
                if (pokemon.status.resurrection) {
                    pkm.addResurrection();
                }
                else {
                    pkm.removeResurrection();
                }
            }
            else if (field === "resurrecting") {
                if (pokemon.status.resurrecting) {
                    pkm.resurrectAnimation();
                }
                else {
                    pkm.animationLocked = false;
                }
            }
            else if (field === "paralysis") {
                if (pokemon.status.paralysis) {
                    pkm.addParalysis();
                }
                else {
                    pkm.removeParalysis();
                }
            }
            else if (field === "pokerus") {
                if (pokemon.status.pokerus) {
                    pkm.addPokerus();
                }
                else {
                    pkm.removePokerus();
                }
            }
            else if (field === "possessed") {
                if (pokemon.status.possessed) {
                    pkm.addPossessed();
                }
                else if (previousValue === true) {
                    pkm.removePossessed();
                }
            }
            else if (field === "locked") {
                if (pokemon.status.locked) {
                    pkm.addLocked();
                }
                else {
                    pkm.removeLocked();
                }
            }
            else if (field === "blinded") {
                if (pokemon.status.blinded) {
                    pkm.addBlinded();
                }
                else {
                    pkm.removeBlinded();
                }
            }
            else if (field === "armorReduction") {
                if (pokemon.status.armorReduction) {
                    pkm.addArmorReduction();
                }
                else {
                    pkm.removeArmorReduction();
                }
            }
            else if (field === "charm") {
                if (pokemon.status.charm) {
                    pkm.addCharm();
                }
                else {
                    pkm.removeCharm();
                }
            }
            else if (field === "flinch") {
                if (pokemon.status.flinch) {
                    pkm.addFlinch();
                }
                else {
                    pkm.removeFlinch();
                }
            }
            else if (field === "runeProtect") {
                if (pokemon.status.runeProtect) {
                    pkm.addRuneProtect();
                }
                else {
                    pkm.removeRuneProtect();
                }
            }
            else if (field === "curse") {
                if (pokemon.status.curse) {
                    pkm.addCurse();
                }
                else {
                    pkm.removeCurse();
                }
            }
            else if (field === "curseVulnerability") {
                if (pokemon.status.curseVulnerability) {
                    pkm.addCurseVulnerability();
                }
            }
            else if (field === "curseWeakness") {
                if (pokemon.status.curseWeakness) {
                    pkm.addCurseWeakness();
                }
            }
            else if (field === "curseTorment") {
                if (pokemon.status.curseTorment) {
                    pkm.addCurseTorment();
                }
            }
            else if (field === "curseFate") {
                if (pokemon.status.curseFate) {
                    pkm.addCurseFate();
                }
            }
            else if (field === "spikeArmor") {
                if (pokemon.status.spikeArmor) {
                    pkm.addReflectShieldAnim();
                }
                else {
                    pkm.removeReflectShieldAnim();
                }
            }
            else if (field === "magicBounce") {
                if (pokemon.status.magicBounce) {
                    pkm.addReflectShieldAnim(0xffa0ff);
                }
                else {
                    pkm.removeReflectShieldAnim();
                }
            }
            else if (field === "reflect") {
                if (pokemon.status.reflect) {
                    pkm.addReflectShieldAnim(0xff3030);
                }
                else {
                    pkm.removeReflectShieldAnim();
                }
            }
            else if (field === "electricField") {
                if (pokemon.status.electricField) {
                    pkm.addElectricField();
                }
                else {
                    pkm.removeElectricField();
                }
            }
            else if (field === "psychicField") {
                if (pokemon.status.psychicField) {
                    pkm.addPsychicField();
                }
                else {
                    pkm.removePsychicField();
                }
            }
            else if (field === "grassField") {
                if (pokemon.status.grassField) {
                    pkm.addGrassField();
                }
                else {
                    pkm.removeGrassField();
                }
            }
            else if (field === "fairyField") {
                if (pokemon.status.fairyField) {
                    pkm.addFairyField();
                }
                else {
                    pkm.removeFairyField();
                }
            }
            else if (field === "enraged") {
                if (pokemon.status.enraged) {
                    pkm.addRageEffect();
                }
                else if (previousValue === true) {
                    pkm.removeRageEffect(pokemon.items.has(Item_1.Item.BERSERK_GENE));
                }
            }
        }
    }
    changeCount(simulationId, pokemon, field, value, previousValue) {
        var _a;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) == simulationId &&
            this.group &&
            this.scene.sys.isActive() &&
            this.pokemonSprites.has(pokemon.id)) {
            const pkm = this.pokemonSprites.get(pokemon.id);
            if (field == "crit") {
                if (value != 0) {
                    this.displayCriticalHit(pkm.x, pkm.y);
                }
            }
            else if (field == "dodgeCount") {
                if (value != 0) {
                    this.displayDodge(pkm.x, pkm.y);
                }
            }
            else if (field == "ult") {
                if (value != 0) {
                    pkm.specialAttackAnimation(pokemon);
                }
                pkm.itemsContainer.updateCount(Item_1.Item.AQUA_EGG, value);
            }
            else if (field === "fieldCount") {
                if (value != 0) {
                    this.displayAbilityOnPokemon("FIELD_DEATH", pkm);
                }
            }
            else if (field == "fightingBlockCount") {
                if (value > 0 && value % 10 === 0) {
                    this.displayAbilityOnPokemon("FIGHTING_KNOCKBACK", pkm);
                }
            }
            else if (field === "fairyCritCount") {
                if (value != 0) {
                    this.displayAbilityOnPokemon("FAIRY_CRIT", pkm);
                }
            }
            else if (field === "starDustCount") {
                if (value !== 0) {
                    this.displayAbilityOnPokemon("STAR_DUST", pkm);
                }
            }
            else if (field === "spellBlockedCount") {
                if (value != 0) {
                    this.displayBlockedSpell(pkm.x, pkm.y);
                }
            }
            else if (field === "manaBurnCount") {
                if (value != 0) {
                    this.displayManaBurn(pkm.x, pkm.y);
                }
            }
            else if (field === "moneyCount") {
                if (value > 0) {
                    this.scene.displayMoneyGain(pkm.x, pkm.y, value - previousValue);
                }
            }
            else if (field === "amuletCoinCount") {
                if (value > 0) {
                    pkm.itemsContainer.updateCount(Item_1.Item.AMULET_COIN, value);
                }
            }
            else if (field === "bottleCapCount") {
                if (value > 0) {
                    pkm.itemsContainer.updateCount(Item_1.Item.GOLD_BOTTLE_CAP, value);
                }
            }
            else if (field === "attackCount") {
                if (value !== 0) {
                    if (pkm.action == Game_1.PokemonActionState.ATTACK &&
                        pkm.targetX !== null &&
                        pkm.targetY !== null) {
                        const { delayBeforeShoot, travelTime } = (0, attacking_state_1.getAttackTimings)(pokemon);
                        pkm.attackAnimation(pokemon.targetX, pokemon.targetY, delayBeforeShoot, travelTime);
                    }
                }
            }
            else if (field === "tripleAttackCount") {
                if (value !== 0) {
                    this.displayTripleAttack(pkm.x, pkm.y);
                }
            }
            else if (field === "upgradeCount") {
                pkm.itemsContainer.updateCount(Item_1.Item.UPGRADE, value);
            }
            else if (field === "soulDewCount") {
                pkm.itemsContainer.updateCount(Item_1.Item.SOUL_DEW, value);
            }
            else if (field === "muscleBandCount") {
                pkm.itemsContainer.updateCount(Item_1.Item.MUSCLE_BAND, value);
            }
            else if (field === "machRibbonCount") {
                pkm.itemsContainer.updateCount(Item_1.Item.MACH_RIBBON, value);
            }
        }
    }
    changePokemon(simulationId, pokemon, field, value, previousValue) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.scene.sys.isActive() &&
            ((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) == simulationId &&
            this.pokemonSprites.has(pokemon.id)) {
            const pkmSprite = this.pokemonSprites.get(pokemon.id);
            switch (field) {
                case "positionX":
                case "positionY":
                    {
                        const coordinates = (0, utils_1.transformEntityCoordinates)(pokemon.positionX, pokemon.positionY, this.flip);
                        if (pokemon.skill === Ability_1.Ability.TELEPORT || pkmSprite.isTeleporting) {
                            pkmSprite.x = coordinates[0];
                            pkmSprite.y = coordinates[1];
                            pkmSprite.specialAttackAnimation(pokemon);
                            pkmSprite.isTeleporting = false;
                        }
                        else if (!pokemon.status.skydiving) {
                            const walkingSpeed = 2 *
                                (0, pokemon_entity_1.getMoveSpeed)(pokemon) *
                                Math.max(Math.abs(pkmSprite.x - coordinates[0]), Math.abs(pkmSprite.y - coordinates[1]));
                            pkmSprite.moveManager.setSpeed(walkingSpeed);
                            pkmSprite.moveManager.moveTo(coordinates[0], coordinates[1]);
                            if (pkmSprite.troopers) {
                                pkmSprite.troopers.forEach((trooper, i) => {
                                    var _a, _b;
                                    trooper.moveManager.setSpeed(walkingSpeed);
                                    const { dx, dy } = (_b = (_a = TroopersDeltaPositions[trooper.name]) === null || _a === void 0 ? void 0 : _a.call(TroopersDeltaPositions, i, pkmSprite.orientation)) !== null && _b !== void 0 ? _b : {
                                        dx: 0,
                                        dy: 0
                                    };
                                    trooper.moveManager.moveTo(coordinates[0] + dx, coordinates[1] + dy);
                                });
                            }
                        }
                    }
                    break;
                case "orientation": {
                    if (pkmSprite.orientation !== pokemon.orientation) {
                        pkmSprite.orientation = pokemon.orientation;
                        if (pokemon.action !== Game_1.PokemonActionState.SLEEP) {
                            this.animationManager.animatePokemon(pkmSprite, pokemon.action, this.flip);
                        }
                        if (pkmSprite.troopers) {
                            pkmSprite.troopers.forEach((trooper, i) => {
                                trooper.orientation = pokemon.orientation;
                            });
                        }
                    }
                    break;
                }
                case "action":
                    if (pkmSprite.action !== pokemon.action) {
                        pkmSprite.action = pokemon.action;
                        this.animationManager.animatePokemon(pkmSprite, pokemon.action, this.flip);
                    }
                    break;
                case "ap":
                    if (previousValue != null && value && value > previousValue) {
                        pkmSprite.displayBoost(Game_1.Stat.AP);
                    }
                    break;
                case "speed":
                    if (previousValue != null && value && value > previousValue) {
                        pkmSprite.displayBoost(Game_1.Stat.SPEED);
                    }
                    break;
                case "maxHP": {
                    const baseHP = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).hp;
                    const scale = 2 * Math.sqrt(1 + (pokemon.maxHP - baseHP) / baseHP);
                    pkmSprite.sprite.setScale(scale);
                    (_b = pkmSprite.lifebar) === null || _b === void 0 ? void 0 : _b.setMaxHp(pokemon.maxHP);
                    break;
                }
                case "hp":
                    (_c = pkmSprite.lifebar) === null || _c === void 0 ? void 0 : _c.setHp(Number(value));
                    break;
                case "shield":
                    if (pokemon.shield >= 0) {
                        if (previousValue != null && value && value > previousValue) {
                            pkmSprite.displayBoost(Game_1.Stat.SHIELD);
                        }
                        (_d = pkmSprite.lifebar) === null || _d === void 0 ? void 0 : _d.setShield(Number(value));
                    }
                    break;
                case "pp":
                    (_e = pkmSprite.lifebar) === null || _e === void 0 ? void 0 : _e.setPP((0, number_1.max)(pokemon.maxPP)(value));
                    break;
                case "atk":
                    if (previousValue != null && value && value > previousValue) {
                        pkmSprite.displayBoost(Game_1.Stat.ATK);
                    }
                    break;
                case "def":
                    if (previousValue != null && value && value > previousValue) {
                        pkmSprite.displayBoost(Game_1.Stat.DEF);
                    }
                    break;
                case "speDef":
                    if (previousValue != null && value && value > previousValue) {
                        pkmSprite.displayBoost(Game_1.Stat.SPE_DEF);
                    }
                    break;
                case "targetX":
                    if (pokemon.targetX >= 0) {
                        pkmSprite.targetX = pokemon.targetX;
                    }
                    else {
                        pkmSprite.targetX = null;
                    }
                    break;
                case "targetY":
                    if (pokemon.targetY >= 0) {
                        pkmSprite.targetY = pokemon.targetY;
                    }
                    else {
                        pkmSprite.targetY = null;
                    }
                    break;
                case "team":
                    if (pkmSprite.lifebar) {
                        pkmSprite.lifebar.setTeam(value, this.flip);
                    }
                    break;
                case "index":
                    if (previousValue !== value) {
                        pkmSprite.unloadAnimations(this.scene, previousValue, pkmSprite.pokemon.shiny ? Game_1.PokemonTint.SHINY : Game_1.PokemonTint.NORMAL);
                        pkmSprite.attackSprite =
                            (_g = (_f = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[value]]) === null || _f === void 0 ? void 0 : _f.attackSprite) !== null && _g !== void 0 ? _g : pkmSprite.attackSprite;
                        pkmSprite.lazyLoadAnimations(this.scene).then(() => {
                            pkmSprite.animationLocked = false;
                            if (previousValue !== undefined) {
                                pkmSprite.evolutionAnimation();
                            }
                            else {
                                this.animationManager.animatePokemon(pkmSprite, pkmSprite.pokemon.action, this.flip, false);
                            }
                        });
                    }
                    break;
                case "shiny":
                    if (pkmSprite.pokemon.shiny !== value) {
                        this.animationManager.animatePokemon(pkmSprite, Game_1.PokemonActionState.IDLE, this.flip, false);
                    }
                    break;
            }
            if (pkmSprite.detail instanceof game_pokemon_detail_1.GamePokemonDetailDOMWrapper) {
                pkmSprite.detail.updatePokemon(pkmSprite.pokemon);
            }
        }
    }
    displayDodge(x, y) {
        const textStyle = {
            fontSize: "25px",
            fontFamily: "Verdana",
            color: "#FFFFFF",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const crit = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, x - 40, y - 50, "DODGE !", textStyle));
        crit.setDepth(depths_1.DEPTH.TEXT);
        this.scene.add.tween({
            targets: [crit],
            ease: "Linear",
            duration: 1000,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            y: {
                getStart: () => y - 50,
                getEnd: () => y - 110
            },
            onComplete: () => {
                crit.destroy();
            }
        });
    }
    displayCriticalHit(x, y) {
        const textStyle = {
            fontSize: "25px",
            fontFamily: "Verdana",
            color: "#FF0000",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const crit = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, x - 25, y - 50, "CRIT !", textStyle));
        crit.setDepth(depths_1.DEPTH.TEXT);
        this.scene.add.tween({
            targets: [crit],
            ease: "Linear",
            duration: 1000,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            y: {
                getStart: () => y - 50,
                getEnd: () => y - 110
            },
            onComplete: () => {
                crit.destroy();
            }
        });
    }
    displayBlockedSpell(x, y) {
        const textStyle = {
            fontSize: "25px",
            fontFamily: "Verdana",
            color: "#007BA7",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const blockedSpell = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, x - 30, y - 50, "Block!", textStyle));
        blockedSpell.setDepth(depths_1.DEPTH.TEXT);
        this.scene.add.tween({
            targets: [blockedSpell],
            ease: "Linear",
            duration: 1000,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            y: {
                getStart: () => y - 50,
                getEnd: () => y - 110
            },
            onComplete: () => {
                blockedSpell.destroy();
            }
        });
    }
    displayManaBurn(x, y) {
        const textStyle = {
            fontSize: "20px",
            fontFamily: "Verdana",
            color: "#9f40ff",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const manaBurn = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, x - 30, y - 50, "Burn!", textStyle));
        manaBurn.setDepth(depths_1.DEPTH.TEXT);
        this.scene.add.tween({
            targets: [manaBurn],
            ease: "Linear",
            duration: 1000,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            y: {
                getStart: () => y - 50,
                getEnd: () => y - 110
            },
            onComplete: () => {
                manaBurn.destroy();
            }
        });
    }
    displayTripleAttack(x, y) {
        const textStyle = {
            fontSize: "25px",
            fontFamily: "Verdana",
            color: "#FFFF00",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const tripleAttack = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, x - 30, y - 50, "ZAP!", textStyle));
        tripleAttack.setDepth(depths_1.DEPTH.TEXT_MINOR);
        this.scene.add.tween({
            targets: [tripleAttack],
            ease: "Linear",
            duration: 1000,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            y: {
                getStart: () => y - 50,
                getEnd: () => y - 110
            },
            onComplete: () => {
                tripleAttack.destroy();
            }
        });
    }
    displayAbility(args) {
        var _a, _b, _c, _d, _e;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) === args.id && args.skill) {
            (0, abilities_animations_1.displayAbility)({
                scene: this.scene,
                pokemonsOnBoard: this.group.getChildren(),
                ability: args.skill,
                ap: (_b = args.ap) !== null && _b !== void 0 ? _b : 0,
                orientation: args.orientation,
                positionX: args.positionX,
                positionY: args.positionY,
                targetX: (_c = args.targetX) !== null && _c !== void 0 ? _c : -1,
                targetY: (_d = args.targetY) !== null && _d !== void 0 ? _d : -1,
                flip: this.flip,
                delay: (_e = args.delay) !== null && _e !== void 0 ? _e : -1
            });
        }
    }
    displayAbilityOnPokemon(ability, pkmSprite) {
        var _a, _b;
        (0, abilities_animations_1.displayAbility)({
            scene: this.scene,
            pokemonsOnBoard: [],
            ability,
            ap: pkmSprite.pokemon.ap,
            orientation: pkmSprite.orientation,
            positionX: pkmSprite.positionX,
            positionY: pkmSprite.positionY,
            targetX: (_a = pkmSprite.targetX) !== null && _a !== void 0 ? _a : -1,
            targetY: (_b = pkmSprite.targetY) !== null && _b !== void 0 ? _b : -1,
            flip: this.flip
        });
    }
    removeBoardEvent(event) {
        const index = event.y * config_1.BOARD_WIDTH + event.x;
        if (event.effect === null) {
            this.boardEventSprites[index].forEach((sprite) => {
                sprite.destroy();
            });
            this.boardEventSprites[index] = [];
        }
        else {
            this.boardEventSprites[index].forEach((sprite) => {
                if (sprite.texture.key === "abilities" &&
                    sprite.frame.name.includes(event.effect)) {
                    sprite.destroy();
                }
            });
        }
    }
    displayBoardEvent(event) {
        const coordinates = (0, utils_1.transformEntityCoordinates)(event.x, event.y, this.flip);
        const index = event.y * config_1.BOARD_WIDTH + event.x;
        if (event.effect === Effect_1.EffectEnum.LIGHTNING_STRIKE) {
            const thunderSprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", `${Ability_1.Ability.THUNDER}/000.png`);
            thunderSprite.setDepth(depths_1.DEPTH.WEATHER_FX);
            thunderSprite.setScale(2, 2);
            thunderSprite.anims.play(Ability_1.Ability.THUNDER);
            thunderSprite.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                thunderSprite.destroy();
            });
        }
        if (event.effect === Effect_1.EffectEnum.SMOKE) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", "SMOKE/000.png");
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_AIR_LEVEL);
            sprite.anims.play(Effect_1.EffectEnum.SMOKE);
            sprite.setScale(3, 3);
            sprite.setAlpha(0);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 0.8,
                duration: 500
            });
        }
        if (event.effect === Effect_1.EffectEnum.POISON_GAS) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", `${Effect_1.EffectEnum.SMOKE}/000.png`);
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_AIR_LEVEL);
            sprite.setScale(3, 3);
            sprite.anims.play(Effect_1.EffectEnum.SMOKE);
            sprite.setTint(0xa0ff20);
            sprite.setFlipX(true);
            sprite.setAlpha(0);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 0.5,
                duration: 500,
                delay: (8 - coordinates[1]) * 100
            });
        }
        if (event.effect === Effect_1.EffectEnum.STRANGE_STEAM_BOARD_EFFECT) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", `${Effect_1.EffectEnum.SMOKE}/000.png`);
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_AIR_LEVEL);
            sprite.setScale(3, 3);
            sprite.anims.play(Effect_1.EffectEnum.SMOKE);
            sprite.setTint(0xff20a0);
            sprite.setFlipY(true);
            sprite.setAlpha(0);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 0.4,
                duration: 500,
                delay: (8 - coordinates[1]) * 100
            });
        }
        if (event.effect === Effect_1.EffectEnum.STEALTH_ROCKS) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", "STEALTH_ROCKS/013.png");
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL);
            sprite.setScale(1, 1);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 1,
                duration: 200,
                delay: 1000
            });
        }
        if (event.effect === Effect_1.EffectEnum.SPIKES) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1] + 16, "abilities", "SPIKES/001.png");
            sprite
                .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                .setOrigin(0.5, 0.5)
                .setScale(0, 0);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 1,
                duration: 200,
                delay: 500,
                scaleX: 1,
                scaleY: 1
            });
        }
        if (event.effect === Effect_1.EffectEnum.TOXIC_SPIKES) {
            const spriteNumber = (0, random_1.pickRandomIn)([0, 1, 2]).toString();
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1] + 16, "abilities", "TOXIC_SPIKES/00" + spriteNumber + ".png");
            sprite
                .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                .setOrigin(0.5, 0.5)
                .setScale(0, 0);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 1,
                duration: 200,
                delay: 500,
                scaleX: 2,
                scaleY: 2
            });
        }
        if (event.effect === Effect_1.EffectEnum.STICKY_WEB) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", `${Effect_1.EffectEnum.STICKY_WEB}/000.png`);
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_POKEMON_LEVEL);
            sprite.setScale(3, 3);
            sprite.anims.play(Effect_1.EffectEnum.STICKY_WEB);
            sprite.setAlpha(0);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 0.4,
                duration: 1000
            });
        }
        if (event.effect === Effect_1.EffectEnum.COTTON_BALL) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", `${Ability_1.Ability.COTTON_SPORE}/025.png`);
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL);
            sprite.setScale(2, 2);
            sprite.setAlpha(0);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 0.5,
                duration: 1000
            });
        }
        if (event.effect === Effect_1.EffectEnum.HAIL) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", `${Effect_1.EffectEnum.HAIL}/000.png`);
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL).setScale(1).setAlpha(0);
            sprite.anims.play(Effect_1.EffectEnum.HAIL);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 1,
                duration: 200,
                delay: 800
            });
        }
        if (event.effect === Effect_1.EffectEnum.EMBER) {
            const sprite = this.scene.add.sprite(coordinates[0], coordinates[1] + 12, "abilities", `${Effect_1.EffectEnum.EMBER}/000.png`);
            sprite.setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL).setScale(2).setAlpha(0);
            sprite.anims.play(Effect_1.EffectEnum.EMBER);
            this.boardEventSprites[index].push(sprite);
            this.group.add(sprite);
            this.scene.tweens.add({
                targets: sprite,
                alpha: 1,
                duration: 200,
                delay: 800
            });
        }
    }
    clearBoardEvents() {
        this.boardEventSprites.forEach((spritesOnCell, index) => {
            spritesOnCell.forEach((sprite) => {
                this.group.remove(sprite, true, true);
            });
        });
        this.boardEventSprites = Array.from({ length: config_1.BOARD_WIDTH * config_1.BOARD_HEIGHT }, () => []);
    }
    displayDamage({ x, y, amount, type, index, id }) {
        var _a, _b, _c;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) === id) {
            const coordinates = (0, utils_1.transformEntityCoordinates)(x, y, this.flip);
            const color = type === Game_1.AttackType.PHYSICAL
                ? "#e76e55"
                : type === Game_1.AttackType.SPECIAL
                    ? "#5f9ff9"
                    : "#f7d51d";
            this.displayTween(color, coordinates, index, amount);
            (0, abilities_animations_1.displayHit)(this.scene, (_c = (_b = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[index]]) === null || _b === void 0 ? void 0 : _b.hitSprite) !== null && _c !== void 0 ? _c : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG.hitSprite, coordinates[0], coordinates[1], this.flip);
        }
    }
    displayHeal({ x, y, amount, type, index, id }) {
        var _a;
        if (((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) === id) {
            const coordinates = (0, utils_1.transformEntityCoordinates)(x, y, this.flip);
            const color = type === Game_1.HealType.HEAL ? "#92cc41" : "#8d8d8d";
            this.displayTween(color, coordinates, index, amount);
        }
    }
    displayTween(color, coordinates, index, amount) {
        if (!this.scene.sys.displayList)
            return;
        const fontSize = amount < 10
            ? "20px"
            : amount < 20
                ? "25px"
                : amount < 30
                    ? "30px"
                    : amount < 50
                        ? "35px"
                        : "40px";
        const textStyle = {
            fontSize: fontSize,
            fontFamily: "Verdana",
            color: color,
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const dy = Math.round(50 * (Math.random() - 0.5));
        const image = this.scene.add.existing(new phaser_1.GameObjects.Image(this.scene, 0, 0, `portrait-${index}`)
            .setScale(0.5, 0.5)
            .setOrigin(0, 0));
        const text = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, 25, 0, amount.toFixed(0), textStyle));
        image.setDepth(depths_1.DEPTH.DAMAGE_PORTRAIT);
        text.setDepth(depths_1.DEPTH.DAMAGE_TEXT);
        const container = this.scene.add.existing(new phaser_1.GameObjects.Container(this.scene, coordinates[0] + 30, coordinates[1] + dy, [text, image]));
        this.scene.add.tween({
            targets: [container],
            ease: "linear",
            duration: 1500,
            delay: 0,
            x: {
                getStart: () => container.x,
                getEnd: () => container.x + Math.random() * 50
            },
            y: {
                getStart: () => container.y,
                getEnd: () => container.y + Math.random() * 50
            },
            scale: {
                getStart: () => 1,
                getEnd: () => 0.5
            },
            alpha: {
                getStart: () => 1,
                getEnd: () => 0,
                delay: 800
            },
            onComplete: () => {
                container.destroy();
            }
        });
    }
    setSimulation(simulation) {
        this.simulation = simulation;
        this.clear();
        this.buildPokemons();
    }
    onSimulationStart() {
        this.pokemonSprites.forEach((pkm) => {
            pkm.setVisible(true);
        });
    }
    setPlayer(player) {
        this.player = player;
    }
    addTroopers(trooperChief, trooperChiefSprite, simulationId) {
        var _a;
        const trooperName = trooperChief.name === Pokemon_1.Pkm.FALINKS_BRASS
            ? Pokemon_1.Pkm.FALINKS_TROOPER
            : trooperChief.passive === Passive_1.Passive.AVALUGG
                ? Pokemon_1.Pkm.BERGMITE
                : null;
        if (trooperName === null)
            return;
        const troopersBenchSprites = [...this.scene.board.pokemons.values()]
            .filter((p) => p.name === trooperName && (0, board_1.isOnBench)(p))
            .slice(0, config_1.MaxTroopersPerPkm[trooperChief.name]);
        if (trooperChiefSprite.troopers) {
            (_a = trooperChiefSprite.troopers) === null || _a === void 0 ? void 0 : _a.forEach((s) => s.destroy());
        }
        trooperChiefSprite.troopers = [];
        troopersBenchSprites.forEach((sprite, i) => {
            var _a, _b, _c, _d, _e;
            sprite.sprite.setAlpha(0.5);
            const coordinates = (0, utils_1.transformEntityCoordinates)(trooperChief.positionX, trooperChief.positionY, this.flip);
            const trooperInBattle = new pokemon_1.PokemonClasses[trooperName](trooperName, trooperChief.shiny, trooperChief.emotion);
            trooperInBattle.maxHP = trooperInBattle.hp;
            const { dx, dy } = (_b = (_a = TroopersDeltaPositions[trooperName]) === null || _a === void 0 ? void 0 : _a.call(TroopersDeltaPositions, i, trooperChief.orientation)) !== null && _b !== void 0 ? _b : {
                dx: 0,
                dy: 0
            };
            const trooperSprite = new pokemon_2.default(this.scene, coordinates[0] + dx, coordinates[1] + dy, trooperInBattle, simulationId, true, this.flip);
            trooperSprite.setDepth((_c = TroopersDepth[trooperName]) !== null && _c !== void 0 ? _c : depths_1.DEPTH.POKEMON_TROOPER);
            (_d = trooperChiefSprite.troopers) === null || _d === void 0 ? void 0 : _d.push(trooperSprite);
            (_e = this.scene.animationManager) === null || _e === void 0 ? void 0 : _e.animatePokemon(trooperSprite, Game_1.PokemonActionState.IDLE, this.flip);
            this.group.add(trooperSprite);
            this.pokemonSprites.set(trooperInBattle.id, trooperSprite);
        });
    }
}
exports.default = BattleManager;
const TroopersDeltaPositions = {
    [Pokemon_1.Pkm.FALINKS_TROOPER]: (i, orientation) => {
        const [orientationDx, orientationDy] = orientation_1.OrientationVector[orientation];
        return {
            dx: -orientationDx * 20 * (i + 1),
            dy: orientationDy * 20 * (i + 1)
        };
    },
    [Pokemon_1.Pkm.BERGMITE]: (i, orientation) => {
        return { dx: -15 + Math.floor(i / 2) * 30, dy: -30 + (i % 2) * 15 };
    }
};
const TroopersDepth = {
    [Pokemon_1.Pkm.FALINKS_TROOPER]: depths_1.DEPTH.POKEMON_TROOPER,
    [Pokemon_1.Pkm.BERGMITE]: depths_1.DEPTH.POKEMON_TROOPER_ON_TOP
};
//# sourceMappingURL=battle-manager.js.map