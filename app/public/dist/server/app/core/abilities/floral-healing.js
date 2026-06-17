"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloralHealingStrategy = void 0;
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class FloralHealingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        if (pokemon.items.has(Item_1.Item.COMFEY) === false) {
            super.process(pokemon, board, target, crit);
        }
        pokemon.handleHeal(pokemon.maxPP, pokemon, 0, false);
    }
}
exports.FloralHealingStrategy = FloralHealingStrategy;
//# sourceMappingURL=floral-healing.js.map