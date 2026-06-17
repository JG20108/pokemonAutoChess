"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XScissorStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class XScissorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 40, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.XScissorStrategy = XScissorStrategy;
//# sourceMappingURL=x-scissor.js.map