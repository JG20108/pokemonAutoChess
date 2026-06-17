"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParabolicChargeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ParabolicChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [25, 50, 75, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const overHeal = Math.max(0, heal + pokemon.hp - pokemon.maxHP);
        pokemon.handleHeal(heal, pokemon, 0, false);
        target.handleSpecialDamage(((_b = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 200) + overHeal, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ParabolicChargeStrategy = ParabolicChargeStrategy;
//# sourceMappingURL=parabolic-charge.js.map