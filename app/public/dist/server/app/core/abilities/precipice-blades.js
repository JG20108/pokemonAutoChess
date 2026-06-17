"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecipiceBladesStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PrecipiceBladesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        board.forEach((x, y, tg) => {
            if ((tg && pokemon.team !== tg.team && pokemon.positionY === y) ||
                (tg && pokemon.team !== tg.team && pokemon.positionX === x)) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.broadcastAbility({ positionX: x, positionY: y });
            }
        });
    }
}
exports.PrecipiceBladesStrategy = PrecipiceBladesStrategy;
//# sourceMappingURL=precipice-blades.js.map