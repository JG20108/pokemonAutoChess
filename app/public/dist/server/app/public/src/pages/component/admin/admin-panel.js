"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdminPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_tabs_1 = require("react-tabs");
const maintenance_1 = __importDefault(require("./maintenance"));
const tournaments_admin_1 = require("./tournaments-admin");
require("./admin-panel.css");
function AdminPanel() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "admin-panel", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: "Tournaments" }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: "Maintenance" })] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(tournaments_admin_1.TournamentsAdmin, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(maintenance_1.default, {}) })] }) }));
}
//# sourceMappingURL=admin-panel.js.map