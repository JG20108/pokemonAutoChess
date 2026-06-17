"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlasmaFissionStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const logger_1 = require("../../utils/logger");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class PlasmaFissionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const enemiesOnThePathEntities = board
            .getCellsBetween(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY)
            .filter((c) => c.value && c.value.team !== pokemon.team)
            .map((c) => c.value)
            .sort((a, b) => (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, (a === null || a === void 0 ? void 0 : a.positionX) || 0, (a === null || a === void 0 ? void 0 : a.positionY) || 0) -
            (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, (b === null || b === void 0 ? void 0 : b.positionX) || 0, (b === null || b === void 0 ? void 0 : b.positionY) || 0));
        const primaryTarget = enemiesOnThePathEntities.length > 0 ? enemiesOnThePathEntities[0] : target;
        if (primaryTarget) {
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: primaryTarget.positionX,
                targetY: primaryTarget.positionY
            });
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                primaryTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                const vector = {
                    x: primaryTarget.positionX - pokemon.positionX,
                    y: primaryTarget.positionY - pokemon.positionY
                };
                for (const v of [
                    { x: -vector.y, y: vector.x },
                    { x: vector.y, y: -vector.x }
                ]) {
                    const stepsX = v.x > 0
                        ? config_1.BOARD_WIDTH - primaryTarget.positionX
                        : v.x < 0
                            ? primaryTarget.positionX + 1
                            : config_1.BOARD_WIDTH + config_1.BOARD_HEIGHT;
                    const stepsY = v.y > 0
                        ? config_1.BOARD_HEIGHT - primaryTarget.positionY
                        : v.y < 0
                            ? primaryTarget.positionY + 1
                            : config_1.BOARD_WIDTH + config_1.BOARD_HEIGHT;
                    const steps = Math.min(stepsX, stepsY);
                    if (steps === config_1.BOARD_WIDTH + config_1.BOARD_HEIGHT) {
                        logger_1.logger.error("PlasmaFission: Perpendicular vector has no movement", { v, vector });
                    }
                    const splitDestination = {
                        positionX: primaryTarget.positionX + v.x * steps,
                        positionY: primaryTarget.positionY + v.y * steps
                    };
                    pokemon.broadcastAbility({
                        positionX: primaryTarget.positionX,
                        positionY: primaryTarget.positionY,
                        targetX: splitDestination.positionX,
                        targetY: splitDestination.positionY
                    });
                    let residualDamage = damage;
                    const enemiesOnThePathEntities = board
                        .getCellsBetween(primaryTarget.positionX, primaryTarget.positionY, splitDestination.positionX, splitDestination.positionY)
                        .filter((c) => c.value &&
                        c.value.team !== pokemon.team &&
                        c.value.id !== primaryTarget.id)
                        .map((c) => c.value)
                        .sort((a, b) => (0, distance_1.distanceC)(primaryTarget.positionX, primaryTarget.positionY, (a === null || a === void 0 ? void 0 : a.positionX) || 0, (a === null || a === void 0 ? void 0 : a.positionY) || 0) -
                        (0, distance_1.distanceC)(primaryTarget.positionX, primaryTarget.positionY, (b === null || b === void 0 ? void 0 : b.positionX) || 0, (b === null || b === void 0 ? void 0 : b.positionY) || 0));
                    for (const enemy of enemiesOnThePathEntities) {
                        if (enemy) {
                            enemy.handleSpecialDamage(residualDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                            residualDamage = Math.max(1, Math.round(residualDamage / 2));
                        }
                    }
                }
            }, 400));
        }
    }
}
exports.PlasmaFissionStrategy = PlasmaFissionStrategy;
//# sourceMappingURL=plasma-fission.js.map