"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsyShockStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class PsyShockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const ppBurn = ((_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160) * (1 + pokemon.ap / 100);
        const ppStolen = (0, number_1.max)(target.pp)(ppBurn);
        const extraPP = ppBurn - ppStolen;
        target.addPP(-ppStolen, pokemon, 0, false);
        pokemon.addShield(ppBurn, pokemon, 0, false);
        if (extraPP > 0) {
            target.handleSpecialDamage(extraPP, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
        }
    }
}
exports.PsyShockStrategy = PsyShockStrategy;
//# sourceMappingURL=psy-shock.js.map