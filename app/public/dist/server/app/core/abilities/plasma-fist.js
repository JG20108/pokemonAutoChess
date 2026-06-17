"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlasmaFistStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PlasmaFistStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [60, 90, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (takenDamage > 0) {
            pokemon.handleHeal(Math.round(takenDamage * 0.3), pokemon, 0, false);
        }
    }
}
exports.PlasmaFistStrategy = PlasmaFistStrategy;
//# sourceMappingURL=plasma-fist.js.map