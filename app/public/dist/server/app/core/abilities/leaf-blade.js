"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafBladeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class LeafBladeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, true);
        const damage = Math.round(pokemon.atk * ((_a = [100, 125, 150, 250][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 250) / 100);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, true);
    }
}
exports.LeafBladeStrategy = LeafBladeStrategy;
//# sourceMappingURL=leaf-blade.js.map