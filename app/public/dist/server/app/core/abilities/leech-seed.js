"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeechSeedStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class LeechSeedStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const duration = (_a = [3000, 6000, 12000, 24000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 24000;
        const heal = (_b = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 160;
        pokemon.handleHeal(heal, pokemon, 1, crit);
        target.status.triggerPoison(duration, target, pokemon);
    }
}
exports.LeechSeedStrategy = LeechSeedStrategy;
//# sourceMappingURL=leech-seed.js.map