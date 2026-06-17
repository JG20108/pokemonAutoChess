"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MegaPunchStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MegaPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        if (pokemon.def > target.def)
            damage *= 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.MegaPunchStrategy = MegaPunchStrategy;
//# sourceMappingURL=mega-punch.js.map