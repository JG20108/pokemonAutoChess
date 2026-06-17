"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrashStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ThrashStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const atkBuff = (_a = [100, 100, 120, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        pokemon.addAttack(Math.floor(atkBuff / 100 * pokemon.baseAtk), pokemon, 1, crit);
        pokemon.status.triggerConfusion(3000, pokemon, pokemon);
    }
}
exports.ThrashStrategy = ThrashStrategy;
//# sourceMappingURL=thrash.js.map