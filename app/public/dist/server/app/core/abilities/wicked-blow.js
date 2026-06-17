"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WickedBlowStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class WickedBlowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, true);
        const damage = (_a = [30, 45, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, true);
    }
}
exports.WickedBlowStrategy = WickedBlowStrategy;
//# sourceMappingURL=wicked-blow.js.map