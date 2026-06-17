"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceFangStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class IceFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const freezeDuration = (_b = [1000, 1500, 2000, 2500][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2500;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerFreeze(freezeDuration, target, pokemon);
    }
}
exports.IceFangStrategy = IceFangStrategy;
//# sourceMappingURL=ice-fang.js.map