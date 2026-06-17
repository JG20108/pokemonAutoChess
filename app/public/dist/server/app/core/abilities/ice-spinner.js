"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceSpinnerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class IceSpinnerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        let delay = 0;
        for (const cell of cells) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.broadcastAbility({
                    targetX: cell.x,
                    targetY: cell.y
                });
                board.clearBoardEffect(cell.x, cell.y, pokemon.simulation);
                if (cell.value && cell.value.team !== pokemon.team) {
                    const orientation = board.orientation(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY, pokemon, undefined);
                    const knockbackCell = board.getKnockBackPlace(cell.value.positionX, cell.value.positionY, orientation);
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    if (knockbackCell) {
                        cell.value.moveTo(knockbackCell.x, knockbackCell.y, board, true);
                        cell.value.cooldown = 500;
                    }
                }
            }, delay));
            delay += 100;
        }
    }
}
exports.IceSpinnerStrategy = IceSpinnerStrategy;
//# sourceMappingURL=ice-spinner.js.map