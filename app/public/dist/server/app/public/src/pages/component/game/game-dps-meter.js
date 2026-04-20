"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameDpsMeter;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const pve_stages_1 = require("../../../../../models/pve-stages");
const Game_1 = require("../../../../../types/enum/Game");
const depths_1 = require("../../../game/depths");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const draggable_window_1 = __importDefault(require("../modal/draggable-window"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const game_player_dps_meter_1 = __importDefault(require("./game-player-dps-meter"));
const game_player_dps_taken_meter_1 = __importDefault(require("./game-player-dps-taken-meter"));
const game_player_hps_meter_1 = __importDefault(require("./game-player-hps-meter"));
require("./game-dps-meter.css");
function GameDpsMeter() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const team = (0, hooks_1.useAppSelector)((state) => state.game.teamSpectated);
    const stageLevel = (0, hooks_1.useAppSelector)((state) => state.game.stageLevel);
    const phase = (0, hooks_1.useAppSelector)((state) => state.game.phase);
    const [showDpsMeter, setShowDpsMeter] = (0, preferences_1.usePreference)("showDpsMeter");
    const [dpsMeterPosition, setDpsMeterPosition] = (0, preferences_1.usePreference)("dpsMeterPosition");
    const blueDpsMeter = (0, hooks_1.useAppSelector)((state) => state.game.blueDpsMeter);
    const redDpsMeter = (0, hooks_1.useAppSelector)((state) => state.game.redDpsMeter);
    const myDpsMeter = team === Game_1.Team.BLUE_TEAM ? blueDpsMeter : redDpsMeter;
    const opponentDpsMeter = team === Game_1.Team.BLUE_TEAM ? redDpsMeter : blueDpsMeter;
    if (!spectatedPlayer)
        return null;
    const isPVE = phase === Game_1.GamePhaseState.FIGHT
        ? stageLevel in pve_stages_1.PVEStages
        : stageLevel - 1 in pve_stages_1.PVEStages;
    const name = spectatedPlayer.name;
    const avatar = spectatedPlayer.avatar;
    const opponentName = spectatedPlayer.opponentName;
    const opponentAvatar = spectatedPlayer.opponentAvatar;
    if (opponentAvatar == "") {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(draggable_window_1.default, { title: t("game_stats.title"), className: "my-container game-dps-meter", style: { zIndex: depths_1.DEPTH.DPS_METER }, defaultMinimized: !showDpsMeter, initialPosition: dpsMeterPosition, onToggleMinimize: (minimized) => setShowDpsMeter(!minimized), onMove: (position) => setDpsMeterPosition(position), children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: avatar }), (0, jsx_runtime_1.jsx)("p", { children: name })] }), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: "2rem" }, children: "vs" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: opponentAvatar }), (0, jsx_runtime_1.jsx)("p", { children: isPVE ? t(opponentName) : opponentName })] })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/icons/ATK.png", title: t("game_stats.damage_dealt"), alt: t("game_stats.damage_dealt") }) }, "damage_dealt"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/icons/SHIELD.png", title: t("game_stats.damage_blocked"), alt: t("game_stats.damage_blocked") }) }, "damage_blocked"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/icons/HP.png", title: t("game_stats.heal_shield"), alt: t("game_stats.heal_shield") }) }, "heal")] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("game_stats.damage_dealt") }), (0, jsx_runtime_1.jsx)(game_player_dps_meter_1.default, { dpsMeter: myDpsMeter }), (0, jsx_runtime_1.jsx)(game_player_dps_meter_1.default, { dpsMeter: opponentDpsMeter })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("game_stats.damage_blocked") }), (0, jsx_runtime_1.jsx)(game_player_dps_taken_meter_1.default, { dpsMeter: myDpsMeter }), (0, jsx_runtime_1.jsx)(game_player_dps_taken_meter_1.default, { dpsMeter: opponentDpsMeter })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("game_stats.heal_shield") }), (0, jsx_runtime_1.jsx)(game_player_hps_meter_1.default, { dpsMeter: myDpsMeter }), (0, jsx_runtime_1.jsx)(game_player_hps_meter_1.default, { dpsMeter: opponentDpsMeter })] })] })] }));
}
//# sourceMappingURL=game-dps-meter.js.map