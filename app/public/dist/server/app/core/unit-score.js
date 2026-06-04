"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnitScore = getUnitScore;
exports.getStrongestUnit = getStrongestUnit;
const shop_1 = require("../models/shop");
const random_1 = require("../utils/random");
function getUnitScore(pokemon) {
    let score = 0;
    score += 100 * pokemon.items.size;
    score += 10 * pokemon.stars;
    score += (0, shop_1.getSellPrice)(pokemon, null, true);
    return score;
}
function getStrongestUnit(pokemons) {
    const pokemonScores = pokemons.map((pokemon) => getUnitScore(pokemon));
    const bestScore = Math.max(...pokemonScores);
    return (0, random_1.pickRandomIn)(pokemons.filter((p, i) => pokemonScores[i] === bestScore));
}
//# sourceMappingURL=unit-score.js.map