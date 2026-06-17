"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranseStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class TranseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        pokemon.skill = Ability_1.Ability.HEADBUTT;
        if (pokemon.name === Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN) {
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.GALARIAN_DARMANITAN];
            pokemon.name = Pokemon_1.Pkm.GALARIAN_DARMANITAN;
            pokemon.changePassive(Passive_1.Passive.GALARIAN_DARMANITAN);
            pokemon.status.tree = false;
            pokemon.status.untargettable = false;
            pokemon.addAttack(-6, pokemon, 0, false);
            pokemon.addSpeed(60, pokemon, 0, false);
        }
        else {
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.DARMANITAN];
            pokemon.name = Pokemon_1.Pkm.DARMANITAN;
            pokemon.changePassive(Passive_1.Passive.DARMANITAN);
            pokemon.addAttack(10, pokemon, 0, false);
            pokemon.addSpeed(20, pokemon, 0, false);
            pokemon.addDefense(-6, pokemon, 0, false);
            pokemon.addSpecialDefense(-6, pokemon, 0, false);
            pokemon.range = (0, number_1.min)(1)(pokemon.range - 4);
            pokemon.effects.delete(Effect_1.EffectEnum.SPECIAL_ATTACKS);
        }
        pokemon.skill = Ability_1.Ability.HEADBUTT;
        pokemon.handleHeal(Math.round(0.3 * pokemon.maxHP), pokemon, 0, false);
        pokemon.toMovingState();
        pokemon.cooldown = 0;
    }
}
exports.TranseStrategy = TranseStrategy;
//# sourceMappingURL=transe.js.map