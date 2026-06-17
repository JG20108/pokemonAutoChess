"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const config_1 = require("../../config");
const passives_1 = require("../../core/effects/passives");
const types_1 = require("../../types");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const array_1 = require("../../utils/array");
const number_1 = require("../../utils/number");
const schemas_1 = require("../../utils/schemas");
class Status extends schema_1.Schema {
    constructor(simulation) {
        super();
        this.burn = false;
        this.silence = false;
        this.fatigue = false;
        this.poisonStacks = 0;
        this.freeze = false;
        this.protect = false;
        this.sleep = false;
        this.confusion = false;
        this.wound = false;
        this.resurrection = false;
        this.resurrecting = false;
        this.paralysis = false;
        this.pokerus = false;
        this.possessed = false;
        this.locked = false;
        this.blinded = false;
        this.armorReduction = false;
        this.runeProtect = false;
        this.charm = false;
        this.flinch = false;
        this.electricField = false;
        this.psychicField = false;
        this.grassField = false;
        this.fairyField = false;
        this.spikeArmor = false;
        this.magicBounce = false;
        this.reflect = false;
        this.light = false;
        this.curse = false;
        this.curseVulnerability = false;
        this.curseWeakness = false;
        this.curseTorment = false;
        this.curseFate = false;
        this.enraged = false;
        this.skydiving = false;
        this.tree = false;
        this.burnOrigin = undefined;
        this.poisonOrigin = undefined;
        this.silenceOrigin = undefined;
        this.woundOrigin = undefined;
        this.charmOrigin = undefined;
        this.possessedOrigin = undefined;
        this.burnCooldown = 0;
        this.burnDamageCooldown = 1000;
        this.silenceCooldown = 0;
        this.fatigueCooldown = 0;
        this.poisonCooldown = 0;
        this.poisonDamageCooldown = 1000;
        this.freezeCooldown = 0;
        this.protectCooldown = 0;
        this.sleepCooldown = 0;
        this.confusionCooldown = 0;
        this.woundCooldown = 0;
        this.paralysisCooldown = 0;
        this.armorReductionCooldown = 0;
        this.runeProtectCooldown = 0;
        this.charmCooldown = 0;
        this.flinchCooldown = 0;
        this.enrageCooldown = 0;
        this.spikeArmorCooldown = 0;
        this.magicBounceCooldown = 0;
        this.reflectCooldown = 0;
        this.resurrectingCooldown = 0;
        this.curseCooldown = 0;
        this.pokerusCooldown = 3000;
        this.possessedCooldown = 0;
        this.lockedCooldown = 0;
        this.blindCooldown = 0;
        this.enrageDelay = 35000;
        this.ccCooldown = 0;
        this.untargettable = false;
        const elapsedTime = config_1.FIGHTING_PHASE_DURATION - simulation.room.state.time;
        this.enrageDelay = this.enrageDelay - elapsedTime;
    }
    clearAllStatus(entity) {
        this.clearNegativeStatus(entity);
        this.clearPositiveStatus(entity);
    }
    clearPositiveStatus(entity) {
        this.ccCooldown = 0;
        this.protectCooldown = 0;
        this.runeProtectCooldown = 0;
        this.enrageCooldown = 0;
        this.spikeArmorCooldown = 0;
        this.magicBounceCooldown = 0;
        this.reflectCooldown = 0;
        this.pokerusCooldown = 0;
        this.resurrection = false;
        this.removeElectricField(entity);
        this.removePsychicField(entity);
        this.removeGrassField(entity);
        this.removeFairyField(entity);
    }
    clearNegativeStatus(entity, origin) {
        this.burnCooldown = 0;
        this.silenceCooldown = 0;
        this.fatigueCooldown = 0;
        this.poisonCooldown = 0;
        this.freezeCooldown = 0;
        this.sleepCooldown = 0;
        this.confusionCooldown = 0;
        this.woundCooldown = 0;
        this.paralysisCooldown = 0;
        this.charmCooldown = 0;
        this.flinchCooldown = 0;
        this.armorReductionCooldown = 0;
        if (this.curse && this.curseCooldown > 0) {
            this.curseCooldown += 2000;
        }
        this.curse = false;
        if (this.possessed && origin && origin.team === entity.team) {
        }
        else {
            this.possessedCooldown = 0;
        }
        this.lockedCooldown = 0;
        this.blindCooldown = 0;
    }
    hasNegativeStatus() {
        return (this.burn ||
            this.silence ||
            this.fatigue ||
            this.poisonStacks > 0 ||
            this.freeze ||
            this.sleep ||
            this.confusion ||
            this.wound ||
            this.paralysis ||
            this.charm ||
            this.flinch ||
            this.armorReduction ||
            this.curse ||
            this.locked ||
            this.blinded ||
            this.possessed);
    }
    transferNegativeStatus(from, to) {
        if (this.burn)
            to.status.triggerBurn(this.burnCooldown, to, from);
        if (this.silence)
            to.status.triggerSilence(this.silenceCooldown, to, from);
        if (this.fatigue)
            to.status.triggerFatigue(this.fatigueCooldown, to);
        if (this.poisonStacks > 0)
            to.status.triggerPoison(this.poisonCooldown, to, from);
        if (this.freeze)
            to.status.triggerFreeze(this.freezeCooldown, to, from);
        if (this.sleep)
            to.status.triggerSleep(this.sleepCooldown, to);
        if (this.confusion)
            to.status.triggerConfusion(this.confusionCooldown, to, from);
        if (this.wound)
            to.status.triggerWound(this.woundCooldown, to, from);
        if (this.paralysis)
            to.status.triggerParalysis(this.paralysisCooldown, to, from);
        if (this.charm)
            to.status.triggerCharm(this.charmCooldown, to, from);
        if (this.flinch)
            to.status.triggerFlinch(this.flinchCooldown, to, from);
        if (this.armorReduction)
            to.status.triggerArmorReduction(this.armorReductionCooldown, to);
        if (this.curse)
            to.status.triggerCurse(this.curseCooldown, to);
        if (this.locked)
            to.status.triggerLocked(this.lockedCooldown, to);
        if (this.blinded)
            to.status.triggerBlinded(this.blindCooldown, to);
        if (this.possessed)
            to.status.triggerPossessed(this.possessedCooldown, to, from);
    }
    updateAllStatus(dt, pokemon, board) {
        if (pokemon.effects.has(Effect_1.EffectEnum.POISON_GAS) &&
            this.poisonStacks === 0 &&
            pokemon.items.has(Item_1.Item.HEAVY_DUTY_BOOTS) === false) {
            this.triggerPoison(1500, pokemon, undefined);
        }
        if (pokemon.effects.has(Effect_1.EffectEnum.SMOKE) &&
            !this.blinded &&
            !pokemon.items.has(Item_1.Item.HEAVY_DUTY_BOOTS)) {
            this.triggerBlinded(1000, pokemon);
        }
        if (pokemon.effects.has(Effect_1.EffectEnum.STICKY_WEB) &&
            !this.paralysis &&
            !pokemon.items.has(Item_1.Item.HEAVY_DUTY_BOOTS)) {
            this.triggerParalysis(2000, pokemon, null);
        }
        if (pokemon.effects.has(Effect_1.EffectEnum.COTTON_BALL) &&
            !this.sleep &&
            !pokemon.items.has(Item_1.Item.HEAVY_DUTY_BOOTS)) {
            this.triggerSleep(1000, pokemon);
            pokemon.effects.delete(Effect_1.EffectEnum.COTTON_BALL);
        }
        if (pokemon.status.runeProtect) {
            this.updateRuneProtect(dt);
        }
        if (this.burn) {
            this.updateBurn(dt, pokemon, board);
        }
        if (this.poisonStacks > 0) {
            this.updatePoison(dt, pokemon, board);
        }
        if (this.sleep) {
            this.updateSleep(dt, pokemon);
        }
        if (this.silence) {
            this.updateSilence(dt);
        }
        if (this.fatigue) {
            this.updateFatigue(dt);
        }
        if (this.protect) {
            this.updateProtect(dt);
        }
        if (this.freeze) {
            this.updateFreeze(dt);
        }
        if (this.confusion) {
            this.updateConfusion(dt, pokemon);
        }
        if (this.wound) {
            this.updateWound(dt);
        }
        if (this.paralysis) {
            this.updateParalysis(dt, pokemon);
        }
        if (this.locked) {
            this.updateLocked(dt, pokemon);
        }
        if (this.possessed) {
            this.updatePossessed(dt, pokemon);
        }
        if (this.blinded) {
            this.updateBlinded(dt);
        }
        if (this.pokerus) {
            this.updatePokerus(dt, pokemon, board);
        }
        if (this.armorReduction) {
            this.updateArmorReduction(dt);
        }
        if (this.charm) {
            this.updateCharm(dt, pokemon);
        }
        if (this.flinch) {
            this.updateFlinch(dt);
        }
        if (this.spikeArmor) {
            this.updateSpikeArmor(dt);
        }
        if (this.magicBounce) {
            this.updateMagicBounce(dt);
        }
        if (this.reflect) {
            this.updateReflect(dt);
        }
        if (this.resurrecting) {
            this.updateResurrecting(dt, pokemon);
        }
        if (this.curse) {
            this.updateCurse(dt, board, pokemon);
        }
        this.updateRage(dt, pokemon);
        if (this.ccCooldown > 0) {
            this.ccCooldown = (0, number_1.min)(0)(this.ccCooldown - dt);
        }
        if (pokemon.status.curseVulnerability && !pokemon.status.flinch) {
            this.triggerFlinch(30000, pokemon);
        }
        if (pokemon.status.curseWeakness && !pokemon.status.paralysis) {
            this.triggerParalysis(30000, pokemon, null);
        }
        if (pokemon.status.curseTorment && !pokemon.status.fatigue) {
            this.triggerFatigue(30000, pokemon);
        }
        if (pokemon.status.curseFate && !pokemon.status.curse) {
            this.triggerCurse(8100, pokemon);
        }
    }
    triggerArmorReduction(duration, pkm) {
        if (!this.runeProtect) {
            this.armorReduction = true;
            duration = this.applyStatusDurationReductions(duration, pkm);
            if (duration > this.armorReductionCooldown) {
                this.armorReductionCooldown = Math.round(duration);
            }
        }
    }
    updateArmorReduction(dt) {
        if (this.armorReductionCooldown - dt <= 0) {
            this.armorReduction = false;
        }
        else {
            this.armorReductionCooldown -= dt;
        }
    }
    triggerRage(duration, pokemon) {
        if (!this.enraged) {
            this.enraged = true;
            this.protect = false;
            pokemon.addSpeed(80, pokemon, 0, false);
            this.enrageCooldown = duration;
            this.sleepCooldown = Math.floor(this.sleepCooldown * 0.5);
            this.freezeCooldown = Math.floor(this.freezeCooldown * 0.5);
        }
        else if (duration > this.enrageCooldown) {
            this.enrageCooldown = duration;
        }
    }
    updateRage(dt, pokemon) {
        if (!this.enraged &&
            this.enrageDelay - dt <= 0 &&
            !pokemon.simulation.finished) {
            this.enraged = true;
            this.protect = false;
            pokemon.addSpeed(80, pokemon, 0, false);
        }
        else if (this.enraged &&
            this.enrageCooldown - dt <= 0 &&
            this.enrageDelay - dt > 0) {
            this.enraged = false;
            pokemon.addSpeed(-80, pokemon, 0, false);
        }
        this.enrageDelay -= dt;
        this.enrageCooldown -= dt;
    }
    triggerBurn(duration, pkm, origin) {
        const alreadyBurning = this.burn;
        if (!pkm.effects.has(Effect_1.EffectEnum.IMMUNITY_BURN) &&
            !this.runeProtect &&
            pkm.passive !== Passive_1.Passive.WATER_BUBBLE) {
            this.burn = true;
            duration = this.applyStatusDurationReductions(duration, pkm);
            if (duration > this.burnCooldown) {
                this.burnCooldown = duration;
                if (origin) {
                    this.burnOrigin = origin;
                }
            }
            if (pkm.passive === Passive_1.Passive.GUTS &&
                !pkm.effects.has(Effect_1.EffectEnum.GUTS_PASSIVE)) {
                pkm.effects.add(Effect_1.EffectEnum.GUTS_PASSIVE);
                pkm.addAttack(5, pkm, 0, false);
            }
            if (pkm.passive === Passive_1.Passive.WELL_BAKED && !alreadyBurning) {
                pkm.addDefense(20, pkm, 0, false);
            }
            if (pkm.items.has(Item_1.Item.MAGMARIZER) && !alreadyBurning) {
                pkm.addSpeed(30, pkm, 0, false);
            }
            if (pkm.items.has(Item_1.Item.RAWST_BERRY)) {
                pkm.eatBerry(Item_1.Item.RAWST_BERRY);
            }
        }
    }
    updateBurn(dt, pkm, board) {
        if (this.burnDamageCooldown - dt <= 0) {
            if (this.burnOrigin) {
                let burnDamage = pkm.maxHP * 0.05;
                if (pkm.simulation.weather === Weather_1.Weather.DROUGHT) {
                    burnDamage *= 1.3;
                    const nbHeatRocks = pkm.player
                        ? (0, array_1.count)(pkm.player.items, Item_1.Item.HEAT_ROCK)
                        : 0;
                    if (nbHeatRocks > 0) {
                        burnDamage *= 1 - 0.2 * nbHeatRocks;
                    }
                }
                else if (pkm.simulation.weather === Weather_1.Weather.RAIN) {
                    burnDamage *= 0.7;
                }
                if (pkm.items.has(Item_1.Item.ASSAULT_VEST)) {
                    burnDamage *= 0.5;
                }
                if (pkm.effects.has(Effect_1.EffectEnum.SWIFT_SWIM)) {
                    burnDamage *= 0.7;
                }
                else if (pkm.effects.has(Effect_1.EffectEnum.HYDRATION)) {
                    burnDamage *= 0.5;
                }
                else if (pkm.effects.has(Effect_1.EffectEnum.WATER_VEIL) ||
                    pkm.effects.has(Effect_1.EffectEnum.SURGE_SURFER)) {
                    burnDamage *= 0.3;
                }
                if (pkm.passive === Passive_1.Passive.WELL_BAKED ||
                    pkm.items.has(Item_1.Item.MAGMARIZER)) {
                    burnDamage = 0;
                }
                if (pkm.items.has(Item_1.Item.COOKING_POT)) {
                    pkm.addSpeed(10, pkm, 0, false);
                }
                burnDamage = Math.round(burnDamage);
                if (burnDamage > 0) {
                    pkm.handleDamage({
                        damage: burnDamage,
                        board,
                        attackType: Game_1.AttackType.TRUE,
                        attacker: this.burnOrigin,
                        shouldTargetGainMana: true
                    });
                }
                this.burnDamageCooldown = 1000;
            }
        }
        else {
            this.burnDamageCooldown -= dt;
        }
        if (this.burnCooldown - dt <= 0) {
            this.healBurn(pkm);
        }
        else {
            this.burnCooldown -= dt;
        }
    }
    healBurn(pkm) {
        if (!this.burn)
            return;
        this.burn = false;
        this.burnOrigin = undefined;
        this.burnDamageCooldown = 1000;
        if (pkm.passive === Passive_1.Passive.GUTS && this.poisonStacks === 0) {
            pkm.effects.delete(Effect_1.EffectEnum.GUTS_PASSIVE);
            pkm.addAttack(-5, pkm, 0, false);
        }
        if (pkm.passive === Passive_1.Passive.WELL_BAKED) {
            pkm.addDefense(-20, pkm, 0, false);
        }
        if (pkm.items.has(Item_1.Item.MAGMARIZER)) {
            pkm.addSpeed(-30, pkm, 0, false);
        }
    }
    triggerSilence(duration, pkm, origin) {
        if (!this.runeProtect && !this.tree) {
            if (pkm.simulation.weather === Weather_1.Weather.MURKY) {
                duration *= 1.3;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.silence = true;
            if (duration > this.silenceCooldown) {
                this.silenceCooldown = duration;
                if (origin) {
                    this.silenceOrigin = origin;
                }
            }
        }
    }
    updateSilence(dt) {
        if (this.silenceCooldown - dt <= 0) {
            this.silence = false;
            this.silenceOrigin = undefined;
        }
        else {
            this.silenceCooldown -= dt;
        }
    }
    triggerFatigue(duration, pkm) {
        if (!this.runeProtect) {
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.fatigue = true;
            if (duration > this.fatigueCooldown) {
                this.fatigueCooldown = duration;
            }
        }
    }
    updateFatigue(dt) {
        if (this.fatigueCooldown - dt <= 0) {
            this.fatigue = false;
        }
        else {
            this.fatigueCooldown -= dt;
        }
    }
    triggerPoison(duration, pkm, origin) {
        if (!pkm.effects.has(Effect_1.EffectEnum.IMMUNITY_POISON) && !this.runeProtect) {
            let maxStacks = 3;
            if (origin) {
                this.poisonOrigin = origin;
                if (origin.effects.has(Effect_1.EffectEnum.VENOMOUS)) {
                    maxStacks = 4;
                }
                if (origin.effects.has(Effect_1.EffectEnum.TOXIC)) {
                    maxStacks = 5;
                }
            }
            this.poisonStacks = (0, number_1.max)(maxStacks)(this.poisonStacks + 1);
            duration = this.applyStatusDurationReductions(duration, pkm);
            if (duration > this.poisonCooldown) {
                this.poisonCooldown = duration;
            }
            if (pkm.passive === Passive_1.Passive.GUTS &&
                !pkm.effects.has(Effect_1.EffectEnum.GUTS_PASSIVE)) {
                pkm.effects.add(Effect_1.EffectEnum.GUTS_PASSIVE);
                pkm.addAttack(5, pkm, 0, false);
            }
            if (pkm.passive === Passive_1.Passive.TOXIC_BOOST &&
                !pkm.effects.has(Effect_1.EffectEnum.TOXIC_BOOST)) {
                pkm.effects.add(Effect_1.EffectEnum.TOXIC_BOOST);
                pkm.addAttack(10, pkm, 0, false);
            }
            if (pkm.items.has(Item_1.Item.PECHA_BERRY)) {
                pkm.eatBerry(Item_1.Item.PECHA_BERRY);
            }
        }
    }
    updatePoison(dt, pkm, board) {
        var _a;
        if (this.poisonDamageCooldown - dt <= 0) {
            let poisonDamage = pkm.maxHP * 0.05 * this.poisonStacks;
            if (pkm.passive === Passive_1.Passive.GLISCOR) {
                poisonDamage = pkm.maxHP * 0.05 * (this.poisonStacks - 2);
            }
            if (pkm.simulation.weather === Weather_1.Weather.RAIN) {
                poisonDamage *= 0.7;
            }
            if (pkm.items.has(Item_1.Item.ASSAULT_VEST)) {
                poisonDamage *= 0.5;
            }
            if (pkm.passive === Passive_1.Passive.TOXIC_BOOST) {
                poisonDamage *= 0.5;
            }
            if (pkm.effects.has(Effect_1.EffectEnum.SWIFT_SWIM)) {
                poisonDamage *= 0.7;
            }
            else if (pkm.effects.has(Effect_1.EffectEnum.HYDRATION)) {
                poisonDamage *= 0.5;
            }
            else if (pkm.effects.has(Effect_1.EffectEnum.WATER_VEIL) ||
                pkm.effects.has(Effect_1.EffectEnum.SURGE_SURFER)) {
                poisonDamage *= 0.3;
            }
            poisonDamage = Math.round(poisonDamage);
            if (poisonDamage < 0) {
                pkm.handleHeal(Math.round(-poisonDamage), pkm, 0, false);
            }
            else if (poisonDamage > 0) {
                pkm.handleDamage({
                    damage: (0, number_1.min)(1)(Math.round(poisonDamage)),
                    board,
                    attackType: Game_1.AttackType.TRUE,
                    attacker: (_a = this.poisonOrigin) !== null && _a !== void 0 ? _a : null,
                    shouldTargetGainMana: false
                });
            }
            if (pkm.effects.has(Effect_1.EffectEnum.POISON_GAS)) {
                this.triggerPoison(1500, pkm, undefined);
            }
            this.poisonDamageCooldown = 1000;
        }
        else {
            this.poisonDamageCooldown -= dt;
        }
        if (this.poisonCooldown - dt <= 0) {
            this.poisonStacks = 0;
            this.poisonOrigin = undefined;
            this.poisonDamageCooldown = 1000;
            if (pkm.passive === Passive_1.Passive.GUTS && !this.burn) {
                pkm.effects.delete(Effect_1.EffectEnum.GUTS_PASSIVE);
                pkm.addAttack(-5, pkm, 0, false);
            }
            if (pkm.passive === Passive_1.Passive.TOXIC_BOOST) {
                pkm.effects.delete(Effect_1.EffectEnum.TOXIC_BOOST);
                pkm.addAttack(-10, pkm, 0, false);
            }
        }
        else {
            this.poisonCooldown = this.poisonCooldown - dt;
        }
    }
    triggerFreeze(duration, pkm, origin) {
        if (!this.freeze &&
            !this.runeProtect &&
            !this.skydiving &&
            !pkm.effects.has(Effect_1.EffectEnum.IMMUNITY_FREEZE) &&
            this.ccCooldown <= 0) {
            if (pkm.simulation.weather === Weather_1.Weather.SNOW) {
                duration *= 1.2;
                const nbIcyRocks = pkm.player
                    ? (0, array_1.count)(pkm.player.items, Item_1.Item.ICY_ROCK)
                    : 0;
                if (nbIcyRocks > 0) {
                    duration *= 1 - 0.2 * nbIcyRocks;
                }
            }
            else if (pkm.simulation.weather === Weather_1.Weather.DROUGHT) {
                duration *= 0.7;
            }
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.freeze = true;
            this.freezeCooldown = Math.round(duration);
            if (pkm.items.has(Item_1.Item.ASPEAR_BERRY)) {
                pkm.eatBerry(Item_1.Item.ASPEAR_BERRY);
            }
            if (pkm.passive === Passive_1.Passive.EISCUE_NOICE) {
                (0, passives_1.transformToIceFace)(pkm, false);
            }
            if ((origin === null || origin === void 0 ? void 0 : origin.passive) === Passive_1.Passive.EISCUE_NOICE) {
                (0, passives_1.transformToIceFace)(origin, false);
            }
        }
    }
    updateFreeze(dt) {
        if (this.freezeCooldown - dt <= 0) {
            this.freeze = false;
            this.ccCooldown = Math.max(this.ccCooldown, config_1.CC_COOLDOWN);
        }
        else {
            this.freezeCooldown -= dt * (this.burn ? 2 : 1);
        }
    }
    triggerProtect(timer) {
        if (!this.protect && !this.enraged) {
            this.protect = true;
            this.protectCooldown = timer;
        }
    }
    updateProtect(dt) {
        if (this.protectCooldown - dt <= 0) {
            this.protect = false;
        }
        else {
            this.protectCooldown -= dt;
        }
    }
    triggerSleep(duration, pkm) {
        if (!this.sleep &&
            !this.runeProtect &&
            !this.skydiving &&
            !pkm.effects.has(Effect_1.EffectEnum.IMMUNITY_SLEEP) &&
            this.ccCooldown <= 0) {
            if (pkm.simulation.weather === Weather_1.Weather.NIGHT) {
                duration *= 1.3;
            }
            else if (pkm.simulation.weather === Weather_1.Weather.ZENITH) {
                duration *= 0.7;
            }
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.sleep = true;
            this.sleepCooldown = Math.round(duration);
            if (pkm.items.has(Item_1.Item.CHESTO_BERRY)) {
                pkm.eatBerry(Item_1.Item.CHESTO_BERRY);
            }
        }
    }
    updateSleep(dt, pkm) {
        if (pkm.passive === Passive_1.Passive.COMATOSE) {
            this.sleep = true;
            this.sleepCooldown = 1000;
            return;
        }
        if (this.sleepCooldown - dt <= 0) {
            this.sleep = false;
            this.ccCooldown = Math.max(this.ccCooldown, config_1.CC_COOLDOWN);
            if (pkm.passive === Passive_1.Passive.SLAKING) {
                this.triggerRage(3000, pkm);
            }
        }
        else {
            this.sleepCooldown = this.sleepCooldown - dt;
        }
    }
    triggerConfusion(duration, pkm, origin, apBoost = false) {
        if (!this.confusion &&
            !this.runeProtect &&
            !pkm.effects.has(Effect_1.EffectEnum.IMMUNITY_CONFUSION)) {
            const boost = apBoost && origin ? (duration * origin.ap) / 100 : 0;
            duration = duration + boost;
            if (pkm.simulation.weather === Weather_1.Weather.SANDSTORM) {
                duration *= 1.3;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.confusion = true;
            this.confusionCooldown = Math.round(duration);
            if (pkm.items.has(Item_1.Item.PERSIM_BERRY)) {
                pkm.eatBerry(Item_1.Item.PERSIM_BERRY);
            }
            if (pkm.passive === Passive_1.Passive.PSYDUCK) {
                pkm.addAbilityPower(100, pkm, 0, false);
            }
        }
    }
    updateConfusion(dt, pkm) {
        if (this.confusionCooldown - dt <= 0) {
            this.confusion = false;
            pkm.setTarget(null);
        }
        else {
            this.confusionCooldown -= dt;
        }
    }
    triggerCharm(duration, pkm, origin, apBoost = false) {
        if (!this.charm && !this.runeProtect) {
            const boost = apBoost && origin ? (duration * origin.ap) / 100 : 0;
            duration = duration + boost;
            if (pkm.simulation.weather === Weather_1.Weather.MISTY) {
                duration *= 1.3;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.charm = true;
            this.charmCooldown = duration;
            this.charmOrigin = origin;
            pkm.setTarget(origin);
        }
    }
    updateCharm(dt, pkm) {
        if (this.charmCooldown - dt <= 0) {
            this.charm = false;
            this.charmOrigin = undefined;
            pkm.setTarget(null);
        }
        else {
            this.charmCooldown -= dt;
        }
    }
    triggerWound(duration, pkm, origin) {
        if (!this.runeProtect) {
            this.wound = true;
            if (pkm.simulation.weather === Weather_1.Weather.BLOODMOON) {
                duration *= 1.3;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            if (duration > this.woundCooldown) {
                this.woundCooldown = duration;
                if (origin) {
                    this.woundOrigin = origin;
                }
            }
        }
    }
    updateWound(dt) {
        if (this.woundCooldown - dt <= 0) {
            this.wound = false;
            this.woundOrigin = undefined;
        }
        else {
            this.woundCooldown -= dt;
        }
    }
    triggerParalysis(duration, pkm, origin, apBoost = false) {
        if (!this.runeProtect && !pkm.effects.has(Effect_1.EffectEnum.IMMUNITY_PARALYSIS)) {
            if (!this.paralysis) {
                this.paralysis = true;
            }
            const boost = apBoost && origin ? (duration * origin.ap) / 100 : 0;
            duration = duration + boost;
            if (pkm.simulation.weather === Weather_1.Weather.STORM) {
                duration *= 1.3;
                const nbElectricQuartz = pkm.player
                    ? (0, array_1.count)(pkm.player.items, Item_1.Item.ELECTRIC_QUARTZ)
                    : 0;
                if (nbElectricQuartz > 0) {
                    duration *= 1 - 0.2 * nbElectricQuartz;
                }
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            if (duration > this.paralysisCooldown) {
                this.paralysisCooldown = Math.round(duration);
            }
            if (pkm.items.has(Item_1.Item.CHERI_BERRY)) {
                pkm.eatBerry(Item_1.Item.CHERI_BERRY);
            }
        }
    }
    updateParalysis(dt, pkm) {
        if (this.paralysisCooldown - dt <= 0) {
            this.healParalysis(pkm);
        }
        else {
            this.paralysisCooldown -= dt;
        }
    }
    healParalysis(pkm) {
        if (this.paralysis) {
            this.paralysis = false;
            this.paralysisCooldown = 0;
        }
    }
    triggerRuneProtect(timer, pokemon, origin) {
        this.runeProtect = true;
        this.clearNegativeStatus(pokemon, origin);
        if (timer > this.runeProtectCooldown) {
            this.runeProtectCooldown = timer;
        }
    }
    updateRuneProtect(dt) {
        if (this.runeProtectCooldown - dt <= 0) {
            this.runeProtect = false;
        }
        else {
            this.runeProtectCooldown -= dt;
        }
    }
    triggerFlinch(duration, pkm, origin) {
        if (!this.runeProtect) {
            this.flinch = true;
            duration = this.applyStatusDurationReductions(duration, pkm);
            if (duration > this.flinchCooldown) {
                this.flinchCooldown = Math.round(duration);
            }
        }
    }
    updateFlinch(dt) {
        if (this.flinchCooldown - dt <= 0) {
            this.flinch = false;
        }
        else {
            this.flinchCooldown -= dt;
        }
    }
    triggerSpikeArmor(timer) {
        this.spikeArmor = true;
        if (timer > this.spikeArmorCooldown) {
            this.spikeArmorCooldown = timer;
        }
    }
    updateSpikeArmor(dt) {
        if (this.spikeArmorCooldown - dt <= 0) {
            this.spikeArmor = false;
        }
        else {
            this.spikeArmorCooldown -= dt;
        }
    }
    triggerMagicBounce(timer) {
        this.magicBounce = true;
        if (timer > this.magicBounceCooldown) {
            this.magicBounceCooldown = timer;
        }
    }
    updateMagicBounce(dt) {
        if (this.magicBounceCooldown - dt <= 0) {
            this.magicBounce = false;
        }
        else {
            this.magicBounceCooldown -= dt;
        }
    }
    triggerReflect(timer) {
        this.reflect = true;
        if (timer > this.reflectCooldown) {
            this.reflectCooldown = timer;
        }
    }
    updateReflect(dt) {
        if (this.reflectCooldown - dt <= 0) {
            this.reflect = false;
        }
        else {
            this.reflectCooldown -= dt;
        }
    }
    addResurrection(pokemon) {
        if (pokemon.passive === Passive_1.Passive.INANIMATE)
            return;
        this.resurrection = true;
    }
    triggerResurrection(pokemon, board) {
        this.resurrection = false;
        this.resurrecting = true;
        this.resurrectingCooldown = 2000;
        this.untargettable = true;
        pokemon.status.clearNegativeStatus(pokemon);
    }
    updateResurrecting(dt, pokemon) {
        if (this.resurrectingCooldown - dt <= 0) {
            this.resurrecting = false;
            this.untargettable = false;
            pokemon.resurrect();
            pokemon.toMovingState();
            pokemon.cooldown = 0;
        }
        else {
            this.resurrectingCooldown -= dt;
        }
    }
    triggerCurse(timer, pokemon) {
        if (!this.runeProtect) {
            if (this.curse) {
                this.curseCooldown = 0;
            }
            else {
                this.curse = true;
                if (this.curseCooldown > 0) {
                    timer = Math.min(this.curseCooldown, timer);
                }
                else {
                    const nbOddStones = pokemon.player
                        ? (0, array_1.count)(pokemon.player.items, Item_1.Item.ODD_KEYSTONE)
                        : 0;
                    timer += nbOddStones * 1000;
                }
                this.curseCooldown = timer;
            }
        }
    }
    updateCurse(dt, board, pokemon) {
        this.curseCooldown -= dt;
        if (this.curseCooldown <= 0) {
            this.curse = false;
            pokemon.handleDamage({
                damage: 9999,
                board,
                attacker: null,
                attackType: Game_1.AttackType.TRUE,
                shouldTargetGainMana: false
            });
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: "CURSE_EFFECT",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                orientation: pokemon.orientation
            });
        }
    }
    triggerPokerus(pokemon) {
        if (pokemon.passive === Passive_1.Passive.INANIMATE)
            return;
        if (!this.pokerus) {
            this.pokerus = true;
        }
    }
    updatePokerus(dt, pokemon, board) {
        if (this.pokerusCooldown - dt <= 0) {
            pokemon.addAttack(1, pokemon, 0, false);
            pokemon.addAbilityPower(10, pokemon, 0, false);
            let infectCount = 0;
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
            cells.forEach((cell) => {
                if (infectCount < 2 && cell.value !== undefined) {
                    if (cell.value.team === pokemon.team &&
                        cell.value.status.pokerus === false) {
                        cell.value.status.triggerPokerus(cell.value);
                        infectCount++;
                    }
                }
            });
            this.pokerusCooldown = 3000;
        }
        else {
            this.pokerusCooldown -= dt;
        }
    }
    triggerLocked(duration, pkm) {
        if (!this.locked &&
            !this.skydiving &&
            !this.runeProtect &&
            !pkm.effects.has(Effect_1.EffectEnum.IMMUNITY_LOCKED) &&
            this.ccCooldown <= 0) {
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.locked = true;
            this.lockedCooldown = Math.round(duration);
            if (pkm.range != 1) {
                pkm.toMovingState();
            }
            pkm.range = 1;
        }
    }
    updateLocked(dt, pokemon) {
        var _a, _b;
        if (this.lockedCooldown - dt <= 0) {
            this.locked = false;
            let range = pokemon.baseRange;
            if (pokemon.items.has(Item_1.Item.WIDE_LENS)) {
                range += (_b = (_a = config_1.ItemStats[Item_1.Item.WIDE_LENS]) === null || _a === void 0 ? void 0 : _a[Game_1.Stat.RANGE]) !== null && _b !== void 0 ? _b : 0;
            }
            if (pokemon.player &&
                pokemon.player.items.includes(Item_1.Item.LONG_WAND) &&
                pokemon.types.has(Synergy_1.Synergy.FAIRY)) {
                range += 1;
            }
            pokemon.range = range;
            this.ccCooldown = Math.max(this.ccCooldown, config_1.CC_COOLDOWN);
        }
        else {
            this.lockedCooldown -= dt;
        }
    }
    triggerPossessed(duration, pkm, origin) {
        if (!this.runeProtect) {
            const pkmTeam = pkm.team === Game_1.Team.RED_TEAM
                ? pkm.simulation.redTeam
                : pkm.simulation.blueTeam;
            if ((0, schemas_1.schemaValues)(pkmTeam).some((p) => p.id !== pkm.id && !p.status.possessed)) {
                if (!this.possessed) {
                    pkm.team =
                        pkm.team === Game_1.Team.BLUE_TEAM ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
                }
                this.possessed = true;
                duration = this.applyStatusDurationReductions(duration, pkm);
                pkm.setTarget(null);
                origin.setTarget(null);
                this.possessedCooldown = Math.max(Math.round(duration), this.possessedCooldown);
                this.possessedOrigin = origin;
            }
            else {
                this.triggerCharm(duration, pkm, origin, false);
            }
        }
    }
    updatePossessed(dt, pkm) {
        const otherTeam = pkm.team === Game_1.Team.RED_TEAM
            ? pkm.simulation.blueTeam
            : pkm.simulation.redTeam;
        const possessedCount = (0, schemas_1.schemaValues)(otherTeam).filter((pokemon) => pokemon.status.possessed).length;
        const lastAliveArePossessed = possessedCount === otherTeam.size;
        this.possessedCooldown -= dt;
        if (this.possessedCooldown <= 0 || lastAliveArePossessed) {
            this.possessed = false;
            pkm.team = pkm.baseTeam;
            if (lastAliveArePossessed &&
                this.possessedCooldown > 0 &&
                this.possessedOrigin) {
                pkm.status.triggerCharm(this.possessedCooldown, pkm, this.possessedOrigin, false);
            }
            pkm.setTarget(null);
        }
    }
    triggerBlinded(duration, pkm) {
        if (!this.blinded && !this.runeProtect) {
            if (pkm.status.enraged) {
                duration = duration / 2;
            }
            duration = this.applyStatusDurationReductions(duration, pkm);
            this.blinded = true;
            this.blindCooldown = Math.round(duration);
        }
    }
    updateBlinded(dt) {
        if (this.blindCooldown - dt <= 0) {
            this.blinded = false;
        }
        else {
            this.blindCooldown -= dt;
        }
    }
    applyStatusDurationReductions(duration, pkm) {
        if (pkm.effects.has(Effect_1.EffectEnum.SWIFT_SWIM)) {
            duration = Math.round(duration * 0.7);
        }
        else if (pkm.effects.has(Effect_1.EffectEnum.HYDRATION)) {
            duration = Math.round(duration * 0.5);
        }
        else if (pkm.effects.has(Effect_1.EffectEnum.WATER_VEIL) ||
            pkm.effects.has(Effect_1.EffectEnum.SURGE_SURFER)) {
            duration = Math.round(duration * 0.3);
        }
        const nbOddStones = pkm.player
            ? (0, array_1.count)(pkm.player.items, Item_1.Item.ODD_KEYSTONE)
            : 0;
        if (nbOddStones > 0) {
            duration = Math.round(duration * (1 - 0.1 * nbOddStones));
        }
        return duration;
    }
    addPsychicField(entity) {
        if (this.psychicField)
            return;
        this.psychicField = true;
        if (entity.passive === Passive_1.Passive.SURGE_SURFER) {
            entity.addSpeed(30, entity, 0, false);
        }
    }
    removePsychicField(entity) {
        if (!this.psychicField)
            return;
        this.psychicField = false;
        if (entity.passive === Passive_1.Passive.SURGE_SURFER) {
            entity.addSpeed(-30, entity, 0, false);
        }
    }
    addElectricField(entity) {
        if (this.electricField)
            return;
        this.electricField = true;
        if (entity.passive === Passive_1.Passive.SURGE_SURFER) {
            entity.addSpeed(30, entity, 0, false);
        }
    }
    removeElectricField(entity) {
        if (!this.electricField)
            return;
        this.electricField = false;
        if (entity.passive === Passive_1.Passive.SURGE_SURFER) {
            entity.addSpeed(-30, entity, 0, false);
        }
    }
    addFairyField(entity) {
        this.fairyField = true;
    }
    removeFairyField(entity) {
        this.fairyField = false;
    }
    addGrassField(entity) {
        this.grassField = true;
    }
    removeGrassField(entity) {
        this.grassField = false;
    }
}
exports.default = Status;
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "burn", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "silence", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "fatigue", void 0);
__decorate([
    (0, schema_1.type)("number")
], Status.prototype, "poisonStacks", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "freeze", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "protect", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "sleep", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "confusion", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "wound", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "resurrection", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "resurrecting", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "paralysis", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "pokerus", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "possessed", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "locked", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "blinded", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "armorReduction", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "runeProtect", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "charm", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "flinch", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "electricField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "psychicField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "grassField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "fairyField", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "spikeArmor", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "magicBounce", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "reflect", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "light", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curse", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseVulnerability", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseWeakness", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseTorment", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "curseFate", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "enraged", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "skydiving", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Status.prototype, "tree", void 0);
//# sourceMappingURL=status.js.map