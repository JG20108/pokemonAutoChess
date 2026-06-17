"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicPunchStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DynamicPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const duration = (_a = [2000, 4000, 6000, 8000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8000;
        const damage = (_b = [40, 80, 160, 320][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 320;
        target.status.triggerConfusion(duration, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DynamicPunchStrategy = DynamicPunchStrategy;
//# sourceMappingURL=dynamic-punch.js.map