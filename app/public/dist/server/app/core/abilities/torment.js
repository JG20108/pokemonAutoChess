"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TormentStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class TormentStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const boost = (_a = [20, 35, 50, 65][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 65;
        pokemon.addSpeed(boost, pokemon, 1, crit);
        pokemon.resetCooldown(500);
    }
}
exports.TormentStrategy = TormentStrategy;
//# sourceMappingURL=torment.js.map