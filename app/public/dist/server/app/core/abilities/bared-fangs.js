"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaredFangsStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class BaredFangsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMultiplier = (_a = [1.2, 1.4, 1.6, 3.2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3.2;
        const damage = Math.round(pokemon.atk * damageMultiplier);
        const speedSteal = 10;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (target.items.has(Item_1.Item.TWIST_BAND) === false) {
            target.addSpeed(-speedSteal, pokemon, 1, crit);
            pokemon.addSpeed(speedSteal, pokemon, 1, crit);
        }
    }
}
exports.BaredFangsStrategy = BaredFangsStrategy;
//# sourceMappingURL=bared-fangs.js.map