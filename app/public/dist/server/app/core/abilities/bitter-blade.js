"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitterBladeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BitterBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 60, 70, 140][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 140;
        const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        let nbEnemiesHit = 0;
        for (const cell of adjacentCells) {
            if (cell.value && cell.value.team !== pokemon.team) {
                nbEnemiesHit++;
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
        pokemon.handleHeal(pokemon.maxHP * 0.1 * nbEnemiesHit, pokemon, 0, false);
    }
}
exports.BitterBladeStrategy = BitterBladeStrategy;
//# sourceMappingURL=bitter-blade.js.map