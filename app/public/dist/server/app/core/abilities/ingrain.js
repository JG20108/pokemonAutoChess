"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngrainStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class IngrainStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const damage = (_b = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 120;
        const lockedDuration = 4000;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team == cell.value.team) {
                cell.value.handleHeal(heal, pokemon, 1, crit);
            }
            else if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.status.triggerLocked(lockedDuration, cell.value);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.IngrainStrategy = IngrainStrategy;
//# sourceMappingURL=ingrain.js.map