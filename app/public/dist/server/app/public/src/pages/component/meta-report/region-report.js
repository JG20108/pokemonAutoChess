"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionReport = RegionReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const regions_statistic_1 = require("../../../models/regions-statistic");
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const region_statistic_1 = __importDefault(require("./region-statistic"));
require("./region-report.css");
function RegionReport() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [metaRegions, setMetaRegions] = (0, react_1.useState)([]);
    const [regionRankingBy, setRegionRanking] = (0, react_1.useState)("count");
    const [selectedPkm, setSelectedPkm] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        (0, regions_statistic_1.fetchMetaRegions)().then((res) => {
            setMetaRegions(res);
            setLoading(false);
        });
    }, []);
    const sortedMetaRegions = [...metaRegions]
        .filter((r) => selectedPkm === "" || r.pokemons.includes(selectedPkm))
        .sort((a, b) => {
        const order = regionRankingBy === "count" ? -1 : 1;
        return (a[regionRankingBy] - b[regionRankingBy]) * order;
    });
    return ((0, jsx_runtime_1.jsxs)("div", { id: "region-report", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("best_regions") }), (0, jsx_runtime_1.jsx)("div", { className: "filters", children: (0, jsx_runtime_1.jsxs)("select", { value: regionRankingBy, onChange: (e) => {
                                setRegionRanking(e.target.value);
                            }, children: [(0, jsx_runtime_1.jsxs)("option", { value: "count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_popularity")] }), (0, jsx_runtime_1.jsxs)("option", { value: "rank", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_place")] })] }) }), (0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPkm !== null && selectedPkm !== void 0 ? selectedPkm : "", onChange: (pkm) => setSelectedPkm(pkm) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { height: "calc(90vh - 12em)", overflowY: "scroll" }, children: [loading && (0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("loading") }), !loading && metaRegions.length === 0 && ((0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("no_data_available") })), sortedMetaRegions.map((region, i) => ((0, jsx_runtime_1.jsx)(region_statistic_1.default, { region: region, rank: i + 1 }, region.name)))] })] }));
}
//# sourceMappingURL=region-report.js.map