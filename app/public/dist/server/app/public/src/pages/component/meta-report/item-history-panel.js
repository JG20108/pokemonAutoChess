"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemHistoryPanel = ItemHistoryPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = __importStar(require("react"));
const recharts_1 = require("recharts");
const history_utils_1 = require("./history-utils");
require("./item-history-panel.css");
function getItemImagePath(itemName) {
    return `assets/item/${itemName}.png`;
}
function getColorForName(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = ((hash % 360) + 360) % 360;
    return `hsl(${hue}, 70%, 55%)`;
}
const ImageEndDot = react_1.default.memo(function ImageEndDot(props) {
    const { dataLength, size, imageSrc, cx = 0, cy = 0, index = 0 } = props;
    if (index !== dataLength - 1)
        return (0, jsx_runtime_1.jsx)("circle", { r: 0 });
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("image", { x: cx - size / 2, y: cy - size / 2, width: size, height: size, href: imageSrc }) }));
});
function CustomTooltip({ active, payload, label, metric }) {
    if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length))
        return null;
    const sorted = [...payload].sort((a, b) => metric === "count" ? b.value - a.value : a.value - b.value);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "item-history-tooltip", children: [(0, jsx_runtime_1.jsx)("div", { className: "item-history-tooltip-date", children: label }), sorted.slice(0, 10).map((entry) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)("div", { className: "item-history-tooltip-row", children: [(0, jsx_runtime_1.jsx)("img", { src: getItemImagePath(entry.name), width: 20, height: 20 }), (0, jsx_runtime_1.jsx)("span", { style: { color: entry.color }, children: (0, i18next_1.t)(`item.${entry.name}`) }), (0, jsx_runtime_1.jsx)("span", { children: (_a = entry.value) === null || _a === void 0 ? void 0 : _a.toFixed(2) })] }, entry.name));
            }), sorted.length > 10 && ((0, jsx_runtime_1.jsxs)("div", { className: "item-history-tooltip-more", children: ["+", sorted.length - 10, " more"] }))] }));
}
function ItemHistoryPanel({ metaItems, eloThreshold, loading, metric, itemFilter }) {
    const { data, itemNames, colorMap } = (0, react_1.useMemo)(() => {
        var _a, _b;
        const tierData = metaItems.find((i) => i.tier === eloThreshold);
        if (!tierData)
            return { data: [], itemNames: [], colorMap: {} };
        let items = Object.values(tierData.items).filter((item) => item.count > 0);
        if (itemFilter && itemFilter.length > 0) {
            items = items.filter((item) => itemFilter.includes(item.name));
        }
        items = items
            .sort((a, b) => metric === "count" ? b.count - a.count : a.rank - b.rank)
            .slice(0, 200);
        const allDates = new Set();
        const validItems = [];
        for (const item of items) {
            const rawHistory = metric === "count"
                ? ((_a = item.count_history) !== null && _a !== void 0 ? _a : [])
                : ((_b = item.rank_history) !== null && _b !== void 0 ? _b : []);
            if (rawHistory.length < 2)
                continue;
            validItems.push({ name: item.name, history: rawHistory });
            for (const entry of rawHistory) {
                allDates.add(entry.date);
            }
        }
        const sortedDates = Array.from(allDates).sort();
        const names = validItems.map((i) => i.name);
        const cMap = {};
        names.forEach((n) => {
            cMap[n] = getColorForName(n);
        });
        const historyMaps = new Map(validItems.map((item) => [
            item.name,
            new Map(item.history.map((e) => [e.date, e.value]))
        ]));
        const chartData = sortedDates.map((date) => {
            var _a;
            const point = {
                date,
                dateLabel: (0, history_utils_1.formatDateShort)(date)
            };
            for (const item of validItems) {
                const value = (_a = historyMaps.get(item.name)) === null || _a === void 0 ? void 0 : _a.get(date);
                if (value !== undefined)
                    point[item.name] = value;
            }
            return point;
        });
        return { data: chartData, itemNames: names, colorMap: cMap };
    }, [metaItems, eloThreshold, metric, itemFilter]);
    const yDomain = (0, react_1.useMemo)(() => {
        if (data.length === 0)
            return [0, 8];
        const allValues = [];
        for (const point of data) {
            for (const key of Object.keys(point)) {
                if (key !== "date" &&
                    key !== "dateLabel" &&
                    typeof point[key] === "number") {
                    allValues.push(point[key]);
                }
            }
        }
        if (allValues.length === 0)
            return [0, 8];
        const min = Math.min(...allValues);
        const max = Math.max(...allValues);
        const padding = (max - min) * 0.05 || 0.5;
        return [Math.max(0, min - padding), max + padding];
    }, [data]);
    const yLabel = metric === "count" ? (0, i18next_1.t)("count") : (0, i18next_1.t)("average_place");
    const invertY = metric === "rank";
    return ((0, jsx_runtime_1.jsx)("div", { id: "item-history-panel", children: data.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })) : ((0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: "100%", children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: data, margin: { top: 10, right: 30, left: 0, bottom: 30 }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "dateLabel", tick: { fill: "#ddd", fontSize: 10 }, tickLine: false, interval: "preserveStartEnd" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { tick: { fill: "#ddd", fontSize: 10 }, domain: yDomain, label: {
                            value: yLabel,
                            angle: -90,
                            position: "insideLeft",
                            fill: "#ddd",
                            fontSize: 11
                        }, width: 40, reversed: invertY }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { content: (0, jsx_runtime_1.jsx)(CustomTooltip, { metric: metric }), wrapperStyle: { outline: "none" }, animationDuration: 0 }), itemNames.map((name) => ((0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: name, stroke: colorMap[name], strokeWidth: 1.5, dot: (0, jsx_runtime_1.jsx)(ImageEndDot, { dataLength: data.length, size: 24, imageSrc: getItemImagePath(name) }), connectNulls: true, isAnimationActive: false }, name)))] }) })) }));
}
//# sourceMappingURL=item-history-panel.js.map