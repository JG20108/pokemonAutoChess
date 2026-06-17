"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToxicStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ToxicStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const factor = 0.5;
        const baseDuration = (_a = [3000, 6000, 9000, 18000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 18000;
        const duration = Math.round(baseDuration *
            (1 + (pokemon.ap / 100) * factor) *
            (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
        const count = (_b = [1, 2, 3, 4][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 4;
        const closestEnemies = board.getClosestEnemies(pokemon.positionX, pokemon.positionY, target.team);
        for (let i = 0; i < count; i++) {
            const enemy = closestEnemies[i];
            if (enemy) {
                enemy.status.triggerPoison(duration, enemy, pokemon);
            }
        }
    }
}
exports.ToxicStrategy = ToxicStrategy;
//# sourceMappingURL=toxic.js.map