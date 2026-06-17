"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BideStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const effect_1 = require("../effects/effect");
const ability_strategy_1 = require("./ability-strategy");
class BideEffect extends effect_1.PeriodicEffect {
    constructor(pokemon, duration, board, crit) {
        super((pokemon) => {
            if (this.duration <= 0) {
                this.procDamage(pokemon, board, crit);
                pokemon.effectsSet.delete(this);
                pokemon.effectsSet.delete(damageMonitor);
                pokemon.effects.delete(Effect_1.EffectEnum.NO_PP_GAIN);
            }
            else {
                this.duration -= this.intervalMs;
            }
        }, Ability_1.Ability.BIDE, 1000);
        this.damageReceived = 0;
        this.duration = duration;
        const damageMonitor = new effect_1.OnDamageReceivedEffect(({ damage }) => {
            this.damageReceived += damage;
        }, Ability_1.Ability.BIDE);
        pokemon.effectsSet.add(damageMonitor);
        pokemon.effects.add(Effect_1.EffectEnum.NO_PP_GAIN);
    }
    procDamage(pokemon, board, crit) {
        var _a;
        pokemon.broadcastAbility({ skill: Ability_1.Ability.BIDE });
        const damageFactor = (_a = [1.0, 1.5, 2.0, 4.0][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4.0;
        const damage = damageFactor * this.damageReceived;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
class BideStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        pokemon.effectsSet.add(new BideEffect(pokemon, 3000, board, crit));
    }
}
exports.BideStrategy = BideStrategy;
//# sourceMappingURL=bide.js.map