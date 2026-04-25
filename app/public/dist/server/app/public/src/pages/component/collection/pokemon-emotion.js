"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonEmotion;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const types_1 = require("../../../../../types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const hooks_1 = require("../../../hooks");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./pokemon-emotion.css");
function PokemonEmotion(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const lastBoostersOpened = (0, hooks_1.useAppSelector)((state) => state.boosters.lastBoostersOpened);
    const cost = (0, config_1.getEmotionCost)(props.emotion, props.shiny);
    const canUnlock = !props.unlocked && cost <= props.dust;
    const isNew = lastBoostersOpened.some((booster) => booster.some((card) => card.name === Pokemon_1.PkmByIndex[props.index] &&
        card.shiny === props.shiny &&
        card.emotion === props.emotion &&
        card.new));
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box", "clickable", "pokemon-emotion", {
            unlocked: !!props.unlocked,
            unlockable: canUnlock,
            selected: !!props.selected,
            new: isNew,
            shimmer: isNew
        }), onClick: props.onClick, children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: props }), types_1.AvatarEmotions.includes(props.emotion) && ((0, jsx_runtime_1.jsxs)("span", { className: "shortcut", children: ["Ctrl+", types_1.AvatarEmotions.indexOf(props.emotion) + 1] })), props.unlocked ? ((0, jsx_runtime_1.jsx)("p", { children: t(`emotion.${props.emotion}`) })) : ((0, jsx_runtime_1.jsxs)("p", { className: "dust", children: [(0, jsx_runtime_1.jsx)("span", { children: cost }), (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.index) })] }))] }));
}
//# sourceMappingURL=pokemon-emotion.js.map