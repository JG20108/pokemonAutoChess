"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PummelingPaybackStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PummelingPaybackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const healAmount = (_a = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const baseDamage = (_b = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 120;
        const adBonus = 1.25 * pokemon.atk;
        const totalDamage = baseDamage + adBonus;
        target.handleSpecialDamage(totalDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(healAmount, pokemon, 1, crit);
    }
}
exports.PummelingPaybackStrategy = PummelingPaybackStrategy;
//# sourceMappingURL=pummeling-payback.js.map