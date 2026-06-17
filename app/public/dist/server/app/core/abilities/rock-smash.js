"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockSmashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RockSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const armorBreakDuration = (_b = [3000, 6000, 9000, 18000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 18000;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerArmorReduction(armorBreakDuration, target);
    }
}
exports.RockSmashStrategy = RockSmashStrategy;
//# sourceMappingURL=rock-smash.js.map