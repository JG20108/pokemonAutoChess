"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlasmaTempestStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const logger_1 = require("../../utils/logger");
const number_1 = require("../../utils/number");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class PlasmaTempestStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        pokemon.flyAway(board, false);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const enemies = board
                .getClosestEnemies(pokemon.positionX, pokemon.positionY, target.team)
                .slice(0, 3);
            enemies.forEach((enemy) => {
                const vector = {
                    x: enemy.positionX - pokemon.positionX,
                    y: enemy.positionY - pokemon.positionY
                };
                const stepsX = vector.x > 0
                    ? (config_1.BOARD_WIDTH - 1 - enemy.positionX) / vector.x
                    : vector.x < 0
                        ? -enemy.positionX / vector.x
                        : config_1.BOARD_WIDTH + config_1.BOARD_HEIGHT;
                const stepsY = vector.y > 0
                    ? (config_1.BOARD_HEIGHT - 1 - enemy.positionY) / vector.y
                    : vector.y < 0
                        ? -enemy.positionY / vector.y
                        : config_1.BOARD_WIDTH + config_1.BOARD_HEIGHT;
                const steps = Math.min(stepsX, stepsY);
                if (steps === config_1.BOARD_WIDTH + config_1.BOARD_HEIGHT) {
                    logger_1.logger.error("PlasmaTempestStrategy: vector has no movement", {
                        vector
                    });
                }
                const endX = enemy.positionX + vector.x * steps;
                const endY = enemy.positionY + vector.y * steps;
                pokemon.broadcastAbility({
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: endX,
                    targetY: endY
                });
                const cellsBetween = board.getCellsBetween(pokemon.positionX, pokemon.positionY, endX, endY);
                let reducedDamage = damage;
                for (const cell of cellsBetween) {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(reducedDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        reducedDamage = (0, number_1.max)(1)(Math.round(reducedDamage * 0.9));
                    }
                }
            });
        }, 500));
    }
}
exports.PlasmaTempestStrategy = PlasmaTempestStrategy;
//# sourceMappingURL=plasma-tempest.js.map