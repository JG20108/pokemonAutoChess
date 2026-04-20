"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionReport = CompositionReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const meta_v2_1 = require("../../../models/meta-v2");
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const team_comp_1 = __importDefault(require("./team-comp"));
require("./composition-report.css");
const ROW_HEIGHT = 300;
function CompositionReport() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [meta, setMeta] = (0, react_1.useState)([]);
    const [selectedPkm, setSelectedPkm] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        (0, meta_v2_1.fetchMetaV2)().then((res) => {
            setLoading(false);
            setMeta(res);
        });
    }, []);
    const [rankingBy, setRanking] = (0, react_1.useState)("mean_rank");
    const popularPokemonOptions = (0, react_1.useMemo)(() => {
        const pokemonPopularity = new Map();
        meta.forEach((team) => {
            var _a, _b;
            Object.entries((_b = (_a = team.mean_team) === null || _a === void 0 ? void 0 : _a.pokemons) !== null && _b !== void 0 ? _b : {}).forEach(([pokemon, data]) => {
                var _a, _b;
                const popularity = ((_a = data === null || data === void 0 ? void 0 : data.frequency) !== null && _a !== void 0 ? _a : 0) * team.count;
                const current = (_b = pokemonPopularity.get(pokemon)) !== null && _b !== void 0 ? _b : 0;
                pokemonPopularity.set(pokemon, current + popularity);
            });
        });
        return [...pokemonPopularity.keys()].sort((a, b) => a.localeCompare(b));
    }, [meta]);
    const sortedMeta = (0, react_1.useMemo)(() => {
        const filteredMeta = selectedPkm
            ? meta.filter((team) => {
                var _a, _b, _c;
                const pokemons = (_b = (_a = team.mean_team) === null || _a === void 0 ? void 0 : _a.pokemons) !== null && _b !== void 0 ? _b : {};
                const data = pokemons[selectedPkm];
                return ((_c = data === null || data === void 0 ? void 0 : data.frequency) !== null && _c !== void 0 ? _c : 0) > 0;
            })
            : meta;
        return [...filteredMeta].sort((a, b) => {
            const order = rankingBy === "count" || rankingBy === "winrate" ? -1 : 1;
            return (a[rankingBy] - b[rankingBy]) * order;
        });
    }, [meta, rankingBy, selectedPkm]);
    const dynamicRowHeight = (0, react_window_1.useDynamicRowHeight)({
        defaultRowHeight: ROW_HEIGHT,
        key: sortedMeta.length
    });
    return ((0, jsx_runtime_1.jsxs)("div", { id: "meta-report-compo", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("best_team_compositions") }), (0, jsx_runtime_1.jsx)("div", { className: "filters", children: (0, jsx_runtime_1.jsxs)("select", { value: rankingBy, onChange: (e) => setRanking(e.target.value), children: [(0, jsx_runtime_1.jsxs)("option", { value: "count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_popularity")] }), (0, jsx_runtime_1.jsxs)("option", { value: "mean_rank", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_place")] }), (0, jsx_runtime_1.jsxs)("option", { value: "winrate", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_winrate")] })] }) }), (0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPkm, options: popularPokemonOptions, onChange: (pkm) => setSelectedPkm(pkm) })] }), (0, jsx_runtime_1.jsxs)("article", { children: [sortedMeta.length === 0 && ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })), (0, jsx_runtime_1.jsx)("div", { id: "meta-report-compo-list", children: (0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                                if (height === undefined || width === undefined)
                                    return null;
                                return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: sortedMeta.length, rowHeight: dynamicRowHeight, rowComponent: CompositionRow, rowProps: { sortedMeta } }));
                            } }) })] })] }));
}
function CompositionRow({ index, style, sortedMeta }) {
    return ((0, jsx_runtime_1.jsx)("div", { style: Object.assign(Object.assign({}, style), { paddingBottom: "0.5em" }), children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(team_comp_1.default, { team: sortedMeta[index], rank: index + 1 }) }) }));
}
//# sourceMappingURL=composition-report.js.map