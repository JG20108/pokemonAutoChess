"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnoreStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SnoreStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const targets = board
            .getCellsInFront(pokemon, target)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team);
        for (const cell of targets) {
            if (cell.value) {
                cell.value.status.triggerFlinch(3000, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.SnoreStrategy = SnoreStrategy;
//# sourceMappingURL=snore.js.map