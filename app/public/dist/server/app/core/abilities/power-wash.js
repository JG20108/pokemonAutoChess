"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerWashStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class PowerWashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [80, 120, 160, 320][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 320;
        const hpEnemiesByRow = new Map();
        for (let y = 0; y < config_1.BOARD_HEIGHT; y++) {
            board.getCellsInRow(y).forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    if (!hpEnemiesByRow.has(y)) {
                        hpEnemiesByRow.set(y, { y: y, hp: cell.value.hp, enemyCount: 1 });
                    }
                    else {
                        const entry = hpEnemiesByRow.get(y);
                        entry.hp += cell.value.hp;
                        entry.enemyCount++;
                    }
                }
            });
        }
        const sortedRows = Array.from(hpEnemiesByRow.values()).sort((a, b) => b.hp - a.hp);
        if (sortedRows.length === 0) {
            return;
        }
        const targetRow = sortedRows[0].y;
        const dropDamage = sortedRows[0].enemyCount > 0
            ? Math.ceil(damage / sortedRows[0].enemyCount) / 2
            : 0;
        const sendDrop = (x, y, delay) => {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.broadcastAbility({
                    targetX: x,
                    targetY: y
                });
                const entity = board.getEntityOnCell(x, y);
                if (entity && entity.team !== pokemon.team) {
                    entity.handleSpecialDamage(dropDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, delay));
        };
        for (let x = 0; x < config_1.BOARD_WIDTH; x++) {
            sendDrop(x, targetRow, 100 * x);
            sendDrop(config_1.BOARD_WIDTH - 1 - x, targetRow, 100 * x);
        }
    }
}
exports.PowerWashStrategy = PowerWashStrategy;
//# sourceMappingURL=power-wash.js.map