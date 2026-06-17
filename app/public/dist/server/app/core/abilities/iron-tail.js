"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IronTailStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class IronTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = Math.round(((_a = [1, 1, 1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2) * pokemon.def);
        const cellsHit = board.getCellsInFront(pokemon, target, 1);
        for (const cell of cellsHit) {
            if (cell.value && cell.value.team !== pokemon.team) {
                const orientation = board.orientation(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY, pokemon, undefined);
                const destination = board.getKnockBackPlace(cell.value.positionX, cell.value.positionY, orientation);
                if (destination) {
                    cell.value.moveTo(destination.x, destination.y, board, true);
                    cell.value.cooldown = 500;
                }
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.IronTailStrategy = IronTailStrategy;
//# sourceMappingURL=iron-tail.js.map