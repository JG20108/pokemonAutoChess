"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmicPowerSunStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class CosmicPowerSunStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const atkBuffMultiplier = (_a = [0.25, 0.25, 0.25, 0.5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.5;
        board.forEach((x, y, ally) => {
            if (ally && ally.id !== pokemon.id && ally.team === pokemon.team) {
                ally.addAttack(atkBuffMultiplier * ally.baseAtk, pokemon, 1, crit);
            }
        });
    }
}
exports.CosmicPowerSunStrategy = CosmicPowerSunStrategy;
//# sourceMappingURL=cosmic-power-sun.js.map