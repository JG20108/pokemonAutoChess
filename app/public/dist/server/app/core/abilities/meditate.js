"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meditateStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class MeditateStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const buff = 1;
        pokemon.addAttack(buff * pokemon.baseAtk, pokemon, 1, crit);
    }
}
exports.meditateStrategy = new MeditateStrategy();
//# sourceMappingURL=meditate.js.map