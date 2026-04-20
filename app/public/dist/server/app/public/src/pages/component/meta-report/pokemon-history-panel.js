"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonHistoryPanel = PokemonHistoryPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = __importStar(require("react"));
const recharts_1 = require("recharts");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../../../../models/precomputed/precomputed-rarity");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const history_utils_1 = require("./history-utils");
require("./pokemon-history-panel.css");
const TOP_N_OPTIONS = [10, 20, 50];
const PALETTE = [
    "#e6194b",
    "#3cb44b",
    "#4363d8",
    "#f58231",
    "#42d4f4",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080",
    "#ff4500",
    "#1e90ff"
];
function getPokemonPortraitPath(pokemonName) {
    return (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemonName]);
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
    return precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[synergy].includes(pokemonName);
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
    return ((_a = (0, precomputed_pokemon_data_1.getPokemonData)(pokemonName).stars) === null || _a === void 0 ? void 0 : _a.toString()) === tier;
}
function formatYTick(value, metric) {
    if (metric === "count") {
        if (value >= 1000)
            return (value / 1000).toFixed(1) + "k";
        return Math.round(value).toString();
    }
    return value.toFixed(1);
}
const PortraitEndDot = react_1.default.memo(function PortraitEndDot(props) {
    const { dataLength, size, clipId, imageSrc, cx = 0, cy = 0, index = 0 } = props;
    if (index !== dataLength - 1)
        return (0, jsx_runtime_1.jsx)("circle", { r: 0 });
    return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: clipId, children: (0, jsx_runtime_1.jsx)("circle", { cx: cx, cy: cy, r: size / 2 }) }) }), (0, jsx_runtime_1.jsx)("image", { x: cx - size / 2, y: cy - size / 2, width: size, height: size, href: imageSrc, clipPath: `url(#${clipId})` })] }));
});
function CustomTooltip({ active, payload, label, metric }) {
    if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length))
        return null;
    const sorted = [...payload].sort((a, b) => metric === "count" ? b.value - a.value : a.value - b.value);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-history-tooltip", children: [(0, jsx_runtime_1.jsx)("div", { className: "pokemon-history-tooltip-date", children: label }), sorted.map((entry) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-history-tooltip-row", children: [(0, jsx_runtime_1.jsx)("img", { src: getPokemonPortraitPath(entry.name), width: 20, height: 20, style: { borderRadius: "50%" } }), (0, jsx_runtime_1.jsx)("span", { style: { color: entry.stroke || entry.color }, children: (0, i18next_1.t)(`pkm.${entry.name}`) }), (0, jsx_runtime_1.jsx)("span", { children: metric === "count"
                                ? Math.round(entry.value)
                                : (_a = entry.value) === null || _a === void 0 ? void 0 : _a.toFixed(2) })] }, entry.name));
            })] }));
}
function PokemonHistoryPanel({ metaPokemons, eloThreshold, loading, metric, synergy = "all", rarity = "all", pool = "all", tier = "all", selectedPkm = "" }) {
    const [topN, setTopN] = (0, react_1.useState)(50);
    const [hoveredLine, setHoveredLine] = (0, react_1.useState)(null);
    const { data, pokemonNames, colorMap } = (0, react_1.useMemo)(() => {
        var _a, _b;
        const tierData = metaPokemons.find((i) => i.tier === eloThreshold);
        if (!tierData)
            return { data: [], pokemonNames: [], colorMap: {} };
        const pokemons = Object.values(tierData.pokemons)
            .filter((pokemon) => {
            if (pokemon.count === 0)
                return false;
            if (selectedPkm !== "" && pokemon.name !== selectedPkm)
                return false;
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
            .sort((a, b) => metric === "count" ? b.count - a.count : a.rank - b.rank)
            .slice(0, topN);
        const allDates = new Set();
        const validPokemons = [];
        for (const pokemon of pokemons) {
            const rawHistory = metric === "count"
                ? ((_a = pokemon.count_history) !== null && _a !== void 0 ? _a : [])
                : ((_b = pokemon.rank_history) !== null && _b !== void 0 ? _b : []);
            if (rawHistory.length < 2)
                continue;
            validPokemons.push({ name: pokemon.name, history: rawHistory });
            for (const entry of rawHistory) {
                allDates.add(entry.date);
            }
        }
        const sortedDates = Array.from(allDates).sort();
        const names = validPokemons.map((p) => p.name);
        const cMap = {};
        names.forEach((n, i) => {
            cMap[n] = PALETTE[i % PALETTE.length];
        });
        const historyMaps = new Map(validPokemons.map((p) => [
            p.name,
            new Map(p.history.map((e) => [e.date, e.value]))
        ]));
        const chartData = sortedDates.map((date) => {
            var _a;
            const point = {
                date,
                dateLabel: (0, history_utils_1.formatDateShort)(date)
            };
            for (const p of validPokemons) {
                const value = (_a = historyMaps.get(p.name)) === null || _a === void 0 ? void 0 : _a.get(date);
                if (value !== undefined)
                    point[p.name] = value;
            }
            return point;
        });
        return { data: chartData, pokemonNames: names, colorMap: cMap };
    }, [
        metaPokemons,
        eloThreshold,
        metric,
        synergy,
        rarity,
        pool,
        tier,
        selectedPkm,
        topN
    ]);
    const yDomain = (0, react_1.useMemo)(() => {
        if (data.length === 0)
            return [0, 8];
        const allValues = [];
        for (const point of data) {
            for (const key of Object.keys(point)) {
                if (key !== "date" &&
                    key !== "dateLabel" &&
                    typeof point[key] === "number") {
                    allValues.push(point[key]);
                }
            }
        }
        if (allValues.length === 0)
            return [0, 8];
        const min = Math.min(...allValues);
        const max = Math.max(...allValues);
        const padding = (max - min) * 0.05 || 0.5;
        return [Math.max(0, min - padding), max + padding];
    }, [data]);
    const yLabel = metric === "count" ? (0, i18next_1.t)("count") : (0, i18next_1.t)("average_place");
    const invertY = metric === "rank";
    const showPortraits = pokemonNames.length <= 15;
    const handleLegendEnter = (0, react_1.useCallback)((name) => {
        setHoveredLine(name);
    }, []);
    const handleLegendLeave = (0, react_1.useCallback)(() => {
        setHoveredLine(null);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "pokemon-history-panel", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pokemon-history-controls", children: [(0, jsx_runtime_1.jsxs)("label", { children: [(0, i18next_1.t)("top"), ":"] }), TOP_N_OPTIONS.map((n) => ((0, jsx_runtime_1.jsx)("button", { className: `bubbly pokemon-history-topn-btn${topN === n ? " active" : ""}`, onClick: () => setTopN(n), children: n }, n)))] }), data.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })) : ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-history-body", children: [(0, jsx_runtime_1.jsx)("div", { className: "pokemon-history-chart-area", children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: "100%", children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: data, margin: {
                                    top: 12,
                                    right: showPortraits ? 16 : 10,
                                    left: 0,
                                    bottom: 30
                                }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "#b8b8b8", strokeOpacity: 0.5 }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "dateLabel", tick: { fill: "#ddd", fontSize: 10 }, tickLine: false, interval: "preserveStartEnd" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { tick: { fill: "#ddd", fontSize: 10 }, domain: yDomain, label: {
                                            value: yLabel,
                                            angle: -90,
                                            position: "insideLeft",
                                            fill: "#ddd",
                                            fontSize: 11
                                        }, width: 45, reversed: invertY, tickFormatter: (v) => formatYTick(v, metric) }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { content: (0, jsx_runtime_1.jsx)(CustomTooltip, { metric: metric }), wrapperStyle: { outline: "none" }, animationDuration: 0 }), pokemonNames.map((name, i) => ((0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: name, stroke: colorMap[name], strokeWidth: hoveredLine === name ? 3 : i < 5 ? 2.5 : 1.5, strokeOpacity: hoveredLine == null ? 1 : hoveredLine === name ? 1 : 0.15, dot: showPortraits ? ((0, jsx_runtime_1.jsx)(PortraitEndDot, { dataLength: data.length, size: 24, clipId: `clip-panel-${name}-${metric}`, imageSrc: getPokemonPortraitPath(name) })) : (false), connectNulls: true, isAnimationActive: false }, name)))] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-history-legend", children: pokemonNames.map((name) => ((0, jsx_runtime_1.jsxs)("div", { className: `pokemon-history-legend-item${hoveredLine === name ? " highlighted" : ""}`, onMouseEnter: () => handleLegendEnter(name), onMouseLeave: handleLegendLeave, children: [(0, jsx_runtime_1.jsx)("span", { className: "pokemon-history-legend-color", style: { background: colorMap[name] } }), (0, jsx_runtime_1.jsx)("img", { src: getPokemonPortraitPath(name), width: 16, height: 16, style: { borderRadius: "50%" } }), (0, jsx_runtime_1.jsx)("span", { className: "pokemon-history-legend-name", children: (0, i18next_1.t)(`pkm.${name}`) })] }, name))) })] }))] }));
}
//# sourceMappingURL=pokemon-history-panel.js.map