"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmicPowerMoonStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class CosmicPowerMoonStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const apGain = (_a = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        board.forEach((x, y, ally) => {
            if (ally && ally.id !== pokemon.id && ally.team === pokemon.team) {
                ally.addAbilityPower(apGain, pokemon, 1, crit);
            }
        });
    }
}
exports.CosmicPowerMoonStrategy = CosmicPowerMoonStrategy;
//# sourceMappingURL=cosmic-power-moon.js.map