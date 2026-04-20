"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRECOMPUTED_POKEMONS_PER_TYPE = void 0;
const Synergy_1 = require("../../types/enum/Synergy");
const precomputed_pokemons_1 = require("./precomputed-pokemons");
console.time("precompute-types");
const synergies = Object.keys(Synergy_1.Synergy);
const dataAll = Object.fromEntries(synergies.map((s) => [s, []]));
precomputed_pokemons_1.precomputedPokemonsImplemented.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
        dataAll[type].push(pokemon);
    });
});
exports.PRECOMPUTED_POKEMONS_PER_TYPE = {};
for (const s in dataAll) {
    exports.PRECOMPUTED_POKEMONS_PER_TYPE[s] = dataAll[s]
        .sort(indexSort)
        .map((p) => p.name);
}
function indexSort(a, b) {
    const aIndex = parseFloat(a.index.replace("-", "."));
    const bIndex = parseFloat(b.index.replace("-", "."));
    return aIndex - bIndex;
}
console.timeEnd("precompute-types");
//# sourceMappingURL=precomputed-types.js.map