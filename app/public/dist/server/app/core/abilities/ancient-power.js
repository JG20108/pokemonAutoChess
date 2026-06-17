"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AncientPowerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class AncientPowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 120, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addAbilityPower(25, pokemon, 0, false);
    }
}
exports.AncientPowerStrategy = AncientPowerStrategy;
//# sourceMappingURL=ancient-power.js.map