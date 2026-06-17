"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrengthStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class StrengthStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const dmgMultiplier = (_a = [2, 2, 2, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        const damage = dmgMultiplier * (pokemon.atk + pokemon.def + pokemon.speDef) + pokemon.ap;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
    }
}
exports.StrengthStrategy = StrengthStrategy;
//# sourceMappingURL=strength.js.map