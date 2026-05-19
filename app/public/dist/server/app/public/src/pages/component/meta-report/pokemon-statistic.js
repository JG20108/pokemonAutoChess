"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonStatistic;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_i18next_1 = require("react-i18next");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../../../../models/precomputed/precomputed-rarity");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const history_chart_1 = require("./history-chart");
const history_delta_1 = require("./history-delta");
require("./pokemon-statistic.css");
function PokemonStatistic(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const families = new Map();
    const filteredPokemons = props.pokemons.filter((p) => hasType(p, props.synergy) &&
        hasRarity(p, props.rarity) &&
        isInPool(p, props.pool) &&
        (props.tier === "all" || (0, precomputed_pokemon_data_1.getPokemonData)(p.name).stars === +props.tier) &&
        (props.selectedPkm === "" || p.name === props.selectedPkm));
    filteredPokemons.forEach((pokemon) => {
        const familyName = Pokemon_1.PkmFamily[pokemon.name];
        const family = families.get(familyName);
        if (family) {
            family.pokemons.push(pokemon);
        }
        else {
            families.set(Pokemon_1.PkmFamily[pokemon.name], { pokemons: [pokemon] });
        }
    });
    families.forEach((family) => {
        family.pokemons.sort((a, b) => (0, precomputed_pokemon_data_1.getPokemonData)(a.name).stars - (0, precomputed_pokemon_data_1.getPokemonData)(b.name).stars);
        family.totalCount = family.pokemons.reduce((prev, curr) => prev + curr.count, 0);
        family.averageRank = computeAverageRank(family.pokemons);
        family.averageItemHeld = computeAverageItemHeld(family.pokemons);
    });
    const familiesArray = Array.from(families).sort((a, b) => {
        var _a, _b;
        return props.rankingBy === "count"
            ? b[1].totalCount - a[1].totalCount
            : props.rankingBy === "item_count"
                ? b[1].averageItemHeld - a[1].averageItemHeld
                : ((_a = a[1].averageRank) !== null && _a !== void 0 ? _a : 9) - ((_b = b[1].averageRank) !== null && _b !== void 0 ? _b : 9);
    });
    const dynamicRowHeight = (0, react_window_1.useDynamicRowHeight)({
        defaultRowHeight: 120,
        key: familiesArray.length
    });
    if (filteredPokemons.length === 0) {
        return (0, jsx_runtime_1.jsx)("p", { children: t("no_data_available") });
    }
    return ((0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
            if (height === undefined || width === undefined)
                return null;
            return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: familiesArray.length, rowHeight: dynamicRowHeight, rowComponent: PokemonFamilyRow, rowProps: {
                    familiesArray
                } }));
        } }));
}
function PokemonFamilyRow({ index, style, familiesArray }) {
    const [pkm, family] = familiesArray[index];
    return ((0, jsx_runtime_1.jsx)("div", { style: style, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(PokemonFamilyCard, { pkm: pkm, family: family, rank: index + 1 }) }) }));
}
function PokemonFamilyCard(props) {
    var _a;
    const { family, rank } = props;
    const [expanded, setExpanded] = react_1.default.useState(false);
    const { t } = (0, react_i18next_1.useTranslation)();
    const familyRankHistory = aggregateHistory(family.pokemons.map((p) => { var _a; return (_a = p.rank_history) !== null && _a !== void 0 ? _a : []; }), "average");
    const familyCountHistory = aggregateHistory(family.pokemons.map((p) => { var _a; return (_a = p.count_history) !== null && _a !== void 0 ? _a : []; }), "sum");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box pokemon-family-stat", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pokemon-family-stat-top", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pokemon-rank-col", children: [(0, jsx_runtime_1.jsx)("span", { className: "rank", children: rank }), (0, jsx_runtime_1.jsx)("button", { className: "history-expand-btn", onClick: () => setExpanded((v) => !v), title: t("history"), children: expanded ? "▾" : "▸" })] }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-family-content", children: (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-family-top", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pokemon-family-summary", children: [(0, jsx_runtime_1.jsx)("div", { className: "pokemon-portraits-vertical", children: family.pokemons.map((pokemon) => ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-detail-row", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon.name], width: 40 }), (0, jsx_runtime_1.jsx)("span", { className: "pokemon-name-container", children: (0, jsx_runtime_1.jsx)("span", { children: t(`pkm.${pokemon.name}`) }) })] }, pokemon.name + "-portrait"))) }), (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-family-stats", children: [(0, jsx_runtime_1.jsxs)("span", { className: "pokemon-stat-item", children: [(0, jsx_runtime_1.jsx)("div", { children: t("average_place") }), (0, jsx_runtime_1.jsx)("span", { className: "pokemon-stat-value", children: family.averageRank ? family.averageRank.toFixed(1) : "???" }), (0, jsx_runtime_1.jsx)(history_delta_1.HistoryDelta, { entries: familyRankHistory, invertY: true })] }), (0, jsx_runtime_1.jsxs)("span", { className: "pokemon-stat-item", children: [(0, jsx_runtime_1.jsx)("div", { children: t("count") }), (0, jsx_runtime_1.jsx)("span", { className: "pokemon-stat-value", children: family.totalCount }), (0, jsx_runtime_1.jsx)(history_delta_1.HistoryDelta, { entries: familyCountHistory })] }), (0, jsx_runtime_1.jsxs)("span", { className: "pokemon-stat-item", children: [(0, jsx_runtime_1.jsx)("div", { children: t("held_items") }), (0, jsx_runtime_1.jsx)("span", { className: "pokemon-stat-value", children: (_a = family.averageItemHeld) === null || _a === void 0 ? void 0 : _a.toFixed(2) })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-details-list", children: family.pokemons.map((pokemon) => ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-detail-row", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon.name], width: 40 }), (0, jsx_runtime_1.jsx)("span", { className: "pokemon-detail-stat", title: "Average Rank", children: (0, jsx_runtime_1.jsx)("strong", { children: pokemon.count === 0 ? "???" : pokemon.rank.toFixed(1) }) }), (0, jsx_runtime_1.jsxs)("span", { className: "pokemon-stat-container", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), " ", pokemon.count] }), (0, jsx_runtime_1.jsxs)("span", { className: "pokemon-stat-container", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("held_items"), ":"] }), " ", pokemon.item_count] }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-items-row", children: pokemon.items.map((item) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + item + ".png", className: "pokemon-item-img" }, pokemon.name + "-item-" + item))) })] }, pokemon.name + "-details"))) })] }) })] }), expanded && ((0, jsx_runtime_1.jsx)("div", { className: "pokemon-history-charts", children: family.pokemons.map((pokemon) => {
                    var _a, _b;
                    return ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-member-charts", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pokemon-member-charts-header", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon.name], width: 24 }), (0, jsx_runtime_1.jsx)("span", { children: t(`pkm.${pokemon.name}`) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-member-charts-row", children: [(0, jsx_runtime_1.jsx)(history_chart_1.HistoryChart, { entries: (_a = pokemon.rank_history) !== null && _a !== void 0 ? _a : [], label: "average_place", color: "#e8a838", invertY: true, portraitSrc: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon.name]) }), (0, jsx_runtime_1.jsx)(history_chart_1.HistoryChart, { entries: (_b = pokemon.count_history) !== null && _b !== void 0 ? _b : [], label: "count", color: "#76c893", portraitSrc: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon.name]) })] })] }, pokemon.name + "-history"));
                }) }))] }));
}
function computeAverageRank(pokemons) {
    const pokemonsPlayedAtLeastOnce = pokemons.filter((p) => p.count > 0);
    if (pokemonsPlayedAtLeastOnce.length === 0)
        return null;
    return (pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.rank * curr.count, 0) / pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.count, 0));
}
function computeAverageItemHeld(pokemons) {
    const pokemonsPlayedAtLeastOnce = pokemons.filter((p) => p.count > 0);
    if (pokemonsPlayedAtLeastOnce.length === 0)
        return null;
    return (pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.item_count * curr.count, 0) / pokemonsPlayedAtLeastOnce.reduce((prev, curr) => prev + curr.count, 0));
}
function isInPool(pokemon, pool) {
    if (pool === "all")
        return true;
    const data = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name);
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
function hasType(pokemon, synergy) {
    if (synergy === "all")
        return true;
    const types = precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[synergy];
    return types.includes(pokemon.name);
}
function hasRarity(pokemon, rarity) {
    if (rarity === "all")
        return true;
    return precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[rarity].includes(pokemon.name);
}
function aggregateHistory(histories, mode) {
    const nonEmpty = histories.filter((h) => h.length > 0);
    if (nonEmpty.length === 0)
        return [];
    const byDate = new Map();
    for (const history of nonEmpty) {
        for (const entry of history) {
            const values = byDate.get(entry.date);
            if (values) {
                values.push(entry.value);
            }
            else {
                byDate.set(entry.date, [entry.value]);
            }
        }
    }
    return Array.from(byDate.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([date, values]) => ({
        date,
        value: mode === "sum"
            ? values.reduce((a, b) => a + b, 0)
            : values.reduce((a, b) => a + b, 0) / values.length
    }));
}
//# sourceMappingURL=pokemon-statistic.js.map