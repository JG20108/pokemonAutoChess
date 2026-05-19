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
exports.default = Profile;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const types_1 = require("../../../../../types");
const function_1 = require("../../../../../utils/function");
const object_1 = require("../../../../../utils/object");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const LobbyStore_1 = require("../../../stores/LobbyStore");
const account_tab_1 = require("./account-tab");
const avatar_tab_1 = require("./avatar-tab");
const elo_tab_1 = require("./elo-tab");
const gadgets_tab_1 = require("./gadgets-tab");
const game_history_1 = __importDefault(require("./game-history"));
const player_box_1 = __importDefault(require("./player-box"));
const profile_chat_history_1 = require("./profile-chat-history");
const progress_tab_1 = require("./progress-tab");
const search_bar_1 = require("./search-bar");
const search_results_1 = __importDefault(require("./search-results"));
const title_tab_1 = require("./title-tab");
require("./profile.css");
function Profile() {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [suggestions, setSuggestions] = (0, react_1.useState)([]);
    const searchedUser = (0, hooks_1.useAppSelector)((state) => state.lobby.searchedUser);
    const profile = searchedUser !== null && searchedUser !== void 0 ? searchedUser : user;
    const [gameHistory, setGameHistory] = (0, react_1.useState)([]);
    const [rightPanel, setRightPanel] = (0, react_1.useState)("game");
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)("");
    const abortControllerRef = (0, react_1.useRef)(null);
    function searchName(query) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            abortControllerRef.current = new AbortController();
            const { signal } = abortControllerRef.current;
            setLoading(true);
            setError("");
            try {
                const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
                const res = yield fetch(`/players?name=${encodeURIComponent(query)}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    signal
                });
                if (res.ok) {
                    const suggestions = yield res.json();
                    if (suggestions.length === 0) {
                        setError(t("no_results_found"));
                    }
                    else {
                        setSuggestions(suggestions);
                        setError("");
                    }
                }
                else {
                    setError(res.statusText);
                }
            }
            catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            }
            setLoading(false);
        });
    }
    const debouncedSearchName = (0, react_1.useRef)((0, function_1.debounce)(searchName, 500)).current;
    function onSearchQueryChange(query) {
        var _a;
        (_a = abortControllerRef.current) === null || _a === void 0 ? void 0 : _a.abort();
        if (query) {
            debouncedSearchName(query);
        }
        else {
            resetSearch();
        }
    }
    const resetSearch = (0, react_1.useCallback)((user = searchedUser) => {
        dispatch((0, LobbyStore_1.setSearchedUser)(user));
        setSuggestions([]);
        setError("");
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "profile-modal", children: [(0, jsx_runtime_1.jsxs)("div", { className: "profile-box", children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(_a = profile === null || profile === void 0 ? void 0 : profile.displayName) !== null && _a !== void 0 ? _a : "", " ", t("profile.title")] }), profile && (0, jsx_runtime_1.jsx)(player_box_1.default, { user: profile, history: gameHistory })] }), (0, jsx_runtime_1.jsx)(search_bar_1.SearchBar, { onChange: onSearchQueryChange }), (0, jsx_runtime_1.jsx)("div", { className: "profile-actions", children: loading ? ((0, jsx_runtime_1.jsx)("div", { className: "loading", children: t("loading") })) : error ? ((0, jsx_runtime_1.jsx)("div", { className: "error", children: error })) : suggestions.length > 0 ? ((0, jsx_runtime_1.jsx)(search_results_1.default, { suggestions: suggestions, onSelect: (suggestion) => {
                        resetSearch();
                        (0, network_1.searchById)(suggestion.id);
                    } })) : searchedUser ? ((0, jsx_runtime_1.jsx)(OtherProfileActions, { rightPanel: rightPanel, setRightPanel: setRightPanel })) : ((0, jsx_runtime_1.jsx)(MyProfileMenu, {})) }), rightPanel === "game" && profile && ((0, jsx_runtime_1.jsx)(game_history_1.default, { uid: profile.uid, onUpdate: setGameHistory })), rightPanel === "chat" && profile && ((0, jsx_runtime_1.jsx)(profile_chat_history_1.ProfileChatHistory, { uid: profile.uid }))] }));
}
function MyProfileMenu() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("profile.progress.title") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("avatar") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("title_label") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("gadgets") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("profile.elo_tab.title") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("profile.account.title") })] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(progress_tab_1.ProgressTab, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(avatar_tab_1.AvatarTab, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(title_tab_1.TitleTab, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(gadgets_tab_1.GadgetsTab, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(elo_tab_1.EloTab, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(account_tab_1.AccountTab, {}) })] }));
}
function OtherProfileActions(props) {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const currentUid = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.uid; });
    const role = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.role; });
    const user = (0, hooks_1.useAppSelector)((state) => state.lobby.searchedUser);
    const [title, setTitle] = (0, react_1.useState)((user === null || user === void 0 ? void 0 : user.title) || types_1.Title.ACE_TRAINER);
    const [profileRole, setProfileRole] = (0, react_1.useState)((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : types_1.Role.BASIC);
    const giveButton = user && role && role === types_1.Role.ADMIN ? ((0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: () => {
            (0, network_1.giveBooster)({
                numberOfBoosters: Number(prompt("How many boosters ?")) || 1,
                uid: user.uid
            });
        }, children: t("give_boosters") })) : null;
    const givePortraitsButton = user && role && role === types_1.Role.ADMIN ? ((0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: () => {
            const confirmed = confirm(`Unlock all portraits for ${user.displayName}? This cannot be undone.`);
            if (confirmed) {
                (0, network_1.giveAllPortraits)({ uid: user.uid });
                alert(`All portraits unlocked for ${user.displayName}.`);
            }
        }, children: t("give_all_portraits") })) : null;
    const banButton = user && role && (role === types_1.Role.ADMIN || role === types_1.Role.MODERATOR) ? ((0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: () => {
            const reason = prompt(`Reason for the ban:`);
            (0, network_1.ban)({ uid: user.uid, reason: reason !== null && reason !== void 0 ? reason : "" });
        }, children: t("ban_user") })) : null;
    const unbanButton = user && role && (role === types_1.Role.ADMIN || role === types_1.Role.MODERATOR) ? ((0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: () => {
            const reason = prompt(`Reason for the unban:`);
            (0, network_1.unban)({ uid: user.uid, reason: reason !== null && reason !== void 0 ? reason : "" });
        }, children: t("unban_user") })) : null;
    const chatHistoryButton = user && role && (role === types_1.Role.ADMIN || role === types_1.Role.MODERATOR) ? ((0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => {
            props.setRightPanel("chat");
        }, children: t("see_chat_history") })) : null;
    const gameHistoryButton = user && role && (role === types_1.Role.ADMIN || role === types_1.Role.MODERATOR) ? ((0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => {
            props.setRightPanel("game");
        }, children: t("see_game_history") })) : null;
    const roleButton = user && role && role === types_1.Role.ADMIN ? ((0, jsx_runtime_1.jsxs)("div", { className: "my-input-group", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly orange", onClick: () => {
                    (0, network_1.giveRole)({ uid: user.uid, role: profileRole });
                    alert(`Role ${profileRole} given to ${user.displayName}`);
                }, children: t("give_role") }), (0, jsx_runtime_1.jsx)("select", { value: profileRole, onChange: (e) => {
                    setProfileRole(e.target.value);
                }, children: (0, object_1.keys)(types_1.Role).map((r) => ((0, jsx_runtime_1.jsx)("option", { value: r, children: t(`role.${r}`).toUpperCase() }, r))) })] })) : null;
    const titleButton = user && role && role === types_1.Role.ADMIN ? ((0, jsx_runtime_1.jsxs)("div", { className: "my-input-group", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => {
                    (0, network_1.giveTitle)({ uid: user.uid, title: title });
                    alert(`Title ${title} given to ${user.displayName}`);
                }, children: t("give_title") }), (0, jsx_runtime_1.jsx)("select", { value: title, onChange: (e) => {
                    setTitle(e.target.value);
                }, children: Object.keys(types_1.Title).map((ti) => ((0, jsx_runtime_1.jsx)("option", { value: ti, children: ti }, ti))) })] })) : null;
    return role === types_1.Role.ADMIN || role === types_1.Role.MODERATOR ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [giveButton, givePortraitsButton, roleButton, titleButton, (user === null || user === void 0 ? void 0 : user.banned) ? unbanButton : banButton, props.rightPanel === "game" ? chatHistoryButton : gameHistoryButton, currentUid && user && user.uid !== currentUid && ((0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => (0, network_1.searchById)(currentUid), children: t("back_to_my_profile") }))] })) : null;
}
//# sourceMappingURL=profile.js.map