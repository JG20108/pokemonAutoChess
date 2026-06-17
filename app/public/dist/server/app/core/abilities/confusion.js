"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfusionStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ConfusionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const confusionDuration = (_a = [3000, 5000, 7000, 10000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10000;
        const damage = (_b = [75, 150, 300, 500][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 500;
        if (target.status.confusion) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            target.status.triggerSilence(confusionDuration, target, pokemon);
            target.status.triggerConfusion(confusionDuration, target, pokemon);
        }
    }
}
exports.ConfusionStrategy = ConfusionStrategy;
//# sourceMappingURL=confusion.js.map