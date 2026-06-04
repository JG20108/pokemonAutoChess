"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHatchTime = getHatchTime;
const config_1 = require("../../config");
const Effect_1 = require("../../types/enum/Effect");
const Pokemon_1 = require("../../types/enum/Pokemon");
function getHatchTime(pokemon, player) {
    if (pokemon.name === Pokemon_1.Pkm.EGG) {
        return player.effects.has(Effect_1.EffectEnum.BREEDER) ||
            player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS)
            ? config_1.EvolutionTime.EGG_HATCH - 1
            : config_1.EvolutionTime.EGG_HATCH;
    }
    return config_1.EvolutionTime.EVOLVE_HATCH;
}
//# sourceMappingURL=hatch-time.js.map