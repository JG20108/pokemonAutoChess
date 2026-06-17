"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastStrategy = void 0;
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class ForecastStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        board.forEach((x, y, p) => {
            var _a, _b, _c, _d;
            const shield = (_a = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
            const attack = (_b = [4, 4, 4, 8][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 8;
            const pp = (_c = [8, 8, 8, 16][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 16;
            const def = (_d = [2, 2, 2, 4][pokemon.stars - 1]) !== null && _d !== void 0 ? _d : 4;
            if (p && pokemon.team === p.team) {
                p.addShield(shield, pokemon, 1, crit);
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_SUN) {
                    p.addAttack(attack, pokemon, 1, crit);
                }
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_RAIN) {
                    p.addPP(pp, pokemon, 1, crit);
                }
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_HAIL) {
                    p.addDefense(def, pokemon, 1, crit);
                    p.addSpecialDefense(def, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.ForecastStrategy = ForecastStrategy;
//# sourceMappingURL=forecast.js.map