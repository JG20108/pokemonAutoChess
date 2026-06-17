"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelterStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const ability_strategy_1 = require("./ability-strategy");
class ShelterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const defGain = (_a = [3, 6, 12, 24][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 24;
        pokemon.addDefense(defGain, pokemon, 1, crit);
        board.addBoardEffect(pokemon.targetX, pokemon.targetY, Effect_1.EffectEnum.SMOKE, pokemon.simulation);
    }
}
exports.ShelterStrategy = ShelterStrategy;
//# sourceMappingURL=shelter.js.map