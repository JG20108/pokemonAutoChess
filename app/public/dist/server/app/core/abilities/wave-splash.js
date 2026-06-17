"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaveSplashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class WaveSplashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shieldPercent = (_a = [0.2, 0.2, 0.2, 0.5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.5;
        const shieldAmount = Math.round(pokemon.maxHP * shieldPercent);
        pokemon.addShield(shieldAmount, pokemon, 1, crit);
        const damage = Math.round(pokemon.maxHP * shieldPercent);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.WaveSplashStrategy = WaveSplashStrategy;
//# sourceMappingURL=wave-splash.js.map