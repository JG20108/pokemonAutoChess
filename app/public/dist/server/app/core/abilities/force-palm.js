"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForcePalmStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class ForcePalmStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const additionalDamage = target.status.paralysis
            ? ((_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80)
            : 0;
        const damage = Math.round(((_b = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 120) +
            target.maxHP * 0.1 +
            additionalDamage);
        if (target.status.paralysis) {
            let farthestEmptyCell = null;
            (0, board_1.effectInOrientation)(board, pokemon, target, (cell) => {
                if (!cell.value) {
                    farthestEmptyCell = cell;
                }
            });
            if (farthestEmptyCell != null) {
                const { x, y } = farthestEmptyCell;
                target.moveTo(x, y, board, true);
            }
        }
        else {
            target.status.triggerParalysis(6000, target, pokemon);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ForcePalmStrategy = ForcePalmStrategy;
//# sourceMappingURL=force-palm.js.map