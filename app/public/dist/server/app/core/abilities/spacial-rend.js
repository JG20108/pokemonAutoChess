"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpacialRendStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SpacialRendStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const rowToTarget = target.positionY;
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team && p.canBeMoved);
        const n = enemies.length;
        for (let i = 0; i < Math.floor(n / 2); i++) {
            enemies[i].toMovingState();
            enemies[n - 1 - i].toMovingState();
            board.swapCells(enemies[i].positionX, enemies[i].positionY, enemies[n - 1 - i].positionX, enemies[n - 1 - i].positionY);
        }
        for (let x = 0; x < config_1.BOARD_WIDTH; x++) {
            const targetHit = board.getEntityOnCell(x, rowToTarget);
            if (targetHit && targetHit.team !== pokemon.team) {
                targetHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.SpacialRendStrategy = SpacialRendStrategy;
//# sourceMappingURL=spacial-rend.js.map