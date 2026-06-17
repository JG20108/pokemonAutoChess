"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoarOfTimeStrategy = void 0;
const unit_score_1 = require("../unit-score");
const ability_strategy_1 = require("./ability-strategy");
class RoarOfTimeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const speedBuff = (_a = [10, 15, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const candidates = board.cells.filter((cell) => cell && cell.team === pokemon.team && !cell.status.resurrection);
        const strongest = (0, unit_score_1.getStrongestUnit)(candidates);
        if (strongest) {
            strongest.status.addResurrection(strongest);
            strongest.addSpeed(speedBuff, pokemon, 1, crit);
        }
    }
}
exports.RoarOfTimeStrategy = RoarOfTimeStrategy;
//# sourceMappingURL=roar-of-time.js.map