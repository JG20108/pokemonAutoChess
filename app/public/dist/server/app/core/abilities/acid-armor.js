"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidArmorStrategy = void 0;
const distance_1 = require("../../utils/distance");
const effect_1 = require("../effects/effect");
const ability_strategy_1 = require("./ability-strategy");
class AcidArmorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const defGain = (_a = [3, 6, 12, 25][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        pokemon.addDefense(defGain, pokemon, 1, crit);
        let count = 4;
        const acidHitEffect = new effect_1.OnDamageReceivedEffect(({ pokemon, attacker }) => {
            if (attacker &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, attacker.positionX, attacker.positionY) === 1) {
                attacker.addDefense(-1, pokemon, 0, false);
            }
            count--;
            if (count <= 0) {
                pokemon.effectsSet.delete(acidHitEffect);
            }
        });
        pokemon.effectsSet.add(acidHitEffect);
    }
}
exports.AcidArmorStrategy = AcidArmorStrategy;
//# sourceMappingURL=acid-armor.js.map