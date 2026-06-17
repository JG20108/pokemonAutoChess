"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ProtectStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const factor = 0.5;
        const duration = Math.round(((_a = [1000, 3000, 5000, 8000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8000) *
            (1 + (pokemon.ap / 100) * factor) *
            (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
        pokemon.status.triggerProtect(duration);
    }
}
exports.ProtectStrategy = ProtectStrategy;
//# sourceMappingURL=protect.js.map