"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonemerangStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class BonemerangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const hit = () => (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        hit();
        pokemon.commands.push(new simulation_command_1.DelayedCommand(hit, 1000));
    }
}
exports.BonemerangStrategy = BonemerangStrategy;
//# sourceMappingURL=bonemerang.js.map