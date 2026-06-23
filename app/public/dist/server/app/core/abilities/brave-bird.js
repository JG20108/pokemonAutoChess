"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BraveBirdStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BraveBirdStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 90, 180][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 180;
        const flyAwayCell = pokemon.flyAway(board, false);
        if (flyAwayCell) {
            const adjacentEmptyCells = board
                .getAdjacentCells(flyAwayCell.x, flyAwayCell.y)
                .filter((v) => v.value === undefined);
            if (adjacentEmptyCells.length > 0) {
                const cell = adjacentEmptyCells[0];
                target.moveTo(cell.x, cell.y, board, true);
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.BraveBirdStrategy = BraveBirdStrategy;
//# sourceMappingURL=brave-bird.js.map