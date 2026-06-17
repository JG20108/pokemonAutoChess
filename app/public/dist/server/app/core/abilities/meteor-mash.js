"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeteorMashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MeteorMashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const nbHits = 3 + (pokemon.status.psychicField ? 1 : 0);
        const damage = Math.round(pokemon.atk * ((_a = [100, 120, 140, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200) / 100);
        for (let n = 0; n < nbHits; n++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.addAttack(2, pokemon, 0, false);
        }
    }
}
exports.MeteorMashStrategy = MeteorMashStrategy;
//# sourceMappingURL=meteor-mash.js.map