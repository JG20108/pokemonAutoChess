"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaydayStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PaydayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = Math.floor(((_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240) * (1 + (0.5 * pokemon.ap) / 100));
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
        if (death && pokemon.player) {
            pokemon.player.addMoney(pokemon.stars, true, pokemon);
            pokemon.count.moneyCount += pokemon.stars;
        }
    }
}
exports.PaydayStrategy = PaydayStrategy;
//# sourceMappingURL=payday.js.map