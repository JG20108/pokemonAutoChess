"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreechStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ScreechStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const debuff = (_a = [-2, -4, -8, -16][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : -16;
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2, false);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.addDefense(debuff, pokemon, 1, crit);
                pokemon.broadcastAbility({ targetX: cell.x, targetY: cell.y });
            }
        });
    }
}
exports.ScreechStrategy = ScreechStrategy;
//# sourceMappingURL=screech.js.map