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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatHistory;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const window_1 = require("../../../../../utils/window");
const chat_message_1 = __importDefault(require("./chat-message"));
function ChatHistory(props) {
    const [readMessages, setReadMessages] = (0, react_1.useState)([]);
    const domRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (props.messages.length > 0 &&
            domRef &&
            domRef.current &&
            (domRef.current.scrollTop === 0 ||
                domRef.current.scrollTop + domRef.current.clientHeight >=
                    domRef.current.scrollHeight - 200)) {
            domRef.current.scrollTop = domRef.current.scrollHeight;
        }
    }, [props.messages.length]);
    (0, react_1.useEffect)(() => {
        if (props.messages.length !== readMessages.length) {
            setReadMessages(props.messages);
            if (!document.hasFocus()) {
                (0, window_1.setTitleNotificationIcon)("💬");
            }
        }
    }, [props.messages, readMessages.length]);
    (0, react_1.useEffect)(() => {
        const clearTitle = () => {
            if (props.messages.length === readMessages.length) {
                (0, window_1.clearTitleNotificationIcon)();
            }
        };
        window.addEventListener("focus", clearTitle);
        return () => {
            window.removeEventListener("focus", clearTitle);
        };
    }, [props.messages, props.messages.length, readMessages.length]);
    const dateSeparatedChat = (0, react_1.useMemo)(() => {
        return props.messages.reduce((allMessages, message) => {
            var _a;
            const date = new Date(message.time);
            const key = date.toDateString();
            return Object.assign(Object.assign({}, allMessages), { [key]: [...((_a = allMessages[key]) !== null && _a !== void 0 ? _a : []), message] });
        }, {});
    }, [props.messages]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "chat-history", ref: domRef, children: Object.entries(dateSeparatedChat).map(([date, chatMessages]) => {
            return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "date", children: date }), chatMessages.map((message, index) => {
                        return (0, jsx_runtime_1.jsx)(chat_message_1.default, { message: message }, index);
                    })] }, date));
        }) }));
}
//# sourceMappingURL=chat-history.js.map