"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrushGripStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CrushGripStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const base = (_a = [15, 25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const scaling = (_b = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 400;
        const damage = Math.round(base + (target.hp / target.maxHP) * scaling);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.CrushGripStrategy = CrushGripStrategy;
//# sourceMappingURL=crush-grip.js.map