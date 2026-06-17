"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardenStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class HardenStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const defGain = (_a = [4, 8, 12, 24][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 24;
        pokemon.addDefense(defGain, pokemon, 1, crit);
    }
}
exports.HardenStrategy = HardenStrategy;
//# sourceMappingURL=harden.js.map