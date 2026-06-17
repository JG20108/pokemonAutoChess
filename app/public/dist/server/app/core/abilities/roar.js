"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoarStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class RoarStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        let farthestEmptyCell = null;
        (0, board_1.effectInOrientation)(board, pokemon, target, (cell) => {
            if (cell.value != null && target.id !== cell.value.id) {
                if (cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                board.swapCells(target.positionX, target.positionY, cell.value.positionX, cell.value.positionY);
            }
            if (!cell.value) {
                farthestEmptyCell = cell;
            }
        });
        if (farthestEmptyCell) {
            const { x, y } = farthestEmptyCell;
            board.swapCells(target.positionX, target.positionY, x, y);
        }
    }
}
exports.RoarStrategy = RoarStrategy;
//# sourceMappingURL=roar.js.map