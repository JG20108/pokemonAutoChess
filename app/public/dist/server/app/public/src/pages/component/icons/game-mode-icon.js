"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModeIcon = GameModeIcon;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Game_1 = require("../../../../../types/enum/Game");
const jsx_1 = require("../../utils/jsx");
function GameModeIcon(props) {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const gameMode = (_a = props.gameMode) !== null && _a !== void 0 ? _a : Game_1.GameMode.CUSTOM_LOBBY;
    return ((0, jsx_runtime_1.jsx)("img", { alt: t(`game_modes.${gameMode}`), title: t(`game_modes.${gameMode}`), className: (0, jsx_1.cc)(gameMode.toLowerCase(), "gamemode icon"), src: `/assets/ui/${gameMode.toLowerCase()}.png`, draggable: "false" }));
}
//# sourceMappingURL=game-mode-icon.js.map