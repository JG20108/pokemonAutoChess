"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayRoughStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PlayRoughStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        target.status.triggerCharm(2500, target, pokemon, false);
        target.handleSpecialDamage((_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PlayRoughStrategy = PlayRoughStrategy;
//# sourceMappingURL=play-rough.js.map