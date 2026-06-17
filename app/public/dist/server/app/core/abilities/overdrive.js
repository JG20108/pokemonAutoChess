"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverdriveStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class OverdriveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const cells = board.getCellsInRadius(target.positionX, target.positionY, 3, false);
        cells.forEach((cell) => {
            var _a;
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                const distance = (0, distance_1.distanceC)(cell.x, cell.y, pokemon.positionX, pokemon.positionY);
                const baseMultiplier = (_a = [1.2, 1.2, 1.5, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
                const damage = pokemon.atk * (baseMultiplier - 0.2 * (distance - 1));
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        });
    }
}
exports.OverdriveStrategy = OverdriveStrategy;
//# sourceMappingURL=overdrive.js.map