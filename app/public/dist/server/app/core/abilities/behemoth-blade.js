"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BehemothBladeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BehemothBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = ((_a = [30, 60, 90, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240) + pokemon.atk;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, undefined);
        const destination = board.getKnockBackPlace(target.positionX, target.positionY, orientation);
        if (destination) {
            pokemon.moveTo(destination.x, destination.y, board, false);
        }
    }
}
exports.BehemothBladeStrategy = BehemothBladeStrategy;
//# sourceMappingURL=behemoth-blade.js.map