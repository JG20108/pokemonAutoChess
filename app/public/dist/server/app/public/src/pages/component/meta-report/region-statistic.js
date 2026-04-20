"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegionStatistic;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
function RegionStatistic(props) {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const details = config_1.RegionDetails[props.region.name];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "region-stat my-box", children: [(0, jsx_runtime_1.jsx)("span", { className: "rank", children: props.rank }), details && ((0, jsx_runtime_1.jsx)("img", { src: `/assets/maps/${props.region.name}-preview.png`, style: {
                    width: "48px",
                    height: "48px",
                    objectFit: "cover"
                }, alt: props.region.name })), (0, jsx_runtime_1.jsx)("span", { children: t(`map.${props.region.name}`) }), (0, jsx_runtime_1.jsx)("div", { children: (_a = details === null || details === void 0 ? void 0 : details.synergies) === null || _a === void 0 ? void 0 : _a.map((synergy) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy, size: "38px" }, synergy))) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), " ", props.region.count] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("average_place"), ":"] }), " ", props.region.rank.toFixed(2)] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "0.5em", alignItems: "center" }, children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("popular_pokemons"), ":"] }), props.region.pokemons.map((pokemon) => ((0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon] }, pokemon)))] })] }));
}
//# sourceMappingURL=region-statistic.js.map