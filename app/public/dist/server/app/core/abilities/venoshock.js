"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenoshockStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class VenoshockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        if (pokemon.status.poisonStacks > 0) {
            damage = damage * 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.VenoshockStrategy = VenoshockStrategy;
//# sourceMappingURL=venoshock.js.map