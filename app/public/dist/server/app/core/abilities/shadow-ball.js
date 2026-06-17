"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowBallStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ShadowBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        board.forEach((x, y, v) => {
            if (v && pokemon.team != v.team) {
                v.addSpecialDefense(-2, pokemon, 0, false);
            }
        });
    }
}
exports.ShadowBallStrategy = ShadowBallStrategy;
//# sourceMappingURL=shadow-ball.js.map