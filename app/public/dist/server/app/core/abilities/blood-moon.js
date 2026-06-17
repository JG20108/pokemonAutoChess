"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodMoonStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class BloodMoonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMutiplier = (_a = [2, 2, 2, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        const damage = Math.round(damageMutiplier * pokemon.atk);
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerWound(3000, cell.value, pokemon);
            }
        });
    }
}
exports.BloodMoonStrategy = BloodMoonStrategy;
//# sourceMappingURL=blood-moon.js.map