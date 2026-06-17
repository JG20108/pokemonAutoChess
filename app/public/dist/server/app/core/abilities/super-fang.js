"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperFangStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SuperFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const fangPercent = (_a = [0.2, 0.3, 0.5, 0.7][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.7;
        const damage = Math.ceil(fangPercent * target.maxHP * (1 + (0.5 * pokemon.ap) / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, false);
    }
}
exports.SuperFangStrategy = SuperFangStrategy;
//# sourceMappingURL=super-fang.js.map