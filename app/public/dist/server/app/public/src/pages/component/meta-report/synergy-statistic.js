"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyStatistic;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function SynergyStatistic(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("article", { className: "synergy-statistics", children: (0, jsx_runtime_1.jsxs)("div", { className: "synergy-grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "synergy-header", children: [(0, jsx_runtime_1.jsx)("span", { children: t("synergies") }), (0, jsx_runtime_1.jsx)("span", { children: t("count") }), (0, jsx_runtime_1.jsx)("span", { children: t("average_place") })] }), props.synergies.map((synergy, index) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("div", { className: "synergy-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "synergy-info", children: [(0, jsx_runtime_1.jsxs)("span", { className: "synergy-rank", children: ["#", index + 1] }), (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy.name }), (0, jsx_runtime_1.jsx)("span", { className: "synergy-name", children: t(`synergy.${synergy.name}`) })] }), (0, jsx_runtime_1.jsx)("span", { className: "synergy-count", children: (_a = synergy.count) !== null && _a !== void 0 ? _a : 0 }), (0, jsx_runtime_1.jsx)("span", { className: "synergy-rank-value", children: synergy.average_rank
                                    ? synergy.average_rank.toFixed(2)
                                    : "No data" })] }, synergy.name));
                })] }) }));
}
//# sourceMappingURL=synergy-statistic.js.map