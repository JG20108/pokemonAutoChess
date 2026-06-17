"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HornDrillStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class HornDrillStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageFactor = (_a = [3, 4, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        let damage = pokemon.atk * damageFactor;
        const executeChance = 0.3 * (1 + (0, number_1.min)(0)((pokemon.atk - target.atk) / target.atk));
        if ((0, random_1.chance)(executeChance, pokemon)) {
            damage = 9999;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.HornDrillStrategy = HornDrillStrategy;
//# sourceMappingURL=horn-drill.js.map