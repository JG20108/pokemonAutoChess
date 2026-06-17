"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsychicSurgeStrategy = void 0;
const Synergy_1 = require("../../types/enum/Synergy");
const ability_strategy_1 = require("./ability-strategy");
class PsychicSurgeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        board.forEach((x, y, ally) => {
            var _a;
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.PSYCHIC)) {
                ally.addShield((_a = [20, 25, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60, pokemon, 1, crit);
            }
        });
    }
}
exports.PsychicSurgeStrategy = PsychicSurgeStrategy;
//# sourceMappingURL=psychic-surge.js.map