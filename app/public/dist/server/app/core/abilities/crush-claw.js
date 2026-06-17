"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrushClawStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CrushClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const defLoss = (_a = [5, 10, 15, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        const damageFactor = (_b = [1, 1, 1, 2][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2;
        target.addDefense(-defLoss, pokemon, 0, false);
        for (let i = 0; i < 2; i++) {
            target.handleSpecialDamage(pokemon.atk * damageFactor, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
        }
    }
}
exports.CrushClawStrategy = CrushClawStrategy;
//# sourceMappingURL=crush-claw.js.map