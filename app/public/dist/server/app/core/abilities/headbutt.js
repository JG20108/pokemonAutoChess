"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadbuttStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Passive_1 = require("../../types/enum/Passive");
const ability_strategy_1 = require("./ability-strategy");
class HeadbuttStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        if (pokemon.passive === Passive_1.Passive.EISCUE_ICE_FACE) {
            damage += pokemon.shield;
            pokemon.addShield(-pokemon.shield, pokemon, 0, false);
        }
        if (target.shield > 0) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerFlinch(5000, target, pokemon);
    }
}
exports.HeadbuttStrategy = HeadbuttStrategy;
//# sourceMappingURL=headbutt.js.map