"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetalBlizzardStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PetalBlizzardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            var _a;
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage((_a = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.addAbilityPower(10, pokemon, 0, false);
    }
}
exports.PetalBlizzardStrategy = PetalBlizzardStrategy;
//# sourceMappingURL=petal-blizzard.js.map