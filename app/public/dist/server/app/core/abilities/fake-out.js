"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeOutStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FakeOutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
        if (pokemon.ap >= 0)
            target.status.triggerFlinch(3000, target);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addAbilityPower(-30, pokemon, 0, false);
    }
}
exports.FakeOutStrategy = FakeOutStrategy;
//# sourceMappingURL=fake-out.js.map