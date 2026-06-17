"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JawLockStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class JawLockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const baseDamage = Math.round(pokemon.atk * 1.25);
        const bonusDamage = (_a = [10, 15, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const totalDamage = baseDamage + bonusDamage;
        const heal = (_b = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 200;
        const alreadyBitten = target.effects.has(Effect_1.EffectEnum.JAW_LOCK);
        target.status.triggerLocked(3000, target);
        target.effects.add(Effect_1.EffectEnum.JAW_LOCK);
        target.handleSpecialDamage(totalDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (alreadyBitten) {
            pokemon.handleHeal(heal, pokemon, 1, crit);
        }
    }
}
exports.JawLockStrategy = JawLockStrategy;
//# sourceMappingURL=jaw-lock.js.map