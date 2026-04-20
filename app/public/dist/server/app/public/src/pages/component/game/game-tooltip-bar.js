"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTooltipBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const number_1 = require("../../../../../utils/number");
require("./game-tooltip-bar.css");
const BAR_COLORS = {
    HP_ALLY: "#97db4a",
    HP_ENEMY: "#e76e55",
    PP: "#5f9ff9",
    XP: "#eeeeee",
    SHIELD: "linear-gradient(to bottom, #ffffff, #c0c0c0)"
};
const BAR_LABELS = {
    HP_ALLY: "stat.HP",
    HP_ENEMY: "stat.HP",
    PP: "stat.PP",
    XP: ""
};
const GameTooltipBar = ({ value, maxValue, extraValue, type, graduationStep }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const total = maxValue + (extraValue !== null && extraValue !== void 0 ? extraValue : 0);
    const percent = value === undefined ? 100 : (0, number_1.clamp)(value / total, 0, 1);
    const extraPercent = extraValue ? (0, number_1.clamp)(extraValue / total, 0, 1) : 0;
    const graduations = [];
    if (graduationStep) {
        for (let i = graduationStep; i < total; i += graduationStep) {
            graduations.push(i);
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-tooltip-bar", children: [(0, jsx_runtime_1.jsxs)("div", { className: "game-tooltip-bar-text", children: [BAR_LABELS[type] ? t(BAR_LABELS[type]) : "", BAR_LABELS[type] ? ": " : "", value === undefined ? maxValue : `${value} / ${maxValue}`, " ", extraValue ? `(+${extraValue})` : ""] }), (0, jsx_runtime_1.jsxs)("div", { className: "game-tooltip-bar-outer", children: [(0, jsx_runtime_1.jsx)("div", { className: "game-tooltip-bar-inner", style: {
                            width: `${percent * 100}%`,
                            background: BAR_COLORS[type]
                        } }), extraValue != null && ((0, jsx_runtime_1.jsx)("div", { className: "game-tooltip-bar-inner extra", style: {
                            width: `${extraPercent * 100}%`,
                            background: BAR_COLORS.SHIELD
                        } })), graduations.map((g) => ((0, jsx_runtime_1.jsx)("div", { className: "game-tooltip-bar-graduation", style: { left: `${(g / total) * 100}%` } }, g)))] })] }));
};
exports.GameTooltipBar = GameTooltipBar;
exports.default = exports.GameTooltipBar;
//# sourceMappingURL=game-tooltip-bar.js.map