"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleShotStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ScaleShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        pokemon.status.triggerArmorReduction(2000, pokemon);
        const scalePositions = new Array();
        const adjacentCells = [
            [pokemon.positionX, pokemon.positionY - 1],
            [pokemon.positionX, pokemon.positionY + 1],
            [pokemon.positionX - 1, pokemon.positionY],
            [pokemon.positionX + 1, pokemon.positionY],
            [pokemon.positionX - 1, pokemon.positionY - 1],
            [pokemon.positionX + 1, pokemon.positionY - 1],
            [pokemon.positionX - 1, pokemon.positionY + 1],
            [pokemon.positionX + 1, pokemon.positionY + 1]
        ];
        let inc = 0;
        for (const cell of adjacentCells) {
            const [x, y] = cell;
            const delay = 2000 + inc;
            scalePositions.push({
                x,
                y,
                delay
            });
            inc += 100;
            pokemon.broadcastAbility({
                skill: "SCALE_SHOT_CHARGE",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: x,
                targetY: y,
                delay: delay
            });
            const entityOnCell = board.getEntityOnCell(x, y);
            if (entityOnCell && entityOnCell.team !== pokemon.team) {
                entityOnCell.status.triggerArmorReduction(2000, entityOnCell);
                const chargeDamage = (_a = [40, 40, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
                entityOnCell.handleSpecialDamage(chargeDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
        for (const { x, y, delay } of scalePositions) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a, _b;
                if (pokemon.status.freeze ||
                    pokemon.status.sleep ||
                    pokemon.status.resurrecting)
                    return;
                const farthestTarget = pokemon.state.getFarthestTarget(pokemon, board);
                if (farthestTarget) {
                    pokemon.broadcastAbility({
                        positionX: x,
                        positionY: y,
                        targetX: farthestTarget.positionX,
                        targetY: farthestTarget.positionY
                    });
                    const cellsBetween = board.getCellsBetween(x, y, farthestTarget.positionX, farthestTarget.positionY);
                    for (const cell of cellsBetween) {
                        if (cell.value && cell.value.team !== pokemon.team) {
                            const mainDmg = (_a = [10, 15, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
                            const splashDmg = (_b = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20;
                            cell.value.handleSpecialDamage(cell.value.id === farthestTarget.id ? mainDmg : splashDmg, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    }
                }
            }, delay));
        }
    }
}
exports.ScaleShotStrategy = ScaleShotStrategy;
//# sourceMappingURL=scale-shot.js.map