"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetalBurstStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MetalBurstStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const base = (_a = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const damage = Math.floor(base + 3 * pokemon.count.fightingBlockCount);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.MetalBurstStrategy = MetalBurstStrategy;
//# sourceMappingURL=metal-burst.js.map