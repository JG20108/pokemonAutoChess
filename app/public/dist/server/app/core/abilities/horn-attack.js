"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HornAttackStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class HornAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = ((_a = [3, 4, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10) * pokemon.atk;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerArmorReduction(8000, target);
    }
}
exports.HornAttackStrategy = HornAttackStrategy;
//# sourceMappingURL=horn-attack.js.map