"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockOnStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const ability_strategy_1 = require("./ability-strategy");
class LockOnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        pokemon.effects.add(Effect_1.EffectEnum.LOCK_ON);
    }
}
exports.LockOnStrategy = LockOnStrategy;
//# sourceMappingURL=lock-on.js.map