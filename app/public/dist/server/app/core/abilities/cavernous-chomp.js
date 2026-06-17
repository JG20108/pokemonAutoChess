"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CavernousChompStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CavernousChompStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 160, 320][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 320;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (death) {
            const enragedDuration = (_b = [1000, 2000, 3000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 3000;
            pokemon.status.triggerRage(enragedDuration, pokemon);
        }
    }
}
exports.CavernousChompStrategy = CavernousChompStrategy;
//# sourceMappingURL=cavernous-chomp.js.map