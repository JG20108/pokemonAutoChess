"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StruggleBugStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class StruggleBugStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            var _a;
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.addAbilityPower(-30, pokemon, 0, false);
                cell.value.handleSpecialDamage((_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StruggleBugStrategy = StruggleBugStrategy;
//# sourceMappingURL=struggle-bug.js.map