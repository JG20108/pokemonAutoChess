"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetalClawStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MetalClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const atkBuff = (_b = [2, 4, 6, 12][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 12;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        pokemon.addAttack(atkBuff, pokemon, 1, crit);
    }
}
exports.MetalClawStrategy = MetalClawStrategy;
//# sourceMappingURL=metal-claw.js.map