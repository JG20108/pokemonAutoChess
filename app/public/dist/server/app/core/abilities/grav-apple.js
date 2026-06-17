"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravAppleStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class GravAppleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(target.def === 0 ? damage * 2 : damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
    }
}
exports.GravAppleStrategy = GravAppleStrategy;
//# sourceMappingURL=grav-apple.js.map