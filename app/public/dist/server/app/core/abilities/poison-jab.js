"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoisonJabStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PoisonJabStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        super.process(pokemon, board, target, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerPoison(3000, target, pokemon);
        pokemon.status.triggerPoison(3000, pokemon, pokemon);
        pokemon.moveTo(target.positionX, target.positionY, board, true);
    }
}
exports.PoisonJabStrategy = PoisonJabStrategy;
//# sourceMappingURL=poison-jab.js.map