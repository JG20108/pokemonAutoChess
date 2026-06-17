"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulldozeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BulldozeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 45, 85, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const speedReduction = 10;
        const adjacentsCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        for (const cell of adjacentsCells) {
            if (cell.value && cell.value.team !== pokemon.team) {
                const orientation = board.orientation(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY, pokemon, undefined);
                const destination = board.getKnockBackPlace(cell.value.positionX, cell.value.positionY, orientation);
                if (destination) {
                    cell.value.moveTo(destination.x, destination.y, board, true);
                    cell.value.resetCooldown(500);
                }
                cell.value.addSpeed(-speedReduction, pokemon, 0, false);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.BulldozeStrategy = BulldozeStrategy;
//# sourceMappingURL=bulldoze.js.map