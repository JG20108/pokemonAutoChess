"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeHeartStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class TakeHeartStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const statBuff = (_a = [4, 6, 8, 12][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 12;
        pokemon.addAttack(statBuff, pokemon, 1, crit);
        pokemon.addSpecialDefense(statBuff, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus(pokemon, pokemon);
        pokemon.resetCooldown(100);
    }
}
exports.TakeHeartStrategy = TakeHeartStrategy;
//# sourceMappingURL=take-heart.js.map