"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDistribution = ItemDistribution;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
require("./item-distribution.css");
const recharts_1 = require("recharts");
function getItemImagePath(itemName) {
    return `assets/item/${itemName}.png`;
}
function CustomTooltip({ active, payload }) {
    var _a;
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return ((0, jsx_runtime_1.jsxs)("div", { className: "item-distribution-tooltip", children: [(0, jsx_runtime_1.jsxs)("div", { className: "item-distribution-tooltip-header", children: [(0, jsx_runtime_1.jsx)("img", { src: getItemImagePath(data.name), alt: data.name }), (0, jsx_runtime_1.jsx)("span", { children: (0, i18next_1.t)(`item.${data.name}`) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "item-distribution-tooltip-row", children: [(0, jsx_runtime_1.jsxs)("label", { className: "item-distribution-tooltip-label", children: [(0, i18next_1.t)("average_place"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: (_a = data.avgPlace) === null || _a === void 0 ? void 0 : _a.toFixed(2) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "item-distribution-tooltip-row", children: [(0, jsx_runtime_1.jsxs)("label", { className: "item-distribution-tooltip-label", children: [(0, i18next_1.t)("count"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: data.count })] })] }));
    }
    return null;
}
function ItemScatterPoint({ cx = 0, cy = 0, payload }) {
    const size = 32;
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("image", { x: cx - size / 2, y: cy - size / 2, width: size, height: size, href: getItemImagePath((payload === null || payload === void 0 ? void 0 : payload.name) || "") }) }));
}
function ItemDistribution({ metaItems, eloThreshold, loading, itemFilter }) {
    const scatterData = (0, react_1.useMemo)(() => {
        const tierData = metaItems.find((i) => i.tier === eloThreshold);
        if (!tierData)
            return [];
        let items = Object.values(tierData.items).map((item) => ({
            avgPlace: item.rank,
            count: item.count,
            name: item.name
        }));
        if (itemFilter && itemFilter.length > 0) {
            items = items.filter((item) => itemFilter.includes(item.name));
        }
        return items.sort((a, b) => b.count - a.count).slice(0, 400);
    }, [metaItems, eloThreshold, itemFilter]);
    const xAxisDomain = (0, react_1.useMemo)(() => {
        if (scatterData.length === 0)
            return [0, 8];
        const avgPlaces = scatterData.map((item) => item.avgPlace);
        const min = Math.min(...avgPlaces);
        const max = Math.max(...avgPlaces);
        return [Math.max(0, min - 0.1), max + 0.1];
    }, [scatterData]);
    return ((0, jsx_runtime_1.jsx)("div", { id: "item-distribution", children: scatterData.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })) : ((0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: "95%", children: (0, jsx_runtime_1.jsxs)(recharts_1.ScatterChart, { data: scatterData, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { type: "number", dataKey: "avgPlace", domain: xAxisDomain, tickFormatter: (value) => value.toFixed(2), tick: { fill: "#ddd", fontSize: 12 }, label: {
                            value: "Average Place",
                            position: "insideBottomRight",
                            offset: -5,
                            fill: "#ddd"
                        } }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { dataKey: "count", tick: { fill: "#ddd", fontSize: 12 }, label: {
                            value: "Count",
                            angle: -90,
                            position: "insideLeft",
                            fill: "#ddd"
                        } }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { content: (0, jsx_runtime_1.jsx)(CustomTooltip, {}), wrapperStyle: { outline: "none" }, animationDuration: 0 }), (0, jsx_runtime_1.jsx)(recharts_1.Scatter, { name: "Items", data: scatterData, fill: "#82ca9d", shape: (0, jsx_runtime_1.jsx)(ItemScatterPoint, {}) })] }) })) }));
}
//# sourceMappingURL=item-distribution.js.map