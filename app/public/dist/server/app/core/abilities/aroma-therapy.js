"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AromatherapyStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class AromatherapyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team === pokemon.team) {
                cell.value.status.clearNegativeStatus(cell.value, pokemon);
                cell.value.handleHeal(heal, pokemon, 1, crit);
            }
        });
    }
}
exports.AromatherapyStrategy = AromatherapyStrategy;
//# sourceMappingURL=aroma-therapy.js.map