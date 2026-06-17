"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockWreckerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RockWreckerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [80, 160, 320, 640][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 640;
        target.status.triggerFlinch(2000, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.status.triggerFatigue(4000, pokemon);
    }
}
exports.RockWreckerStrategy = RockWreckerStrategy;
//# sourceMappingURL=rock-wrecker.js.map