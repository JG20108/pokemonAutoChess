"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonReport = PokemonReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const config_1 = require("../../../../../config");
const EloRank_1 = require("../../../../../types/enum/EloRank");
const Game_1 = require("../../../../../types/enum/Game");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const pokemons_statistic_v2_1 = require("../../../models/pokemons-statistic-v2");
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const pokemon_distribution_1 = require("./pokemon-distribution");
const pokemon_history_panel_1 = require("./pokemon-history-panel");
const pokemon_statistic_1 = __importDefault(require("./pokemon-statistic"));
require("./pokemon-report.css");
const jsx_1 = require("../../utils/jsx");
function PokemonReport() {
    var _a;
    const [pokemonRankingBy, setPokemonRanking] = (0, react_1.useState)("count");
    const [synergy, setSynergy] = (0, react_1.useState)("all");
    const [rarity, setRarity] = (0, react_1.useState)("all");
    const [pool, setPool] = (0, react_1.useState)("all");
    const [tier, setTier] = (0, react_1.useState)("all");
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [eloThreshold, setEloTreshold] = (0, react_1.useState)(EloRank_1.EloRank.LEVEL_BALL);
    const [selectedPkm, setSelectedPkm] = (0, react_1.useState)("");
    const [viewMode, setViewMode] = (0, react_1.useState)("distribution");
    const [metaPokemons, setMetaPokemons] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, pokemons_statistic_v2_1.fetchMetaPokemons)().then((res) => {
            setMetaPokemons(res);
            setLoading(false);
        });
    }, []);
    const sortedMetaPokemons = (0, react_1.useMemo)(() => {
        return [...metaPokemons].map((m) => ({
            tier: m.tier,
            pokemons: (Object.values(m.pokemons) || []).sort((a, b) => {
                const order = pokemonRankingBy === "count" || pokemonRankingBy === "item_count"
                    ? -1
                    : 1;
                return (a[pokemonRankingBy] - b[pokemonRankingBy]) * order;
            })
        }));
    }, [metaPokemons, pokemonRankingBy]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "pokemon-report", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("best_pokemons") }), (0, jsx_runtime_1.jsxs)("div", { className: "filters", children: [(0, jsx_runtime_1.jsxs)("select", { value: pokemonRankingBy, onChange: (e) => setPokemonRanking(e.target.value), children: [(0, jsx_runtime_1.jsxs)("option", { value: "count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_popularity")] }), (0, jsx_runtime_1.jsxs)("option", { value: "rank", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_place")] }), (0, jsx_runtime_1.jsxs)("option", { value: "item_count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_held_items")] })] }), (0, jsx_runtime_1.jsxs)("select", { value: synergy, onChange: (e) => {
                                    setSynergy(e.target.value);
                                }, children: [(0, jsx_runtime_1.jsxs)("option", { value: "all", children: [(0, i18next_1.t)("all"), " ", (0, i18next_1.t)("synergies")] }), Object.keys(Synergy_1.Synergy).map((s) => ((0, jsx_runtime_1.jsx)("option", { value: s, children: (0, i18next_1.t)(`synergy.${s}`) }, s)))] }), (0, jsx_runtime_1.jsxs)("select", { value: rarity, onChange: (e) => setRarity(e.target.value), children: [(0, jsx_runtime_1.jsxs)("option", { value: "all", children: [(0, i18next_1.t)("rarity_label"), ": ", (0, i18next_1.t)("all")] }), Object.keys(Game_1.Rarity).map((r) => ((0, jsx_runtime_1.jsx)("option", { value: r, style: { color: config_1.RarityColor[r] }, children: (0, i18next_1.t)(`rarity.${r}`) }, r)))] }), (0, jsx_runtime_1.jsxs)("select", { value: pool, onChange: (e) => setPool(e.target.value), children: [(0, jsx_runtime_1.jsxs)("option", { value: "all", children: [(0, i18next_1.t)("pool_label"), ": ", (0, i18next_1.t)("all")] }), ["regular", "additional", "regional"].map((p) => ((0, jsx_runtime_1.jsx)("option", { value: p, children: (0, i18next_1.t)(`pool.${p}`) }, p))), (0, jsx_runtime_1.jsx)("option", { value: "special", children: (0, i18next_1.t)(`rarity.SPECIAL`) }, "special")] }), (0, jsx_runtime_1.jsxs)("select", { value: tier, onChange: (e) => setTier(e.target.value), children: [(0, jsx_runtime_1.jsxs)("option", { value: "all", children: [(0, i18next_1.t)("tier"), ": ", (0, i18next_1.t)("all")] }), [1, 2, 3, 4].map((p) => ((0, jsx_runtime_1.jsx)("option", { value: p, children: `⭐`.repeat(p) }, p)))] }), (0, jsx_runtime_1.jsx)("select", { value: eloThreshold, onChange: (e) => setEloTreshold(e.target.value), children: Object.keys(EloRank_1.EloRank).map((r) => ((0, jsx_runtime_1.jsxs)("option", { value: r, children: [(0, i18next_1.t)(`elorank.${r}`), " (", (0, i18next_1.t)("elo"), " ", ">", " ", config_1.EloRankThreshold[r], ")"] }, r))) })] }), (0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPkm !== null && selectedPkm !== void 0 ? selectedPkm : "", onChange: (pkm) => setSelectedPkm(pkm) })] }), loading && (0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("loading") }), !loading && ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-report-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "pokemon-statistics-list", children: (0, jsx_runtime_1.jsx)(pokemon_statistic_1.default, { pokemons: ((_a = sortedMetaPokemons === null || sortedMetaPokemons === void 0 ? void 0 : sortedMetaPokemons.find((p) => p.tier === eloThreshold)) === null || _a === void 0 ? void 0 : _a.pokemons) || new Array(), rankingBy: pokemonRankingBy, synergy: synergy, rarity: rarity, pool: pool, tier: tier, selectedPkm: selectedPkm }) }), (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-distribution-chart", children: [(0, jsx_runtime_1.jsxs)("div", { className: "view-switcher", children: [(0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", {
                                            active: viewMode === "distribution"
                                        }), onClick: () => setViewMode("distribution"), children: [(0, i18next_1.t)("overview"), (0, jsx_runtime_1.jsx)("span", { className: "view-limit-hint", children: (0, i18next_1.t)("top_n", { count: 400 }) })] }), (0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", {
                                            active: viewMode === "count-history"
                                        }), onClick: () => setViewMode("count-history"), children: [(0, i18next_1.t)("popularity_over_time"), (0, jsx_runtime_1.jsx)("span", { className: "view-limit-hint", children: (0, i18next_1.t)("top_n", { count: 50 }) })] }), (0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", {
                                            active: viewMode === "rank-history"
                                        }), onClick: () => setViewMode("rank-history"), children: [(0, i18next_1.t)("placement_over_time"), (0, jsx_runtime_1.jsx)("span", { className: "view-limit-hint", children: (0, i18next_1.t)("top_n", { count: 50 }) })] })] }), viewMode === "distribution" && ((0, jsx_runtime_1.jsx)(pokemon_distribution_1.PokemonDistribution, { metaPokemons: metaPokemons, eloThreshold: eloThreshold, loading: loading, synergy: synergy, rarity: rarity, pool: pool, tier: tier, selectedPkm: selectedPkm })), viewMode === "count-history" && ((0, jsx_runtime_1.jsx)(pokemon_history_panel_1.PokemonHistoryPanel, { metaPokemons: metaPokemons, eloThreshold: eloThreshold, loading: loading, metric: "count", synergy: synergy, rarity: rarity, pool: pool, tier: tier, selectedPkm: selectedPkm })), viewMode === "rank-history" && ((0, jsx_runtime_1.jsx)(pokemon_history_panel_1.PokemonHistoryPanel, { metaPokemons: metaPokemons, eloThreshold: eloThreshold, loading: loading, metric: "rank", synergy: synergy, rarity: rarity, pool: pool, tier: tier, selectedPkm: selectedPkm }))] })] }))] }));
}
//# sourceMappingURL=pokemon-report.js.map