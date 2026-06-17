"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackOffStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class SlackOffStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        pokemon.status.clearNegativeStatus(pokemon, pokemon);
        const healFactor = (_a = [0.3, 0.3, 0.3, 0.6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.6;
        pokemon.handleHeal(pokemon.maxHP * healFactor, pokemon, 1, crit);
        pokemon.status.triggerSleep(3000, pokemon);
    }
}
exports.SlackOffStrategy = SlackOffStrategy;
//# sourceMappingURL=slack-off.js.map