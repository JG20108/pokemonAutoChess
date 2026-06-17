"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GunkShotStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class GunkShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 400;
        const baseDuration = (_b = [2000, 4000, 8000, 16000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 16000;
        const duration = Math.round(baseDuration * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerPoison(duration, target, pokemon);
    }
}
exports.GunkShotStrategy = GunkShotStrategy;
//# sourceMappingURL=gunk-shot.js.map