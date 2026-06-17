"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonEnergyStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DragonEnergyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damageMultiplier = (_a = [1, 1, 1, 1.5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1.5;
        target.handleSpecialDamage(pokemon.hp * damageMultiplier, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DragonEnergyStrategy = DragonEnergyStrategy;
//# sourceMappingURL=dragon-energy.js.map