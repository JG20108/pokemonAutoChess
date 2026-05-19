"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Chat;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const chat_history_1 = __importDefault(require("./chat-history"));
require("./chat.css");
const MAX_MESSAGE_LENGTH = 250;
function Chat(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [currentText, setCurrentText] = (0, react_1.useState)("");
    const anonymous = (0, hooks_1.useAppSelector)((state) => !state.network.profile);
    const messages = (0, hooks_1.useAppSelector)((state) => props.source === "lobby" ? state.lobby.messages : state.preparation.messages);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "user-chat", children: [(0, jsx_runtime_1.jsx)(chat_history_1.default, { messages: messages, source: props.source }), props.canWrite && ((0, jsx_runtime_1.jsxs)("form", { onSubmit: (e) => {
                    if (!anonymous) {
                        e.preventDefault();
                        (0, network_1.sendMessage)(currentText, props.source);
                        setCurrentText("");
                    }
                }, children: [(0, jsx_runtime_1.jsx)("input", { placeholder: anonymous ? t("chat_disabled_anonymous") : t("type_here"), disabled: anonymous, type: "text", title: anonymous ? t("chat_disabled_anonymous") : t("type_here"), onChange: (e) => {
                            setCurrentText(e.target.value);
                        }, value: currentText, maxLength: MAX_MESSAGE_LENGTH }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", disabled: anonymous, title: anonymous ? t("chat_disabled_anonymous") : t("send_message"), children: t("send") })] }))] }));
}
//# sourceMappingURL=chat.js.map