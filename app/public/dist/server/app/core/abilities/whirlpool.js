"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhirlpoolStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class WhirlpoolStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        const farthestTarget = (_a = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, board, farthestTarget, crit, true);
        const targetsHit = new Set();
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                targetsHit.add(cell.value);
                pokemon.broadcastAbility({ targetX: cell.x, targetY: cell.y });
                break;
            }
        }
        if (targetsHit.size === 0)
            targetsHit.add(target);
        targetsHit.forEach((enemy) => {
            var _a;
            const multiplier = (_a = [1, 1, 1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2;
            for (let i = 0; i < 4; i++) {
                enemy.handleSpecialDamage(pokemon.atk * multiplier, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WhirlpoolStrategy = WhirlpoolStrategy;
//# sourceMappingURL=whirlpool.js.map