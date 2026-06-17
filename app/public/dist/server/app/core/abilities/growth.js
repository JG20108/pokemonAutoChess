"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowthStrategy = void 0;
const Weather_1 = require("../../types/enum/Weather");
const ability_strategy_1 = require("./ability-strategy");
class GrowthStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        let attackBuff = (_a = [3, 5, 7, 14][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 14;
        let hpBuff = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        if (pokemon.simulation.weather === Weather_1.Weather.ZENITH) {
            attackBuff *= 2;
            hpBuff *= 2;
        }
        pokemon.addAttack(attackBuff, pokemon, 1, crit);
        pokemon.addMaxHP(hpBuff, pokemon, 1, crit);
        pokemon.resetCooldown(250);
    }
}
exports.GrowthStrategy = GrowthStrategy;
//# sourceMappingURL=growth.js.map