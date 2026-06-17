"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VictoryDanceStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class VictoryDanceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, true);
        pokemon.addAttack(3, pokemon, 1, crit);
        pokemon.addDefense(3, pokemon, 1, crit);
        pokemon.addSpeed(10, pokemon, 1, crit);
    }
}
exports.VictoryDanceStrategy = VictoryDanceStrategy;
//# sourceMappingURL=victory-dance.js.map