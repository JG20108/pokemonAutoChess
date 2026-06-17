"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBreakStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BrickBreakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMultiplier = (_a = [1.5, 1.5, 1.5, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
        const damage = damageMultiplier * pokemon.atk;
        if (target.status.protect) {
            target.status.protect = false;
            target.status.protectCooldown = 0;
        }
        if (target.status.reflect) {
            target.status.reflect = false;
            target.status.reflectCooldown = 0;
        }
        if (target.status.magicBounce) {
            target.status.magicBounce = false;
            target.status.magicBounceCooldown = 0;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        target.status.triggerArmorReduction(4000, target);
    }
}
exports.BrickBreakStrategy = BrickBreakStrategy;
//# sourceMappingURL=brick-break.js.map