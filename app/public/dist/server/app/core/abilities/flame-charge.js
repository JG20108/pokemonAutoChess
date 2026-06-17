"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlameChargeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FlameChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        const targetsHit = new Set();
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    targetsHit.add(cell.value);
                }
            });
            pokemon.broadcastAbility({
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board, false);
        }
        if (targetsHit.size === 0)
            targetsHit.add(target);
        targetsHit.forEach((enemy) => {
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.FlameChargeStrategy = FlameChargeStrategy;
//# sourceMappingURL=flame-charge.js.map