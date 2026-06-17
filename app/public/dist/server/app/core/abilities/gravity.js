"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravityStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class GravityStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const lockDuration = Math.round(((_a = [2000, 2000, 2000, 5000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5000) * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        board.forEach((x, y, unitOnCell) => {
            if (unitOnCell && unitOnCell.team !== pokemon.team) {
                unitOnCell.status.triggerLocked(lockDuration, unitOnCell);
            }
        });
    }
}
exports.GravityStrategy = GravityStrategy;
//# sourceMappingURL=gravity.js.map