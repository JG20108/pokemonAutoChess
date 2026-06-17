"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IronHeadStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class IronHeadStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [5, 10, 15, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.addDefense(buff, pokemon, 1, crit);
        pokemon.addSpecialDefense(buff, pokemon, 1, crit);
        target.handleSpecialDamage(pokemon.def + pokemon.speDef, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.IronHeadStrategy = IronHeadStrategy;
//# sourceMappingURL=iron-head.js.map