"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterSpringEffect = exports.SoundCryEffect = exports.FireHitEffect = exports.DarkHarvestEffect = exports.DrySkinEffect = exports.SynchroEffect = exports.ClearWingEffect = exports.GrowGroundEffect = exports.MonsterKillEffect = exports.OnAbilityCastEffect = exports.OnAttackEffect = exports.OnHitEffect = exports.PeriodicEffect = exports.OnKillEffect = exports.OnItemRemovedEffect = exports.OnItemGainedEffect = exports.OnSpawnEffect = exports.Effect = void 0;
const Item_1 = require("../types/enum/Item");
const Effect_1 = require("../types/enum/Effect");
const Synergy_1 = require("../types/enum/Synergy");
const Passive_1 = require("../types/enum/Passive");
const Ability_1 = require("../types/enum/Ability");
const effects_1 = require("../models/effects");
const Game_1 = require("../types/enum/Game");
const random_1 = require("../utils/random");
class Effect {
    apply(entity, ...others) { }
    constructor(effect, origin) {
        if (effect) {
            this.apply = effect;
        }
        this.origin = origin;
    }
}
exports.Effect = Effect;
class OnSpawnEffect extends Effect {
}
exports.OnSpawnEffect = OnSpawnEffect;
class OnItemGainedEffect extends Effect {
}
exports.OnItemGainedEffect = OnItemGainedEffect;
class OnItemRemovedEffect extends Effect {
}
exports.OnItemRemovedEffect = OnItemRemovedEffect;
class OnKillEffect extends Effect {
    apply(entity, target, board) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnKillEffect = OnKillEffect;
class PeriodicEffect extends Effect {
    constructor(effect, origin, intervalMs) {
        super(effect, origin);
        this.intervalMs = intervalMs;
        this.timer = intervalMs;
        this.count = 0;
    }
    update(dt, entity) {
        this.timer -= dt;
        if (this.timer <= 0) {
            this.count++;
            this.apply(entity);
            this.timer = this.intervalMs;
        }
    }
}
exports.PeriodicEffect = PeriodicEffect;
class OnHitEffect extends Effect {
    apply(entity, target, board) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnHitEffect = OnHitEffect;
class OnAttackEffect extends Effect {
    apply(entity, target, board) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnAttackEffect = OnAttackEffect;
class OnAbilityCastEffect extends Effect {
    apply(pokemon, state, board, target, crit) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnAbilityCastEffect = OnAbilityCastEffect;
class MonsterKillEffect extends OnKillEffect {
    constructor(effect) {
        super(undefined, effect);
        this.hpBoosted = 0;
        this.count = 0;
        this.synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.MONSTER].indexOf(effect);
    }
    apply(pokemon, target, board) {
        var _a, _b, _c;
        const attackBoost = (_a = [3, 6, 10, 10][this.synergyLevel]) !== null && _a !== void 0 ? _a : 10;
        const apBoost = (_b = [10, 20, 30, 30][this.synergyLevel]) !== null && _b !== void 0 ? _b : 30;
        const hpGain = (_c = [0.2, 0.4, 0.6, 0.6][this.synergyLevel]) !== null && _c !== void 0 ? _c : 0.6;
        const lifeBoost = hpGain * target.hp;
        pokemon.addAttack(attackBoost, pokemon, 0, false);
        pokemon.addAbilityPower(apBoost, pokemon, 0, false);
        pokemon.addMaxHP(lifeBoost, pokemon, 0, false);
        this.hpBoosted += lifeBoost;
        this.count += 1;
    }
}
exports.MonsterKillEffect = MonsterKillEffect;
class GrowGroundEffect extends PeriodicEffect {
    constructor(effect) {
        super((pokemon) => {
            if (this.count > 5) {
                return;
            }
            pokemon.addDefense(this.synergyLevel * 2, pokemon, 0, false);
            pokemon.addSpecialDefense(this.synergyLevel * 2, pokemon, 0, false);
            pokemon.addAttack(this.synergyLevel, pokemon, 0, false);
            pokemon.transferAbility("GROUND_GROW");
            if (pokemon.items.has(Item_1.Item.BIG_NUGGET) &&
                this.count === 5 &&
                pokemon.player) {
                pokemon.player.addMoney(3, true, pokemon);
                pokemon.count.moneyCount += 3;
            }
        }, effect, 3000);
        this.synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.GROUND].indexOf(effect) + 1;
    }
}
exports.GrowGroundEffect = GrowGroundEffect;
class ClearWingEffect extends PeriodicEffect {
    constructor() {
        super((pokemon) => {
            pokemon.addSpeed(2, pokemon, 0, false);
        }, Passive_1.Passive.CLEAR_WING, 1000);
    }
}
exports.ClearWingEffect = ClearWingEffect;
class SynchroEffect extends PeriodicEffect {
    constructor() {
        super((pokemon) => {
            const status = pokemon.status;
            if (status.burn && status.burnOrigin) {
                status.burnOrigin.status.triggerBurn(3000, status.burnOrigin, pokemon);
            }
            if (status.poisonStacks && status.poisonOrigin) {
                status.poisonOrigin.status.triggerPoison(3000, status.poisonOrigin, pokemon);
            }
            if (status.wound && status.woundOrigin) {
                status.woundOrigin.status.triggerWound(3000, status.woundOrigin, pokemon);
            }
            if (status.silence && status.silenceOrigin) {
                status.silenceOrigin.status.triggerSilence(3000, status.silenceOrigin, pokemon);
            }
        }, Passive_1.Passive.SYNCHRO, 3000);
    }
}
exports.SynchroEffect = SynchroEffect;
class DrySkinEffect extends PeriodicEffect {
    constructor() {
        super((pokemon) => {
            pokemon.handleHeal(8, pokemon, 0, false);
        }, Passive_1.Passive.DRY_SKIN, 1000);
    }
}
exports.DrySkinEffect = DrySkinEffect;
class DarkHarvestEffect extends PeriodicEffect {
    constructor(duration, pokemon) {
        super((pokemon) => {
            var _a;
            pokemon.transferAbility(Ability_1.Ability.DARK_HARVEST);
            const board = pokemon.simulation.board;
            const crit = pokemon.items.has(Item_1.Item.REAPER_CLOTH)
                ? (0, random_1.chance)(pokemon.critChance, pokemon)
                : false;
            const darkHarvestDamage = (_a = [5, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
            const healFactor = 0.3;
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                .forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(darkHarvestDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                    pokemon.handleHeal(Math.round(darkHarvestDamage * healFactor), pokemon, 0, false);
                }
            });
            if (this.duration <= 0) {
                pokemon.effectsSet.delete(this);
                pokemon.effects.delete(Effect_1.Effect.DARK_HARVEST);
            }
            else {
                this.duration -= this.intervalMs;
            }
        }, Effect_1.Effect.DARK_HARVEST, 1000);
        this.timer = 0;
        this.duration = duration + this.intervalMs;
        if (pokemon.effects.has(Effect_1.Effect.DARK_HARVEST)) {
            pokemon.effectsSet.delete(this);
            for (const effect of pokemon.effectsSet) {
                if (effect instanceof DarkHarvestEffect) {
                    effect.duration = Math.max(this.duration, effect.duration);
                    effect.timer = this.timer;
                    break;
                }
            }
        }
        else {
            pokemon.effects.add(Effect_1.Effect.DARK_HARVEST);
        }
    }
}
exports.DarkHarvestEffect = DarkHarvestEffect;
class FireHitEffect extends OnAttackEffect {
    constructor(effect) {
        super(undefined, effect);
        this.count = 0;
        this.synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.FIRE].indexOf(effect);
    }
    apply(pokemon, target, board) {
        pokemon.addAttack(this.synergyLevel, pokemon, 0, false);
        this.count += 1;
    }
}
exports.FireHitEffect = FireHitEffect;
class SoundCryEffect extends OnAbilityCastEffect {
    constructor(effect) {
        super(undefined, effect);
        this.count = 0;
        this.synergyLevel = -1;
        if (effect) {
            this.synergyLevel = effects_1.SynergyEffects[Synergy_1.Synergy.SOUND].indexOf(effect);
        }
    }
    apply(pokemon, state, board, target, crit) {
        var _a, _b, _c;
        pokemon.transferAbility(Ability_1.Ability.ECHO);
        const attackBoost = (_a = [2, 1, 1][this.synergyLevel]) !== null && _a !== void 0 ? _a : 0;
        const speedBoost = (_b = [0, 5, 5][this.synergyLevel]) !== null && _b !== void 0 ? _b : 0;
        const manaBoost = (_c = [0, 0, 3][this.synergyLevel]) !== null && _c !== void 0 ? _c : 0;
        const chimecho = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .some((cell) => { var _a; return ((_a = cell.value) === null || _a === void 0 ? void 0 : _a.passive) === Passive_1.Passive.CHIMECHO; });
        const scale = (chimecho ? 2 : 1) * (pokemon.passive === Passive_1.Passive.MEGA_LAUNCHER ? 3 : 1);
        board.cells.forEach((ally) => {
            if ((ally === null || ally === void 0 ? void 0 : ally.team) === pokemon.team) {
                ally.status.sleep = false;
                ally.addAttack(attackBoost * scale, pokemon, 0, false);
                ally.addSpeed(speedBoost * scale, pokemon, 0, false);
                ally.addPP(manaBoost * scale, pokemon, 0, false);
                ally.count.soundCryCount += scale;
            }
        });
    }
}
exports.SoundCryEffect = SoundCryEffect;
class WaterSpringEffect extends OnAbilityCastEffect {
    apply(pokemon) {
        pokemon.simulation.board.forEach((x, y, pkm) => {
            if ((pkm === null || pkm === void 0 ? void 0 : pkm.passive) === Passive_1.Passive.WATER_SPRING && pkm.team !== pokemon.team) {
                pkm.addPP(5, pkm, 0, false);
                pkm.transferAbility(pkm.skill);
            }
        });
    }
}
exports.WaterSpringEffect = WaterSpringEffect;
//# sourceMappingURL=effect.js.map