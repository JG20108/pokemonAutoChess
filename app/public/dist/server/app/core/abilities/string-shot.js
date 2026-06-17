"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringShotStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class StringShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.status.triggerParalysis(5000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.StringShotStrategy = StringShotStrategy;
//# sourceMappingURL=string-shot.js.map