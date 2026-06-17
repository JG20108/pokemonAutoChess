"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SacredSwordGrassStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SacredSwordGrassStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const nbRemainingAllies = board.cells.filter((p) => p && p.team === pokemon.team).length;
        const baseDmg = (_a = [40, 60, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const perAllyDmg = (_b = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20;
        const damage = baseDmg + perAllyDmg * nbRemainingAllies;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SacredSwordGrassStrategy = SacredSwordGrassStrategy;
//# sourceMappingURL=sacred-sword-grass.js.map