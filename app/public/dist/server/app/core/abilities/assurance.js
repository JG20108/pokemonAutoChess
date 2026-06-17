"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssuranceStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class AssuranceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.handleSpecialDamage(pokemon.hp / pokemon.maxHP < 0.5 ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.AssuranceStrategy = AssuranceStrategy;
//# sourceMappingURL=assurance.js.map