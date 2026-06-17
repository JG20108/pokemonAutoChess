"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class SwaggerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const baseDuration = (_a = [1500, 2000, 3000, 5000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5000;
        const duration = Math.round(baseDuration * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        target.status.triggerConfusion(duration, target, pokemon);
        target.status.triggerRage(duration, target);
    }
}
exports.SwaggerStrategy = SwaggerStrategy;
//# sourceMappingURL=swagger.js.map