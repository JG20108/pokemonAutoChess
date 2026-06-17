"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandSpitStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SandSpitStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const cellsHit = board.getCellsInFront(pokemon, target, 1);
        for (const cell of cellsHit) {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBlinded(2000, cell.value);
            }
        }
    }
}
exports.SandSpitStrategy = SandSpitStrategy;
//# sourceMappingURL=sand-spit.js.map