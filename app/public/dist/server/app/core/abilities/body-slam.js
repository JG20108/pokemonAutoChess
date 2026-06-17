"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodySlamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BodySlamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMultiplier = (_a = [0.3, 0.3, 0.5, 0.8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.8;
        const damage = Math.round(damageMultiplier * pokemon.maxHP * (1 + pokemon.ap / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
    }
}
exports.BodySlamStrategy = BodySlamStrategy;
//# sourceMappingURL=body-slam.js.map