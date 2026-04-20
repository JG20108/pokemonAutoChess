"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryChart = HistoryChart;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_i18next_1 = require("react-i18next");
const recharts_1 = require("recharts");
const history_utils_1 = require("./history-utils");
require("./history-chart.css");
const PortraitEndDot = react_1.default.memo(function PortraitEndDot(props) {
    const { dataLength, size, clipId, imageSrc, cx = 0, cy = 0, index = 0 } = props;
    if (index !== dataLength - 1)
        return (0, jsx_runtime_1.jsx)("circle", { r: 0 });
    return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: clipId, children: (0, jsx_runtime_1.jsx)("circle", { cx: cx, cy: cy, r: size / 2 }) }) }), (0, jsx_runtime_1.jsx)("image", { x: cx - size / 2, y: cy - size / 2, width: size, height: size, href: imageSrc, clipPath: `url(#${clipId})` })] }));
});
function HistoryChart(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const chartId = react_1.default.useId();
    const { entries: rawEntries, label, color = "#8884d8", invertY = false, portraitSrc } = props;
    const entries = rawEntries;
    if (!entries || entries.length < 2)
        return null;
    const data = entries.map((e) => ({
        date: e.date,
        dateLabel: (0, history_utils_1.formatDateShort)(e.date),
        value: e.value
    }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "history-chart", children: [label && (0, jsx_runtime_1.jsx)("span", { className: "history-chart-label", children: t(label) }), (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: 150, children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: data, margin: { top: 12, right: 14, bottom: 0, left: 0 }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "#b8b8b8", strokeOpacity: 0.5 }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "dateLabel", tick: { fontSize: 9, fill: "#b8b8b8" }, tickLine: false, axisLine: false, interval: "preserveStartEnd" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { domain: ["dataMin", "dataMax"], reversed: invertY, tick: { fontSize: 9, fill: "#b8b8b8" }, tickLine: false, axisLine: false, width: 40, tickFormatter: (v) => Number.isInteger(v) ? v.toString() : v.toFixed(1) }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: "value", stroke: color, strokeWidth: 2, dot: portraitSrc ? ((0, jsx_runtime_1.jsx)(PortraitEndDot, { dataLength: data.length, size: 20, clipId: `clip-${chartId}`, imageSrc: portraitSrc })) : (false), connectNulls: true, isAnimationActive: false }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { content: ({ active, payload }) => {
                                if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length))
                                    return null;
                                const d = payload[0].payload;
                                const displayValue = d.value;
                                return ((0, jsx_runtime_1.jsxs)("div", { className: "sparkline-tooltip", children: [(0, jsx_runtime_1.jsx)("span", { children: d.date }), (0, jsx_runtime_1.jsx)("strong", { children: typeof displayValue === "number"
                                                ? displayValue.toFixed(2)
                                                : displayValue })] }));
                            } })] }) })] }));
}
//# sourceMappingURL=history-chart.js.map