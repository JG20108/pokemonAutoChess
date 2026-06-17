"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LusterPurgeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const board_1 = require("../board");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class LusterPurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            var _a;
            if (cell.value != null &&
                cell.value.team !== pokemon.team &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY) <= 4) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addSpecialDefense(-((_a = [5, 5, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10), pokemon, 0, false);
            }
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
                var _a;
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    cell.value.addSpecialDefense(-((_a = [5, 5, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10), pokemon, 0, false);
                }
            });
        }, 1000));
    }
}
exports.LusterPurgeStrategy = LusterPurgeStrategy;
//# sourceMappingURL=luster-purge.js.map