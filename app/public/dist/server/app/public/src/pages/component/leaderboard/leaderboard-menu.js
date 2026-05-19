"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LeaderboardMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const hooks_1 = require("../../../hooks");
const LobbyStore_1 = require("../../../stores/LobbyStore");
const bot_leaderboard_1 = __importDefault(require("./bot-leaderboard"));
const level_leaderboard_1 = __importDefault(require("./level-leaderboard"));
const player_leaderboard_1 = __importDefault(require("./player-leaderboard"));
require("./leaderboard-menu.css");
function LeaderboardMenu() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const tabIndex = (0, hooks_1.useAppSelector)((state) => state.lobby.tabIndex);
    (0, react_1.useEffect)(() => {
        fetch("/leaderboards")
            .then((res) => res.json())
            .then((data) => {
            dispatch((0, LobbyStore_1.setLeaderboard)(data.leaderboard));
            dispatch((0, LobbyStore_1.setBotLeaderboard)(data.botLeaderboard));
            dispatch((0, LobbyStore_1.setLevelLeaderboard)(data.levelLeaderboard));
            dispatch((0, LobbyStore_1.setEventLeaderboard)(data.eventLeaderboard));
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-container user-menu custom-bg hidden-scrollable", selectedIndex: tabIndex, onSelect: (i) => {
            dispatch((0, LobbyStore_1.setTabIndex)(i));
        }, children: [(0, jsx_runtime_1.jsx)("h2", { children: t("leaderboard") }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("elo") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("level") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("bots") })] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(player_leaderboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(level_leaderboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(bot_leaderboard_1.default, {}) })] }));
}
//# sourceMappingURL=leaderboard-menu.js.map