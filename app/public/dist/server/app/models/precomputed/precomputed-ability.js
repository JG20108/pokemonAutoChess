"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRECOMPUTED_POKEMONS_PER_ABILITY = void 0;
const Ability_1 = require("../../types/enum/Ability");
const map_1 = require("../../utils/map");
const precomputed_pokemons_1 = require("./precomputed-pokemons");
const data = new Map();
Object.values(Ability_1.Ability).map((ability) => {
    data.set(ability, precomputed_pokemons_1.precomputedPokemonsImplemented
        .filter((pokemon) => pokemon.skill === ability)
        .map((pokemon) => pokemon.name));
});
exports.PRECOMPUTED_POKEMONS_PER_ABILITY = (0, map_1.mapToObj)(data);
//# sourceMappingURL=precomputed-ability.js.map