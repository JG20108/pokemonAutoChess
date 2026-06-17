"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurningJealousyStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BurningJealousyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [30, 50, 70, 140][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 140;
        const burnDuration = 5000;
        const targets = board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team)
            .map((cell) => cell.value);
        targets.forEach((enemy) => {
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.broadcastAbility({
                targetX: enemy.positionX,
                targetY: enemy.positionY,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
            if (enemy.atk > enemy.baseAtk) {
                enemy.addAttack(-(enemy.atk - enemy.baseAtk), enemy, 0, false);
                enemy.status.triggerBurn(burnDuration, enemy, pokemon);
            }
        });
    }
}
exports.BurningJealousyStrategy = BurningJealousyStrategy;
//# sourceMappingURL=burning-jealousy.js.map