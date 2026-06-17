"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoomBurstStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BoomBurstStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [60, 60, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .forEach((cell) => {
            if (cell.value) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerFlinch(4000, cell.value, pokemon);
            }
        });
    }
}
exports.BoomBurstStrategy = BoomBurstStrategy;
//# sourceMappingURL=boomburst.js.map