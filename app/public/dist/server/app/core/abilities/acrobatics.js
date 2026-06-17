"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcrobaticsStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class AcrobaticsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const travelDistance = 4 - pokemon.items.size;
        const candidateDestinationCells = board
            .getCellsInRadius(pokemon.targetX, pokemon.targetY, pokemon.range, false)
            .filter((cell) => cell.value === undefined)
            .sort((a, b) => Math.abs(travelDistance -
            (0, distance_1.distanceM)(a.x, a.y, pokemon.positionX, pokemon.positionY)) -
            Math.abs(travelDistance -
                (0, distance_1.distanceM)(b.x, b.y, pokemon.positionX, pokemon.positionY)));
        if (candidateDestinationCells.length > 0) {
            const destination = candidateDestinationCells[0];
            pokemon.moveTo(destination.x, destination.y, board, false);
        }
    }
}
exports.AcrobaticsStrategy = AcrobaticsStrategy;
//# sourceMappingURL=acrobatics.js.map