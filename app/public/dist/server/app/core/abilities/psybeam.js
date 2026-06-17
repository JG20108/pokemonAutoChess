"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsybeamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class PsybeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    cell.value.status.triggerConfusion(4000, cell.value, pokemon);
                }
            }
        });
    }
}
exports.PsybeamStrategy = PsybeamStrategy;
//# sourceMappingURL=psybeam.js.map