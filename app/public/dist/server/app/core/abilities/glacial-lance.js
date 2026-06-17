"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlacialLanceStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const move_speed_1 = require("../move-speed");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class GlacialLanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (corner) {
            pokemon.moveTo(corner.x, corner.y, board, false);
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a, _b;
            const damage = ((_a = [3, 3, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6) * pokemon.atk;
            const farthestTarget = (_b = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
            let targetHit = farthestTarget;
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
            for (const cell of cells) {
                if (cell.value && cell.value.team != pokemon.team) {
                    targetHit = cell.value;
                    break;
                }
            }
            pokemon.broadcastAbility({
                targetX: targetHit.positionX,
                targetY: targetHit.positionY
            });
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                targetHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                board
                    .getAdjacentCells(targetHit.positionX, targetHit.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage * 0.5, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            }, 500));
        }, corner ? Math.round(500 / (0, move_speed_1.getMoveSpeed)(pokemon)) : 0));
    }
}
exports.GlacialLanceStrategy = GlacialLanceStrategy;
//# sourceMappingURL=glacial-lance.js.map