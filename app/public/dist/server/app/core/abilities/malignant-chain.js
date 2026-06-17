"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MalignantChainStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class MalignantChainStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const duration = Math.round(((_a = [3000, 3000, 3000, 6000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6000) * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        target.status.triggerPossessed(duration, target, pokemon);
        const nbStacks = (_b = [3, 3, 3, 6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6;
        for (let i = 0; i < nbStacks; i++) {
            target.status.triggerPoison(duration, target, pokemon);
        }
    }
}
exports.MalignantChainStrategy = MalignantChainStrategy;
//# sourceMappingURL=malignant-chain.js.map