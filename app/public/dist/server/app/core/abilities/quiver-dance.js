"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuiverDanceStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class QuiverDanceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        pokemon.addAttack((_a = [3, 4, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10, pokemon, 1, crit);
        pokemon.addSpecialDefense((_b = [3, 4, 5, 10][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 10, pokemon, 1, crit);
        pokemon.addSpeed((_c = [10, 10, 10, 15][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 15, pokemon, 1, crit);
        pokemon.addAbilityPower(20, pokemon, 0, false);
    }
}
exports.QuiverDanceStrategy = QuiverDanceStrategy;
//# sourceMappingURL=quiver-dance.js.map