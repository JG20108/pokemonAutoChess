"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntanglingThreadStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class EntanglingThreadStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.status.triggerParalysis(4000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.EntanglingThreadStrategy = EntanglingThreadStrategy;
//# sourceMappingURL=entangling-thread.js.map