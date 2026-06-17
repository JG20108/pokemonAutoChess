"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceHammerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class IceHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        target.status.triggerFreeze(3000, target, pokemon);
        pokemon.status.triggerParalysis(3000, pokemon, pokemon);
        const damage = (_a = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 400;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.IceHammerStrategy = IceHammerStrategy;
//# sourceMappingURL=ice-hammer.js.map