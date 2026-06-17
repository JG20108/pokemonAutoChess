"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamaxCannonStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class DynamaxCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageRatio = (_a = [0.3, 0.4, 0.5, 0.7][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.7;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(Math.ceil(cell.value.maxHP * damageRatio), board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DynamaxCannonStrategy = DynamaxCannonStrategy;
//# sourceMappingURL=dynamax-cannon.js.map