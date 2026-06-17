"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AquaTailStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class AquaTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const shield = (_b = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 200;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addShield(shield, pokemon, 1, crit);
    }
}
exports.AquaTailStrategy = AquaTailStrategy;
//# sourceMappingURL=aqua-tail.js.map