"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleEdgeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class DoubleEdgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [55, 110, 220, 440][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 440;
        const recoil = (_b = [20, 40, 60, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        if (pokemon.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
            pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        }
    }
}
exports.DoubleEdgeStrategy = DoubleEdgeStrategy;
//# sourceMappingURL=double-edge.js.map