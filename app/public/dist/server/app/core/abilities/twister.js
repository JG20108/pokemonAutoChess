"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwisterStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Synergy_1 = require("../../types/enum/Synergy");
const distance_1 = require("../../utils/distance");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class TwisterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const flyRange = (_b = [1, 2, 3, 6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6;
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                const freeCells = board
                    .getCellsInRadius(cell.x, cell.y, flyRange, false)
                    .filter((cell) => board.getEntityOnCell(cell.x, cell.y) === undefined);
                const distances = freeCells.map((cell) => (0, distance_1.distanceM)(cell.x, cell.y, pokemon.positionX, pokemon.positionY));
                const maxDistance = Math.max(...distances);
                const farthestCells = freeCells.filter((cell, i) => distances[i] === maxDistance);
                const destination = (0, random_1.pickRandomIn)(farthestCells);
                if (destination) {
                    cell.value.moveTo(destination.x, destination.y, board, true);
                }
            }
            else if (cell.value &&
                pokemon.team === cell.value.team &&
                pokemon.id !== cell.value.id &&
                cell.value.hasSynergyEffect(Synergy_1.Synergy.FLYING)) {
                cell.value.flyAway(board);
            }
        });
    }
}
exports.TwisterStrategy = TwisterStrategy;
//# sourceMappingURL=twister.js.map