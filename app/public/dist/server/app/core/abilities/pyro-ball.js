"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PyroBallStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PyroBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestTarget = (_b = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        const targetsHit = new Set();
        pokemon.broadcastAbility({
            targetX: farthestTarget.positionX,
            targetY: farthestTarget.positionY
        });
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                targetsHit.add(cell.value);
            }
        });
        if (targetsHit.size === 0)
            targetsHit.add(target);
        targetsHit.forEach((enemy) => {
            enemy.status.triggerBurn(2000, enemy, pokemon);
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.PyroBallStrategy = PyroBallStrategy;
//# sourceMappingURL=pyro-ball.js.map