"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockHeadStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RockHeadStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = Math.round(((_a = [1.2, 1.2, 1.5, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3) * (pokemon.atk + pokemon.def));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.RockHeadStrategy = RockHeadStrategy;
//# sourceMappingURL=rock-head.js.map