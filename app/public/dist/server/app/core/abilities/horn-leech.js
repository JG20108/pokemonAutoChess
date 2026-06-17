"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HornLeechStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class HornLeechStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = ((_a = [2, 2, 3, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5) * pokemon.atk;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const heal = Math.round(takenDamage * 0.5);
        const overheal = (0, number_1.min)(0)(heal - (pokemon.maxHP - pokemon.hp));
        pokemon.handleHeal(heal, pokemon, 0, false);
        if (overheal > 0) {
            pokemon.addShield(Math.round(overheal * 0.5), pokemon, 0, false);
        }
    }
}
exports.HornLeechStrategy = HornLeechStrategy;
//# sourceMappingURL=horn-leech.js.map