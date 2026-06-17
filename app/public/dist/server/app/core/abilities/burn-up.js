"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurnUpStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BurnUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 400;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.status.triggerBurn(3000, pokemon, pokemon);
    }
}
exports.BurnUpStrategy = BurnUpStrategy;
//# sourceMappingURL=burn-up.js.map