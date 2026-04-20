"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY = void 0;
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const precomputed_pokemons_1 = require("./precomputed-pokemons");
console.time("precompute-types-and-categories");
const data = {};
precomputed_pokemons_1.precomputedPokemonsImplemented.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
        if (type in data === false) {
            data[type] = {
                pokemons: [],
                uniquePokemons: [],
                legendaryPokemons: [],
                additionalPokemons: [],
                specialPokemons: []
            };
        }
        if (pokemon.rarity === Game_1.Rarity.UNIQUE) {
            data[type].uniquePokemons.push(pokemon.name);
        }
        else if (pokemon.rarity === Game_1.Rarity.LEGENDARY) {
            data[type].legendaryPokemons.push(pokemon.name);
        }
        else if (pokemon.rarity === Game_1.Rarity.SPECIAL) {
            data[type].specialPokemons.push(pokemon.name);
        }
        else if (pokemon.additional) {
            if (!data[type].additionalPokemons.some((p) => Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[pokemon.name])) {
                data[type].additionalPokemons.push(pokemon.name);
            }
        }
        else if (!data[type].pokemons.some((p) => Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[pokemon.name])) {
            data[type].pokemons.push(pokemon.name);
        }
    });
});
exports.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY = data;
console.timeEnd("precompute-types-and-categories");
//# sourceMappingURL=precomputed-types-and-categories.js.map