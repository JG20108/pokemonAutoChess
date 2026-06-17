"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolloutStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RolloutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const multiplier = 2;
        const defenseBoost = (_a = [2, 5, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        pokemon.addDefense(defenseBoost, pokemon, 1, crit);
        target.handleSpecialDamage(multiplier * pokemon.def, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RolloutStrategy = RolloutStrategy;
//# sourceMappingURL=rollout.js.map