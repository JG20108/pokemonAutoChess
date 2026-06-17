"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadlongRushStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class HeadlongRushStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const finalTargetDamage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const damageOnThePath = (_b = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
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
                    cell.value.handleSpecialDamage(cell.value.id === farthestCoordinate.target.id
                        ? finalTargetDamage
                        : damageOnThePath, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    pokemon.addDefense(-1, pokemon, 0, false);
                    pokemon.addSpecialDefense(-1, pokemon, 0, false);
                    const rushAngle = (0, number_1.calcAngleDegrees)(farthestCoordinate.x - pokemon.positionX, farthestCoordinate.y - pokemon.positionY);
                    const targetAngle = (0, number_1.calcAngleDegrees)(cell.value.positionX - pokemon.positionX, cell.value.positionY - pokemon.positionY);
                    const dx = (rushAngle > 180 ? -1 : 1) * (targetAngle < rushAngle ? +1 : -1);
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
        if (targetsHit.size === 0) {
            target.handleSpecialDamage(finalTargetDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.HeadlongRushStrategy = HeadlongRushStrategy;
//# sourceMappingURL=headlong-rush.js.map