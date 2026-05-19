"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSelectionMenu = RoomSelectionMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const gadgets_1 = require("../../../../../config/game/gadgets");
const types_1 = require("../../../../../types");
const Game_1 = require("../../../../../types/enum/Game");
const hooks_1 = require("../../../hooks");
const modal_1 = require("../modal/modal");
require("./room-selection-menu.css");
function RoomSelectionMenu(props) {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const profile = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const profileLevel = (_a = profile === null || profile === void 0 ? void 0 : profile.level) !== null && _a !== void 0 ? _a : 0;
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.onClose, className: "room-selection-menu", header: t("new_game"), body: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { className: "my-box", onClick: () => props.onSelectMode(Game_1.GameMode.CLASSIC), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/game_modes/classic.png", alt: t(`game_modes.${Game_1.GameMode.CLASSIC}`), draggable: "false" }), (0, jsx_runtime_1.jsx)("h2", { children: t(`game_modes.${Game_1.GameMode.CLASSIC}`) }), (0, jsx_runtime_1.jsx)("p", { children: t(`game_modes_descriptions.${Game_1.GameMode.CLASSIC}`) })] }), (profileLevel >= gadgets_1.GADGETS.certificate.levelRequired ||
                    (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", onClick: () => props.onSelectMode(Game_1.GameMode.RANKED), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/game_modes/ranked.png", alt: t(`game_modes.${Game_1.GameMode.RANKED}`), draggable: "false" }), (0, jsx_runtime_1.jsx)("h2", { children: t(`game_modes.${Game_1.GameMode.RANKED}`) }), (0, jsx_runtime_1.jsx)("p", { children: t(`game_modes_descriptions.${Game_1.GameMode.RANKED}`) })] })), (0, jsx_runtime_1.jsxs)("li", { className: "my-box", onClick: () => props.onSelectMode(Game_1.GameMode.SCRIBBLE), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/game_modes/scribble.png", alt: t(`game_modes.${Game_1.GameMode.SCRIBBLE}`), draggable: "false" }), (0, jsx_runtime_1.jsx)("h2", { children: t(`game_modes.${Game_1.GameMode.SCRIBBLE}`) }), (0, jsx_runtime_1.jsx)("p", { children: t(`game_modes_descriptions.${Game_1.GameMode.SCRIBBLE}`) })] }), (0, jsx_runtime_1.jsxs)("li", { className: "my-box", onClick: () => props.onSelectMode(Game_1.GameMode.CUSTOM_LOBBY), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/game_modes/custom_lobby.png", alt: t(`game_modes.${Game_1.GameMode.CUSTOM_LOBBY}`), draggable: "false" }), (0, jsx_runtime_1.jsx)("h2", { children: t(`game_modes.${Game_1.GameMode.CUSTOM_LOBBY}`) }), (0, jsx_runtime_1.jsx)("p", { children: t(`game_modes_descriptions.${Game_1.GameMode.CUSTOM_LOBBY}`) })] })] }) }));
}
//# sourceMappingURL=room-selection-menu.js.map