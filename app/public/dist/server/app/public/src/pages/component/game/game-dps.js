"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameDps;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const preferences_1 = require("../../../preferences");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const progress_bar_1 = __importDefault(require("../progress-bar/progress-bar"));
function GameDps(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [colorblindMode] = (0, preferences_1.usePreference)("colorblindMode");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-dps-bar", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.dps.name }), (0, jsx_runtime_1.jsxs)("div", { className: "game-dps-progress-wrapper", children: [(0, jsx_runtime_1.jsx)("p", { children: props.dps.physicalDamage +
                            props.dps.specialDamage +
                            props.dps.trueDamage }), (0, jsx_runtime_1.jsxs)(progress_bar_1.default, { className: "my-progress is-primary", children: [(0, jsx_runtime_1.jsx)(progress_bar_1.default, { className: colorblindMode ? "colorblind-pattern-vertical-stripes" : "", style: { backgroundColor: "var(--color-physical)" }, max: props.maxDamage, now: props.dps.physicalDamage, title: `${t("game_stats.physical_damage_dealt")}: ${props.dps.physicalDamage}` }, "physical"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { className: colorblindMode ? "colorblind-pattern-diagonal-stripes" : "", style: { backgroundColor: "var(--color-special)" }, max: props.maxDamage, now: props.dps.specialDamage, title: `${t("game_stats.special_damage_dealt")}: ${props.dps.specialDamage}` }, "special"), (0, jsx_runtime_1.jsx)(progress_bar_1.default, { className: colorblindMode ? "colorblind-pattern-dots" : "", style: { backgroundColor: "var(--color-true)" }, max: props.maxDamage, now: props.dps.trueDamage, title: `${t("game_stats.true_damage_dealt")}: ${props.dps.trueDamage}` }, "true")] })] })] }));
}
//# sourceMappingURL=game-dps.js.map