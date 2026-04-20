"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameExpeditions;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const expeditions_1 = require("../../../../../core/expeditions");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const descriptions_1 = require("../../utils/descriptions");
const draggable_window_1 = __importDefault(require("../modal/draggable-window"));
function GameExpeditions() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const profile = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [expeditionsPosition, setExpeditionsPosition] = (0, preferences_1.usePreference)("expeditionsPosition");
    if (!profile)
        return null;
    const expeditions = (0, expeditions_1.getPlayerExpeditions)(profile);
    return ((0, jsx_runtime_1.jsx)(draggable_window_1.default, { title: t("expeditions.title"), className: "my-container expeditions-container", initialPosition: expeditionsPosition, onMove: (position) => setExpeditionsPosition(position), defaultMinimized: true, children: (0, jsx_runtime_1.jsx)("ul", { style: { maxWidth: "500px" }, children: expeditions.map((expedition) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("span", { className: "expedition-type", children: t("expeditions." + expedition.type) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)((0, expeditions_1.getExpeditionLabel)(expedition)) })] }, expedition.type + expedition.rank))) }) }));
}
//# sourceMappingURL=game-expeditions.js.map