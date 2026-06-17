"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteamrollerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class SteamrollerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = Math.round(((_a = [0.4, 0.8, 1.5, 3.0][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3.0) * pokemon.speed);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        const targetsHit = new Set();
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell, i) => {
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
            if ((0, random_1.chance)(0.5, pokemon)) {
                enemy.status.triggerFlinch(3000, enemy, pokemon);
            }
        });
    }
}
exports.SteamrollerStrategy = SteamrollerStrategy;
//# sourceMappingURL=steamroller.js.map