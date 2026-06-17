"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LungeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class LungeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const enemiesSortedByAttack = board.cells
            .filter((enemy) => enemy && enemy.team !== pokemon.team)
            .sort((a, b) => b.atk - a.atk);
        let cellToGo;
        let enemy;
        while (cellToGo == null && enemiesSortedByAttack.length > 0) {
            enemy = enemiesSortedByAttack.shift();
            if (enemy) {
                cellToGo = board
                    .getAdjacentCells(enemy.positionX, enemy.positionY)
                    .find((cell) => cell.value == null);
            }
        }
        if (cellToGo) {
            pokemon.moveTo(cellToGo.x, cellToGo.y, board, false);
            if (enemy) {
                enemy.addAttack(-((_a = [3, 4, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10), pokemon, 1, crit);
                enemy.handleSpecialDamage((_b = [30, 40, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        }
    }
}
exports.LungeStrategy = LungeStrategy;
//# sourceMappingURL=lunge.js.map