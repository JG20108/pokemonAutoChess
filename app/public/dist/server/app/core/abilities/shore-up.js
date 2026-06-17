"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoreUpStrategy = void 0;
const Weather_1 = require("../../types/enum/Weather");
const ability_strategy_1 = require("./ability-strategy");
class ShoreUpStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let healFactor = (_a = [0.2, 0.25, 0.4, 0.8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.8;
        if (pokemon.simulation.weather === Weather_1.Weather.SANDSTORM) {
            healFactor += 0.1;
        }
        pokemon.handleHeal(healFactor * pokemon.maxHP, pokemon, 1, crit);
    }
}
exports.ShoreUpStrategy = ShoreUpStrategy;
//# sourceMappingURL=shore-up.js.map