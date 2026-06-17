"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashingClawStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SlashingClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        if (target.status.wound) {
            damage = Math.ceil(damage * 1.3);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerWound(5000, target, pokemon);
    }
}
exports.SlashingClawStrategy = SlashingClawStrategy;
//# sourceMappingURL=slashing-claw.js.map