"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlazeKickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BlazeKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        if (target.status.burn) {
            damage = Math.round(damage * 1.3);
        }
        target.status.triggerBurn(2000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.BlazeKickStrategy = BlazeKickStrategy;
//# sourceMappingURL=blaze-kick.js.map