"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseCombatStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CloseCombatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 65, 130, 260][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 260;
        pokemon.addDefense(-2, pokemon, 0, false);
        pokemon.addSpecialDefense(-2, pokemon, 0, false);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.CloseCombatStrategy = CloseCombatStrategy;
//# sourceMappingURL=close-combat.js.map