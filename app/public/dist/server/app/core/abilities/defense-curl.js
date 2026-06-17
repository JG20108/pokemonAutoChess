"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefenseCurlStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class DefenseCurlStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [5, 10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        pokemon.addDefense(buff, pokemon, 1, crit);
        pokemon.addSpecialDefense(buff, pokemon, 1, crit);
        pokemon.resetCooldown(250);
    }
}
exports.DefenseCurlStrategy = DefenseCurlStrategy;
//# sourceMappingURL=defense-curl.js.map