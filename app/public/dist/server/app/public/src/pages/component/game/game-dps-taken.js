"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameDpsTaken;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const preferences_1 = require("../../../preferences");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const progress_bar_1 = __importDefault(require("../progress-bar/progress-bar"));
function GameDpsTaken(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [colorblindMode] = (0, preferences_1.usePreference)("colorblindMode");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-dps-bar", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.dps.name }), (0, jsx_runtime_1.jsxs)("div", { className: "game-dps-progress-wrapper", children: [(0, jsx_runtime_1.jsx)("p", { children: props.dps.physicalDamageReduced +
                            props.dps.specialDamageReduced +
                            props.dps.shieldDamageTaken }), (0, jsx_runtime_1.jsxs)(progress_bar_1.default, { className: "my-progress is-primary", children: [(0, jsx_runtime_1.jsx)(progress_bar_1.default, { className: colorblindMode ? "colorblind-pattern-vertical-stripes" : "", style: { backgroundColor: "var(--color-physical)" }, max: props.maxDamageTaken, now: props.dps.physicalDamageReduced, title: `${t("game_stats.physical_damage_reduced")}: ${props.dps.physicalDamageReduced}` }, "hp"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { className: colorblindMode ? "colorblind-pattern-diagonal-stripes" : "", style: { backgroundColor: "var(--color-special)" }, max: props.maxDamageTaken, now: props.dps.specialDamageReduced, title: `${t("game_stats.special_damage_reduced")}: ${props.dps.specialDamageReduced}` }, "hp"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { className: colorblindMode ? "colorblind-pattern-dots" : "", style: { backgroundColor: "var(--color-shield)" }, max: props.maxDamageTaken, now: props.dps.shieldDamageTaken, title: `${t("game_stats.shield_damage_taken")}: ${props.dps.shieldDamageTaken}` }, "shield")] })] })] }));
}
//# sourceMappingURL=game-dps-taken.js.map