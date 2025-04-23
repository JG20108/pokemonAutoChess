"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionStatusNotification = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../../hooks");
const ConnectionStatus_1 = require("../../../../../types/enum/ConnectionStatus");
const react_i18next_1 = require("react-i18next");
require("./connection-status-notification.css");
const ConnectionStatusNotification = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const connectionStatus = (0, hooks_1.useAppSelector)(state => state.network.connectionStatus);
    if (connectionStatus === ConnectionStatus_1.ConnectionStatus.PENDING || connectionStatus === ConnectionStatus_1.ConnectionStatus.CONNECTED) {
        return null;
    }
    return (0, jsx_runtime_1.jsxs)("div", { className: "connection-status-notification my-box", children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/disconnected.svg", alt: "Disconnected" }), connectionStatus === ConnectionStatus_1.ConnectionStatus.CONNECTION_LOST && ((0, jsx_runtime_1.jsx)("span", { children: t("connection_status.CONNECTION_LOST") })), connectionStatus === ConnectionStatus_1.ConnectionStatus.CONNECTION_FAILED && ((0, jsx_runtime_1.jsx)("span", { children: t("connection_status.CONNECTION_FAILED") }))] });
};
exports.ConnectionStatusNotification = ConnectionStatusNotification;
//# sourceMappingURL=connection-status-notification.js.map