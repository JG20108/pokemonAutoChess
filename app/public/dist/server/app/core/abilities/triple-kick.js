"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripleKickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class TripleKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        let count = 0;
        cells.forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                count++;
                if (count <= 3) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                }
            }
        });
    }
}
exports.TripleKickStrategy = TripleKickStrategy;
//# sourceMappingURL=triple-kick.js.map