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
exports.default = ModerationPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = __importStar(require("react"));
const react_tabs_1 = require("react-tabs");
const config_1 = require("../../../../../config");
const function_1 = require("../../../../../utils/function");
const network_1 = require("../../../network");
const remove_button_1 = require("../buttons/remove-button");
const chat_history_1 = __importDefault(require("../chat/chat-history"));
const search_results_1 = __importDefault(require("../profile/search-results"));
require("./moderation-panel.css");
function ModerationPanel() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "moderation-panel", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: "Search by user ID" }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: "Search by message content" }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: "Rename accounts" }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: "Twitch blacklist" })] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(SearchByUserId, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(SearchByMessageContent, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(RenameAccounts, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(TwitchBlacklistManager, {}) })] }) }));
}
function TwitchBlacklistManager() {
    const [entries, setEntries] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const [success, setSuccess] = (0, react_1.useState)(null);
    const [removingLogin, setRemovingLogin] = (0, react_1.useState)(null);
    const loadBlacklist = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        setLoading(true);
        setError(null);
        try {
            const data = yield (0, network_1.getTwitchBlacklist)();
            setEntries(data);
        }
        catch (e) {
            setError((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : "Unable to load blacklist");
        }
        finally {
            setLoading(false);
        }
    }), []);
    react_1.default.useEffect(() => {
        loadBlacklist();
    }, [loadBlacklist]);
    function handleRemove(login) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            setRemovingLogin(login);
            setError(null);
            setSuccess(null);
            try {
                yield (0, network_1.removeTwitchBlacklist)(login);
                setSuccess(`Removed @${login} from Twitch blacklist`);
                yield loadBlacklist();
            }
            catch (e) {
                setError((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : "Failed to remove blacklist entry");
            }
            finally {
                setRemovingLogin(null);
            }
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "moderation-search moderation-twitch-blacklist", children: [error && (0, jsx_runtime_1.jsx)("p", { className: "moderation-error", children: error }), success && (0, jsx_runtime_1.jsx)("p", { className: "moderation-success", children: success }), (0, jsx_runtime_1.jsx)("div", { className: "moderation-results my-box moderation-blacklist-results", children: loading ? ((0, jsx_runtime_1.jsx)("p", { className: "moderation-no-results", children: "Loading..." })) : entries.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { className: "moderation-no-results", children: "No streamers blacklisted." })) : (entries.map((entry) => ((0, jsx_runtime_1.jsxs)("div", { className: "moderation-blacklist-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "moderation-blacklist-info", children: [(0, jsx_runtime_1.jsxs)("p", { className: "moderation-blacklist-login", children: ["@", entry.streamerLogin] }), entry.reason && ((0, jsx_runtime_1.jsx)("p", { className: "moderation-blacklist-reason", children: entry.reason })), (0, jsx_runtime_1.jsxs)("p", { className: "moderation-hint", children: ["Added by ", entry.createdBy, entry.createdAt
                                            ? ` on ${new Date(entry.createdAt).toLocaleString()}`
                                            : ""] })] }), removingLogin === entry.streamerLogin ? ((0, jsx_runtime_1.jsx)("span", { className: "moderation-hint", children: "Removing..." })) : ((0, jsx_runtime_1.jsx)(remove_button_1.RemoveButton, { title: `Remove @${entry.streamerLogin} from blacklist`, onClick: () => handleRemove(entry.streamerLogin) }))] }, entry.streamerLogin)))) })] }));
}
function SearchByMessageContent() {
    const [query, setQuery] = (0, react_1.useState)("");
    const [results, setResults] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const inputRef = (0, react_1.useRef)(null);
    const handleSearch = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const trimmed = query.trim();
        if (trimmed.length < 2)
            return;
        setLoading(true);
        setError(null);
        try {
            const messages = yield (0, network_1.searchMessages)(trimmed);
            setResults([...messages]);
        }
        catch (e) {
            setError((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : "Search failed");
        }
        finally {
            setLoading(false);
        }
    }), [query]);
    const handleKeyDown = (e) => {
        if (e.key === "Enter")
            handleSearch();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "moderation-search moderation-chat-search", children: [(0, jsx_runtime_1.jsx)("p", { className: "moderation-warning", children: "Searching in all messages is costly in performance. Use it in moderation (pun intended)." }), (0, jsx_runtime_1.jsxs)("div", { className: "moderation-search-bar", children: [(0, jsx_runtime_1.jsx)("input", { ref: inputRef, type: "text", className: "moderation-search-input", placeholder: "Search message content (min 2 chars)\u2026", value: query, onChange: (e) => setQuery(e.target.value), onKeyDown: handleKeyDown }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", disabled: query.trim().length < 2 || loading, onClick: handleSearch, children: loading ? "Searching…" : "Search" })] }), error && (0, jsx_runtime_1.jsx)("p", { className: "moderation-error", children: error }), results !== null && ((0, jsx_runtime_1.jsx)("div", { className: "moderation-results my-box", children: results.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { className: "moderation-no-results", children: "No messages found." })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { className: "moderation-result-count", children: [results.length, " message", results.length !== 1 ? "s" : "", " found", results.length === 50 ? " (showing latest 50)" : ""] }), (0, jsx_runtime_1.jsx)(chat_history_1.default, { messages: results, source: "lobby" })] })) }))] }));
}
function RenameAccounts() {
    const [query, setQuery] = (0, react_1.useState)("");
    const [suggestions, setSuggestions] = (0, react_1.useState)([]);
    const [searchLoading, setSearchLoading] = (0, react_1.useState)(false);
    const [searchError, setSearchError] = (0, react_1.useState)(null);
    const abortRef = (0, react_1.useRef)(null);
    const [selected, setSelected] = (0, react_1.useState)(null);
    const [newName, setNewName] = (0, react_1.useState)("");
    const [renaming, setRenaming] = (0, react_1.useState)(false);
    const [renameError, setRenameError] = (0, react_1.useState)(null);
    const [renameSuccess, setRenameSuccess] = (0, react_1.useState)(null);
    function fetchSuggestions(q) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            abortRef.current = new AbortController();
            setSearchLoading(true);
            setSearchError(null);
            try {
                const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
                const res = yield fetch(`/players?name=${encodeURIComponent(q)}`, {
                    headers: { Authorization: `Bearer ${token}` },
                    signal: abortRef.current.signal
                });
                if (!res.ok)
                    throw new Error(res.statusText);
                setSuggestions(yield res.json());
            }
            catch (e) {
                if ((e === null || e === void 0 ? void 0 : e.name) !== "AbortError")
                    setSearchError((_b = e === null || e === void 0 ? void 0 : e.message) !== null && _b !== void 0 ? _b : "Search failed");
            }
            finally {
                setSearchLoading(false);
            }
        });
    }
    const debouncedFetch = (0, react_1.useRef)((0, function_1.debounce)(fetchSuggestions, 400)).current;
    function onQueryChange(e) {
        var _a;
        const q = e.target.value;
        setQuery(q);
        setSelected(null);
        setNewName("");
        setRenameError(null);
        setRenameSuccess(null);
        (_a = abortRef.current) === null || _a === void 0 ? void 0 : _a.abort();
        if (q.trim().length >= 2) {
            debouncedFetch(q.trim());
        }
        else {
            setSuggestions([]);
        }
    }
    function selectUser(user) {
        setSelected(user);
        setSuggestions([]);
        setQuery(user.name);
        setNewName("");
        setRenameError(null);
        setRenameSuccess(null);
    }
    function handleRename() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!selected)
                return;
            const trimmed = newName.trim();
            if (!config_1.USERNAME_REGEXP.test(trimmed)) {
                setRenameError("Invalid name: 3-24 characters, letters/digits/._- only");
                return;
            }
            setRenaming(true);
            setRenameError(null);
            setRenameSuccess(null);
            try {
                const { displayName } = yield (0, network_1.renameAccount)(selected.id, trimmed);
                setRenameSuccess(`Account renamed to "${displayName}" successfully.`);
                setSelected(Object.assign(Object.assign({}, selected), { name: displayName }));
                setNewName("");
            }
            catch (e) {
                setRenameError((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : "Rename failed");
            }
            finally {
                setRenaming(false);
            }
        });
    }
    const isValidNewName = config_1.USERNAME_REGEXP.test(newName.trim());
    return ((0, jsx_runtime_1.jsxs)("div", { className: "moderation-search moderation-rename", children: [(0, jsx_runtime_1.jsxs)("div", { className: "moderation-search-bar", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "moderation-search-input", placeholder: "Search username\u2026", value: query, onChange: onQueryChange }), searchLoading && (0, jsx_runtime_1.jsx)("span", { className: "moderation-hint", children: "Searching\u2026" })] }), searchError && (0, jsx_runtime_1.jsx)("p", { className: "moderation-error", children: searchError }), suggestions.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "moderation-results", children: (0, jsx_runtime_1.jsx)(search_results_1.default, { suggestions: suggestions, onSelect: selectUser }) })), suggestions.length === 0 &&
                query.trim().length >= 2 &&
                !searchLoading &&
                !selected && (0, jsx_runtime_1.jsx)("p", { className: "moderation-no-results", children: "No users found." }), selected && ((0, jsx_runtime_1.jsxs)("div", { className: "moderation-rename-form my-box", children: [(0, jsx_runtime_1.jsxs)("p", { className: "moderation-hint", children: ["Renaming ", (0, jsx_runtime_1.jsx)("strong", { children: selected.name }), (0, jsx_runtime_1.jsxs)("span", { className: "moderation-uid", children: [" (UID: ", selected.id, ")"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "moderation-search-bar", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "moderation-search-input", placeholder: "New username\u2026", value: newName, onChange: (e) => {
                                    setNewName(e.target.value);
                                    setRenameError(null);
                                    setRenameSuccess(null);
                                }, onKeyDown: (e) => e.key === "Enter" && isValidNewName && handleRename() }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", disabled: !isValidNewName || renaming, onClick: handleRename, children: renaming ? "Renaming…" : "Rename" })] }), renameError && (0, jsx_runtime_1.jsx)("p", { className: "moderation-error", children: renameError }), renameSuccess && ((0, jsx_runtime_1.jsx)("p", { className: "moderation-success", children: renameSuccess }))] }))] }));
}
function SearchByUserId() {
    const [uid, setUid] = (0, react_1.useState)("");
    function handleSearch() {
        const trimmed = uid.trim();
        if (!trimmed)
            return;
        (0, network_1.searchById)(trimmed);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "moderation-search", children: (0, jsx_runtime_1.jsxs)("div", { className: "moderation-search-bar", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "moderation-search-input", placeholder: "User ID\u2026", value: uid, onChange: (e) => setUid(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleSearch() }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", disabled: uid.trim().length === 0, onClick: handleSearch, children: "Search" })] }) }));
}
//# sourceMappingURL=moderation-panel.js.map