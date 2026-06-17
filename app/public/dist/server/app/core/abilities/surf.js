"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurfStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class SurfStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit, preventDefaultAnim, tierLevel = pokemon.stars) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 40, 80, 160][tierLevel - 1]) !== null && _a !== void 0 ? _a : 160;
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
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    const surfAngle = (0, number_1.calcAngleDegrees)(farthestCoordinate.x - pokemon.positionX, farthestCoordinate.y - pokemon.positionY);
                    const targetAngle = (0, number_1.calcAngleDegrees)(cell.value.positionX - pokemon.positionX, cell.value.positionY - pokemon.positionY);
                    const dx = (surfAngle > 180 ? -1 : 1) * (targetAngle < surfAngle ? +1 : -1);
                    const newX = cell.x + dx;
                    if (board.isOnBoard(newX, cell.y) &&
                        board.getEntityOnCell(newX, cell.y) === undefined) {
                        cell.value.moveTo(newX, cell.y, board, true);
                        cell.value.cooldown = 500;
                    }
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board, false);
        }
        if (targetsHit.size === 0 && (farthestCoordinate === null || farthestCoordinate === void 0 ? void 0 : farthestCoordinate.target)) {
            farthestCoordinate.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.SurfStrategy = SurfStrategy;
//# sourceMappingURL=surf.js.map