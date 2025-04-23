"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileChatHistory = ProfileChatHistory;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const chat_history_1 = __importDefault(require("../chat/chat-history"));
const react_i18next_1 = require("react-i18next");
function ProfileChatHistory(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [chatHistory, setChatHistory] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [hasMore, setHasMore] = (0, react_1.useState)(true);
    const pageSize = 30;
    const loadHistory = (uid, page) => __awaiter(this, void 0, void 0, function* () {
        try {
            setLoading(true);
            const response = yield fetch(`/chat-history/${uid}?page=${page}&t=${Date.now()}`);
            const data = yield response.json();
            if (props.uid !== uid)
                return;
            if (data.length < pageSize) {
                setHasMore(false);
            }
            setChatHistory((prevHistory) => [...prevHistory, ...data.filter(h => prevHistory.some(p => p.time == h.time) == false)]);
        }
        catch (error) {
            console.error("Failed to load history:", error);
        }
        finally {
            setLoading(false);
        }
    });
    const loadMore = () => __awaiter(this, void 0, void 0, function* () {
        if (loading || !hasMore)
            return;
        const skip = chatHistory.length;
        const page = Math.floor(skip / pageSize + 1);
        loadHistory(props.uid, page);
    });
    (0, react_1.useEffect)(() => {
        setChatHistory([]);
        setHasMore(true);
        loadHistory(props.uid, 1);
    }, [props.uid]);
    return (0, jsx_runtime_1.jsxs)("article", { className: "chat-history", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("chat_history") }), (0, jsx_runtime_1.jsxs)("div", { children: [(!chatHistory || chatHistory.length === 0) && ((0, jsx_runtime_1.jsx)("p", { children: t("no_history_found") })), chatHistory && (0, jsx_runtime_1.jsx)(chat_history_1.default, { messages: chatHistory }), hasMore && ((0, jsx_runtime_1.jsx)("button", { onClick: loadMore, className: "bubbly green", disabled: loading, children: loading ? t("loading") : t("load_more") }))] })] });
}
//# sourceMappingURL=profile-chat-history.js.map