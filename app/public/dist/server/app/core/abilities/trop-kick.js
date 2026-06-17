"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TropKickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class TropKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 400;
        const atkDebuff = (_b = [3, 5, 7, 14][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 14;
        target.addAttack(-atkDebuff, pokemon, 1, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.TropKickStrategy = TropKickStrategy;
//# sourceMappingURL=trop-kick.js.map