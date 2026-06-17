"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraWheelStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class AuraWheelStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        if (pokemon.name === Pokemon_1.Pkm.MORPEKO) {
            pokemon.name = Pokemon_1.Pkm.MORPEKO_HANGRY;
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MORPEKO_HANGRY];
            if (pokemon.player) {
                pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.MORPEKO_HANGRY);
            }
        }
        else {
            pokemon.name = Pokemon_1.Pkm.MORPEKO;
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MORPEKO];
        }
        pokemon.addSpeed(10, pokemon, 0, false);
        const damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        pokemon.resetCooldown(500);
    }
}
exports.AuraWheelStrategy = AuraWheelStrategy;
//# sourceMappingURL=aura-wheel.js.map