"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldsUpStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class ShieldsUpStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        pokemon.broadcastAbility({ skill: Ability_1.Ability.SHIELDS_UP });
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MINIOR];
        pokemon.name = Pokemon_1.Pkm.MINIOR;
        pokemon.skill = Ability_1.Ability.SHIELDS_DOWN;
        pokemon.cooldown = 0;
    }
}
exports.ShieldsUpStrategy = ShieldsUpStrategy;
//# sourceMappingURL=shields-up.js.map