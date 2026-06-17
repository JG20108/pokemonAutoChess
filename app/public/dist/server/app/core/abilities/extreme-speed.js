"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtremeSpeedStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ExtremeSpeedStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        const targetsHit = new Set();
        if (farthestCoordinate) {
            pokemon.broadcastAbility({
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    targetsHit.add(cell.value);
                }
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
exports.ExtremeSpeedStrategy = ExtremeSpeedStrategy;
//# sourceMappingURL=extreme-speed.js.map