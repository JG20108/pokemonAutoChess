"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsychoBoostStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PsychoBoostStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [90, 120, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
        for (const positionX of [
            target.positionX - 1,
            target.positionX,
            target.positionX + 1
        ]) {
            const tg = board.getEntityOnCell(positionX, target.positionY);
            if (tg && tg.team !== pokemon.team) {
                pokemon.broadcastAbility({
                    positionX: tg.positionX,
                    positionY: tg.positionY
                });
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                pokemon.addAbilityPower(-20, pokemon, 0, false);
            }
        }
    }
}
exports.PsychoBoostStrategy = PsychoBoostStrategy;
//# sourceMappingURL=psycho-boost.js.map