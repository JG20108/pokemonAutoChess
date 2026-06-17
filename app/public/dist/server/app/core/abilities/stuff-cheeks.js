"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StuffCheeksStrategy = void 0;
const Item_1 = require("../../types/enum/Item");
const array_1 = require("../../utils/array");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const ability_strategy_1 = require("./ability-strategy");
class StuffCheeksStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const heldBerry = (0, random_1.pickRandomIn)((0, schemas_1.schemaValues)(pokemon.items).filter((item) => (0, array_1.isIn)(Item_1.Berries, item)));
        if (heldBerry) {
            pokemon.eatBerry(heldBerry, undefined, true, pokemon.ap, crit);
        }
        else {
            const berry = (0, random_1.pickRandomIn)(Item_1.NonSpecialBerries);
            pokemon.addItem(berry, true);
        }
    }
}
exports.StuffCheeksStrategy = StuffCheeksStrategy;
//# sourceMappingURL=stuff-cheeks.js.map