"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LovelyKissStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class LovelyKissStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        if (target.status.sleep) {
            const damage = (_a = [50, 100, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            const duration = Math.round(((_b = [2000, 4000, 6000, 12000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 12000) *
                (1 + pokemon.ap / 100) *
                (crit ? pokemon.critPower : 1));
            target.status.triggerSleep(duration, target);
        }
    }
}
exports.LovelyKissStrategy = LovelyKissStrategy;
//# sourceMappingURL=lovely-kiss.js.map