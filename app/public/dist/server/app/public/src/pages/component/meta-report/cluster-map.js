"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterMap = ClusterMap;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const meta_v2_1 = require("../../../models/meta-v2");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./cluster-map.css");
const meta_chart_1 = require("./meta-chart");
function ClusterMap() {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [meta, setMeta] = (0, react_1.useState)([]);
    const [selectedComposition, setSelectedComposition] = (0, react_1.useState)();
    const [hoveredCluster, setHoveredCluster] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        (0, meta_v2_1.fetchMetaV2)().then((res) => {
            setLoading(false);
            setMeta(res);
        });
    }, []);
    const selectedClusterData = meta.find((m) => m.cluster_id === selectedComposition);
    const displayedCluster = hoveredCluster || selectedClusterData;
    return ((0, jsx_runtime_1.jsx)("div", { className: "cluster-map-container", children: loading ? ((0, jsx_runtime_1.jsx)("div", { className: "cluster-map-loading", children: t("cluster_map.loading") })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "cluster-map-chart-wrapper", children: (0, jsx_runtime_1.jsx)(meta_chart_1.MetaChart, { meta: meta, setSelectedComposition: setSelectedComposition, setHoveredCluster: setHoveredCluster, selectedCluster: selectedComposition }) }), (0, jsx_runtime_1.jsxs)("div", { className: "cluster-map-info-panel", children: [(0, jsx_runtime_1.jsx)("h3", { children: t("cluster_map.title") }), (0, jsx_runtime_1.jsx)("p", { className: "cluster-map-info-text", children: t("cluster_map.description") }), (0, jsx_runtime_1.jsxs)("div", { className: "cluster-map-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("cluster_map.total_clusters"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: meta.length })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("cluster_map.total_matches"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: meta.reduce((sum, m) => sum + m.count, 0) })] })] }), displayedCluster && ((0, jsx_runtime_1.jsxs)("div", { className: "cluster-detail-panel", children: [(0, jsx_runtime_1.jsxs)("h4", { children: [hoveredCluster
                                            ? t("cluster_map.hovered_cluster")
                                            : t("cluster_map.selected_cluster"), " ", t("cluster_map.cluster"), " #", displayedCluster.cluster_id] }), displayedCluster.synergies && ((0, jsx_runtime_1.jsx)("div", { className: "synergies-container", children: Object.entries(displayedCluster.synergies)
                                        .sort((a, b) => b[1] - a[1])
                                        .slice(0, 3)
                                        .map(([type, level]) => ((0, jsx_runtime_1.jsxs)("div", { className: "synergy-item-display", children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type.toUpperCase(), size: "32px" }), (0, jsx_runtime_1.jsx)("span", { children: level })] }, type))) })), (0, jsx_runtime_1.jsxs)("div", { className: "cluster-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("cluster_map.rank"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: displayedCluster.mean_rank.toFixed(2) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("cluster_map.winrate"), ":"] }), (0, jsx_runtime_1.jsxs)("span", { children: [displayedCluster.winrate.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("cluster_map.popularity"), ":"] }), (0, jsx_runtime_1.jsxs)("span", { children: [displayedCluster.ratio.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("cluster_map.count"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: displayedCluster.count })] })] }), ((_a = displayedCluster.mean_team) === null || _a === void 0 ? void 0 : _a.pokemons) && ((0, jsx_runtime_1.jsx)("div", { className: "pokemon-grid", children: Object.entries(displayedCluster.mean_team.pokemons)
                                        .sort((a, b) => { var _a, _b, _c, _d; return ((_b = (_a = b[1]) === null || _a === void 0 ? void 0 : _a.frequency) !== null && _b !== void 0 ? _b : 0) - ((_d = (_c = a[1]) === null || _c === void 0 ? void 0 : _c.frequency) !== null && _d !== void 0 ? _d : 0); })
                                        .slice(0, 10)
                                        .map(([pokemonName, data]) => {
                                        var _a;
                                        return ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-container-item", children: [(0, jsx_runtime_1.jsx)("div", { className: "pokemon-portrait-wrapper", children: (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemonName] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-frequency", children: [(((_a = data === null || data === void 0 ? void 0 : data.frequency) !== null && _a !== void 0 ? _a : 0) * 100).toFixed(0), "%"] })] }, pokemonName));
                                    }) }))] }))] })] })) }));
}
//# sourceMappingURL=cluster-map.js.map