"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutrageStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class OutrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        pokemon.status.triggerConfusion(2000, pokemon, pokemon);
        const damage = Math.round(pokemon.atk * ((_a = [3, 3, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6));
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team && (v === null || v === void 0 ? void 0 : v.id) !== target.id)
            .concat(target)
            .forEach((v) => {
            if (v) {
                pokemon.broadcastAbility({
                    targetX: v.positionX,
                    targetY: v.positionY
                });
                v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OutrageStrategy = OutrageStrategy;
//# sourceMappingURL=outrage.js.map