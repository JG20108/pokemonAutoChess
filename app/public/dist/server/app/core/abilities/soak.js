"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoakStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SoakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addPP(10, pokemon, 0, false);
            }
        });
    }
}
exports.SoakStrategy = SoakStrategy;
//# sourceMappingURL=soak.js.map