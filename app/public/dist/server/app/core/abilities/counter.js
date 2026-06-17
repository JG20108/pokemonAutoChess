"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CounterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageFactor = (_a = [0.5, 0.5, 0.5, 1][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1;
        const damage = Math.max(1, Math.round((pokemon.maxHP - pokemon.hp) * damageFactor));
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.CounterStrategy = CounterStrategy;
//# sourceMappingURL=counter.js.map