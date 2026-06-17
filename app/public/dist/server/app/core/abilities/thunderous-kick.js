"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThunderousKickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class ThunderousKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const defenseDebuff = 10;
        let isBlocked = !target.canBeMoved;
        let farthestReached = {
            x: target.positionX,
            y: target.positionY
        };
        const enemiesHit = new Set();
        enemiesHit.add(target);
        (0, board_1.effectInOrientation)(board, pokemon, target, (cell) => {
            if (isBlocked)
                return;
            if (cell.value &&
                cell.value.team !== pokemon.team &&
                cell.value.id !== target.id) {
                enemiesHit.add(cell.value);
                if (board.isOnBoard(cell.x - 1, cell.y) &&
                    board.getEntityOnCell(cell.x - 1, cell.y) === undefined &&
                    cell.value.canBeMoved) {
                    cell.value.moveTo(cell.x - 1, cell.y, board, true);
                    cell.value.cooldown = 500;
                }
                else if (board.isOnBoard(cell.x + 1, cell.y) &&
                    board.getEntityOnCell(cell.x + 1, cell.y) === undefined &&
                    cell.value.canBeMoved) {
                    cell.value.moveTo(cell.x + 1, cell.y, board, true);
                    cell.value.cooldown = 500;
                }
                else {
                    isBlocked = true;
                }
            }
            if (!isBlocked) {
                farthestReached = cell;
            }
        });
        if (farthestReached &&
            (farthestReached.x !== target.positionX ||
                farthestReached.y !== target.positionY)) {
            board.swapCells(target.positionX, target.positionY, farthestReached.x, farthestReached.y);
        }
        enemiesHit.forEach((enemy) => {
            enemy.status.triggerFlinch(4000, pokemon);
            enemy.addDefense(-defenseDebuff, pokemon, 1, crit);
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        });
    }
}
exports.ThunderousKickStrategy = ThunderousKickStrategy;
//# sourceMappingURL=thunderous-kick.js.map