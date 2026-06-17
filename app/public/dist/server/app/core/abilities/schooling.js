"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolingStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const board_1 = require("../../utils/board");
const ability_strategy_1 = require("./ability-strategy");
class SchoolingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const pctDmg = (_a = [0.15, 0.15, 0.15, 0.30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.30;
        const damage = pctDmg * pokemon.maxHP;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        if (pokemon.player && !pokemon.isGhostOpponent) {
            pokemon.player.board.forEach((ally, id) => {
                if (ally && ally.name === Pokemon_1.Pkm.WISHIWASHI && (0, board_1.isOnBench)(ally)) {
                    pokemon.addMaxHP(50, pokemon, 0, false, true);
                    pokemon.player.board.delete(id);
                }
            });
        }
    }
}
exports.SchoolingStrategy = SchoolingStrategy;
//# sourceMappingURL=schooling.js.map