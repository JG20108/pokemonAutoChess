"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BugBiteStrategy = void 0;
const types_1 = require("../../types");
const Game_1 = require("../../types/enum/Game");
const array_1 = require("../../utils/array");
const schemas_1 = require("../../utils/schemas");
const ability_strategy_1 = require("./ability-strategy");
class BugBiteStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const berryStolen = (0, schemas_1.schemaValues)(target.items).find((item) => (0, array_1.isIn)(types_1.Berries, item));
        if (berryStolen) {
            pokemon.eatBerry(berryStolen, target);
        }
    }
}
exports.BugBiteStrategy = BugBiteStrategy;
//# sourceMappingURL=bug-bite.js.map