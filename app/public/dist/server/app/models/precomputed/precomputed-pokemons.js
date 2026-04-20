"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.precomputedPokemonsImplemented = exports.precomputedPokemons = void 0;
const config_1 = require("../../config");
const Ability_1 = require("../../types/enum/Ability");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const pokemon_factory_1 = __importDefault(require("../pokemon-factory"));
const sortByRarityAndTier = (a, b) => config_1.RarityCost[a.rarity] === config_1.RarityCost[b.rarity]
    ? a.stars - b.stars
    : config_1.RarityCost[a.rarity] - config_1.RarityCost[b.rarity];
exports.precomputedPokemons = Object.values(Pokemon_1.Pkm)
    .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
    .map((pkm) => pokemon_factory_1.default.createPokemonFromName(pkm))
    .sort(sortByRarityAndTier);
exports.precomputedPokemonsImplemented = exports.precomputedPokemons.filter((pokemon) => pokemon.skill !== Ability_1.Ability.DEFAULT || pokemon.passive !== Passive_1.Passive.NONE);
//# sourceMappingURL=precomputed-pokemons.js.map