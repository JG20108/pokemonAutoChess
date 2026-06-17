"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurifyStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class PurifyStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team === pokemon.team) {
                cell.value.status.clearNegativeStatus(cell.value, pokemon);
            }
        });
        const heal = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        pokemon.handleHeal(heal, pokemon, 1, crit);
    }
}
exports.PurifyStrategy = PurifyStrategy;
//# sourceMappingURL=purify.js.map