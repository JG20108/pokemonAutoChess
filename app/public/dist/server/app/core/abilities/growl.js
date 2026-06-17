"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowlStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class GrowlStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const atkDebuff = (_a = [3, 5, 7, 14][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 14;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerFlinch(3000, cell.value, pokemon);
                cell.value.addAttack(-atkDebuff, pokemon, 1, crit);
            }
        });
    }
}
exports.GrowlStrategy = GrowlStrategy;
//# sourceMappingURL=growl.js.map