"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AquaRingStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class AquaRingStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const mostSurroundedCoordinate = pokemon.state.getMostSurroundedCoordinateAvailablePlace(pokemon.team, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board, false);
            const cells = board.getAdjacentCells(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y);
            cells.push({
                x: mostSurroundedCoordinate.x,
                y: mostSurroundedCoordinate.y,
                value: board.getEntityOnCell(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y)
            });
            cells.forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.status.clearNegativeStatus(cell.value, pokemon);
                    cell.value.handleHeal(heal, pokemon, 1, crit);
                }
            });
        }
    }
}
exports.AquaRingStrategy = AquaRingStrategy;
//# sourceMappingURL=aqua-ring.js.map