"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowSneakStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ShadowSneakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 40, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const damageType = target.status.silence
            ? Game_1.AttackType.TRUE
            : Game_1.AttackType.SPECIAL;
        target.handleSpecialDamage(damage, board, damageType, pokemon, crit);
    }
}
exports.ShadowSneakStrategy = ShadowSneakStrategy;
//# sourceMappingURL=shadow-sneak.js.map