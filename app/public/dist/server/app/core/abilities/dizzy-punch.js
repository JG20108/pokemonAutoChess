"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DizzyPunchStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DizzyPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        if (target.shield > 0) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerConfusion(3000, target, pokemon);
    }
}
exports.DizzyPunchStrategy = DizzyPunchStrategy;
//# sourceMappingURL=dizzy-punch.js.map