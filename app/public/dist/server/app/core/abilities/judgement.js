"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgementStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class JudgementStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        let synergyLevelsCount = 0;
        const synergies = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies;
        if (synergies) {
            pokemon.types.forEach((type) => {
                var _a;
                synergyLevelsCount += (_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0;
            });
        }
        const damage = ((_b = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20) * synergyLevelsCount;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.JudgementStrategy = JudgementStrategy;
//# sourceMappingURL=judgement.js.map