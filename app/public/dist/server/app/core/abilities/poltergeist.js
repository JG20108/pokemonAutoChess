"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoltergeistStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const array_1 = require("../../utils/array");
const ability_strategy_1 = require("./ability-strategy");
class PoltergeistStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        target.items.forEach((item) => (damage += (0, array_1.isIn)(Item_1.Tools, item) ? 40 : 20));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PoltergeistStrategy = PoltergeistStrategy;
//# sourceMappingURL=poltergeist.js.map