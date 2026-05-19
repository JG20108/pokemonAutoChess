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
exports.VictoryRoad = VictoryRoad;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../../config");
const Strings_1 = require("../../../../../types/strings/Strings");
const number_1 = require("../../../../../utils/number");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const LobbyStore_1 = require("../../../stores/LobbyStore");
const date_1 = require("../../utils/date");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./victory-road.css");
function VictoryRoad() {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const profile = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const eventLeaderboard = (0, hooks_1.useAppSelector)((state) => state.lobby.eventLeaderboard);
    (0, react_1.useEffect)(() => {
        function fetchEventLeaderboard() {
            fetch("/leaderboards/event")
                .then((res) => res.json())
                .then((data) => {
                (0, LobbyStore_1.setEventLeaderboard)(data);
            });
        }
        fetchEventLeaderboard();
        const interval = setInterval(fetchEventLeaderboard, 60 * 1000 * 10);
        return () => clearInterval(interval);
    }, []);
    const [showLeaderboard, setShowLeaderboard] = (0, react_1.useState)(false);
    const [showHelp, setShowHelp] = (0, react_1.useState)(false);
    const [playerHovered, setPlayerHovered] = (0, react_1.useState)(null);
    const markers = [50, 100, 150, 200, 250, 300, 350, 400, 450].map((value, index) => ({
        top: `${230 + (0, number_1.clamp)(500 - value, 0, 500) * (2400 / 500)}px`,
        value
    }));
    const handleLeaderboardClick = () => {
        if (showLeaderboard) {
            setShowLeaderboard(false);
        }
        else {
            setShowHelp(false);
            setShowLeaderboard(true);
        }
    };
    const handleHelpClick = () => {
        if (showHelp) {
            setShowHelp(false);
        }
        else {
            setShowLeaderboard(false);
            setShowHelp(true);
        }
    };
    function getPlayerCoords(player, index) {
        let x = 34 + ((index * 7) % 9) * 4;
        if (player.value >= 500) {
            x = 45.5 + ((index * 7) % 9);
        }
        const y = 245 + (0, number_1.clamp)(500 - player.value, 0, 500) * (2400 / 500);
        return { left: `${x}%`, top: `${y}px` };
    }
    const resetCountdown = (0, hooks_1.useGameEventResetCountdown)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "my-container hidden-scrollable victory-road", style: { backgroundImage: "url(/assets/ui/victory-road.webp)" }, children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("div", { className: "leaderboard button", onClick: handleLeaderboardClick, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/leaderboard.svg", alt: t("leaderboard"), title: t("leaderboard") }) }), (0, jsx_runtime_1.jsxs)("h2", { children: [t("victory_road.title"), (0, jsx_runtime_1.jsx)("br", {}), t("victory_road.your_points", { points: (_a = profile === null || profile === void 0 ? void 0 : profile.eventPoints) !== null && _a !== void 0 ? _a : 0 })] }), (0, jsx_runtime_1.jsx)("div", { className: "help button", onClick: handleHelpClick, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/help.svg", alt: t("help"), title: t("help") }) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [markers.map((marker, index) => ((0, jsx_runtime_1.jsx)("div", { className: "victory-road-marker", style: { [index % 2 ? "left" : "right"]: "5%", top: marker.top }, children: (0, jsx_runtime_1.jsxs)("span", { children: [index % 2 ? "" : "◄", marker.value, index % 2 ? "►" : ""] }) }, index))), eventLeaderboard.map((player, index) => {
                        return ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("victory-road-player-icon", {
                                me: player.id === (profile === null || profile === void 0 ? void 0 : profile.uid)
                            }), "data-tooltip-id": "victory-road-player-detail", onMouseOver: () => setPlayerHovered(player), onClick: () => (0, network_1.searchById)(player.id), style: Object.assign({ position: "absolute" }, getPlayerCoords(player, index)), children: (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: player.avatar }) }, player.id || index));
                    })] }), playerHovered && ((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "victory-road-player-detail", className: "custom-theme-tooltip victory-road-player-tooltip", float: true, children: (0, jsx_runtime_1.jsxs)("div", { className: "victory-road-player-detail", children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: playerHovered.avatar }), playerHovered.name] }), (0, jsx_runtime_1.jsx)("p", { children: t("victory_road.points", { points: playerHovered.value }) })] }) })), showLeaderboard && ((0, jsx_runtime_1.jsxs)("div", { className: "victory-road-leaderboard-container my-container", children: [(0, jsx_runtime_1.jsx)("h3", { children: t("victory_road.finishers") }), (0, jsx_runtime_1.jsxs)("div", { className: "leaderboard-list", children: [eventLeaderboard
                                .filter((p) => p.eventFinishTime != null)
                                .sort((a, b) => a.rank - b.rank)
                                .map((player, index) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("leaderboard-item", {
                                    me: player.id === (profile === null || profile === void 0 ? void 0 : profile.uid)
                                }), children: [(0, jsx_runtime_1.jsxs)("span", { className: "rank", children: ["#", player.rank] }), (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: player.avatar }), (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: player.name }), (0, jsx_runtime_1.jsx)("span", { className: "finish-time", children: (0, date_1.formatDate)(new Date(player.eventFinishTime)) })] }, player.id || index))), eventLeaderboard.length === 0 && ((0, jsx_runtime_1.jsx)("div", { className: "no-data", children: t("no_data_available") }))] }), (0, jsx_runtime_1.jsx)("h3", { children: t("victory_road.runners") }), (0, jsx_runtime_1.jsxs)("div", { className: "leaderboard-list", children: [eventLeaderboard
                                .filter((p) => p.eventFinishTime == null)
                                .map((player, index) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("leaderboard-item", {
                                    me: player.id === (profile === null || profile === void 0 ? void 0 : profile.uid)
                                }), children: [(0, jsx_runtime_1.jsxs)("span", { className: "rank", children: ["#", player.rank] }), (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: player.avatar }), (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: player.name }), (0, jsx_runtime_1.jsx)("span", { className: "event-points", children: t("victory_road.points", { points: player.value }) })] }, player.id || index))), eventLeaderboard.length === 0 && ((0, jsx_runtime_1.jsx)("div", { className: "no-data", children: t("no_data_available") }))] })] })), showHelp && ((0, jsx_runtime_1.jsxs)("div", { className: "victory-road-help-container my-container", children: [(0, jsx_runtime_1.jsx)("h3", { children: t("victory_road.instructions") }), (0, jsx_runtime_1.jsxs)("div", { className: "help-content", children: [(0, jsx_runtime_1.jsx)("p", { children: t("victory_road.help1") }), (0, jsx_runtime_1.jsx)("dl", { children: [1, 2, 3, 4, 5, 6, 7, 8].map((rank) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, Strings_1.getRankLabel)(rank) }), (0, jsx_runtime_1.jsx)("dd", { className: (0, jsx_1.cc)({
                                                positive: config_1.VictoryRoadPointsPerRank[rank - 1] > 0,
                                                negative: config_1.VictoryRoadPointsPerRank[rank - 1] < 0
                                            }), children: (config_1.VictoryRoadPointsPerRank[rank - 1] > 0 ? "+" : "") +
                                                t("victory_road.points", {
                                                    points: config_1.VictoryRoadPointsPerRank[rank - 1]
                                                }) })] }, rank))) }), (0, jsx_runtime_1.jsx)("p", { children: t("victory_road.help2") }), (0, jsx_runtime_1.jsx)("p", { style: { fontStyle: "italic" }, children: t("events_reset_info", {
                                    resetCountdown: (0, date_1.formatDuration)(resetCountdown)
                                }) })] })] }))] }));
}
//# sourceMappingURL=victory-road.js.map