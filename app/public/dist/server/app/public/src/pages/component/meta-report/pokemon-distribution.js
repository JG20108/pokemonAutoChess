"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonDistribution = PokemonDistribution;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const recharts_1 = require("recharts");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../../../../models/precomputed/precomputed-rarity");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
require("./pokemon-distribution.css");
function getPokemonPortraitPath(pokemonName) {
    return (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemonName]);
}
function CustomTooltip({ active, payload }) {
    var _a;
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-distribution-tooltip", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pokemon-distribution-tooltip-header", children: [(0, jsx_runtime_1.jsx)("img", { src: getPokemonPortraitPath(data.name), alt: data.name }), (0, jsx_runtime_1.jsx)("span", { children: (0, i18next_1.t)(`pkm.${data.name}`) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-distribution-tooltip-row", children: [(0, jsx_runtime_1.jsxs)("label", { className: "pokemon-distribution-tooltip-label", children: [(0, i18next_1.t)("average_place"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: (_a = data.rank) === null || _a === void 0 ? void 0 : _a.toFixed(2) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-distribution-tooltip-row", children: [(0, jsx_runtime_1.jsxs)("label", { className: "pokemon-distribution-tooltip-label", children: [(0, i18next_1.t)("count"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: data.count })] })] }));
    }
    return null;
}
function PokemonScatterPoint({ cx = 0, cy = 0, payload }) {
    const size = 28;
    return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: `clip-circle-${(payload === null || payload === void 0 ? void 0 : payload.name) || "default"}`, children: (0, jsx_runtime_1.jsx)("circle", { cx: cx, cy: cy, r: size / 2 }) }) }), (0, jsx_runtime_1.jsx)("image", { x: cx - size / 2, y: cy - size / 2, width: size, height: size, xlinkHref: getPokemonPortraitPath((payload === null || payload === void 0 ? void 0 : payload.name) || ""), clipPath: `url(#clip-circle-${(payload === null || payload === void 0 ? void 0 : payload.name) || "default"})` })] }));
}
function isInPool(pokemonName, pool) {
    if (pool === "all")
        return true;
    const data = (0, precomputed_pokemon_data_1.getPokemonData)(pokemonName);
    if (pool === "special")
        return data.rarity === Game_1.Rarity.SPECIAL;
    if (pool === "additional")
        return data.additional;
    if (pool === "regional")
        return data.regional;
    if (pool === "regular")
        return !data.additional && !data.regional && data.rarity !== Game_1.Rarity.SPECIAL;
    return false;
}
function hasType(pokemonName, synergy) {
    if (synergy === "all")
        return true;
    const types = precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[synergy];
    return types.includes(pokemonName);
}
function hasRarity(pokemonName, rarity) {
    if (rarity === "all")
        return true;
    return precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[rarity].includes(pokemonName);
}
function isCorrectTier(pokemonName, tier) {
    var _a;
    if (tier === "all")
        return true;
    const data = (0, precomputed_pokemon_data_1.getPokemonData)(pokemonName);
    return ((_a = data.stars) === null || _a === void 0 ? void 0 : _a.toString()) === tier;
}
function PokemonDistribution({ metaPokemons, eloThreshold, loading, synergy = "all", rarity = "all", pool = "all", tier = "all", selectedPkm = "" }) {
    const scatterData = (0, react_1.useMemo)(() => {
        const tierData = metaPokemons.find((i) => i.tier === eloThreshold);
        if (!tierData)
            return [];
        const pokemons = Object.values(tierData.pokemons)
            .map((pokemon) => ({
            rank: pokemon.rank,
            count: pokemon.count,
            name: pokemon.name
        }))
            .filter((pokemon) => {
            if (pokemon.count === 0)
                return false;
            if (selectedPkm !== "" && pokemon.name !== selectedPkm) {
                return false;
            }
            if (!hasType(pokemon.name, synergy))
                return false;
            if (!hasRarity(pokemon.name, rarity))
                return false;
            if (!isInPool(pokemon.name, pool))
                return false;
            if (!isCorrectTier(pokemon.name, tier))
                return false;
            return true;
        })
            .sort((a, b) => b.count - a.count)
            .slice(0, 400);
        return pokemons;
    }, [metaPokemons, eloThreshold, synergy, rarity, pool, tier, selectedPkm]);
    const xAxisDomain = (0, react_1.useMemo)(() => {
        if (scatterData.length === 0)
            return [0, 8];
        const ranks = scatterData.map((pokemon) => pokemon.rank);
        const min = Math.min(...ranks);
        const max = Math.max(...ranks);
        return [Math.max(0, min - 0.1), max + 0.1];
    }, [scatterData]);
    return ((0, jsx_runtime_1.jsx)("div", { id: "pokemon-distribution", children: scatterData.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })) : ((0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: "100%", children: (0, jsx_runtime_1.jsxs)(recharts_1.ScatterChart, { data: scatterData, margin: { top: 10, right: 10, left: 0, bottom: 30 }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { type: "number", dataKey: "rank", domain: xAxisDomain, tickFormatter: (value) => value.toFixed(2), tick: { fill: "#ddd", fontSize: 10 }, label: {
                            value: "Average Rank",
                            position: "insideBottomRight",
                            offset: -5,
                            fill: "#ddd",
                            fontSize: 11
                        } }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { dataKey: "count", tick: { fill: "#ddd", fontSize: 10 }, label: {
                            value: "Count",
                            angle: -90,
                            position: "insideLeft",
                            fill: "#ddd",
                            fontSize: 11
                        }, width: 35 }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { content: (0, jsx_runtime_1.jsx)(CustomTooltip, {}), wrapperStyle: { outline: "none" }, animationDuration: 0 }), (0, jsx_runtime_1.jsx)(recharts_1.Scatter, { name: "Pokemons", data: scatterData, fill: "#82ca9d", shape: (0, jsx_runtime_1.jsx)(PokemonScatterPoint, {}) })] }) })) }));
}
//# sourceMappingURL=pokemon-distribution.js.map