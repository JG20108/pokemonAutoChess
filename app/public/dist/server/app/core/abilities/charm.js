"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharmStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class CharmStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const attackReduce = (_a = [2, 3, 4, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
        target.addAttack(-attackReduce, pokemon, 1, crit);
        target.status.triggerCharm(3000, target, pokemon, false);
    }
}
exports.CharmStrategy = CharmStrategy;
//# sourceMappingURL=charm.js.map