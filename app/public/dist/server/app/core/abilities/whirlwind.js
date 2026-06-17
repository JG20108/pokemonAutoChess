"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhirlwindStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class WhirlwindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const x = target.positionX;
        const y = target.positionY;
        const damage = (_a = [40, 80, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        target.flyAway(board, false, false);
        pokemon.broadcastAbility({
            positionX: x,
            positionY: y,
            targetX: target.positionX,
            targetY: target.positionY
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.WhirlwindStrategy = WhirlwindStrategy;
//# sourceMappingURL=whirlwind.js.map