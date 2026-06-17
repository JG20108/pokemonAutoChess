"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulationBombStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PopulationBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = 10;
        const numberOfAttacks = Math.round(((_a = [4, 8, 12, 16, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20) * (1 + pokemon.ap / 100));
        for (let i = 0; i < numberOfAttacks; i++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
        }
    }
}
exports.PopulationBombStrategy = PopulationBombStrategy;
//# sourceMappingURL=population-bomb.js.map