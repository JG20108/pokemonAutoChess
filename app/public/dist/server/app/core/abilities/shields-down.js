"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldsDownStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Pokemon_1 = require("../../types/enum/Pokemon");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class ShieldsDownStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        pokemon.broadcastAbility({ skill: Ability_1.Ability.SHIELDS_UP });
        const pkm = (0, random_1.pickRandomIn)([
            Pokemon_1.Pkm.MINIOR_KERNEL_BLUE,
            Pokemon_1.Pkm.MINIOR_KERNEL_GREEN,
            Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE,
            Pokemon_1.Pkm.MINIOR_KERNEL_RED
        ]);
        pokemon.index = Pokemon_1.PkmIndex[pkm];
        pokemon.name = pkm;
        pokemon.skill = Ability_1.Ability.SHIELDS_UP;
        pokemon.cooldown = 0;
        if (pokemon.player) {
            pokemon.player.pokemonsPlayed.add(pkm);
        }
    }
}
exports.ShieldsDownStrategy = ShieldsDownStrategy;
//# sourceMappingURL=shields-down.js.map