"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailGlowStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class TailGlowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const damage = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.addAbilityPower(30, pokemon, 0, false);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.TailGlowStrategy = TailGlowStrategy;
//# sourceMappingURL=tail-glow.js.map