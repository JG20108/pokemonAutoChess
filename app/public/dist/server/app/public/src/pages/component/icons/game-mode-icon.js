"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModeIcon = GameModeIcon;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const jsx_1 = require("../../utils/jsx");
function GameModeIcon(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("img", { alt: t(`game_modes.${props.gameMode}`), title: t(`game_modes.${props.gameMode}`), className: (0, jsx_1.cc)(props.gameMode.toLowerCase(), "gamemode icon"), src: `/assets/ui/${props.gameMode.toLowerCase()}.png`, draggable: "false" }));
}
//# sourceMappingURL=game-mode-icon.js.map