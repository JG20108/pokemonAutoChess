"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageFactor = (_a = [0.2, 0.3, 0.4, 0.8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.8;
        const damage = damageFactor * target.maxHP;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerWound(5000, target, pokemon);
    }
}
exports.CutStrategy = CutStrategy;
//# sourceMappingURL=cut.js.map