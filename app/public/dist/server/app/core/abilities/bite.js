"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiteStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BiteStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 120, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(Math.ceil(0.3 * takenDamage), pokemon, 0, false);
        if (takenDamage > 0)
            target.status.triggerFlinch(5000, target, pokemon);
    }
}
exports.BiteStrategy = BiteStrategy;
//# sourceMappingURL=bite.js.map