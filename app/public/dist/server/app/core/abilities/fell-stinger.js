"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FellStingerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FellStingerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMultiplier = (_a = [4, 4, 4, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 9;
        const damage = damageMultiplier * pokemon.baseAtk;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (death && !pokemon.isSpawn) {
            pokemon.addAttack(0.3 * pokemon.baseAtk, pokemon, 0, false);
        }
    }
}
exports.FellStingerStrategy = FellStingerStrategy;
//# sourceMappingURL=fell-stinger.js.map