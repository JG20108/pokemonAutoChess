"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class RecoverStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const heal = ((_a = [25, 25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100) / 100 * pokemon.maxHP;
        pokemon.handleHeal(heal, pokemon, 1, crit);
    }
}
exports.RecoverStrategy = RecoverStrategy;
//# sourceMappingURL=recover.js.map