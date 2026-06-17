"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerWhipStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PowerWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = ((_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120) + 0.3 * pokemon.hp;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PowerWhipStrategy = PowerWhipStrategy;
//# sourceMappingURL=power-whip.js.map