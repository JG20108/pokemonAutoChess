"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KowtowCleaveStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class KowtowCleaveStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const nbFallenAllies = board.getFallenAlliesCount(pokemon);
        const damage = Math.round(pokemon.atk *
            (1.5 +
                nbFallenAllies *
                    ((_a = [0.2, 0.2, 0.2, 0.5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.5) *
                    (1 + pokemon.ap / 100)));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, false);
    }
}
exports.KowtowCleaveStrategy = KowtowCleaveStrategy;
//# sourceMappingURL=kowtow-cleave.js.map