"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuddyWaterStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MuddyWaterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = (_a = [40, 80, 160, 320][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 320;
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                pokemon.broadcastAbility({ targetX: cell.x, targetY: cell.y });
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerArmorReduction(4000, cell.value);
                cell.value.status.triggerWound(4000, cell.value, pokemon);
            }
        });
    }
}
exports.MuddyWaterStrategy = MuddyWaterStrategy;
//# sourceMappingURL=muddy-water.js.map