"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnboundStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class UnboundStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.HOOPA_UNBOUND];
        pokemon.skill = Ability_1.Ability.HYPERSPACE_FURY;
        pokemon.addAttack(10, pokemon, 0, false);
        pokemon.addMaxHP(100, pokemon, 0, false);
        pokemon.toMovingState();
        if (pokemon.player) {
            pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.HOOPA_UNBOUND);
        }
    }
}
exports.UnboundStrategy = UnboundStrategy;
//# sourceMappingURL=unbound.js.map