"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MawashiGeriStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class MawashiGeriStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        if (pokemon.atk > target.atk)
            damage *= 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
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
}
exports.MawashiGeriStrategy = MawashiGeriStrategy;
//# sourceMappingURL=mawashi-geri.js.map