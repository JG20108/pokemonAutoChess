"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SweetScentStrategy = void 0;
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class SweetScentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 3, false);
        const spDefLoss = (_a = [4, 6, 8, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        const speedLoss = (_b = [10, 12, 15, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20;
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                if ((0, random_1.chance)(0.3, pokemon)) {
                    cell.value.status.triggerCharm(1000, cell.value, pokemon, false);
                }
                cell.value.addSpecialDefense(-spDefLoss, pokemon, 1, crit);
                cell.value.addSpeed(-speedLoss, pokemon, 1, crit);
                cell.value.addDodgeChance(-cell.value.dodge, pokemon, 0, false);
            }
        });
    }
}
exports.SweetScentStrategy = SweetScentStrategy;
//# sourceMappingURL=sweet-scent.js.map