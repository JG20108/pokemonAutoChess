"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemReport = ItemReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const react_tabs_1 = require("react-tabs");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const config_1 = require("../../../../../config");
const EloRank_1 = require("../../../../../types/enum/EloRank");
const Item_1 = require("../../../../../types/enum/Item");
const items_statistic_v2_1 = require("../../../models/items-statistic-v2");
const item_distribution_1 = require("./item-distribution");
const item_history_panel_1 = require("./item-history-panel");
const item_statistic_1 = __importDefault(require("./item-statistic"));
require("./item-report.css");
const object_1 = require("../../../../../utils/object");
const jsx_1 = require("../../utils/jsx");
function ItemReport() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [metaItems, setMetaItems] = (0, react_1.useState)([]);
    const [itemRankingBy, setItemRanking] = (0, react_1.useState)("count");
    const [eloThreshold, setEloTreshold] = (0, react_1.useState)(EloRank_1.EloRank.LEVEL_BALL);
    const [viewMode, setViewMode] = (0, react_1.useState)("distribution");
    (0, react_1.useEffect)(() => {
        (0, items_statistic_v2_1.fetchMetaItems)().then((res) => {
            setMetaItems(res);
            setLoading(false);
        });
    }, []);
    const sortedMetaItems = (0, react_1.useMemo)(() => {
        return [...metaItems].map((m) => ({
            tier: m.tier,
            items: (Object.values(m.items) || []).sort((a, b) => {
                const order = itemRankingBy === "count" ? -1 : 1;
                return (a[itemRankingBy] - b[itemRankingBy]) * order;
            })
        }));
    }, [metaItems, itemRankingBy]);
    const tabs = [
        { label: (0, i18next_1.t)("craftable_items"), key: "craftable", items: Item_1.CraftableItems },
        { label: (0, i18next_1.t)("tools"), key: "tools", items: Item_1.Tools },
        {
            label: (0, i18next_1.t)("shiny_items"),
            key: "shiny_items",
            items: Item_1.ShinyItems.filter((i) => !Item_1.UnholdableItems.includes(i))
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { id: "item-report", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("best_items") }), (0, jsx_runtime_1.jsxs)("select", { value: itemRankingBy, onChange: (e) => {
                            setItemRanking(e.target.value);
                        }, children: [(0, jsx_runtime_1.jsxs)("option", { value: "count", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_popularity")] }), (0, jsx_runtime_1.jsxs)("option", { value: "rank", children: [(0, i18next_1.t)("rank"), " ", (0, i18next_1.t)("by_average_place")] })] }), (0, jsx_runtime_1.jsx)("select", { value: eloThreshold, onChange: (e) => setEloTreshold(e.target.value), children: (0, object_1.keys)(EloRank_1.EloRank).map((r) => ((0, jsx_runtime_1.jsxs)("option", { value: r, children: [(0, i18next_1.t)(`elorank.${r}`), " (", (0, i18next_1.t)("elo"), " ", ">", " ", config_1.EloRankThreshold[r], ")"] }, r))) })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: tabs.map((tab) => ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: tab.label }, tab.key))) }), tabs.map((tab) => {
                        var _a, _b;
                        return ((0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "item-statistics-list", children: [sortedMetaItems.length === 0 && ((0, jsx_runtime_1.jsx)("p", { children: loading ? (0, i18next_1.t)("loading") : (0, i18next_1.t)("no_data_available") })), (0, jsx_runtime_1.jsx)(VirtualizedItemList, { items: (_b = (_a = sortedMetaItems === null || sortedMetaItems === void 0 ? void 0 : sortedMetaItems.find((i) => i.tier === eloThreshold)) === null || _a === void 0 ? void 0 : _a.items.filter((item) => tab.items && tab.items.includes(item.name))) !== null && _b !== void 0 ? _b : [] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "item-distribution-chart", children: [(0, jsx_runtime_1.jsxs)("div", { className: "view-switcher", children: [(0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", {
                                                        active: viewMode === "distribution"
                                                    }), onClick: () => setViewMode("distribution"), children: [(0, i18next_1.t)("overview"), (0, jsx_runtime_1.jsx)("span", { className: "view-limit-hint", children: (0, i18next_1.t)("top_n", { count: 400 }) })] }), (0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", {
                                                        active: viewMode === "count-history"
                                                    }), onClick: () => setViewMode("count-history"), children: [(0, i18next_1.t)("popularity_over_time"), (0, jsx_runtime_1.jsx)("span", { className: "view-limit-hint", children: (0, i18next_1.t)("top_n", { count: 200 }) })] }), (0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", {
                                                        active: viewMode === "rank-history"
                                                    }), onClick: () => setViewMode("rank-history"), children: [(0, i18next_1.t)("placement_over_time"), (0, jsx_runtime_1.jsx)("span", { className: "view-limit-hint", children: (0, i18next_1.t)("top_n", { count: 200 }) })] })] }), viewMode === "distribution" && ((0, jsx_runtime_1.jsx)(item_distribution_1.ItemDistribution, { metaItems: metaItems, eloThreshold: eloThreshold, loading: loading, itemFilter: tab.items })), viewMode === "count-history" && ((0, jsx_runtime_1.jsx)(item_history_panel_1.ItemHistoryPanel, { metaItems: metaItems, eloThreshold: eloThreshold, loading: loading, metric: "count", itemFilter: tab.items })), viewMode === "rank-history" && ((0, jsx_runtime_1.jsx)(item_history_panel_1.ItemHistoryPanel, { metaItems: metaItems, eloThreshold: eloThreshold, loading: loading, metric: "rank", itemFilter: tab.items }))] })] }, tab.key));
                    })] })] }));
}
const ESTIMATED_ITEM_HEIGHT = 80;
function VirtualizedItemList({ items }) {
    const dynamicRowHeight = (0, react_window_1.useDynamicRowHeight)({
        defaultRowHeight: ESTIMATED_ITEM_HEIGHT,
        key: items.length
    });
    if (items.length === 0)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
            if (height === undefined || width === undefined)
                return null;
            return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: items.length, rowHeight: dynamicRowHeight, rowComponent: ItemRow, rowProps: { items } }));
        } }));
}
function ItemRow({ index, style, items }) {
    return ((0, jsx_runtime_1.jsx)("div", { style: style, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(item_statistic_1.default, { item: items[index], rank: index + 1 }) }) }));
}
//# sourceMappingURL=item-report.js.map