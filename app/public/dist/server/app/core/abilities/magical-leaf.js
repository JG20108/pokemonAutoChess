"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicalLeafStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MagicalLeafStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestTarget = (_b = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        super.process(pokemon, board, farthestTarget, crit);
        const targetsHit = new Set();
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                targetsHit.add(cell.value);
            }
        });
        if (targetsHit.size === 0)
            targetsHit.add(target);
        targetsHit.forEach((enemy) => {
            enemy.status.triggerArmorReduction(3000, enemy);
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.MagicalLeafStrategy = MagicalLeafStrategy;
//# sourceMappingURL=magical-leaf.js.map