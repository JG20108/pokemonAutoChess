"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleIronBashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DoubleIronBashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMultiplier = (_a = [1.5, 1.5, 1.5, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
        const damage = Math.round(pokemon.atk * damageMultiplier);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        target.status.triggerFlinch(3000, pokemon);
    }
}
exports.DoubleIronBashStrategy = DoubleIronBashStrategy;
//# sourceMappingURL=double-iron-bash.js.map