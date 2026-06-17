"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OblivionWingStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class OblivionWingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [90, 120, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (takenDamage > 0) {
            pokemon.handleHeal(Math.round(0.75 * takenDamage), pokemon, 0, false);
        }
    }
}
exports.OblivionWingStrategy = OblivionWingStrategy;
//# sourceMappingURL=oblivion-wing.js.map