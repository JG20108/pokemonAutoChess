"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricSurgeStrategy = void 0;
const Synergy_1 = require("../../types/enum/Synergy");
const ability_strategy_1 = require("./ability-strategy");
class ElectricSurgeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.ELECTRIC)) {
                ally.addSpeed(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.ElectricSurgeStrategy = ElectricSurgeStrategy;
//# sourceMappingURL=electric-surge.js.map