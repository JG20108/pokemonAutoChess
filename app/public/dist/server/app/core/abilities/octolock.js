"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctolockStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class OctolockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 90, 180][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 180;
        const duration = (_b = [3000, 3000, 6000, 10000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 10000;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerLocked(duration, target);
        target.status.triggerArmorReduction(duration, target);
    }
}
exports.OctolockStrategy = OctolockStrategy;
//# sourceMappingURL=octolock.js.map