"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonTailStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DragonTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 100, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        const defenseBuff = (_b = [2, 4, 6, 10][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 10;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addDefense(defenseBuff, pokemon, 1, crit);
        pokemon.addSpecialDefense(defenseBuff, pokemon, 1, crit);
    }
}
exports.DragonTailStrategy = DragonTailStrategy;
//# sourceMappingURL=dragon-tail.js.map