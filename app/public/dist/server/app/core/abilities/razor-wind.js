"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorWindStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RazorWindStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RazorWindStrategy = RazorWindStrategy;
//# sourceMappingURL=razor-wind.js.map