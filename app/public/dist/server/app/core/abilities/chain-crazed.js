"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainCrazedStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ChainCrazedStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        pokemon.status.triggerPoison(3000, pokemon, pokemon);
        const speedBuff = (_a = [10, 15, 20, 25][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        const attackBuff = (_b = [5, 10, 15, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20;
        const defenseBuff = (_c = [3, 6, 10, 15][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 15;
        pokemon.addSpeed(speedBuff, pokemon, 0, false);
        pokemon.addAttack(attackBuff, pokemon, 1, crit);
        pokemon.addDefense(defenseBuff, pokemon, 1, crit);
    }
}
exports.ChainCrazedStrategy = ChainCrazedStrategy;
//# sourceMappingURL=chain-crazed.js.map