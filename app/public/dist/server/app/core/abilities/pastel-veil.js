"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PastelVeilStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class PastelVeilStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const shield = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon, true);
        const alliesHit = new Set();
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    alliesHit.add(cell.value);
                }
            });
            pokemon.broadcastAbility({
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board, false);
        }
        if (alliesHit.size === 0)
            alliesHit.add(pokemon);
        alliesHit.forEach((ally) => {
            ally.status.clearNegativeStatus(ally, pokemon);
            ally.addShield(shield, pokemon, 1, crit);
        });
    }
}
exports.PastelVeilStrategy = PastelVeilStrategy;
//# sourceMappingURL=pastel-veil.js.map