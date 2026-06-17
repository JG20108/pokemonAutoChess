"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HappyHourStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class HappyHourStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [2, 4, 7, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addAttack(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.HappyHourStrategy = HappyHourStrategy;
//# sourceMappingURL=happy-hour.js.map