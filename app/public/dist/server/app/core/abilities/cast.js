"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castAbility = castAbility;
const Effect_1 = require("../../types/enum/Effect");
const random_1 = require("../../utils/random");
const effect_1 = require("../effects/effect");
function castAbility(abilityStrategy, pokemon, board, target, canCrit = true, preventDefaultAnim = false) {
    if (pokemon.canCast === false)
        return;
    let crit = false;
    if (canCrit &&
        (pokemon.effects.has(Effect_1.EffectEnum.ABILITY_CRIT) ||
            abilityStrategy.canCritByDefault)) {
        crit = (0, random_1.chance)(pokemon.critChance / 100, pokemon);
    }
    abilityStrategy.process(pokemon, board, target, crit, preventDefaultAnim);
    pokemon.getEffects(effect_1.OnAbilityCastEffect).forEach((effect) => {
        effect.apply(pokemon, board, target, crit);
    });
}
//# sourceMappingURL=cast.js.map