"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnockOffStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class KnockOffStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const baseDamage = (_a = [30, 60, 90, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const perItemDamage = (_b = [15, 20, 30, 35, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        const damage = baseDamage + target.items.size * perItemDamage;
        target.items.forEach((item) => {
            target.removeItem(item);
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.KnockOffStrategy = KnockOffStrategy;
//# sourceMappingURL=knock-off.js.map