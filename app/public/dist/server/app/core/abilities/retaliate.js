"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetaliateStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class RetaliateStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const nbFallenAllies = board.getFallenAlliesCount(pokemon);
        const damage = pokemon.atk * ((_a = [1.5, 1.5, 1.5, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3);
        for (let i = 0; i <= nbFallenAllies; i++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.RetaliateStrategy = RetaliateStrategy;
//# sourceMappingURL=retaliate.js.map