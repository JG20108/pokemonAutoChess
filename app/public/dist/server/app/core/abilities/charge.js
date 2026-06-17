"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const ability_strategy_1 = require("./ability-strategy");
class ChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        pokemon.effects.add(Effect_1.EffectEnum.CHARGE);
    }
}
exports.ChargeStrategy = ChargeStrategy;
//# sourceMappingURL=charge.js.map