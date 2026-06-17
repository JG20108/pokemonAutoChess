"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeismicTossStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SeismicTossStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [5, 10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const totalDamage = damage * (pokemon.player ? pokemon.player.experienceManager.level : 5);
        target.handleSpecialDamage(totalDamage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SeismicTossStrategy = SeismicTossStrategy;
//# sourceMappingURL=seismic-toss.js.map