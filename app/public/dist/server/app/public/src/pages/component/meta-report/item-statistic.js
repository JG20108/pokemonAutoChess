"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemStatistic;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const history_chart_1 = require("./history-chart");
const history_delta_1 = require("./history-delta");
function ItemStatistic(props) {
    var _a, _b;
    const { t } = (0, react_i18next_1.useTranslation)();
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const rankHistory = (_a = props.item.rank_history) !== null && _a !== void 0 ? _a : [];
    const countHistory = (_b = props.item.count_history) !== null && _b !== void 0 ? _b : [];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "item-stat my-box", children: [(0, jsx_runtime_1.jsxs)("div", { className: "item-stat-main", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pokemon-rank-col", children: [(0, jsx_runtime_1.jsx)("span", { className: "rank", children: props.rank }), (0, jsx_runtime_1.jsx)("button", { className: "history-expand-btn", onClick: () => setExpanded((v) => !v), title: t("history"), children: expanded ? "▾" : "▸" })] }), (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + props.item.name + ".png", style: {
                            width: "48px",
                            height: "48px"
                        } }), (0, jsx_runtime_1.jsx)("span", { children: t(`item.${props.item.name}`) }), (0, jsx_runtime_1.jsxs)("span", { className: "item-stat-metric", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("average_place"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: props.item.rank }), (0, jsx_runtime_1.jsx)(history_delta_1.HistoryDelta, { entries: rankHistory, invertY: true })] }), (0, jsx_runtime_1.jsxs)("span", { className: "item-stat-metric", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: props.item.count }), (0, jsx_runtime_1.jsx)(history_delta_1.HistoryDelta, { entries: countHistory })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "0.5em", alignItems: "center" }, children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("popular_holders"), ":"] }), props.item.pokemons.map((pokemon) => ((0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon] }, pokemon)))] })] }), expanded && ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-history-charts", children: [(0, jsx_runtime_1.jsx)(history_chart_1.HistoryChart, { entries: rankHistory, label: "average_place", color: "#e8a838", invertY: true }), (0, jsx_runtime_1.jsx)(history_chart_1.HistoryChart, { entries: countHistory, label: "count", color: "#76c893" })] }))] }));
}
//# sourceMappingURL=item-statistic.js.map