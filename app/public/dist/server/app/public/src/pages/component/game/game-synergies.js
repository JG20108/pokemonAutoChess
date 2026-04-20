"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameSynergies;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const draggable_window_1 = __importDefault(require("../modal/draggable-window"));
const synergies_1 = __importDefault(require("../synergy/synergies"));
function GameSynergies() {
    const synergies = (0, hooks_1.useAppSelector)((state) => state.game.synergiesSpectated);
    const { t } = (0, react_i18next_1.useTranslation)();
    const [synergiesPosition, setSynergiesPosition] = (0, preferences_1.usePreference)("synergiesPosition");
    return ((0, jsx_runtime_1.jsx)(draggable_window_1.default, { title: t("synergies"), className: "my-container synergies-container", initialPosition: synergiesPosition, onMove: (position) => setSynergiesPosition(position), children: (0, jsx_runtime_1.jsx)(synergies_1.default, { synergies: synergies, tooltipPortal: true }) }));
}
//# sourceMappingURL=game-synergies.js.map