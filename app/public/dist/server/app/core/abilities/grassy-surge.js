"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrassySurgeStrategy = void 0;
const Synergy_1 = require("../../types/enum/Synergy");
const ability_strategy_1 = require("./ability-strategy");
class GrassySurgeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [5, 5, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.GRASS)) {
                ally.addAttack(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.GrassySurgeStrategy = GrassySurgeStrategy;
//# sourceMappingURL=grassy-surge.js.map