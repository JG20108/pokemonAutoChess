"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistySurgeStrategy = void 0;
const Synergy_1 = require("../../types/enum/Synergy");
const ability_strategy_1 = require("./ability-strategy");
class MistySurgeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const ppGain = (_a = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const hpGain = (_b = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.FAIRY)) {
                ally.addPP(ppGain, pokemon, 1, crit);
                ally.handleHeal(hpGain, pokemon, 1, crit);
            }
        });
    }
}
exports.MistySurgeStrategy = MistySurgeStrategy;
//# sourceMappingURL=misty-surge.js.map