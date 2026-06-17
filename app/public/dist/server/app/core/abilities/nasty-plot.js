"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NastyPlotStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class NastyPlotStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [4, 7, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        pokemon.addAttack(buff, pokemon, 1, crit);
        pokemon.resetCooldown(250);
    }
}
exports.NastyPlotStrategy = NastyPlotStrategy;
//# sourceMappingURL=nasty-plot.js.map