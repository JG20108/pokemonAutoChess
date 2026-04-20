"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyReport = SynergyReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const config_1 = require("../../../../../config");
const EloRank_1 = require("../../../../../types/enum/EloRank");
const pokemons_statistic_v2_1 = require("../../../models/pokemons-statistic-v2");
const synergy_statistic_1 = __importDefault(require("./synergy-statistic"));
require("./synergy-report.css");
function SynergyReport() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [eloThreshold, setEloTreshold] = (0, react_1.useState)(EloRank_1.EloRank.LEVEL_BALL);
    const [synergyRankingBy, setSynergyRanking] = (0, react_1.useState)("count");
    const [metaTypes, setMetaTypes] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        (0, pokemons_statistic_v2_1.fetchMetaTypes)().then((res) => {
            setMetaTypes(res);
            setLoading(false);
        });
    }, []);
    const sortedSynergies = (0, react_1.useMemo)(() => {
        if (!metaTypes || !metaTypes[eloThreshold]) {
            return [];
        }
        const synergyData = Object.entries(metaTypes[eloThreshold]).map(([synergyName, data]) => ({
            name: synergyName,
            count: data.count,
            average_rank: data.average_rank
        }));
        return synergyData.sort((a, b) => {
            const order = synergyRankingBy === "count" ? -1 : 1;
            return (a[synergyRankingBy] - b[synergyRankingBy]) * order;
        });
    }, [metaTypes, eloThreshold, synergyRankingBy]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "synergy-report", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("synergies") }), (0, jsx_runtime_1.jsxs)("div", { className: "filters", children: [(0, jsx_runtime_1.jsxs)("select", { value: synergyRankingBy, onChange: (e) => setSynergyRanking(e.target.value), children: [(0, jsx_runtime_1.jsxs)("option", { value: "count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_popularity")] }), (0, jsx_runtime_1.jsxs)("option", { value: "average_rank", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_place")] })] }), (0, jsx_runtime_1.jsx)("select", { value: eloThreshold, onChange: (e) => setEloTreshold(e.target.value), children: Object.keys(EloRank_1.EloRank).map((r) => ((0, jsx_runtime_1.jsxs)("option", { value: r, children: [(0, i18next_1.t)(`elorank.${r}`), " (", (0, i18next_1.t)("elo"), " ", ">", " ", config_1.EloRankThreshold[r], ")"] }, r))) })] })] }), loading && (0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("loading") }), !loading && ((0, jsx_runtime_1.jsx)(synergy_statistic_1.default, { synergies: sortedSynergies, rankingBy: synergyRankingBy }))] }));
}
//# sourceMappingURL=synergy-report.js.map