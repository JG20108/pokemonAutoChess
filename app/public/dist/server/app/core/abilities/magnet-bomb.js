"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagnetBombStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class MagnetBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const centerDamage = (_b = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 160;
        const lockDuration = 1500;
        target.handleSpecialDamage(centerDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerLocked(lockDuration, target);
        const cells = board.getAdjacentCells(target.positionX, target.positionY, false);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerLocked(lockDuration, cell.value);
            }
        });
        const mappingAttractCell = [
            {
                to: [target.positionX - 1, target.positionY],
                from: [[target.positionX - 2, target.positionY]]
            },
            {
                to: [target.positionX + 1, target.positionY],
                from: [[target.positionX + 2, target.positionY]]
            },
            {
                to: [target.positionX, target.positionY - 1],
                from: [[target.positionX, target.positionY - 2]]
            },
            {
                to: [target.positionX, target.positionY + 1],
                from: [[target.positionX, target.positionY + 2]]
            },
            {
                to: [target.positionX - 1, target.positionY - 1],
                from: [
                    [target.positionX - 2, target.positionY - 1],
                    [target.positionX - 2, target.positionY - 2],
                    [target.positionX - 1, target.positionY - 2]
                ]
            },
            {
                to: [target.positionX + 1, target.positionY - 1],
                from: [
                    [target.positionX + 2, target.positionY - 1],
                    [target.positionX + 2, target.positionY - 2],
                    [target.positionX + 1, target.positionY - 2]
                ]
            },
            {
                to: [target.positionX - 1, target.positionY + 1],
                from: [
                    [target.positionX - 2, target.positionY + 1],
                    [target.positionX - 2, target.positionY + 2],
                    [target.positionX - 1, target.positionY + 2]
                ]
            },
            {
                to: [target.positionX + 1, target.positionY + 1],
                from: [
                    [target.positionX + 2, target.positionY + 1],
                    [target.positionX + 2, target.positionY + 2],
                    [target.positionX + 1, target.positionY + 2]
                ]
            }
        ];
        mappingAttractCell.forEach((cell) => {
            const attractedEnemies = cell.from
                .map(([x, y]) => board.getEntityOnCell(x, y))
                .filter((enemy) => enemy && enemy.team === target.team);
            const [destX, destY] = cell.to;
            if (attractedEnemies.length > 0 &&
                board.getEntityOnCell(destX, destY) === undefined) {
                const attractedEnemy = (0, random_1.pickRandomIn)(attractedEnemies);
                attractedEnemy.moveTo(destX, destY, board, true);
                attractedEnemy.status.triggerLocked(lockDuration, attractedEnemy);
            }
        });
    }
}
exports.MagnetBombStrategy = MagnetBombStrategy;
//# sourceMappingURL=magnet-bomb.js.map