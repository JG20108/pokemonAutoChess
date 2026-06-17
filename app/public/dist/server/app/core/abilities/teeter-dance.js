"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeeterDanceStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class TeeterDanceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        pokemon.addSpeed(20, pokemon, 1, crit);
        const confusionDuration = ((_a = [3, 3, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6) * 1000;
        board.cells
            .filter((v) => v !== undefined)
            .forEach((v) => v && v.status.triggerConfusion(confusionDuration, v, pokemon));
    }
}
exports.TeeterDanceStrategy = TeeterDanceStrategy;
//# sourceMappingURL=teeter-dance.js.map