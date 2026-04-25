"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerReport = PlayerReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const recharts_1 = require("recharts");
const EloRank_1 = require("../../../../../types/enum/EloRank");
const elo_1 = require("../../../../../utils/elo");
const player_rank_distribution_1 = require("../../../models/player-rank-distribution");
const date_1 = require("../../utils/date");
const CHART_MARGIN = { top: 30, right: 10, left: 10, bottom: 10 };
const RANK_COLORS = {
    [EloRank_1.EloRank.LEVEL_BALL]: "#8c8c8c",
    [EloRank_1.EloRank.NET_BALL]: "#3da0e8",
    [EloRank_1.EloRank.SAFARI_BALL]: "#a08840",
    [EloRank_1.EloRank.LOVE_BALL]: "#e05080",
    [EloRank_1.EloRank.PREMIER_BALL]: "#ababab",
    [EloRank_1.EloRank.QUICK_BALL]: "#2a6ee0",
    [EloRank_1.EloRank.POKE_BALL]: "#e03030",
    [EloRank_1.EloRank.SUPER_BALL]: "#4a35e0",
    [EloRank_1.EloRank.ULTRA_BALL]: "#d4a800",
    [EloRank_1.EloRank.MASTER_BALL]: "#a040d8",
    [EloRank_1.EloRank.BEAST_BALL]: "#c00000"
};
const RANK_BAND_COLORS = {
    [EloRank_1.EloRank.LEVEL_BALL]: "rgba(180, 180, 180, 0.12)",
    [EloRank_1.EloRank.NET_BALL]: "rgba(120, 196, 255, 0.12)",
    [EloRank_1.EloRank.SAFARI_BALL]: "rgba(206, 180, 103, 0.12)",
    [EloRank_1.EloRank.LOVE_BALL]: "rgba(255, 132, 170, 0.12)",
    [EloRank_1.EloRank.PREMIER_BALL]: "rgba(255, 255, 255, 0.12)",
    [EloRank_1.EloRank.QUICK_BALL]: "rgba(84, 148, 255, 0.12)",
    [EloRank_1.EloRank.POKE_BALL]: "rgba(255, 110, 110, 0.12)",
    [EloRank_1.EloRank.SUPER_BALL]: "rgba(114, 99, 255, 0.12)",
    [EloRank_1.EloRank.ULTRA_BALL]: "rgba(255, 214, 74, 0.12)",
    [EloRank_1.EloRank.MASTER_BALL]: "rgba(206, 111, 255, 0.12)",
    [EloRank_1.EloRank.BEAST_BALL]: "rgba(255, 110, 110, 0.12)"
};
function formatPercent(value) {
    if (value === 0)
        return "0%";
    if (value < 0.01)
        return "<0.01%";
    if (value < 0.1)
        return `${value.toFixed(3)}%`;
    if (value < 1)
        return `${value.toFixed(2)}%`;
    return `${value.toFixed(1)}%`;
}
function formatTopPercent(value) {
    const numericValue = Number(value !== null && value !== void 0 ? value : 0);
    return `Top ${formatPercent(numericValue)}`;
}
function getBucketColor(bucket) {
    return RANK_COLORS[getBucketRank(bucket)];
}
function getBucketRank(bucket) {
    var _a;
    const elo = (_a = bucket.minElo) !== null && _a !== void 0 ? _a : 0;
    return (0, elo_1.getRank)(elo);
}
function buildRankSegments(buckets) {
    if (buckets.length === 0)
        return [];
    const segments = [];
    let currentRank = getBucketRank(buckets[0]);
    let startIndex = 0;
    for (let i = 1; i < buckets.length; i += 1) {
        const rank = getBucketRank(buckets[i]);
        if (rank !== currentRank) {
            segments.push({ rank: currentRank, startIndex, endIndex: i - 1 });
            currentRank = rank;
            startIndex = i;
        }
    }
    segments.push({ rank: currentRank, startIndex, endIndex: buckets.length - 1 });
    return segments;
}
function CustomTooltip({ active, payload }) {
    var _a;
    if (!active || !payload || payload.length === 0) {
        return null;
    }
    const bucket = payload[0].payload;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "player-report-tooltip", children: [(0, jsx_runtime_1.jsx)("h3", { children: bucket.bucketLabel }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, i18next_1.t)("count", { defaultValue: "Count" }), ": ", bucket.count] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, i18next_1.t)("rank_share", { defaultValue: "Share" }), ":", " ", bucket.percentage.toFixed(10), "%"] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, i18next_1.t)("top_percent", { defaultValue: "Top %" }), ":", " ", bucket.topPercent.toFixed(10), "%"] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, i18next_1.t)("elo", { defaultValue: "Elo" }), ": ", (_a = bucket.minElo) !== null && _a !== void 0 ? _a : "<600", bucket.maxElo !== null ? ` - ${bucket.maxElo}` : ""] })] }));
}
function PlayerReport() {
    var _a;
    const [distribution, setDistribution] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        setLoading(true);
        setError("");
        (0, player_rank_distribution_1.fetchPlayerRankDistribution)()
            .then((res) => {
            setDistribution(res);
        })
            .catch((err) => {
            setError(err.message);
        })
            .finally(() => {
            setLoading(false);
        });
    }, []);
    const chartData = (0, react_1.useMemo)(() => {
        var _a;
        return ((_a = distribution === null || distribution === void 0 ? void 0 : distribution.buckets) !== null && _a !== void 0 ? _a : []).map((bucket) => (Object.assign(Object.assign({}, bucket), { countForScale: bucket.count > 0 ? bucket.count : null })));
    }, [distribution]);
    const rankSegments = (0, react_1.useMemo)(() => {
        return buildRankSegments(chartData);
    }, [chartData]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "player-report", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("player_rank_distribution", {
                            defaultValue: "Player Rank Distribution"
                        }) }), (0, jsx_runtime_1.jsxs)("div", { className: "meta", children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, i18next_1.t)("total_players", { defaultValue: "Total players" }), ":", " ", (_a = distribution === null || distribution === void 0 ? void 0 : distribution.totalPlayers) !== null && _a !== void 0 ? _a : 0] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, i18next_1.t)("last_updated", { defaultValue: "Last updated" }), ":", " ", distribution ? (0, date_1.formatDate)(new Date(distribution.updatedAt)) : "-"] })] })] }), loading && (0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("loading", { defaultValue: "Loading" }) }), !loading && error && (0, jsx_runtime_1.jsx)("p", { className: "error", children: error }), !loading && !error && chartData.length === 0 && ((0, jsx_runtime_1.jsx)("p", { children: (0, i18next_1.t)("no_data_available", { defaultValue: "No data available" }) })), !loading && !error && chartData.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "chart-shell", children: [(0, jsx_runtime_1.jsx)("div", { className: "rank-bands", style: {
                            top: CHART_MARGIN.top,
                            right: CHART_MARGIN.right,
                            bottom: CHART_MARGIN.bottom,
                            left: CHART_MARGIN.left
                        }, children: rankSegments.map((segment) => {
                            const total = chartData.length;
                            const leftPct = (segment.startIndex / total) * 100;
                            const widthPct = ((segment.endIndex - segment.startIndex + 1) / total) * 100;
                            return ((0, jsx_runtime_1.jsx)("div", { className: "rank-band", style: {
                                    left: `${leftPct}%`,
                                    width: `${widthPct}%`,
                                    backgroundColor: RANK_BAND_COLORS[segment.rank]
                                }, children: (0, jsx_runtime_1.jsx)("div", { className: "rank-chip", children: (0, jsx_runtime_1.jsx)("img", { src: `assets/ranks/${segment.rank}.svg`, alt: (0, i18next_1.t)(`elorank.${segment.rank}`), title: (0, i18next_1.t)(`elorank.${segment.rank}`) }) }) }, `band-${segment.rank}-${segment.startIndex}`));
                        }) }), (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: "100%", children: (0, jsx_runtime_1.jsxs)(recharts_1.BarChart, { data: chartData, margin: CHART_MARGIN, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "bucketLabel", angle: -35, interval: 0, textAnchor: "end", height: 70, tick: { fill: "#ddd", fontSize: 10 } }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { scale: "log", domain: [1, "dataMax"], tick: { fill: "#ddd", fontSize: 11 }, allowDecimals: false, tickFormatter: (value) => value >= 1000 ? value.toLocaleString() : String(value) }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { content: (0, jsx_runtime_1.jsx)(CustomTooltip, {}), wrapperStyle: { outline: "none" }, animationDuration: 0 }), (0, jsx_runtime_1.jsxs)(recharts_1.Bar, { dataKey: "countForScale", radius: [4, 4, 0, 0], children: [chartData.map((bucket) => ((0, jsx_runtime_1.jsx)(recharts_1.Cell, { fill: getBucketColor(bucket) }, `cell-${bucket.bucketLabel}`))), (0, jsx_runtime_1.jsx)(recharts_1.LabelList, { dataKey: "topPercent", position: "top", className: "player-report-top-label", formatter: formatTopPercent })] })] }) })] }))] }));
}
//# sourceMappingURL=player-report.js.map