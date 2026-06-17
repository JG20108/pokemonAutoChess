"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonPulseStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class DragonPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 15, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target && target.hp > 0) {
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.addAbilityPower(5, pokemon, 0, false, false);
                board
                    .getAdjacentCells(target.positionX, target.positionY, false)
                    .filter((cell) => cell.value && cell.value.team !== pokemon.team)
                    .forEach((cell) => {
                    if (cell.value) {
                        pokemon.broadcastAbility({
                            positionX: target.positionX,
                            positionY: target.positionY,
                            targetX: cell.x,
                            targetY: cell.y
                        });
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        pokemon.addAbilityPower(5, pokemon, 0, false, false);
                        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                            if (pokemon && cell.value) {
                                board
                                    .getAdjacentCells(cell.value.positionX, cell.value.positionY, false)
                                    .filter((c) => c.value && c.value.team !== pokemon.team)
                                    .forEach((c) => {
                                    var _a;
                                    pokemon.broadcastAbility({
                                        positionX: cell.x,
                                        positionY: cell.y,
                                        targetX: c.x,
                                        targetY: c.y
                                    });
                                    (_a = c.value) === null || _a === void 0 ? void 0 : _a.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                                    pokemon.addAbilityPower(5, pokemon, 0, false, false);
                                });
                            }
                        }, 400));
                    }
                });
            }
        }, 400));
    }
}
exports.DragonPulseStrategy = DragonPulseStrategy;
//# sourceMappingURL=dragon-pulse.js.map