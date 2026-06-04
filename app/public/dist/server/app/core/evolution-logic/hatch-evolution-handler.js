"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HatchEvolutionHandler = void 0;
const config_1 = require("../../config");
const types_1 = require("../../types");
const Pokemon_1 = require("../../types/enum/Pokemon");
const random_1 = require("../../utils/random");
const evolution_handler_1 = require("./evolution-handler");
const hatch_time_1 = require("./hatch-time");
class HatchEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    canEvolve(pokemon, player) {
        if (pokemon.items.has(types_1.Item.EVIOLITE))
            return false;
        if (!player.board.has(pokemon.id))
            return false;
        pokemon.stacksRequired = (0, hatch_time_1.getHatchTime)(pokemon, player);
        return pokemon.stacks >= pokemon.stacksRequired;
    }
    evolve(pokemon, player) {
        pokemon.stacks = 0;
        const pokemonEvolutionName = this.getEvolution(pokemon, player);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        if (pokemonEvolved != null && pokemon.name === Pokemon_1.Pkm.EGG && pokemon.shiny) {
            player.items.push((0, random_1.pickRandomIn)(config_1.GoldenEggItems));
        }
        return pokemonEvolved;
    }
}
exports.HatchEvolutionHandler = HatchEvolutionHandler;
//# sourceMappingURL=hatch-evolution-handler.js.map