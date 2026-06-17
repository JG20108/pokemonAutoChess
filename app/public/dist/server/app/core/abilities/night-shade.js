"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightShadeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class NightShadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = Math.ceil(((_a = [0.25, 0.33, 0.5, 0.7][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.7) *
            target.maxHP *
            (1 + (0.5 * pokemon.ap) / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, false);
    }
}
exports.NightShadeStrategy = NightShadeStrategy;
//# sourceMappingURL=night-shade.js.map