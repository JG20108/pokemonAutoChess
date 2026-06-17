"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HypnosisStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class HypnosisStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        const farthestTarget = (_a = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, board, farthestTarget, crit);
        if (farthestTarget) {
            const factor = 0.5;
            const duration = Math.round(((_b = [2000, 3500, 6000, 12000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2000) *
                (1 + (pokemon.ap / 100) * factor) *
                (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
            farthestTarget.status.triggerSleep(duration, farthestTarget);
        }
    }
}
exports.HypnosisStrategy = HypnosisStrategy;
//# sourceMappingURL=hypnosis.js.map