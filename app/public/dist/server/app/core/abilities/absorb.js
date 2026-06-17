"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorbStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class AbsorbStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team === pokemon.team) {
                cell.value.handleHeal(damage * 0.1, pokemon, 1, crit);
            }
        });
    }
}
exports.AbsorbStrategy = AbsorbStrategy;
//# sourceMappingURL=absorb.js.map