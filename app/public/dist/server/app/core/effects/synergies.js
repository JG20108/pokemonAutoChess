"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pounceWandEffect = exports.normalShieldEffect = exports.wildBerserkEffect = exports.overgrowEffect = exports.onFlowerMonDeath = exports.fightingTrainingEffect = exports.FightingKnockbackEffect = exports.FlyingProtectionEffect = exports.OnFieldDeathEffect = exports.humanHealEffect = exports.SoundCryEffect = exports.electricTripleAttackEffect = exports.FireHitEffect = exports.GroundHoleEffect = exports.MonsterKillEffect = void 0;
exports.applyWandEffects = applyWandEffects;
const config_1 = require("../../config");
const effects_1 = require("../../models/effects");
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const array_1 = require("../../utils/array");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const number_1 = require("../../utils/number");
const orientation_1 = require("../../utils/orientation");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const flower_pots_1 = require("../flower-pots");
const simulation_command_1 = require("../simulation-command");
const effect_1 = require("./effect");
class MonsterKillEffect extends effect_1.OnKillEffect {
    constructor(effect) {
        super(undefined, effect);
        this.hpBoosted = 0;
        this.count = 0;
        this.synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.MONSTER].indexOf(effect);
    }
    apply({ attacker, target }) {
        var _a, _b, _c;
        const attackBoost = (_a = config_1.MONSTER_ATTACK_BUFF_PER_SYNERGY_LEVEL[this.synergyLevel]) !== null && _a !== void 0 ? _a : config_1.MONSTER_ATTACK_BUFF_PER_SYNERGY_LEVEL.at(-1);
        const apBoost = (_b = config_1.MONSTER_AP_BUFF_PER_SYNERGY_LEVEL[this.synergyLevel]) !== null && _b !== void 0 ? _b : config_1.MONSTER_AP_BUFF_PER_SYNERGY_LEVEL.at(-1);
        const hpGain = (_c = config_1.MONSTER_MAX_HP_BUFF_FACTOR_PER_SYNERGY_LEVEL[this.synergyLevel]) !== null && _c !== void 0 ? _c : config_1.MONSTER_MAX_HP_BUFF_FACTOR_PER_SYNERGY_LEVEL.at(-1);
        const lifeBoost = hpGain * target.maxHP;
        attacker.addAttack(attackBoost, attacker, 0, false);
        attacker.addAbilityPower(apBoost, attacker, 0, false);
        attacker.addMaxHP(lifeBoost, attacker, 0, false);
        this.hpBoosted += lifeBoost;
        this.count += 1;
        if (attacker.items.has(Item_1.Item.BERSERK_GENE)) {
            attacker.status.triggerConfusion(1000, attacker, attacker);
        }
    }
}
exports.MonsterKillEffect = MonsterKillEffect;
class GroundHoleEffect extends effect_1.OnSpawnEffect {
    constructor(effect) {
        const synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.GROUND].indexOf(effect) + 1;
        super((pokemon, player) => {
            var _a;
            const y = (player === null || player === void 0 ? void 0 : player.team) === Game_1.Team.RED_TEAM
                ? config_1.BOARD_HEIGHT - 1 - pokemon.positionY
                : pokemon.positionY;
            const index = y * config_1.BOARD_WIDTH + pokemon.positionX;
            const holeLevel = (_a = player === null || player === void 0 ? void 0 : player.groundHoles[index]) !== null && _a !== void 0 ? _a : 0;
            let defBuff = holeLevel * [0, 1, 2, 3, 3][synergyLevel];
            let atkBuff = holeLevel === 5 ? [0, 3, 5, 8, 8][synergyLevel] : 0;
            if (synergyLevel === 4) {
                const nbFullyDugRows = [0, 8, 16].reduce((count, startIdx) => {
                    var _a;
                    const row = (_a = player === null || player === void 0 ? void 0 : player.groundHoles.slice(startIdx, startIdx + 8)) !== null && _a !== void 0 ? _a : [];
                    return count + (row.every((hole) => hole === 5) ? 1 : 0);
                }, 0);
                defBuff += nbFullyDugRows * 5;
                if (nbFullyDugRows === 3) {
                    atkBuff += 8;
                    player === null || player === void 0 ? void 0 : player.titles.add(types_1.Title.MOLE);
                }
            }
            pokemon.addAttack(atkBuff, pokemon, 0, false);
            pokemon.addDefense(defBuff, pokemon, 0, false);
            pokemon.addSpecialDefense(defBuff, pokemon, 0, false);
            pokemon.broadcastAbility({ skill: "GROUND_GROW" });
        });
    }
}
exports.GroundHoleEffect = GroundHoleEffect;
class FireHitEffect extends effect_1.OnAttackEffect {
    constructor(effect) {
        super(undefined, effect);
        this.count = 0;
        this.synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.FIRE].indexOf(effect);
    }
    apply({ pokemon }) {
        pokemon.addAttack(this.synergyLevel, pokemon, 0, false);
        this.count += 1;
    }
}
exports.FireHitEffect = FireHitEffect;
exports.electricTripleAttackEffect = new effect_1.OnAttackEffect(({ pokemon, target, board, isTripleAttack }) => {
    if (isTripleAttack)
        return;
    let shouldTriggerTripleAttack = false, isSupercharged = false;
    if (pokemon.effects.has(Effect_1.EffectEnum.RISING_VOLTAGE)) {
        shouldTriggerTripleAttack = pokemon.count.attackCount % 4 === 0;
    }
    else if (pokemon.effects.has(Effect_1.EffectEnum.POWER_SURGE)) {
        shouldTriggerTripleAttack = pokemon.count.attackCount % 3 === 0;
    }
    else if (pokemon.effects.has(Effect_1.EffectEnum.SUPERCHARGED)) {
        shouldTriggerTripleAttack = pokemon.count.attackCount % 3 === 0;
        isSupercharged = true;
    }
    if (shouldTriggerTripleAttack) {
        pokemon.count.tripleAttackCount++;
        if (pokemon.name === Pokemon_1.Pkm.MORPEKO && target) {
            target.status.triggerParalysis(2000, target, pokemon);
        }
        if (pokemon.name === Pokemon_1.Pkm.MORPEKO_HANGRY && target) {
            target.status.triggerWound(4000, target, pokemon);
        }
        pokemon.state.attack(pokemon, board, target, true);
        pokemon.state.attack(pokemon, board, target, true);
        if (isSupercharged && target) {
            target.addPP(-10, pokemon, 0, false);
            target.count.manaBurnCount++;
            if (pokemon.player && !pokemon.isGhostOpponent) {
                pokemon.player.chargeCellBattery(5);
            }
        }
    }
});
class SoundCryEffect extends effect_1.OnAbilityCastEffect {
    constructor(effect) {
        super(undefined, effect);
        this.count = 0;
        this.synergyLevel = -1;
        if (effect) {
            this.synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.SOUND].indexOf(effect);
        }
    }
    apply(pokemon, board) {
        var _a, _b, _c;
        pokemon.broadcastAbility({ skill: Ability_1.Ability.ECHO });
        const attackBoost = (_a = [2, 1, 1][this.synergyLevel]) !== null && _a !== void 0 ? _a : 0;
        const speedBoost = (_b = [0, 5, 5][this.synergyLevel]) !== null && _b !== void 0 ? _b : 0;
        const manaBoost = (_c = [0, 0, 3][this.synergyLevel]) !== null && _c !== void 0 ? _c : 0;
        const chimecho = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((cell) => cell.value)
            .filter((value) => !!value)
            .find((entity) => entity.passive === Passive_1.Passive.CHIMECHO);
        if (chimecho) {
            chimecho.addPP(3, pokemon, 0, false);
        }
        const scale = pokemon.passive === Passive_1.Passive.MEGA_LAUNCHER ? 3 : 1;
        board.cells.forEach((ally) => {
            if ((ally === null || ally === void 0 ? void 0 : ally.team) === pokemon.team) {
                if (ally.passive === Passive_1.Passive.COMATOSE && ally.status.sleep) {
                    ally.addAbilityPower(5, pokemon, 0, false);
                }
                else {
                    ally.status.sleepCooldown = 0;
                }
                ally.addAttack(attackBoost * scale, pokemon, 0, false);
                ally.addSpeed(speedBoost * scale, pokemon, 0, false);
                ally.addPP(manaBoost * scale, pokemon, 0, false);
                ally.count.soundCryCount += scale;
            }
        });
    }
}
exports.SoundCryEffect = SoundCryEffect;
exports.humanHealEffect = new effect_1.OnDamageDealtEffect(({ pokemon, target, damage, isRetaliation }) => {
    if (isRetaliation)
        return;
    if (target.id === pokemon.id)
        return;
    let lifesteal = 0;
    if (pokemon.effects.has(Effect_1.EffectEnum.MEDITATE)) {
        lifesteal = 0.25;
    }
    else if (pokemon.effects.has(Effect_1.EffectEnum.FOCUS_ENERGY)) {
        lifesteal = 0.35;
    }
    else if (pokemon.effects.has(Effect_1.EffectEnum.CALM_MIND)) {
        lifesteal = 0.5;
    }
    pokemon.handleHeal(Math.ceil(lifesteal * damage), pokemon, 0, false);
}, Effect_1.EffectEnum.MEDITATE);
class OnFieldDeathEffect extends effect_1.OnDeathEffect {
    constructor(effect) {
        super(({ pokemon, board }) => {
            var _a, _b;
            const effectsIndex = effects_1.SynergyEffects[Synergy_1.Synergy.FIELD].indexOf(effect);
            const heal = (_a = config_1.FIELD_HEAL_PER_SYNERGY_LEVEL[effectsIndex]) !== null && _a !== void 0 ? _a : 0;
            const speedBoost = (_b = config_1.FIELD_SPEED_BUFF_PER_SYNERGY_LEVEL[effectsIndex]) !== null && _b !== void 0 ? _b : 0;
            pokemon.simulation.room.clock.setTimeout(() => {
                board.forEach((x, y, value) => {
                    if (value &&
                        value.team === pokemon.team &&
                        value.types.has(Synergy_1.Synergy.FIELD)) {
                        value.count.fieldCount++;
                        value.handleHeal(heal, pokemon, 0, false);
                        value.addSpeed(speedBoost, value, 0, false);
                    }
                });
            }, 16);
        }, effect);
    }
}
exports.OnFieldDeathEffect = OnFieldDeathEffect;
class FlyingProtectionEffect extends effect_1.OnDamageReceivedEffect {
    constructor(effect) {
        super(undefined, effect);
        this.priority = -1;
        this.flyingProtection = 0;
        if (effect === Effect_1.EffectEnum.FEATHER_DANCE || effect === Effect_1.EffectEnum.TAILWIND) {
            this.flyingProtection = 1;
        }
        else if (effect === Effect_1.EffectEnum.MAX_AIRSTREAM ||
            effect === Effect_1.EffectEnum.SKYDIVE) {
            this.flyingProtection = 2;
        }
    }
    apply({ pokemon, board }) {
        if (this.flyingProtection > 0 &&
            pokemon.hp > 0 &&
            pokemon.canMove &&
            !pokemon.status.paralysis) {
            const pcHp = pokemon.hp / pokemon.maxHP;
            const shouldProcAt50 = pokemon.effects.has(Effect_1.EffectEnum.MAX_AIRSTREAM) ||
                pokemon.effects.has(Effect_1.EffectEnum.SKYDIVE);
            if ((this.flyingProtection === 1 && pcHp < 0.3) ||
                (shouldProcAt50 && this.flyingProtection === 2 && pcHp < 0.5)) {
                this.flyingProtection--;
                pokemon.flyAway(board);
                const speedBurst = FlyingProtectionEffect.FLY_AWAY_SPEED_BURST;
                pokemon.addSpeed(speedBurst, pokemon, 0, false);
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    pokemon.addSpeed(-speedBurst, pokemon, 0, false);
                }, FlyingProtectionEffect.FLY_AWAY_SPEED_BURST_DURATION));
            }
        }
    }
}
exports.FlyingProtectionEffect = FlyingProtectionEffect;
FlyingProtectionEffect.FLY_AWAY_SPEED_BURST = 20;
FlyingProtectionEffect.FLY_AWAY_SPEED_BURST_DURATION = 2000;
class FightingKnockbackEffect extends effect_1.OnDamageReceivedEffect {
    constructor(effect) {
        super(undefined, effect);
    }
    apply({ pokemon, board, isRetaliation }) {
        if (pokemon.count.fightingBlockCount > 0 &&
            pokemon.count.fightingBlockCount % 10 === 0 &&
            !isRetaliation &&
            (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, pokemon.targetX, pokemon.targetY) === 1) {
            const targetAtContact = board.getEntityOnCell(pokemon.targetX, pokemon.targetY);
            if (!targetAtContact ||
                targetAtContact.range > 1 ||
                (0, distance_1.distanceC)(pokemon.targetX, pokemon.targetY, pokemon.positionX, pokemon.positionY) > 1) {
                return;
            }
            const destination = board.getSafePlaceAwayFrom(pokemon.targetX, pokemon.targetY, targetAtContact.team);
            if (destination &&
                targetAtContact.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
                targetAtContact.shield = 0;
                targetAtContact.handleDamage({
                    damage: pokemon.atk,
                    board,
                    attackType: Game_1.AttackType.PHYSICAL,
                    attacker: pokemon,
                    shouldTargetGainMana: true,
                    isRetaliation: true
                });
                targetAtContact.moveTo(destination.x, destination.y, board, true);
            }
        }
    }
}
exports.FightingKnockbackEffect = FightingKnockbackEffect;
exports.fightingTrainingEffect = new effect_1.OnBenchedDuringFightEffect(({ pokemon, player }) => {
    const pillar = (0, schemas_1.schemaValues)(player.board).find((p) => {
        return ((0, array_1.isIn)(Pokemon_1.Pillars, p.name) &&
            (0, board_1.isOnBench)(p) &&
            p.positionX === pokemon.positionX - 1);
    });
    if (pillar || ((0, board_1.isOnBench)(pokemon) && pokemon.positionX === 0)) {
        pokemon.action = Game_1.PokemonActionState.TRAINING;
    }
});
exports.onFlowerMonDeath = new effect_1.OnDeathEffect(({ pokemon, board }) => {
    if (!pokemon.player)
        return;
    if (!pokemon.isGhostOpponent) {
        pokemon.player.collectMulch(pokemon.stars);
    }
    const potsAvailable = (0, flower_pots_1.getFlowerPotsUnlocked)(pokemon.player);
    let nextPot;
    if (pokemon.team === Game_1.Team.RED_TEAM) {
        nextPot = potsAvailable[pokemon.simulation.redFlowerSpawn];
        pokemon.simulation.redFlowerSpawn++;
    }
    else {
        nextPot = potsAvailable[pokemon.simulation.blueFlowerSpawn];
        pokemon.simulation.blueFlowerSpawn++;
    }
    if (nextPot) {
        const spawnSpot = board.getFarthestTargetCoordinateAvailablePlace(pokemon, true);
        if (spawnSpot) {
            const flowerToSpawn = pokemon.player.flowerPots.find((p) => flower_pots_1.FlowerMonByPot[nextPot].includes(p.name));
            if (!flowerToSpawn) {
                return console.error("No flower found to spawn for pot ", nextPot);
            }
            const entity = pokemon.simulation.addPokemon(flowerToSpawn, spawnSpot.x, spawnSpot.y, pokemon.team, true);
            entity.action = Game_1.PokemonActionState.BLOSSOM;
            entity.cooldown = 1000;
            pokemon.player.pokemonsPlayed.add(flowerToSpawn.name);
        }
    }
});
exports.overgrowEffect = new effect_1.OnDamageReceivedEffect(({ pokemon }) => {
    if (pokemon.hp > 0 && pokemon.hp < 0.3 * pokemon.maxHP) {
        pokemon.addAbilityPower(50, pokemon, 0, false);
        pokemon.effectsSet.delete(exports.overgrowEffect);
    }
});
exports.wildBerserkEffect = new effect_1.OnDamageReceivedEffect(({ pokemon }) => {
    if (pokemon.hp > 0 && pokemon.hp < 0.3 * pokemon.maxHP) {
        pokemon.addSpeed(40, pokemon, 0, false);
        pokemon.addAttack(Math.ceil(0.4 * pokemon.baseAtk), pokemon, 0, false);
        pokemon.addShield(30, pokemon, 0, false);
        pokemon.effectsSet.delete(exports.wildBerserkEffect);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.addSpeed(-40, pokemon, 0, false);
            pokemon.addAttack(-Math.ceil(0.4 * pokemon.baseAtk), pokemon, 0, false);
        }, 3000));
    }
});
exports.normalShieldEffect = new effect_1.OnSimulationStartEffect(({ entity, simulation }) => {
    let shieldBonus = 0;
    if (entity.effects.has(Effect_1.EffectEnum.STAMINA)) {
        shieldBonus = 15;
    }
    if (entity.effects.has(Effect_1.EffectEnum.STRENGTH)) {
        shieldBonus += 20;
    }
    if (entity.effects.has(Effect_1.EffectEnum.ENDURE)) {
        shieldBonus += 25;
    }
    if (entity.effects.has(Effect_1.EffectEnum.PURE_POWER)) {
        shieldBonus += 30;
        if ((0, schemas_1.schemaValues)(entity.items).some((item) => Item_1.Scarves.includes(item))) {
            entity.addAttack(Math.round(0.3 * entity.baseAtk), entity, 0, false);
            entity.addAbilityPower(30, entity, 0, false);
        }
    }
    if (shieldBonus >= 0) {
        entity.addShield(shieldBonus, entity, 0, false);
        const cells = simulation.board.getAdjacentCells(entity.positionX, entity.positionY);
        cells.forEach((cell) => {
            if (cell.value && entity.team == cell.value.team) {
                cell.value.addShield(shieldBonus, entity, 0, false);
            }
        });
    }
});
function applyWandEffects(pokemon, target, attackDamage, crit) {
    var _a, _b;
    const board = pokemon.simulation.board;
    const wands = (_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.items.filter((item) => (0, array_1.isIn)(Item_1.Wands, item))) !== null && _b !== void 0 ? _b : [];
    let specialDamageFactor = 0;
    for (const wand of wands) {
        specialDamageFactor += 0.2;
        switch (wand) {
            case Item_1.Item.CONFUSE_WAND: {
                if ((0, random_1.chance)(0.05, pokemon)) {
                    target.status.triggerConfusion(2000, target, pokemon);
                    target.addSpecialDefense(-3, pokemon, 0, false);
                }
                break;
            }
            case Item_1.Item.PETRIFY_WAND: {
                if ((0, random_1.chance)(0.05, pokemon)) {
                    target.status.triggerLocked(2000, target);
                    target.addDefense(-3, pokemon, 0, false);
                }
                break;
            }
            case Item_1.Item.SLOW_WAND: {
                if ((0, random_1.chance)(0.05, pokemon)) {
                    target.status.triggerParalysis(2000, target, pokemon);
                    target.addSpeed(-10, pokemon, 0, false);
                }
                break;
            }
            case Item_1.Item.SLUMBER_WAND: {
                if ((0, random_1.chance)(0.05, pokemon)) {
                    target.status.triggerSleep(2000, target);
                    target.addAttack(-3, pokemon, 0, false);
                }
                break;
            }
            case Item_1.Item.BLAST_WAND: {
                if (crit) {
                    specialDamageFactor += 0.2;
                    pokemon.broadcastAbility({ skill: "PUFF_PINK" });
                }
                break;
            }
            case Item_1.Item.SPIRIT_WAND: {
                specialDamageFactor += pokemon.count.ult * 0.05;
                if ((0, random_1.chance)(0.2, pokemon)) {
                    pokemon.addPP(5, pokemon, 0, false);
                }
                break;
            }
            case Item_1.Item.GUIDING_WAND: {
                if ((0, random_1.chance)(0.5, pokemon)) {
                    const lowestHpAdjacentEnemy = board
                        .getAdjacentCells(target.positionX, target.positionY)
                        .filter((cell) => cell.value && cell.value.team !== pokemon.team)
                        .map((cell) => cell.value)
                        .reduce((lowest, current) => current.hp / current.maxHP < lowest.hp / lowest.maxHP
                        ? current
                        : lowest, target);
                    target = lowestHpAdjacentEnemy || target;
                    if (lowestHpAdjacentEnemy) {
                        pokemon.broadcastAbility({
                            skill: "FAIRY_HIT",
                            targetX: lowestHpAdjacentEnemy.positionX,
                            targetY: lowestHpAdjacentEnemy.positionY
                        });
                    }
                }
                break;
            }
            case Item_1.Item.SURROUND_WAND: {
                const adjacentEnemies = board
                    .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                    .filter((cell) => cell.value && cell.value.team !== pokemon.team);
                specialDamageFactor += 0.1 * adjacentEnemies.length;
                break;
            }
            case Item_1.Item.TWO_EDGED_WAND: {
                specialDamageFactor += 0.2;
                break;
            }
        }
    }
    const specialDamage = specialDamageFactor * attackDamage;
    let { takenDamage, death } = target.handleSpecialDamage(specialDamage, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
    for (const wand of wands) {
        switch (wand) {
            case Item_1.Item.HP_SWAP_WAND: {
                if ((0, random_1.chance)(0.2, pokemon)) {
                    target.addMaxHP(-Math.floor(specialDamage), pokemon, 0, false);
                    pokemon.addMaxHP(Math.floor(specialDamage), pokemon, 0, false);
                }
                break;
            }
            case Item_1.Item.SURROUND_WAND: {
                if ((0, random_1.chance)(0.1, pokemon)) {
                    const adjacentEnemies = board
                        .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                        .filter((cell) => cell.value &&
                        cell.value.team !== pokemon.team &&
                        cell.value.id !== target.id)
                        .map((cell) => cell.value);
                    pokemon.broadcastAbility({ skill: "FAIRY_CRIT" });
                    adjacentEnemies
                        .filter((e) => e.id !== target.id)
                        .forEach((enemy) => {
                        const { takenDamage: additionalDamage, death: adjacentDeath } = enemy.handleSpecialDamage(specialDamage, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
                        takenDamage += additionalDamage;
                        if (adjacentDeath)
                            death = true;
                    });
                }
                break;
            }
            case Item_1.Item.TWO_EDGED_WAND: {
                if (!(0, random_1.chance)(0.8, pokemon) &&
                    pokemon.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
                    const selfDamage = specialDamage;
                    pokemon.handleSpecialDamage(selfDamage, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
                }
                break;
            }
            case Item_1.Item.WARP_WAND: {
                if ((0, random_1.chance)(0.05, pokemon) && target.hp > 0) {
                    const teleportationCell = board.getTeleportationCell(target.positionX, target.positionY, target.team);
                    if (teleportationCell) {
                        pokemon.broadcastAbility({
                            skill: "WARP_WAND",
                            targetX: target.positionX,
                            targetY: target.positionY
                        });
                        pokemon.broadcastAbility({
                            skill: "WARP_WAND",
                            targetX: target.positionX,
                            targetY: target.positionY
                        });
                        target.moveTo(teleportationCell.x, teleportationCell.y, board, true);
                    }
                }
                break;
            }
            case Item_1.Item.SWITCHER_WAND: {
                if ((0, random_1.chance)(0.05, pokemon) && target.hp > 0) {
                    const farthestTarget = pokemon.state.getFarthestTarget(pokemon, board);
                    if (farthestTarget) {
                        pokemon.broadcastAbility({
                            skill: "WARP_WAND",
                            targetX: target.positionX,
                            targetY: target.positionY
                        });
                        pokemon.broadcastAbility({
                            skill: "WARP_WAND",
                            targetX: farthestTarget.positionX,
                            targetY: farthestTarget.positionY
                        });
                        target.moveTo(farthestTarget.positionX, farthestTarget.positionY, board, true);
                    }
                }
                break;
            }
            case Item_1.Item.WHIRLWIND_WAND: {
                if ((0, random_1.chance)(0.05, pokemon)) {
                    pokemon.broadcastAbility({ skill: "WHIRLWIND_WAND" });
                    (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
                        if (cell.value && cell.value.team !== pokemon.team) {
                            const freeCellInTheBack = board.getSafePlaceAwayFrom(cell.value.positionX, cell.value.positionY, cell.value.team, 3);
                            if (freeCellInTheBack) {
                                cell.value.moveTo(freeCellInTheBack.x, freeCellInTheBack.y, board, true);
                            }
                        }
                    });
                }
                break;
            }
            case Item_1.Item.TUNNEL_WAND: {
                if ((0, random_1.chance)(0.05, pokemon)) {
                    pokemon.broadcastAbility({ skill: "FAIRY_TUNNEL" });
                    (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
                        if (cell.value != null &&
                            cell.value.team !== pokemon.team &&
                            cell.value.id !== target.id) {
                            const { takenDamage: tunnelTakenDamage, death: tunnelDeath } = cell.value.handleSpecialDamage(specialDamage, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
                            takenDamage += tunnelTakenDamage;
                            if (tunnelDeath)
                                death = true;
                        }
                    });
                }
                break;
            }
        }
    }
    return { takenDamage, death };
}
exports.pounceWandEffect = new effect_1.OnAttackReceivedEffect(({ pokemon, board, totalDamage, attacker, crit }) => {
    if (pokemon.fairySplashCooldown === 0 &&
        attacker &&
        (crit || (0, random_1.chance)(0.1, pokemon))) {
        const shockDamageFactor = 0.3;
        const shockDamage = (0, number_1.min)(1)(Math.round(shockDamageFactor * totalDamage));
        pokemon.count.fairyCritCount++;
        pokemon.fairySplashCooldown = 250;
        const distance = (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, attacker.positionX, attacker.positionY);
        if (distance <= 1) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .forEach((cell) => {
                if (cell.value &&
                    cell.value.team !== pokemon.team &&
                    cell.value.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
                    cell.value.handleDamage({
                        damage: shockDamage,
                        board,
                        attackType: Game_1.AttackType.SPECIAL,
                        attacker: pokemon,
                        isRetaliation: true,
                        shouldTargetGainMana: true
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=synergies.js.map