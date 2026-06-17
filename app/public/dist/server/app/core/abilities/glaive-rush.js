"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlaiveRushStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class GlaiveRushStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 400;
        pokemon.status.triggerArmorReduction(6000, pokemon);
        const destinationRow = pokemon.team === Game_1.Team.RED_TEAM
            ? pokemon.positionY <= 1
                ? config_1.BOARD_HEIGHT - 1
                : 0
            : pokemon.positionY >= config_1.BOARD_HEIGHT - 2
                ? 0
                : config_1.BOARD_HEIGHT - 1;
        const destination = board.getClosestAvailablePlace(pokemon.positionX, destinationRow);
        const enemiesHit = new Set();
        if (destination) {
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: destination.x,
                targetY: destination.y
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, destination.x, destination.y);
            pokemon.moveTo(destination.x, destination.y, board, false);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    enemiesHit.add(cell.value);
                }
            });
        }
        if (enemiesHit.size === 0)
            enemiesHit.add(target);
        enemiesHit.forEach((enemy) => {
            enemy.status.triggerArmorReduction(6000, pokemon);
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.GlaiveRushStrategy = GlaiveRushStrategy;
//# sourceMappingURL=glaive-rush.js.map