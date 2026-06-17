"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsystrikeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PsystrikeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const furthestTarget = (_b = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        const targetsHit = new Set();
        pokemon.broadcastAbility({
            targetX: furthestTarget.positionX,
            targetY: furthestTarget.positionY
        });
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, furthestTarget.positionX, furthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                targetsHit.add(cell.value);
            }
        });
        if (targetsHit.size === 0) {
            targetsHit.add(furthestTarget);
        }
        targetsHit.forEach((enemy) => {
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            const teleportationCell = board.getTeleportationCell(enemy.positionX, enemy.positionY, enemy.team);
            if (teleportationCell) {
                enemy.moveTo(teleportationCell.x, teleportationCell.y, board, true);
            }
        });
    }
}
exports.PsystrikeStrategy = PsystrikeStrategy;
//# sourceMappingURL=psystrike.js.map