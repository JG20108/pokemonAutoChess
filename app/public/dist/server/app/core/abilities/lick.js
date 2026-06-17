"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class LickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        target.status.triggerConfusion(3000, target, pokemon);
        target.status.triggerParalysis(3000, target, pokemon);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.LickStrategy = LickStrategy;
//# sourceMappingURL=lick.js.map