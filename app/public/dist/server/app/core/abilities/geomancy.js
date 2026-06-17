"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeomancyStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class GeomancyStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        pokemon.addAttack((_a = [15, 15, 15, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30, pokemon, 1, crit);
        pokemon.addSpecialDefense((_b = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20, pokemon, 1, crit);
        pokemon.addSpeed(15, pokemon, 0, false);
    }
}
exports.GeomancyStrategy = GeomancyStrategy;
//# sourceMappingURL=geomancy.js.map