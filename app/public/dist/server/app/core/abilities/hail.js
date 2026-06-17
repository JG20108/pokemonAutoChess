"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HailStrategy = void 0;
const config_1 = require("../../config");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class HailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 50, 50, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const numberOfProjectiles = (_b = [8, 15, 30, 45][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 45;
        for (let i = 0; i < numberOfProjectiles; i++) {
            const x = (0, random_1.randomBetween)(0, config_1.BOARD_WIDTH - 1);
            const y = target.positionY >= 3
                ? (0, random_1.randomBetween)(3, config_1.BOARD_HEIGHT - 1)
                : (0, random_1.randomBetween)(0, 3);
            const enemyHit = board.getEntityOnCell(x, y);
            if (enemyHit && enemyHit.team !== pokemon.team) {
                enemyHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                enemyHit.effects.add(Effect_1.EffectEnum.HAIL);
                enemyHit.status.triggerFreeze(1000, enemyHit, pokemon);
            }
            pokemon.broadcastAbility({
                skill: "HAIL_PROJECTILE",
                targetX: x,
                targetY: y
            });
            board.addBoardEffect(x, y, Effect_1.EffectEnum.HAIL, pokemon.simulation);
        }
    }
}
exports.HailStrategy = HailStrategy;
//# sourceMappingURL=hail.js.map