"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonEntity = void 0;
exports.canSell = canSell;
const schema_1 = require("@colyseus/schema");
const config_1 = require("../config");
const synergies_1 = require("../config/game/synergies");
const count_1 = __importDefault(require("../models/colyseus-models/count"));
const player_1 = __importDefault(require("../models/colyseus-models/player"));
const pokemon_1 = require("../models/colyseus-models/pokemon");
const status_1 = __importDefault(require("../models/colyseus-models/status"));
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const types_1 = require("../types");
const EvolutionRules_1 = require("../types/EvolutionRules");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Passive_1 = require("../types/enum/Passive");
const Pokemon_1 = require("../types/enum/Pokemon");
const SpecialGameRule_1 = require("../types/enum/SpecialGameRule");
const Synergy_1 = require("../types/enum/Synergy");
const Weather_1 = require("../types/enum/Weather");
const array_1 = require("../utils/array");
const board_1 = require("../utils/board");
const distance_1 = require("../utils/distance");
const function_1 = require("../utils/function");
const number_1 = require("../utils/number");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const attacking_state_1 = __importDefault(require("./attacking-state"));
const effect_1 = require("./effects/effect");
const items_1 = require("./effects/items");
const passives_1 = require("./effects/passives");
const synergies_2 = require("./effects/synergies");
const evolution_manager_1 = require("./evolution-logic/evolution-manager");
const idle_state_1 = require("./idle-state");
const moving_state_1 = __importDefault(require("./moving-state"));
const simulation_command_1 = require("./simulation-command");
class PokemonEntity extends schema_1.Schema {
    constructor(pokemon, positionX, positionY, team, simulation) {
        super();
        this.action = Game_1.PokemonActionState.WALK;
        this.orientation = Game_1.Orientation.DOWNLEFT;
        this.shield = 0;
        this.pp = 0;
        this.ap = 0;
        this.luck = 0;
        this.critChance = config_1.DEFAULT_CRIT_CHANCE;
        this.critPower = config_1.DEFAULT_CRIT_POWER;
        this.targetEntityId = "";
        this.targetX = -1;
        this.targetY = -1;
        this.effects = new schema_1.SetSchema();
        this.items = new schema_1.SetSchema();
        this.types = new schema_1.SetSchema();
        this.stacks = 0;
        this.stacksRequired = 0;
        this.cooldown = 500;
        this.oneSecondCooldown = 1000;
        this.grassHealCooldown = 2000;
        this.sandstormDamageTimer = 0;
        this.fairySplashCooldown = 0;
        this.isSpawn = false;
        this.commands = new Array();
        this.effectsSet = new Set();
        this.state = new moving_state_1.default();
        this.refToBoardPokemon = pokemon;
        pokemon.items.forEach((it) => {
            this.items.add(it);
        });
        this.status = new status_1.default(simulation);
        this.count = new count_1.default();
        this.simulation = simulation;
        this.id = crypto.randomUUID();
        this.rarity = pokemon.rarity;
        this.positionX = positionX;
        this.positionY = positionY;
        this.index = pokemon.index;
        this.name = pokemon.name;
        this.action = Game_1.PokemonActionState.WALK;
        this.orientation = Game_1.Orientation.DOWNLEFT;
        this.baseAtk = pokemon.atk;
        this.baseDef = pokemon.def;
        this.baseSpeDef = pokemon.speDef;
        this.baseRange = pokemon.range;
        this.baseHP = pokemon.hp;
        this.atk = pokemon.atk;
        this.def = pokemon.def;
        this.speDef = pokemon.speDef;
        this.maxHP = pokemon.maxHP;
        this.maxPP = pokemon.maxPP;
        this.hp = pokemon.hp;
        this.speed = pokemon.speed;
        this.range = pokemon.range;
        this.team = team;
        this.baseTeam = team;
        this.stars = pokemon.stars;
        this.skill = pokemon.skill;
        this.tm = pokemon.tm;
        this.shiny = pokemon.shiny;
        this.emotion = pokemon.emotion;
        this.ap = pokemon.ap;
        this.luck = pokemon.luck;
        this.stacks = pokemon.stacks;
        this.stacksRequired = pokemon.stacksRequired;
        this.dodge = 0;
        this.physicalDamage = 0;
        this.specialDamage = 0;
        this.trueDamage = 0;
        this.physicalDamageReduced = 0;
        this.specialDamageReduced = 0;
        this.shieldDamageTaken = 0;
        this.healDone = 0;
        this.shieldDone = 0;
        if (this.types.has(Synergy_1.Synergy.DARK) && this.range === 1) {
            this.cooldown = 400;
        }
        else {
            this.resetCooldown(500);
        }
        pokemon.types.forEach((type) => {
            this.types.add(type);
        });
        this.passive = Passive_1.Passive.NONE;
        this.changePassive(pokemon.passive);
    }
    update(dt, board, player) {
        this.state.update(this, dt, board, player);
    }
    get canMove() {
        return (!this.status.freeze &&
            !(this.status.sleep && this.passive !== Passive_1.Passive.COMATOSE) &&
            !this.status.resurrecting &&
            !this.status.locked &&
            !this.status.tree);
    }
    get canAttack() {
        return (!this.status.freeze &&
            !(this.status.sleep && this.passive !== Passive_1.Passive.COMATOSE) &&
            !this.status.resurrecting &&
            !this.status.skydiving &&
            !this.status.tree);
    }
    get canCast() {
        return (!this.status.silence &&
            !this.items.has(Item_1.Item.NULLIFY_BANDANNA) &&
            !this.effects.has(Effect_1.EffectEnum.TELEPORT_NEXT_ATTACK));
    }
    get canBeMoved() {
        return (!this.status.skydiving &&
            !this.status.locked &&
            !this.items.has(Item_1.Item.HEAVY_DUTY_BOOTS));
    }
    get canBeCopied() {
        return this.passive !== Passive_1.Passive.INANIMATE;
    }
    get isGhostOpponent() {
        return this.simulation.isGhostBattle && this.team === Game_1.Team.RED_TEAM;
    }
    isTargettableBy(attacker, targetEnemies = true, targetAllies = false) {
        return (!this.status.untargettable &&
            ((targetAllies && this.team === attacker.team) ||
                (targetEnemies && this.team !== attacker.team) ||
                (attacker.effects.has(Effect_1.EffectEnum.MERCILESS) &&
                    attacker.id !== this.id &&
                    this.hp <= 10)));
    }
    get player() {
        const player = this.baseTeam === Game_1.Team.BLUE_TEAM
            ? this.simulation.bluePlayer
            : this.simulation.redPlayer;
        if (player instanceof player_1.default) {
            return player;
        }
        else {
            return undefined;
        }
    }
    get inSpotlight() {
        if (!this.player)
            return false;
        const { lightX, lightY } = this.player;
        const { positionX, positionY } = this.refToBoardPokemon;
        return ((positionX === lightX && positionY === lightY) ||
            this.items.has(Item_1.Item.SHINY_STONE) ||
            (this.passive === Passive_1.Passive.CONVERSION &&
                this.types.has(Synergy_1.Synergy.LIGHT) &&
                !this.items.has(Item_1.Item.LIGHT_BALL)));
    }
    hasSynergyEffect(synergy) {
        return synergies_1.SynergyEffects[synergy].some((effect) => this.effects.has(effect));
    }
    resetCooldown(baseDuration, speed = this.speed) {
        this.cooldown = Math.round(baseDuration / (0.4 + speed * 0.007));
    }
    setTarget(target) {
        if (target) {
            this.targetEntityId = target.id;
            this.targetX = target.positionX;
            this.targetY = target.positionY;
        }
        else {
            this.targetEntityId = "";
            this.targetX = -1;
            this.targetY = -1;
        }
    }
    handleDamage(params) {
        return this.state.handleDamage(Object.assign({ target: this }, params));
    }
    handleSpecialDamage(damage, board, attackType, attacker, crit, apBoost = true) {
        if (this.status.protect ||
            this.status.skydiving ||
            this.status.magicBounce) {
            this.count.spellBlockedCount++;
            if (this.status.magicBounce &&
                attackType === Game_1.AttackType.SPECIAL &&
                damage > 0 &&
                attacker &&
                !attacker.items.has(Item_1.Item.PROTECTIVE_PADS)) {
                this.commands.push(new simulation_command_1.DelayedCommand(() => {
                    var _a;
                    const bounceCrit = crit ||
                        (this.effects.has(Effect_1.EffectEnum.ABILITY_CRIT) &&
                            (0, random_1.chance)(this.critChance / 100, this));
                    const bounceDamage = Math.round(((_a = [0.5, 1, 2, 4][this.stars - 1]) !== null && _a !== void 0 ? _a : 4) *
                        damage *
                        (1 + this.ap / 100) *
                        (bounceCrit ? this.critPower : 1));
                    this.broadcastAbility({
                        skill: attacker.skill,
                        positionX: this.positionX,
                        positionY: this.positionY,
                        targetX: attacker.positionX,
                        targetY: attacker.positionY
                    });
                    attacker.handleDamage({
                        damage: bounceDamage,
                        board,
                        attackType: Game_1.AttackType.SPECIAL,
                        attacker: this,
                        shouldTargetGainMana: true,
                        isRetaliation: true
                    });
                }, 500));
            }
            return { death: false, takenDamage: 0 };
        }
        else {
            let specialDamage = damage + (damage * (attacker && apBoost ? attacker.ap : 0)) / 100;
            if (attacker && attacker.effects.has(Effect_1.EffectEnum.DOUBLE_DAMAGE)) {
                specialDamage *= 2;
                attacker.effects.delete(Effect_1.EffectEnum.DOUBLE_DAMAGE);
            }
            if (this.effects.has(Effect_1.EffectEnum.STRANGE_STEAM_BOARD_EFFECT) ||
                (attacker &&
                    attacker.effects.has(Effect_1.EffectEnum.STRANGE_STEAM_BOARD_EFFECT))) {
                specialDamage *= 1.2;
            }
            if (crit && attacker && this.items.has(Item_1.Item.ROCKY_HELMET) === false) {
                const nbBlackAugurite = this.player
                    ? (0, array_1.count)(this.player.items, Item_1.Item.BLACK_AUGURITE)
                    : 0;
                const reductionFactor = 1 - 0.1 * nbBlackAugurite;
                specialDamage *= attacker.critPower * reductionFactor;
            }
            const damageResult = this.state.handleDamage({
                target: this,
                damage: specialDamage,
                board,
                attackType,
                attacker,
                shouldTargetGainMana: true
            });
            if (this.items.has(Item_1.Item.POWER_LENS) &&
                specialDamage >= 1 &&
                attacker &&
                !attacker.items.has(Item_1.Item.PROTECTIVE_PADS) &&
                attackType === Game_1.AttackType.SPECIAL) {
                const speDef = this.status.armorReduction
                    ? Math.round(this.speDef / 2)
                    : this.speDef;
                const damageAfterReduction = specialDamage / (1 + config_1.ARMOR_FACTOR * speDef);
                const damageBlocked = (0, number_1.min)(0)(specialDamage - damageAfterReduction);
                attacker.handleDamage({
                    damage: Math.round(damageBlocked),
                    board,
                    attackType: Game_1.AttackType.SPECIAL,
                    attacker: this,
                    shouldTargetGainMana: true,
                    isRetaliation: true
                });
            }
            return damageResult;
        }
    }
    handleHeal(heal, caster, apBoost, crit) {
        return this.state.handleHeal(this, heal, caster, apBoost, crit);
    }
    changeState(state) {
        this.state.onExit(this);
        this.state = state;
        this.state.onEnter(this);
    }
    toMovingState() {
        if (this.passive === Passive_1.Passive.INANIMATE || this.status.tree)
            return;
        this.changeState(new moving_state_1.default());
    }
    toAttackingState() {
        if (this.passive === Passive_1.Passive.INANIMATE || this.status.tree)
            return;
        this.changeState(new attacking_state_1.default());
    }
    toIdleState() {
        this.changeState(new idle_state_1.IdleState());
    }
    addShield(value, caster, apBoost, crit) {
        value = applyBigEaterBeltStatBuff(this, value, caster);
        return this.state.addShield(this, value, caster, apBoost, crit);
    }
    addPP(baseValue, caster, apBoost, crit) {
        let value = Math.round(baseValue *
            (1 + (apBoost * caster.ap) / 100) *
            (crit ? caster.critPower : 1) *
            (this.status.fatigue && baseValue > 0 ? 0.5 : 1));
        value = applyTwistBandBuff(this, value, caster);
        if (!(value > 0 && this.status.silence) &&
            !(value > 0 && this.status.protect) &&
            !(value > 0 && this.effects.has(Effect_1.EffectEnum.NO_PP_GAIN)) &&
            !this.status.resurrecting &&
            !(value < 0 && this.status.tree)) {
            this.pp = (0, number_1.clamp)(this.pp + value, 0, this.maxPP * 2 - 1);
        }
    }
    addCritChance(value, caster, apBoost, crit) {
        if (caster !== "environment") {
            value =
                value *
                    (1 + (apBoost * caster.ap) / 100) *
                    (crit ? caster.critPower : 1);
        }
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        this.critChance += value;
        if (this.critChance > 100) {
            const overCritChance = Math.round(this.critChance - 100);
            this.addCritPower(overCritChance, this, 0, false);
            this.critChance = 100;
        }
    }
    addCritPower(value, caster, apBoost, crit) {
        if (caster !== "environment") {
            value =
                (value / 100) *
                    (1 + (apBoost * caster.ap) / 100) *
                    (crit ? caster.critPower : 1);
        }
        value = applyBigEaterBeltStatBuff(this, value, caster, 2);
        value = applyTwistBandBuff(this, value, caster);
        this.critPower = (0, number_1.min)(0)(this.critPower + value);
    }
    addMaxHP(value, caster, apBoost, crit, permanent = false) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        this.maxHP = (0, number_1.min)(1)(this.maxHP + value);
        if (this.hp > 0) {
            if (value > 0) {
                this.hp = (0, number_1.clamp)(this.hp + value, 1, this.maxHP);
            }
            else {
                this.hp = (0, number_1.max)(this.maxHP)(this.hp);
            }
        }
        if (permanent && !this.isGhostOpponent) {
            const boardPokemon = this.refToBoardPokemon;
            boardPokemon.addMaxHP(value);
        }
    }
    addDodgeChance(value, caster, apBoost, crit) {
        value =
            value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1);
        value = applyBigEaterBeltStatBuff(this, value, caster, 3);
        value = applyTwistBandBuff(this, value, caster);
        this.dodge = (0, number_1.max)(0.9)(this.dodge + value);
    }
    addAbilityPower(value, caster, apBoost, crit, permanent = false) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        const update = (target) => {
            target.ap = (0, number_1.min)(-100)(target.ap + value);
        };
        if (this.items.has(Item_1.Item.NULLIFY_BANDANNA)) {
            this.addShield(value, caster, 0, false);
        }
        else {
            update(this);
        }
        if (permanent && !this.isGhostOpponent) {
            update(this.refToBoardPokemon);
        }
    }
    addLuck(value, caster, apBoost, crit, permanent = false) {
        if (caster !== "environment") {
            value =
                value *
                    (1 + (apBoost * caster.ap) / 100) *
                    (crit ? caster.critPower : 1);
        }
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        const update = (target) => {
            target.luck = (0, number_1.clamp)(target.luck + value, -100, +100);
        };
        update(this);
        if (permanent && !this.isGhostOpponent) {
            update(this.refToBoardPokemon);
        }
    }
    addDefense(value, caster, apBoost, crit, permanent = false) {
        if (caster !== "environment") {
            value = Math.round(value *
                (1 + (apBoost * caster.ap) / 100) *
                (crit ? caster.critPower : 1));
        }
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        const update = (target) => {
            target.def = (0, number_1.min)(0)(target.def + value);
        };
        update(this);
        if (permanent && !this.isGhostOpponent) {
            update(this.refToBoardPokemon);
        }
    }
    addSpecialDefense(value, caster, apBoost, crit, permanent = false) {
        if (caster !== "environment") {
            value = Math.round(value *
                (1 + (apBoost * caster.ap) / 100) *
                (crit ? caster.critPower : 1));
        }
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        const update = (target) => {
            target.speDef = (0, number_1.min)(0)(target.speDef + value);
        };
        update(this);
        if (permanent && !this.isGhostOpponent) {
            update(this.refToBoardPokemon);
        }
    }
    addAttack(value, caster, apBoost, crit, permanent = false) {
        if (caster !== "environment") {
            value = Math.round(value *
                (1 + (apBoost * caster.ap) / 100) *
                (crit ? caster.critPower : 1));
        }
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        const update = (target) => {
            target.atk = (0, number_1.min)(1)(target.atk + value);
        };
        update(this);
        if (permanent && !this.isGhostOpponent) {
            update(this.refToBoardPokemon);
        }
    }
    addSpeed(value, caster, apBoost, crit, permanent = false) {
        value = applyBigEaterBeltStatBuff(this, value, caster);
        value = applyTwistBandBuff(this, value, caster);
        if (this.passive === Passive_1.Passive.MELMETAL) {
            this.addAttack(value * 0.5, caster, apBoost, crit, permanent);
        }
        else {
            if (caster !== "environment") {
                value =
                    value *
                        (1 + (apBoost * caster.ap) / 100) *
                        (crit ? caster.critPower : 1);
            }
            const update = (target) => {
                target.speed = (0, number_1.clamp)(target.speed + value, 0, config_1.MAX_SPEED);
            };
            update(this);
            if (permanent && !this.isGhostOpponent) {
                update(this.refToBoardPokemon);
            }
        }
    }
    addItem(item, permanent = false) {
        const type = Item_1.SynergyGivenByItem[item];
        if (this.items.size >= 3 ||
            ((0, array_1.isIn)(Item_1.SynergyStones, item) && this.types.has(type)) ||
            ((item === Item_1.Item.EVIOLITE || item === Item_1.Item.RARE_CANDY) &&
                !this.refToBoardPokemon.hasEvolution) ||
            (item === Item_1.Item.RARE_CANDY && this.items.has(Item_1.Item.EVIOLITE))) {
            return;
        }
        if (this.items.has(item) == false) {
            this.items.add(item);
            this.applyItemEffect(item);
        }
        if (permanent &&
            !this.isGhostOpponent &&
            this.refToBoardPokemon.items.has(item) == false &&
            this.refToBoardPokemon.items.size < 3) {
            this.refToBoardPokemon.items.add(item);
        }
        if (type && !this.types.has(type)) {
            if (type === Synergy_1.Synergy.DRAGON) {
                this.types = new schema_1.SetSchema([type, ...this.types]);
            }
            else {
                this.types.add(type);
            }
            this.simulation.applySynergyEffects(this, type);
        }
    }
    removeItem(item, permanent = false) {
        this.items.delete(item);
        this.removeItemEffect(item);
        if (permanent && !this.isGhostOpponent) {
            this.refToBoardPokemon.items.delete(item);
        }
    }
    applyItemEffect(item) {
        var _a, _b;
        Object.entries((_a = config_1.ItemStats[item]) !== null && _a !== void 0 ? _a : {}).forEach(([stat, value]) => {
            this.applyStat(stat, value);
        });
        (_b = items_1.ItemEffects[item]) === null || _b === void 0 ? void 0 : _b.forEach((effectOrEffectFn) => {
            const effect = (0, function_1.isPlainFunction)(effectOrEffectFn)
                ? effectOrEffectFn()
                : effectOrEffectFn;
            if (effect instanceof effect_1.OnItemGainedEffect) {
                effect.apply(this, item);
            }
            else if (effect instanceof effect_1.OnItemRemovedEffect) {
                return;
            }
            else {
                this.effectsSet.add(effect);
            }
        });
        this.getEffects(effect_1.OnItemGainedEffect).forEach((effect) => {
            effect.apply(this, item);
        });
    }
    removeItemEffect(item) {
        var _a, _b;
        Object.entries((_a = config_1.ItemStats[item]) !== null && _a !== void 0 ? _a : {}).forEach(([stat, value]) => this.applyStat(stat, -value));
        const type = Item_1.SynergyGivenByItem[item];
        const default_types = (0, precomputed_pokemon_data_1.getPokemonData)(this.name).types;
        if (type && !default_types.includes(type)) {
            this.types.delete(type);
            synergies_1.SynergyEffects[type].forEach((effectName) => {
                this.effects.delete(effectName);
                this.effectsSet.forEach((effect) => {
                    if (effect.origin === effectName)
                        this.effectsSet.delete(effect);
                });
            });
        }
        (_b = items_1.ItemEffects[item]) === null || _b === void 0 ? void 0 : _b.forEach((effectOrEffectFn) => {
            const effect = (0, function_1.isPlainFunction)(effectOrEffectFn)
                ? effectOrEffectFn()
                : effectOrEffectFn;
            if (effect instanceof effect_1.OnItemRemovedEffect)
                effect.apply(this, item);
            else if (effectOrEffectFn instanceof effect_1.Effect)
                this.effectsSet.delete(effect);
            else if ((0, function_1.isPlainFunction)(effectOrEffectFn)) {
                this.effectsSet.forEach((e) => {
                    if (e.constructor === effect.constructor)
                        this.effectsSet.delete(e);
                });
            }
        });
        this.getEffects(effect_1.OnItemRemovedEffect).forEach((effect) => {
            effect.apply(this, item);
        });
    }
    moveTo(x, y, board, forcedDisplacement) {
        if (forcedDisplacement && !this.canBeMoved)
            return;
        const target = board.getEntityOnCell(x, y);
        if (forcedDisplacement && target && !target.canBeMoved)
            return;
        this.toMovingState();
        if (target)
            target.toMovingState();
        board.swapCells(this.positionX, this.positionY, x, y);
        this.cooldown = 100;
    }
    skydiveTo(x, y, board) {
        this.status.skydiving = true;
        board.swapCells(this.positionX, this.positionY, x, y);
        if (this.state instanceof moving_state_1.default === false) {
            this.toMovingState();
        }
        this.cooldown = 1500;
    }
    onAttack({ target, board, physicalDamage, specialDamage, trueDamage, totalDamage, isTripleAttack, hasAttackKilled, crit }) {
        this.addPP(config_1.ON_ATTACK_MANA, this, 0, false);
        if (target.effects.has(Effect_1.EffectEnum.OBSTRUCT)) {
            this.addDefense(-2, target, 0, false);
        }
        this.getEffects(effect_1.OnAttackEffect).forEach((effect) => {
            effect.apply({
                pokemon: this,
                target,
                board,
                physicalDamage,
                specialDamage,
                trueDamage,
                totalDamage,
                isTripleAttack,
                hasAttackKilled,
                crit
            });
        });
        target.getEffects(effect_1.OnAttackReceivedEffect).forEach((effect) => {
            effect.apply({
                pokemon: target,
                attacker: this,
                board,
                physicalDamage,
                specialDamage,
                trueDamage,
                totalDamage,
                isTripleAttack,
                crit
            });
        });
    }
    onHit({ target, board, totalTakenDamage, physicalDamage, specialDamage, trueDamage }) {
        var _a;
        if (this.passive === Passive_1.Passive.BERRY_EATER) {
            for (const item of target.items.values()) {
                Item_1.Berries.includes(item) && this.eatBerry(item, target);
            }
        }
        if (target.passive === Passive_1.Passive.PSYDUCK && (0, random_1.chance)(0.1, this)) {
            target.status.triggerConfusion(3000, target, target);
        }
        if (this.name === Pokemon_1.Pkm.MINIOR) {
            this.addSpeed(5, this, 1, false);
        }
        if (this.passive === Passive_1.Passive.DREAM_CATCHER && target.status.sleep) {
            const allies = board.cells.filter((p) => p && p.team === this.team && p.id !== this.id);
            const alliesHit = allies
                .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, this.targetX, this.targetY) -
                (0, distance_1.distanceM)(b.positionX, b.positionY, this.targetX, this.targetY))
                .slice(0, 2);
            alliesHit.forEach((ally) => {
                ally.addShield(10, ally, 1, false);
                ally.broadcastAbility({ skill: Ability_1.Ability.MOON_DREAM });
            });
        }
        this.getEffects(effect_1.OnHitEffect).forEach((effect) => {
            effect.apply({
                attacker: this,
                target,
                board,
                totalTakenDamage,
                physicalDamage,
                specialDamage,
                trueDamage
            });
        });
        if (this.hasSynergyEffect(Synergy_1.Synergy.ICE) && this.types.has(Synergy_1.Synergy.ICE)) {
            const nbIcyRocks = this.player && this.simulation.weather === Weather_1.Weather.SNOW
                ? (0, array_1.count)(this.player.items, Item_1.Item.ICY_ROCK)
                : 0;
            const freezeChance = 0.2 + nbIcyRocks * 0.05;
            if ((0, random_1.chance)(freezeChance, this)) {
                target.status.triggerFreeze(2200, target, this);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.FIRE)) {
            const burnChance = 0.3;
            if ((0, random_1.chance)(burnChance, this)) {
                target.status.triggerBurn(3000, target, this);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.MONSTER)) {
            const flinchChance = 0.3;
            if ((0, random_1.chance)(flinchChance, this)) {
                target.status.triggerFlinch(3000, target, this);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.GHOST)) {
            const silenceChance = 0.1;
            if ((0, random_1.chance)(silenceChance, this)) {
                target.status.triggerSilence(1500, target, this);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.POISON)) {
            let poisonChance = 0;
            if (this.effects.has(Effect_1.EffectEnum.POISONOUS)) {
                poisonChance = 0.3;
            }
            if (this.effects.has(Effect_1.EffectEnum.VENOMOUS)) {
                poisonChance = 0.6;
            }
            if (this.effects.has(Effect_1.EffectEnum.TOXIC)) {
                poisonChance = 1.0;
            }
            if (target.player) {
                const nbSmellyClays = (0, array_1.count)(target.player.items, Item_1.Item.SMELLY_CLAY);
                poisonChance -= nbSmellyClays * 0.15;
            }
            if (poisonChance > 0 && (0, random_1.chance)(poisonChance, this)) {
                target.status.triggerPoison(4000, target, this);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.WILD)) {
            const woundChance = 0.25;
            if ((0, random_1.chance)(woundChance, this)) {
                target.status.triggerWound(3000, target, this);
            }
        }
        if (this.simulation.weather === Weather_1.Weather.ZENITH && this.player) {
            const nbSunStones = (0, array_1.count)(this.player.items, Item_1.Item.SUN_STONE);
            const burnChance = nbSunStones * 0.05;
            if ((0, random_1.chance)(burnChance, this)) {
                target.status.triggerBurn(3000, target, this);
            }
        }
        if (target.status.spikeArmor &&
            (0, distance_1.distanceC)(this.positionX, this.positionY, target.positionX, target.positionY) === 1 &&
            !this.items.has(Item_1.Item.PROTECTIVE_PADS)) {
            const crit = target.effects.has(Effect_1.EffectEnum.ABILITY_CRIT) &&
                (0, random_1.chance)(target.critChance / 100, this);
            const defFactor = (_a = [0.6, 0.8, 1][target.stars - 1]) !== null && _a !== void 0 ? _a : 1;
            const damage = Math.round(target.def *
                defFactor *
                (1 + target.ap / 100) *
                (crit ? target.critPower : 1));
            this.status.triggerWound(2000, this, target);
            this.handleDamage({
                damage,
                board,
                attackType: Game_1.AttackType.SPECIAL,
                attacker: target,
                isRetaliation: true,
                shouldTargetGainMana: true
            });
        }
        if (target.effects.has(Effect_1.EffectEnum.SHELL_TRAP) && physicalDamage > 0) {
            const cells = board.getAdjacentCells(target.positionX, target.positionY);
            const crit = target.effects.has(Effect_1.EffectEnum.ABILITY_CRIT) &&
                (0, random_1.chance)(target.critChance / 100, this);
            target.effects.delete(Effect_1.EffectEnum.SHELL_TRAP);
            target.broadcastAbility({ skill: "SHELL_TRAP_trigger" });
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== target.team) {
                    cell.value.handleSpecialDamage(100, board, Game_1.AttackType.SPECIAL, target, crit, true);
                }
            });
        }
    }
    onDamageDealt({ target, damage, attackType, isRetaliation }) {
        this.getEffects(effect_1.OnDamageDealtEffect).forEach((effect) => {
            effect.apply({
                pokemon: this,
                target,
                damage,
                attackType,
                isRetaliation
            });
        });
        if (this.simulation.weather === Weather_1.Weather.BLOODMOON &&
            target.status.wound &&
            this.player &&
            this.player.items.includes(Item_1.Item.BLOOD_STONE)) {
            const nbBloodStones = (0, array_1.count)(this.player.items, Item_1.Item.BLOOD_STONE);
            if (nbBloodStones > 0) {
                this.handleHeal(Math.ceil(0.2 * nbBloodStones * damage), this, 0, false);
            }
        }
    }
    onDamageReceived({ attacker, damage, damageBeforeReduction, board, attackType, isRetaliation }) {
        this.count.damageReceivedCount++;
        const berry = (0, schemas_1.schemaValues)(this.items).find((item) => Item_1.Berries.includes(item));
        if (berry && this.hp > 0 && this.hp < 0.5 * this.maxHP) {
            this.eatBerry(berry);
        }
        if (this.status.sleepCooldown > 0) {
            this.status.sleepCooldown -= 300;
        }
        if (this.status.charmCooldown > 0 && attacker === this.status.charmOrigin) {
            this.status.charmCooldown -= 500;
        }
        this.getEffects(effect_1.OnDamageReceivedEffect).forEach((effect) => {
            effect.apply({
                pokemon: this,
                attacker,
                board,
                damage,
                damageBeforeReduction,
                attackType,
                isRetaliation
            });
        });
    }
    onKill({ target, board, attackType }) {
        if (!this.isGhostOpponent) {
            this.refToBoardPokemon.killCount++;
        }
        this.getEffects(effect_1.OnKillEffect).forEach((effect) => {
            effect.apply({ attacker: this, target, board, attackType });
        });
        board.forEach((x, y, v) => v &&
            v.passive === Passive_1.Passive.MOXIE &&
            v.team === this.team &&
            v.addAttack(target.stars, v, 0, false));
        if (this.player &&
            this.simulation.room.state.specialGameRule ===
                SpecialGameRule_1.SpecialGameRule.BLOOD_MONEY &&
            !target.isSpawn) {
            this.player.addMoney(1, true, this);
            this.count.moneyCount += 1;
        }
        if (target.name === Pokemon_1.Pkm.MAGIKARP &&
            target.shiny &&
            target.simulation.stageLevel === 1 &&
            this.player) {
            this.player.addMoney(10, true, this);
            this.count.moneyCount += 10;
        }
    }
    onDeath({ board, attacker }) {
        if (!this.isGhostOpponent) {
            this.refToBoardPokemon.deathCount++;
        }
        this.getEffects(effect_1.OnDeathEffect).forEach((effect) => effect.apply({ pokemon: this, board, attacker }));
        if (this.status.curseVulnerability) {
            this.simulation.applyCurse(Effect_1.EffectEnum.CURSE_OF_VULNERABILITY, this.team);
        }
        if (this.status.curseWeakness) {
            this.simulation.applyCurse(Effect_1.EffectEnum.CURSE_OF_WEAKNESS, this.team);
        }
        if (this.status.curseTorment) {
            this.simulation.applyCurse(Effect_1.EffectEnum.CURSE_OF_TORMENT, this.team);
        }
        if (this.status.curseFate) {
            this.simulation.applyCurse(Effect_1.EffectEnum.CURSE_OF_FATE, this.team);
        }
        board
            .getAdjacentCells(this.positionX, this.positionY)
            .filter((c) => {
            var _a, _b;
            return ((_a = c.value) === null || _a === void 0 ? void 0 : _a.passive) === Passive_1.Passive.LAST_RESPECTS &&
                ((_b = c.value) === null || _b === void 0 ? void 0 : _b.team) === this.team;
        })
            .map((c) => c.value)
            .forEach((p) => p === null || p === void 0 ? void 0 : p.addPP(p.maxPP - p.pp, p, 0, false));
    }
    flyAway(board, shouldSkydive = this.effects.has(Effect_1.EffectEnum.SKYDIVE), shouldProtect = this.effects.has(Effect_1.EffectEnum.FEATHER_DANCE) ||
        this.effects.has(Effect_1.EffectEnum.SKYDIVE) ||
        this.effects.has(Effect_1.EffectEnum.MAX_AIRSTREAM)) {
        const flyAwayCell = board.getFlyAwayCell(this);
        if (flyAwayCell && this.passive === Passive_1.Passive.GALE_WINGS) {
            board
                .getCellsBetween(this.positionX, this.positionY, flyAwayCell.x, flyAwayCell.y)
                .forEach((cell) => {
                board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.EMBER, this.simulation);
            });
        }
        if (shouldProtect)
            this.status.triggerProtect(2000);
        if (shouldSkydive && (flyAwayCell === null || flyAwayCell === void 0 ? void 0 : flyAwayCell.target)) {
            this.broadcastAbility({
                skill: "FLYING_TAKEOFF",
                targetX: flyAwayCell.target.positionX,
                targetY: flyAwayCell.target.positionY
            });
            this.skydiveTo(flyAwayCell.x, flyAwayCell.y, board);
            this.setTarget(flyAwayCell.target);
            this.commands.push(new simulation_command_1.DelayedCommand(() => {
                this.broadcastAbility({
                    skill: "FLYING_SKYDIVE",
                    positionX: flyAwayCell.x,
                    positionY: flyAwayCell.y,
                    targetX: flyAwayCell.target.positionX,
                    targetY: flyAwayCell.target.positionY
                });
            }, 500));
            this.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                if (((_a = flyAwayCell.target) === null || _a === void 0 ? void 0 : _a.hp) > 0) {
                    flyAwayCell.target.handleSpecialDamage(1.5 * this.atk, board, Game_1.AttackType.PHYSICAL, this, (0, random_1.chance)(this.critChance / 100, this), false);
                }
            }, 1000));
        }
        else if (flyAwayCell) {
            this.moveTo(flyAwayCell.x, flyAwayCell.y, board, false);
        }
        board.cells
            .filter((e) => e instanceof PokemonEntity && e.hp > 0 && e.targetEntityId === this.id)
            .forEach((e) => e.setTarget(null));
        return flyAwayCell;
    }
    applyStat(stat, value, permanent = false) {
        switch (stat) {
            case Game_1.Stat.ATK:
                this.addAttack(value, this, 0, false, permanent);
                break;
            case Game_1.Stat.DEF:
                this.addDefense(value, this, 0, false, permanent);
                break;
            case Game_1.Stat.SPE_DEF:
                this.addSpecialDefense(value, this, 0, false, permanent);
                break;
            case Game_1.Stat.AP:
                this.addAbilityPower(value, this, 0, false, permanent);
                break;
            case Game_1.Stat.PP:
                this.addPP(value, this, 0, false);
                break;
            case Game_1.Stat.SPEED:
                this.addSpeed(value, this, 0, false, permanent);
                break;
            case Game_1.Stat.CRIT_CHANCE:
                this.addCritChance(value, this, 0, false);
                break;
            case Game_1.Stat.CRIT_POWER:
                this.addCritPower(value, this, 0, false);
                break;
            case Game_1.Stat.SHIELD:
                this.addShield(value, this, 0, false);
                break;
            case Game_1.Stat.HP:
                this.addMaxHP(value, this, 0, false, permanent);
                break;
            case Game_1.Stat.LUCK:
                this.addLuck(value, this, 0, false, permanent);
                break;
            case Game_1.Stat.RANGE:
                this.range = (0, number_1.min)(1)(this.range + value);
        }
    }
    resurrect() {
        const cloneReference = new PokemonEntity(this.refToBoardPokemon, this.refToBoardPokemon.positionX, this.refToBoardPokemon.positionY - 1, this.team, this.simulation);
        this.simulation.applySynergyEffects(cloneReference);
        this.simulation.applyItemsEffects(cloneReference);
        cloneReference.getEffects(effect_1.OnSpawnEffect).forEach((effect) => {
            effect.apply(cloneReference, this.player, this.isSpawn);
        });
        this.maxHP = cloneReference.maxHP;
        this.atk = cloneReference.atk;
        this.def = cloneReference.def;
        this.speDef = cloneReference.speDef;
        this.ap = cloneReference.ap;
        this.speed = cloneReference.speed;
        this.critChance = cloneReference.critChance;
        this.critPower = cloneReference.critPower;
        this.dodge = cloneReference.dodge;
        this.range = cloneReference.range;
        this.luck = cloneReference.luck;
        this.count.machRibbonCount = 0;
        this.count.muscleBandCount = 0;
        this.count.soulDewCount = 0;
        this.count.upgradeCount = 0;
        this.count.soundCryCount = 0;
        if (this.items.has(Item_1.Item.SACRED_ASH)) {
            const team = this.team === Game_1.Team.BLUE_TEAM
                ? this.simulation.blueTeam
                : this.simulation.redTeam;
            if (!team)
                return;
            const alliesAlive = (0, schemas_1.schemaValues)(team).filter((e) => e.hp > 0 || e.status.resurrecting);
            let koAllies = [];
            if (this.player) {
                koAllies = (0, schemas_1.schemaValues)(this.player.board).filter((p) => p.id !== this.refToBoardPokemon.id &&
                    !(0, board_1.isOnBench)(p) &&
                    !alliesAlive.some((ally) => ally.refToBoardPokemon.id === p.id) &&
                    !(p.name === Pokemon_1.Pkm.COMFEY &&
                        alliesAlive.some((ally) => ally.items.has(Item_1.Item.COMFEY))));
            }
            else if (this.name === Pokemon_1.Pkm.HO_OH) {
                koAllies = alliesAlive.some((p) => p.name === Pokemon_1.Pkm.LUGIA)
                    ? []
                    : [
                        pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.LUGIA, {
                            shiny: this.shiny,
                            emotion: types_1.Emotion.ANGRY
                        })
                    ];
            }
            const spawns = (0, random_1.pickNRandomIn)(koAllies, 3);
            spawns.forEach((spawn) => {
                const coord = this.simulation.getClosestFreeCellToPokemonEntity(this);
                if (!coord)
                    return;
                const mon = pokemon_factory_1.default.createPokemonFromName(spawn.name, {
                    emotion: spawn.emotion,
                    shiny: spawn.shiny
                });
                const spawnedEntity = this.simulation.addPokemon(mon, coord.x, coord.y, this.team, true);
                spawnedEntity.shield = 0;
                spawnedEntity
                    .getEffects(synergies_2.FlyingProtectionEffect)
                    .forEach((effect) => {
                    effect.flyingProtection = 0;
                });
                synergies_1.SynergyEffects[Synergy_1.Synergy.FOSSIL].forEach((e) => spawnedEntity.effects.delete(e));
            });
        }
        const removedItems = [Item_1.Item.DYNAMAX_BAND, Item_1.Item.SACRED_ASH, Item_1.Item.MAX_REVIVE];
        removedItems.forEach((item) => {
            if (this.items.has(item)) {
                this.removeItem(item);
            }
        });
        this.effectsSet.forEach((effect) => {
            if (effect instanceof synergies_2.MonsterKillEffect) {
                effect.hpBoosted = 0;
                effect.count = 0;
            }
            else if (effect instanceof synergies_2.FireHitEffect) {
                effect.count = 0;
            }
            else if (effect instanceof synergies_2.FlyingProtectionEffect) {
                effect.flyingProtection = 0;
            }
        });
        if (this.skill === Ability_1.Ability.VOLT_SURGE) {
            this.count.ult = 0;
        }
        this.status.clearAllStatus(this);
        this.status.runeProtect = cloneReference.status.runeProtect;
        this.status.runeProtectCooldown = cloneReference.status.runeProtectCooldown;
        this.status.burn = cloneReference.status.burn;
        this.status.burnCooldown = cloneReference.status.burnCooldown;
        this.hp = this.maxHP;
        this.pp = 0;
        this.shield = 0;
    }
    eatBerry(berry, stealedFrom, healToShield = false, apScaling = 0, crit = false) {
        var _a;
        const heal = (val) => healToShield
            ? this.addShield(val, this, apScaling, crit)
            : this.handleHeal(val, this, apScaling, crit);
        switch (berry) {
            case Item_1.Item.AGUAV_BERRY:
                heal((0, number_1.min)(50)(0.5 * this.maxHP));
                this.status.triggerConfusion(3000, this, this);
                break;
            case Item_1.Item.APICOT_BERRY:
                heal(50);
                this.addSpecialDefense(20, this, 0, false);
                break;
            case Item_1.Item.ASPEAR_BERRY:
                this.status.freeze = false;
                this.status.freezeCooldown = 0;
                this.effects.add(Effect_1.EffectEnum.IMMUNITY_FREEZE);
                heal(50);
                this.addSpeed(15, this, 0, false);
                break;
            case Item_1.Item.CHERI_BERRY:
                this.status.healParalysis(this);
                this.effects.add(Effect_1.EffectEnum.IMMUNITY_PARALYSIS);
                heal(50);
                this.addAttack(10, this, 0, false);
                break;
            case Item_1.Item.CHESTO_BERRY:
                this.status.sleepCooldown = 0;
                this.effects.add(Effect_1.EffectEnum.IMMUNITY_SLEEP);
                heal(50);
                this.addAbilityPower(50, this, 0, false);
                break;
            case Item_1.Item.GANLON_BERRY:
                heal(50);
                this.addDefense(20, this, 0, false);
                break;
            case Item_1.Item.JABOCA_BERRY:
                heal(50);
                this.status.triggerSpikeArmor(10000);
                break;
            case Item_1.Item.LANSAT_BERRY:
                heal(50);
                this.addCritChance(50, this, 0, false);
                break;
            case Item_1.Item.LEPPA_BERRY:
                heal(50);
                this.addPP(50, this, 0, false);
                break;
            case Item_1.Item.LIECHI_BERRY:
                heal(50);
                this.addAttack(15, this, 0, false);
                break;
            case Item_1.Item.LUM_BERRY:
                heal(50);
                this.status.clearNegativeStatus(this, this);
                this.status.triggerRuneProtect(5000, this, this);
                break;
            case Item_1.Item.ORAN_BERRY:
                heal(50);
                this.addShield(80, this, 0, false);
                break;
            case Item_1.Item.PECHA_BERRY:
                heal(100);
                this.status.poisonOrigin = undefined;
                this.status.poisonStacks = 0;
                this.status.poisonDamageCooldown = 0;
                this.effects.add(Effect_1.EffectEnum.IMMUNITY_POISON);
                break;
            case Item_1.Item.PERSIM_BERRY:
                this.status.confusion = false;
                this.status.confusionCooldown = 0;
                this.effects.add(Effect_1.EffectEnum.IMMUNITY_CONFUSION);
                heal(50);
                this.addSpecialDefense(10, this, 0, false);
                break;
            case Item_1.Item.PETAYA_BERRY:
                heal(50);
                this.addAbilityPower(80, this, 0, false);
                break;
            case Item_1.Item.ROWAP_BERRY:
                heal(50);
                this.status.triggerMagicBounce(10000);
                break;
            case Item_1.Item.RAWST_BERRY:
                this.status.healBurn(this);
                this.effects.add(Effect_1.EffectEnum.IMMUNITY_BURN);
                heal(50);
                this.addDefense(10, this, 0, false);
                break;
            case Item_1.Item.SALAC_BERRY:
                heal(50);
                this.addSpeed(50, this, 0, false);
                break;
            case Item_1.Item.SITRUS_BERRY:
                this.effects.add(Effect_1.EffectEnum.BUFF_HEAL_RECEIVED);
                heal(100);
                break;
            case Item_1.Item.BERRY_JUICE:
                heal(this.maxHP - this.hp);
                break;
            case Item_1.Item.BABIRI_BERRY:
                heal(50);
                this.status.triggerProtect(2000);
                break;
            case Item_1.Item.NANAB_BERRY:
                heal(50);
                if (this.player && !this.simulation.isGhostBattle) {
                    this.player.addMoney(1, true, this);
                    this.count.moneyCount += 1;
                }
                break;
            case Item_1.Item.GOLDEN_NANAB_BERRY:
                heal((0, number_1.min)(50)(0.5 * this.maxHP));
                if (this.player && !this.simulation.isGhostBattle) {
                    this.player.addMoney(5, true, this);
                    this.count.moneyCount += 5;
                }
                break;
            case Item_1.Item.GOLDEN_RAZZ_BERRY:
                heal((0, number_1.min)(50)(0.5 * this.maxHP));
                if (this.player && !this.simulation.isGhostBattle)
                    this.player.shopFreeRolls += 6;
                break;
            case Item_1.Item.GOLDEN_PINAP_BERRY:
                heal((0, number_1.min)(50)(0.5 * this.maxHP));
                if (this.player && !this.simulation.isGhostBattle)
                    this.player.items.push(...(0, random_1.pickNRandomIn)(Item_1.Sweets, 3));
                break;
        }
        if (stealedFrom) {
            stealedFrom.removeItem(berry, true);
        }
        else {
            this.removeItem(berry, true);
        }
        if (this.passive === Passive_1.Passive.GLUTTON) {
            this.applyStat(Game_1.Stat.HP, 10, true);
            if (this.refToBoardPokemon.hp > 750) {
                (_a = this.player) === null || _a === void 0 ? void 0 : _a.titles.add(types_1.Title.GLUTTON);
            }
        }
        if (this.effects.has(Effect_1.EffectEnum.BERRY_JUICE)) {
            this.addShield(100, this, 0, false);
        }
        if (this.effects.has(Effect_1.EffectEnum.OVERGROW)) {
            this.addAbilityPower(50, this, 0, false);
        }
    }
    broadcastAbility({ skill = this.skill, ap = this.ap, positionX = this.positionX, positionY = this.positionY, orientation = this.orientation, targetX = this.targetX, targetY = this.targetY, delay } = {}) {
        if (!this.simulation || !this.simulation.room) {
            return;
        }
        this.simulation.broadcastToSpectators(types_1.Transfer.ABILITY, {
            id: this.simulation.id,
            skill,
            ap,
            positionX,
            positionY,
            orientation,
            targetX,
            targetY,
            delay
        });
    }
    changePassive(newPassive) {
        var _a, _b;
        if (this.passive === newPassive) {
            return;
        }
        if (this.passive) {
            const oldPassiveEffects = (_a = passives_1.PassiveEffects[this.passive]) !== null && _a !== void 0 ? _a : [];
            oldPassiveEffects.forEach((effect) => {
                if (effect instanceof effect_1.Effect) {
                    this.effectsSet.delete(effect);
                }
            });
        }
        this.passive = newPassive;
        const newPassiveEffects = (_b = passives_1.PassiveEffects[newPassive]) !== null && _b !== void 0 ? _b : [];
        for (const effect of newPassiveEffects) {
            if ((0, function_1.isPlainFunction)(effect))
                this.effectsSet.add(effect());
            else if (effect instanceof effect_1.Effect)
                this.effectsSet.add(effect);
        }
    }
    getEffects(effectClass) {
        return [...this.effectsSet.values()]
            .filter((effect) => effect instanceof effectClass)
            .sort((a, b) => b.priority - a.priority);
    }
    addStack(amount = 1) {
        if (!this.player)
            return;
        this.refToBoardPokemon.stacks += amount;
        this.stacks = this.refToBoardPokemon.stacks;
        if (this.refToBoardPokemon.evolutionRule.type === EvolutionRules_1.EvolutionRuleType.STACK &&
            this.stacksRequired > 0 &&
            this.stacks === this.stacksRequired) {
            const pokemonEvolved = evolution_manager_1.EvolutionManager.tryEvolve(this.refToBoardPokemon, this.player);
            if (pokemonEvolved) {
                this.index = pokemonEvolved.index;
                this.name = pokemonEvolved.name;
                this.refToBoardPokemon = pokemonEvolved;
            }
        }
        return;
    }
}
exports.PokemonEntity = PokemonEntity;
__decorate([
    (0, schema_1.type)("boolean")
], PokemonEntity.prototype, "shiny", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "positionX", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "positionY", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "action", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "index", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "orientation", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "maxHP", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "hp", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "shield", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "maxPP", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "pp", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "atk", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "def", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "speDef", void 0);
__decorate([
    (0, schema_1.type)("int16")
], PokemonEntity.prototype, "ap", void 0);
__decorate([
    (0, schema_1.type)("int16")
], PokemonEntity.prototype, "luck", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "critChance", void 0);
__decorate([
    (0, schema_1.type)("float32")
], PokemonEntity.prototype, "critPower", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "team", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "range", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "speed", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "targetEntityId", void 0);
__decorate([
    (0, schema_1.type)("int8")
], PokemonEntity.prototype, "targetX", void 0);
__decorate([
    (0, schema_1.type)("int8")
], PokemonEntity.prototype, "targetY", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "rarity", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], PokemonEntity.prototype, "effects", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], PokemonEntity.prototype, "items", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], PokemonEntity.prototype, "types", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "stars", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "skill", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "tm", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "passive", void 0);
__decorate([
    (0, schema_1.type)(status_1.default)
], PokemonEntity.prototype, "status", void 0);
__decorate([
    (0, schema_1.type)(count_1.default)
], PokemonEntity.prototype, "count", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "healDone", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "emotion", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "stacks", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "stacksRequired", void 0);
function canSell(pkm, specialGameRule) {
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.DITTO_PARTY && pkm === Pokemon_1.Pkm.DITTO) {
        return false;
    }
    return new pokemon_1.PokemonClasses[pkm](pkm).canBeSold;
}
function applyBigEaterBeltStatBuff(pokemon, value, caster, nbDigits = 0) {
    const isBuffOrBuffLost = value > 0 ||
        (value < 0 && caster !== "environment" && caster.team === pokemon.team);
    if (isBuffOrBuffLost && pokemon.items.has(Item_1.Item.BIG_EATER_BELT)) {
        value = (0, number_1.roundToNDigits)(value * 1.25, nbDigits, "down");
    }
    return value;
}
function applyTwistBandBuff(pokemon, value, caster) {
    if (value < 0 &&
        pokemon.items.has(Item_1.Item.TWIST_BAND) &&
        (caster === "environment" || caster.team !== pokemon.team)) {
        value *= -1;
    }
    return value;
}
//# sourceMappingURL=pokemon-entity.js.map