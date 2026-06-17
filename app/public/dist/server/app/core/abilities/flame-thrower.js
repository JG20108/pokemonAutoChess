"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlameThrowerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class FlameThrowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        (0, board_1.effectInOrientation)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team != pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(4000, cell.value, pokemon);
            }
        }, 3);
    }
}
exports.FlameThrowerStrategy = FlameThrowerStrategy;
//# sourceMappingURL=flame-thrower.js.map