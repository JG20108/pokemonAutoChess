"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrunchStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CrunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 160, 320][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 320;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        if (death) {
            pokemon.handleHeal(Math.ceil(0.5 * target.maxHP), pokemon, 0, false);
        }
    }
}
exports.CrunchStrategy = CrunchStrategy;
//# sourceMappingURL=crunch.js.map