"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SacredSwordIronStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SacredSwordIronStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const nbFallenAllies = board.getFallenAlliesCount(pokemon);
        const baseDmg = (_a = [40, 60, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const perFallenDmg = (_b = [15, 15, 15, 30][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 30;
        const damage = baseDmg + perFallenDmg * nbFallenAllies;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SacredSwordIronStrategy = SacredSwordIronStrategy;
//# sourceMappingURL=sacred-sword-iron.js.map