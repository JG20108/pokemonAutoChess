"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityReport = ActivityReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const recharts_1 = require("recharts");
const game_activity_1 = require("../../../models/game-activity");
const date_1 = require("../../utils/date");
require("./activity-report.css");
const CHART_MARGIN = { top: 10, right: 10, left: 10, bottom: 10 };
function CustomTooltip({ active, payload, label }) {
    if (!active || !payload || payload.length === 0)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "activity-report-tooltip", children: [(0, jsx_runtime_1.jsx)("h3", { children: label }), payload.map((entry) => ((0, jsx_runtime_1.jsxs)("p", { style: { color: entry.color }, children: [entry.name, ": ", entry.value.toLocaleString()] }, entry.name)))] }));
}
function ActivityReport() {
    var _a, _b;
    const [activity, setActivity] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        setLoading(true);
        setError("");
        (0, game_activity_1.fetchGameActivity)()
            .then((res) => setActivity(res))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);
    const totalGames = (0, react_1.useMemo)(() => { var _a; return (_a = activity === null || activity === void 0 ? void 0 : activity.days.reduce((acc, d) => acc + d.gameCount, 0)) !== null && _a !== void 0 ? _a : 0; }, [activity]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "activity-report", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("game_activity", { defaultValue: "Game Activity" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "meta", children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, i18next_1.t)("total_games_30d", { defaultValue: "Games (last 30 days)" }), ":", " ", totalGames.toLocaleString()] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, i18next_1.t)("last_updated", { defaultValue: "Last updated" }), ":", " ", activity ? (0, date_1.formatDate)(new Date(activity.updatedAt)) : "-"] })] })] }), loading && (0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("loading", { defaultValue: "Loading" }) }), !loading && error && (0, jsx_runtime_1.jsx)("p", { className: "error", children: error }), !loading && !error && ((_a = activity === null || activity === void 0 ? void 0 : activity.days.length) !== null && _a !== void 0 ? _a : 0) === 0 && ((0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("no_data_available", { defaultValue: "No data available" }) })), !loading && !error && ((_b = activity === null || activity === void 0 ? void 0 : activity.days.length) !== null && _b !== void 0 ? _b : 0) > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "chart-shell", children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: "100%", children: (0, jsx_runtime_1.jsxs)(recharts_1.ComposedChart, { data: activity.days, margin: CHART_MARGIN, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "date", angle: -35, textAnchor: "end", height: 60, tick: { fill: "#ddd", fontSize: 10 }, interval: "preserveStartEnd" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { tick: { fill: "#ddd", fontSize: 11 }, allowDecimals: false, tickFormatter: (v) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v) }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { content: (0, jsx_runtime_1.jsx)(CustomTooltip, {}), wrapperStyle: { outline: "none" }, animationDuration: 0 }), (0, jsx_runtime_1.jsx)(recharts_1.Legend, { wrapperStyle: { color: "#ccc", fontSize: "0.85em" } }), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "gameCount", name: (0, i18next_1.t)("game_count", { defaultValue: "Games" }), stroke: "#6ba3ff", fill: "rgba(107,163,255,0.35)", strokeWidth: 3, dot: { fill: "#6ba3ff", r: 4 }, activeDot: { r: 6 } })] }) }) }))] }));
}
//# sourceMappingURL=activity-report.js.map