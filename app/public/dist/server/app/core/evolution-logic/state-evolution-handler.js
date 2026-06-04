"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateEvolutionHandler = void 0;
const types_1 = require("../../types");
const evolution_handler_1 = require("./evolution-handler");
class StateEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    constructor(evolutionRule) {
        super(evolutionRule);
        this.condition = evolutionRule.condition;
    }
    canEvolve(pokemon, player, state) {
        if (pokemon.items.has(types_1.Item.EVIOLITE))
            return false;
        if (player.board.has(pokemon.id) === false)
            return false;
        return this.condition(pokemon, player, state);
    }
    evolve(pokemon, player, state) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player, state);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.StateEvolutionHandler = StateEvolutionHandler;
//# sourceMappingURL=state-evolution-handler.js.map