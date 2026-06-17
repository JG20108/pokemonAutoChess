"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackEvolutionHandler = void 0;
const Item_1 = require("../../types/enum/Item");
const evolution_handler_1 = require("./evolution-handler");
class StackEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    canEvolve(pokemon, player) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        if (player.board.has(pokemon.id) === false)
            return false;
        return pokemon.stacks >= pokemon.stacksRequired;
    }
    evolve(pokemon, player) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.StackEvolutionHandler = StackEvolutionHandler;
//# sourceMappingURL=stack-evolution-handler.js.map