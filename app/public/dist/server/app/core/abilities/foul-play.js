"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoulPlayStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FoulPlayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = ((_a = [2, 4, 6, 12][pokemon.stars]) !== null && _a !== void 0 ? _a : 12) * target.atk;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.FoulPlayStrategy = FoulPlayStrategy;
//# sourceMappingURL=foul-play.js.map