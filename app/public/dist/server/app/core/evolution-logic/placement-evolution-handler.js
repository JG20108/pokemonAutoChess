"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementEvolutionHandler = void 0;
const types_1 = require("../../types");
const evolution_handler_1 = require("./evolution-handler");
class PlacementEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    constructor(evolutionRule) {
        super(evolutionRule);
        this.condition = evolutionRule.condition;
    }
    canEvolve(pokemon, player, board) {
        if (pokemon.items.has(types_1.Item.EVIOLITE))
            return false;
        if (player.board.has(pokemon.id) === false)
            return false;
        return this.condition(pokemon, player, board);
    }
    evolve(pokemon, player, board) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player, board);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.PlacementEvolutionHandler = PlacementEvolutionHandler;
//# sourceMappingURL=placement-evolution-handler.js.map