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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsMenu = EventsMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const react_tabs_1 = require("react-tabs");
const config_1 = require("../../../../../config");
const events_1 = require("../../../../../types/events");
const hooks_1 = require("../../../hooks");
const announcements_1 = require("./announcements");
const expeditions_1 = require("./expeditions");
const tournaments_list_1 = require("./tournaments-list");
const twitch_streams_1 = require("./twitch-streams");
const victory_road_1 = require("./victory-road");
function EventsMenu() {
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const tournaments = (0, hooks_1.useAppSelector)((state) => state.lobby.tournaments);
    const [showTwitchTab, setShowTwitchTab] = (0, react_1.useState)(false);
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(0);
    const currentGameEvent = (0, config_1.getCurrentGameEvent)();
    const hasTournamentTab = tournaments.length > 0;
    const hasExpeditionsTab = currentGameEvent === events_1.GameEvent.EXPEDITIONS;
    const hasVictoryRoadTab = currentGameEvent === events_1.GameEvent.VICTORY_ROAD;
    const tabCount = 1 +
        Number(hasTournamentTab) +
        Number(hasExpeditionsTab) +
        Number(hasVictoryRoadTab) +
        Number(showTwitchTab);
    (0, react_1.useEffect)(() => {
        let isMounted = true;
        function fetchTwitchStreams() {
            return __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                try {
                    const response = yield fetch("/twitch/streams");
                    const data = (yield response.json());
                    if (isMounted) {
                        setShowTwitchTab(((_b = (_a = data.streams) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0);
                    }
                }
                catch (_c) {
                    if (isMounted) {
                        setShowTwitchTab(false);
                    }
                }
            });
        }
        fetchTwitchStreams();
        const interval = setInterval(fetchTwitchStreams, 1000 * 60 * 2);
        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (selectedIndex >= tabCount) {
            setSelectedIndex(Math.max(0, tabCount - 1));
        }
    }, [selectedIndex, tabCount]);
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-container events-menu custom-bg hidden-scrollable", onSelect: (index) => setSelectedIndex(index), selectedIndex: selectedIndex, children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, i18next_1.t)("events") }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [showTwitchTab && ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, i18next_1.t)("twitch_streams.title") }) })), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, i18next_1.t)("announcements") }) }), tournaments.length > 0 && ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, i18next_1.t)("game_modes.TOURNAMENT") }) })), currentGameEvent === events_1.GameEvent.EXPEDITIONS && ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, i18next_1.t)("expeditions.title") }) })), currentGameEvent === events_1.GameEvent.VICTORY_ROAD && ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, i18next_1.t)("victory_road.title") }) }))] }), showTwitchTab && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(twitch_streams_1.TwitchStreams, {}) })), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(announcements_1.Announcements, {}) }), tournaments.length > 0 && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(tournaments_list_1.TournamentsList, {}) })), currentGameEvent === events_1.GameEvent.EXPEDITIONS && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(expeditions_1.Expeditions, {}) })), currentGameEvent === events_1.GameEvent.VICTORY_ROAD && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(victory_road_1.VictoryRoad, {}) })), !user && (0, jsx_runtime_1.jsx)("p", { className: "subtitle", children: (0, i18next_1.t)("loading") })] }));
}
//# sourceMappingURL=events-menu.js.map