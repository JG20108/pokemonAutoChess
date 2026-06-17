"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrainPunchStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DrainPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMultiplier = (_a = [2, 2, 3, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        const healMultiplier = 2;
        const result = target.handleSpecialDamage(pokemon.atk * damageMultiplier, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        pokemon.handleHeal(result.takenDamage * healMultiplier, pokemon, 0, false);
    }
}
exports.DrainPunchStrategy = DrainPunchStrategy;
//# sourceMappingURL=drain-punch.js.map