"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreezeDryStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FreezeDryStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a, _b;
            if (target && target.hp > 0) {
                const damage = ((_a = [30, 50, 70, 140][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 140) *
                    (1 + pokemon.ap / 100) +
                    pokemon.speDef;
                const killDamage = ((_b = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60) *
                    (1 + pokemon.ap / 100) +
                    pokemon.speDef * 0.5;
                const x = target.positionX;
                const y = target.positionY;
                const attackResult = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                if (attackResult.death) {
                    const cells = board.getAdjacentCells(x, y, false);
                    cells.forEach((cell) => {
                        if (cell.value && cell.value.team !== pokemon.team) {
                            pokemon.broadcastAbility({
                                positionX: x,
                                positionY: y,
                                targetX: cell.x,
                                targetY: cell.y
                            });
                            cell.value.handleSpecialDamage(killDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                        }
                    });
                }
            }
        }, 250));
    }
}
exports.FreezeDryStrategy = FreezeDryStrategy;
//# sourceMappingURL=freeze-dry.js.map