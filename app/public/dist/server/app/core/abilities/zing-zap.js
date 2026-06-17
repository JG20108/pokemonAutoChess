"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZingZapStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ZingZapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 90, 180][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 180;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerFlinch(3000, target, pokemon);
        if (target.status.paralysis) {
            pokemon.addShield((_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80, pokemon, 1, crit);
        }
        const orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, undefined);
        const destination = board.getKnockBackPlace(target.positionX, target.positionY, orientation);
        if (destination) {
            pokemon.moveTo(destination.x, destination.y, board, false);
        }
    }
}
exports.ZingZapStrategy = ZingZapStrategy;
//# sourceMappingURL=zing-zap.js.map