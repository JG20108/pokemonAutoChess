"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcements = Announcements;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const chat_1 = __importDefault(require("../chat/chat"));
require("./announcements.css");
function Announcements() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const canWrite = user
        ? user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR
        : false;
    return ((0, jsx_runtime_1.jsx)("div", { className: "announcements-container hidden-scrollable", children: (0, jsx_runtime_1.jsx)(chat_1.default, { source: "lobby", canWrite: canWrite }) }));
}
//# sourceMappingURL=announcements.js.map