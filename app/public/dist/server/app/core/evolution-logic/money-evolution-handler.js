"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyEvolutionHandler = void 0;
const types_1 = require("../../types");
const evolution_handler_1 = require("./evolution-handler");
class MoneyEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    constructor(evolutionRule) {
        super(evolutionRule);
        this.moneyRequired = evolutionRule.moneyRequired;
    }
    canEvolve(pokemon, player, money) {
        if (pokemon.items.has(types_1.Item.EVIOLITE))
            return false;
        if (player.board.has(pokemon.id) === false)
            return false;
        return money >= this.moneyRequired;
    }
    evolve(pokemon, player, money) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player, money);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.MoneyEvolutionHandler = MoneyEvolutionHandler;
//# sourceMappingURL=money-evolution-handler.js.map