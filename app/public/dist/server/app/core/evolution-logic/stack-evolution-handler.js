"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackEvolutionHandler = void 0;
const Item_1 = require("../../types/enum/Item");
const evolution_handler_1 = require("./evolution-handler");
class StackEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    canEvolve(pokemon, player, stacks) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        if (player.board.has(pokemon.id) === false)
            return false;
        return stacks >= pokemon.stacksRequired;
    }
    evolve(pokemon, player, stacks) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player, stacks);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.StackEvolutionHandler = StackEvolutionHandler;
//# sourceMappingURL=stack-evolution-handler.js.map