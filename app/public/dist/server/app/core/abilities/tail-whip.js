"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailWhipStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class TailWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const defLoss = -((_a = [20, 30, 40, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50) / 100 * target.def;
        target.addDefense(defLoss, pokemon, 1, crit);
    }
}
exports.TailWhipStrategy = TailWhipStrategy;
//# sourceMappingURL=tail-whip.js.map