"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DisableStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const duration = (_b = [2000, 3000, 4000, 8000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 8000;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSilence(duration, cell.value, pokemon);
            }
        });
    }
}
exports.DisableStrategy = DisableStrategy;
//# sourceMappingURL=disable.js.map