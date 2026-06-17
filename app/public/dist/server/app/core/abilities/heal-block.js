"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealBlockStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class HealBlockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                cell.value.status.triggerWound(5000, cell.value, pokemon);
            }
        });
    }
}
exports.HealBlockStrategy = HealBlockStrategy;
//# sourceMappingURL=heal-block.js.map