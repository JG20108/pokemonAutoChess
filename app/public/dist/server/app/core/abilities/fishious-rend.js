"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishiousRendStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FishiousRendStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = ((_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160) *
            (pokemon.speed > target.speed ? 2 : 1);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.FishiousRendStrategy = FishiousRendStrategy;
//# sourceMappingURL=fishious-rend.js.map