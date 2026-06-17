"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunarBlessingStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class LunarBlessingStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        board.forEach((x, y, ally) => {
            var _a;
            if (ally && pokemon.team == ally.team && ally.hp < ally.maxHP) {
                ally.handleHeal(((_a = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50) / 100 * ally.maxHP, pokemon, 1, crit);
                ally.status.clearNegativeStatus(ally, pokemon);
            }
        });
    }
}
exports.LunarBlessingStrategy = LunarBlessingStrategy;
//# sourceMappingURL=lunar-blessing.js.map