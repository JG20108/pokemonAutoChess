"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RapidSpinStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RapidSpinStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const buffAmount = Math.round(0.5 * pokemon.atk);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addDefense(buffAmount, pokemon, 1, crit);
        pokemon.addSpecialDefense(buffAmount, pokemon, 1, crit);
    }
}
exports.RapidSpinStrategy = RapidSpinStrategy;
//# sourceMappingURL=rapid-spin.js.map