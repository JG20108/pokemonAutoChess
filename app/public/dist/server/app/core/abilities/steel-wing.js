"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteelWingStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class SteelWingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = ((_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80) + 2 * pokemon.def;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        const targetsHit = new Set();
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    pokemon.broadcastAbility({ positionX: cell.x, positionY: cell.y });
                    targetsHit.add(cell.value);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board, false);
        }
        if (targetsHit.size === 0)
            targetsHit.add(target);
        targetsHit.forEach((enemy) => {
            if (enemy.items.has(Item_1.Item.TWIST_BAND) === false) {
                pokemon.addDefense(1, pokemon, 0, false);
                enemy.addDefense(-1, pokemon, 0, false);
            }
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.SteelWingStrategy = SteelWingStrategy;
//# sourceMappingURL=steel-wing.js.map