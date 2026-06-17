"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginPulseStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class OriginPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 75, 100, 120, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && target.positionY == y) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OriginPulseStrategy = OriginPulseStrategy;
//# sourceMappingURL=origin-pulse.js.map