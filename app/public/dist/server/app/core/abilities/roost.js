"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoostStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class RoostStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shield = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        pokemon.flyAway(board, false);
        pokemon.status.triggerSleep(1000, pokemon);
        pokemon.addShield(shield, pokemon, 1, crit);
    }
}
exports.RoostStrategy = RoostStrategy;
//# sourceMappingURL=roost.js.map