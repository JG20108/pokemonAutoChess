"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatMessage;
const jsx_runtime_1 = require("react/jsx-runtime");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
function ChatMessage(props) {
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const role = user === null || user === void 0 ? void 0 : user.role;
    const time = new Date(props.message.time).toLocaleTimeString(undefined, {
        timeStyle: "short"
    });
    const isServerMessage = props.message.authorId === "server";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "chat-message-container", children: [props.message.author && ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("chat-user", {
                    "same-user": props.message.authorId === (user === null || user === void 0 ? void 0 : user.uid),
                    "server-message": isServerMessage
                }), children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.message.avatar }), (0, jsx_runtime_1.jsxs)("div", { className: "author-and-time", title: "open profile", onClick: () => (0, network_1.searchById)(props.message.authorId), children: [(0, jsx_runtime_1.jsx)("span", { className: "chat-message-author", children: props.message.author }), (0, jsx_runtime_1.jsx)("span", { className: "chat-message-time", children: time })] }), role && (role === types_1.Role.MODERATOR || role === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)("button", { className: "remove-chat bubbly red", title: "Remove message", onClick: () => (0, network_1.removeMessage)({
                            id: props.message.id
                        }, props.source), children: (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "0.5em", margin: "0" }, children: "X" }) }))] })), (0, jsx_runtime_1.jsx)("p", { className: "chat-message", children: props.message.payload })] }));
}
//# sourceMappingURL=chat-message.js.map