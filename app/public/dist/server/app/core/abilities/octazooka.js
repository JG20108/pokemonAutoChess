"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctazookaStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class OctazookaStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = Math.ceil(pokemon.atk * ((_a = [3, 3, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerBlinded(4000, target);
    }
}
exports.OctazookaStrategy = OctazookaStrategy;
//# sourceMappingURL=octazooka.js.map