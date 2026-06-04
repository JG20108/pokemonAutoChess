"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEvolutionHandler = void 0;
const types_1 = require("../../types");
const schemas_1 = require("../../utils/schemas");
const evolution_handler_1 = require("./evolution-handler");
class ItemEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    constructor(evolutionRule) {
        super(evolutionRule);
        this.itemsTriggeringEvolution = evolutionRule.itemsTriggeringEvolution;
    }
    canEvolve(pokemon, player, itemGiven) {
        if (pokemon.items.has(types_1.Item.EVIOLITE))
            return false;
        const itemsAndDishes = (0, schemas_1.schemaValues)(pokemon.items).concat((0, schemas_1.schemaValues)(pokemon.dishes));
        const itemEvolution = itemsAndDishes.find((item) => this.itemsTriggeringEvolution.includes(item));
        const pokemonEvolutionName = this.getEvolution(pokemon, player, itemGiven);
        return itemEvolution != null && pokemonEvolutionName !== pokemon.name;
    }
    evolve(pokemon, player, itemGiven) {
        var _a;
        const itemEvolution = (_a = (0, schemas_1.schemaValues)(pokemon.items).find((item) => this.itemsTriggeringEvolution.includes(item))) !== null && _a !== void 0 ? _a : itemGiven;
        const pokemonEvolutionName = this.getEvolution(pokemon, player, itemEvolution);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.ItemEvolutionHandler = ItemEvolutionHandler;
//# sourceMappingURL=item-evolution-handler.js.map