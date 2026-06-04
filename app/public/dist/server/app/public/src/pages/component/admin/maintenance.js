"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Maintenance;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const MaintenanceOrder_1 = require("../../../../../types/enum/MaintenanceOrder");
const network_1 = require("../../../network");
function Maintenance() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { id: "maintenance", children: (0, jsx_runtime_1.jsxs)("div", { className: "actions", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: () => (0, network_1.sendMaintenanceOrder)(MaintenanceOrder_1.MaintenanceOrder.HEAP_SNAPSHOT), children: t("admin_panel.heap_snapshot") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => (0, network_1.sendMaintenanceOrder)(MaintenanceOrder_1.MaintenanceOrder.FETCH_LEADERBOARDS), children: t("admin_panel.refresh_leaderboards") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => (0, network_1.sendMaintenanceOrder)(MaintenanceOrder_1.MaintenanceOrder.FETCH_META_REPORTS), children: t("admin_panel.refresh_meta_reports") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => (0, network_1.sendMaintenanceOrder)(MaintenanceOrder_1.MaintenanceOrder.REFRESH_SPRITE_GAP_DATA), children: t("admin_panel.refresh_sprite_gap_data") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => (0, network_1.sendMaintenanceOrder)(MaintenanceOrder_1.MaintenanceOrder.REFRESH_TWITCH_STREAMS), children: t("admin_panel.refresh_twitch_streams") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => (0, network_1.sendMaintenanceOrder)(MaintenanceOrder_1.MaintenanceOrder.REFRESH_TWITCH_BLACKLIST), children: t("admin_panel.refresh_twitch_blacklist") })] }) }));
}
//# sourceMappingURL=maintenance.js.map