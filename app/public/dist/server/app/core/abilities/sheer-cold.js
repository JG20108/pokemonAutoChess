"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheerColdStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Synergy_1 = require("../../types/enum/Synergy");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class SheerColdStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        let executeChance = ((_a = [0.1, 0.2, 0.3, 0.6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.6) *
            (1 + (0, number_1.min)(0)((pokemon.hp - target.hp) / target.hp));
        if (target.types.has(Synergy_1.Synergy.ICE))
            executeChance = 0;
        else if (target.status.freeze)
            executeChance = 1;
        let damage = (_b = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 400;
        if ((0, random_1.chance)(executeChance, pokemon))
            damage = 9999;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.SheerColdStrategy = SheerColdStrategy;
//# sourceMappingURL=sheer-cold.js.map