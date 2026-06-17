"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgilityStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class AgilityStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const boost = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.addSpeed(boost, pokemon, 1, crit);
    }
}
exports.AgilityStrategy = AgilityStrategy;
//# sourceMappingURL=agility.js.map