"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MetaReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const cluster_map_1 = require("./cluster-map");
const composition_report_1 = require("./composition-report");
const dendrogram_chart_1 = require("./dendrogram-chart");
const item_report_1 = require("./item-report");
const metadata_report_1 = __importDefault(require("./metadata-report"));
const pokemon_report_1 = require("./pokemon-report");
const region_report_1 = require("./region-report");
const synergy_report_1 = require("./synergy-report");
require("./meta-report.css");
function MetaReport() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const isAdmin = (0, hooks_1.useAppSelector)((state) => { var _a; return ((_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.role) === types_1.Role.ADMIN; });
    return ((0, jsx_runtime_1.jsx)("div", { id: "meta-report", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("meta_report") }, "team-comps"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("cluster_map.title") }, "cluster-map"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("dendrogram.title") }, "dendrogram"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("pokemon_report") }, "pokemons"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("item_report") }, "items"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("region_report") }, "regions"), isAdmin && (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("synergies") }, "types"), (0, jsx_runtime_1.jsx)(metadata_report_1.default, {})] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(composition_report_1.CompositionReport, {}) }, "team-comps-panel"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(cluster_map_1.ClusterMap, {}) }, "cluster-map-panel"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(dendrogram_chart_1.DendrogramChart, {}) }, "dendrogram-panel"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(pokemon_report_1.PokemonReport, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(item_report_1.ItemReport, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(region_report_1.RegionReport, {}) }), isAdmin && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(synergy_report_1.SynergyReport, {}) }))] }) }));
}
//# sourceMappingURL=meta-report.js.map