"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuillotineStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class GuillotineStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = pokemon.atk * ((_a = [3, 3, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6);
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (death) {
            pokemon.addPP(pokemon.maxPP * 0.5, pokemon, 0, false);
        }
    }
}
exports.GuillotineStrategy = GuillotineStrategy;
//# sourceMappingURL=guillotine.js.map