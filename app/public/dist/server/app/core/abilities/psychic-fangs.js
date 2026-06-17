"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsychicFangsStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PsychicFangsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        target.atk = Math.min(target.atk, target.baseAtk);
        target.def = Math.min(target.def, target.baseDef);
        target.speDef = Math.min(target.speDef, target.baseSpeDef);
        target.handleSpecialDamage((_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.PsychicFangsStrategy = PsychicFangsStrategy;
//# sourceMappingURL=psychic-fangs.js.map