"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailwindStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class TailwindStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [5, 10, 15, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addSpeed(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.TailwindStrategy = TailwindStrategy;
//# sourceMappingURL=tailwind.js.map