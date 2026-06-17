"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MindBendStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MindBendStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        if (target.status.runeProtect || target.status.possessed) {
            target.handleSpecialDamage((_a = [100, 100, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            const duration = Math.round(((_b = [2000, 2000, 2000, 4000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 4000) *
                (1 + pokemon.ap / 100) *
                (crit ? pokemon.critPower : 1));
            target.status.triggerPossessed(duration, target, pokemon);
        }
    }
}
exports.MindBendStrategy = MindBendStrategy;
//# sourceMappingURL=mind-bend.js.map