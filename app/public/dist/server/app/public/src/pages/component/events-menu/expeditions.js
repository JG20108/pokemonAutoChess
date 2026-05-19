"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expeditions = Expeditions;
exports.ExpeditionBox = ExpeditionBox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const expeditions_1 = require("../../../../../config/game/expeditions");
const expeditions_2 = require("../../../../../core/expeditions");
const hooks_1 = require("../../../hooks");
const LobbyStore_1 = require("../../../stores/LobbyStore");
const date_1 = require("../../utils/date");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./expeditions.css");
function Expeditions() {
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
    const resetCountdown = (0, hooks_1.useGameEventResetCountdown)();
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
    if (!profile)
        return null;
    const expeditions = (0, expeditions_2.getPlayerExpeditions)(profile);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "my-container hidden-scrollable expeditions", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("div", { className: "leaderboard button", onClick: handleLeaderboardClick, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/leaderboard.svg", alt: t("leaderboard"), title: t("leaderboard") }) }), (0, jsx_runtime_1.jsxs)("p", { children: [t("expeditions.title"), (0, jsx_runtime_1.jsx)("br", {}), t("expeditions.your_points", { points: (_a = profile === null || profile === void 0 ? void 0 : profile.eventPoints) !== null && _a !== void 0 ? _a : 0 })] }), (0, jsx_runtime_1.jsx)("div", { className: "help button", onClick: handleHelpClick, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/help.svg", alt: t("help"), title: t("help") }) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { children: expeditions.map((expedition) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(ExpeditionBox, { expedition: expedition }) }, expedition.type + expedition.rank))) }) }), showLeaderboard && ((0, jsx_runtime_1.jsxs)("div", { className: "expeditions-leaderboard-container my-container", children: [(0, jsx_runtime_1.jsx)("h3", { children: t("expeditions.leaderboard") }), (0, jsx_runtime_1.jsxs)("div", { className: "leaderboard-list", children: [eventLeaderboard.map((player, index) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("leaderboard-item", {
                                    me: player.id === (profile === null || profile === void 0 ? void 0 : profile.uid)
                                }), children: [(0, jsx_runtime_1.jsxs)("span", { className: "rank", children: ["#", player.rank] }), (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: player.avatar }), (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: player.name }), (0, jsx_runtime_1.jsx)("span", { className: "event-points", children: t("expeditions.points", { points: player.value }) })] }, player.id || index))), eventLeaderboard.length === 0 && ((0, jsx_runtime_1.jsx)("div", { className: "no-data", children: t("no_data_available") }))] })] })), showHelp && ((0, jsx_runtime_1.jsxs)("div", { className: "expeditions-help-container my-container", children: [(0, jsx_runtime_1.jsx)("h3", { children: t("expeditions.instructions") }), (0, jsx_runtime_1.jsxs)("div", { className: "help-content", children: [(0, jsx_runtime_1.jsx)("p", { children: t("expeditions.help1") }), (0, jsx_runtime_1.jsx)("p", { children: t("expeditions.help2") }), (0, jsx_runtime_1.jsx)("p", { children: t("expeditions.help3") }), (0, jsx_runtime_1.jsx)("p", { children: t("expeditions.help4") }), (0, jsx_runtime_1.jsx)("p", { style: { fontStyle: "italic" }, children: t("events_reset_info", {
                                    resetCountdown: (0, date_1.formatDuration)(resetCountdown)
                                }) })] })] }))] }));
}
function ExpeditionBox(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "expedition my-box", children: [(0, jsx_runtime_1.jsx)("img", { className: "expedition-illustration", src: `/assets/notifications/${props.expedition.type}_${props.expedition.rank}.jpg`, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "expedition-rank", style: {
                    backgroundImage: `url(/assets/ranks/expedition-ranks.png)`,
                    backgroundPosition: `${props.expedition.rank === "S" ? -200 : props.expedition.rank === "A" ? -160 : props.expedition.rank === "B" ? -120 : props.expedition.rank === "C" ? -80 : props.expedition.rank === "D" ? -40 : 0}px 0`,
                    backgroundSize: "240px 40px",
                    color: "transparent",
                    height: "40px",
                    width: "40px",
                    display: "inline-block"
                }, children: props.expedition.rank }), (0, jsx_runtime_1.jsxs)("div", { className: "expedition-objective", children: [(0, jsx_runtime_1.jsx)("span", { className: "expedition-type", children: t(`expeditions.${props.expedition.type}`) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)((0, expeditions_2.getExpeditionLabel)(props.expedition)) }), (0, jsx_runtime_1.jsx)("p", { className: "expedition-rewards", children: t("expeditions.reward", {
                            points: expeditions_1.ExpPerExpeditionRank[props.expedition.rank]
                        }) })] })] }));
}
//# sourceMappingURL=expeditions.js.map