"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterYouStrategy = void 0;
const unit_score_1 = require("../unit-score");
const ability_strategy_1 = require("./ability-strategy");
class AfterYouStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const ppGain = (_a = [5, 10, 15, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const speedGain = (_b = [5, 10, 15, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20;
        const nearestAllies = pokemon.state.getNearestAllies(pokemon, board);
        const strongestNearestAlly = (0, unit_score_1.getStrongestUnit)(nearestAllies);
        if (strongestNearestAlly) {
            strongestNearestAlly.addPP(ppGain, pokemon, 1, crit);
            strongestNearestAlly.addSpeed(speedGain, pokemon, 1, crit);
        }
    }
}
exports.AfterYouStrategy = AfterYouStrategy;
//# sourceMappingURL=after-you.js.map