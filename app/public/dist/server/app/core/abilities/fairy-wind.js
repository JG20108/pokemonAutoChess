"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairyWindStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class FairyWindStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const ppGain = (_a = [5, 10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team === tg.team && tg.id !== pokemon.id) {
                tg.addPP(ppGain, pokemon, 0.5, crit);
            }
        });
    }
}
exports.FairyWindStrategy = FairyWindStrategy;
//# sourceMappingURL=fairy-wind.js.map