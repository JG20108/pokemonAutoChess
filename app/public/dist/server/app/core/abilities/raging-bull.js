"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RagingBullStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RagingBullStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        target.status.triggerArmorReduction(3000, pokemon);
        target.status.reflectCooldown = 0;
        target.status.reflect = false;
        target.status.protectCooldown = 0;
        target.status.protect = false;
        target.status.magicBounce = false;
        target.status.magicBounceCooldown = 0;
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RagingBullStrategy = RagingBullStrategy;
//# sourceMappingURL=raging-bull.js.map