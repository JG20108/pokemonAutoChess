"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyOverlaps = SynergyOverlaps;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const jsx_1 = require("../../utils/jsx");
const toggle_1 = require("../../utils/toggle");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
require("./synergy-overlaps.css");
function SynergyOverlaps(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const overlapsMap = new Map(Synergy_1.SynergyArray.filter((type) => type !== props.type).map((type) => [
        type,
        props.pokemons
            .filter((p) => p.types.includes(type))
            .filter((p, i, list) => list.findIndex((q) => Pokemon_1.PkmFamily[p.name] === Pokemon_1.PkmFamily[q.name]) === i).length
    ]));
    const overlaps = [...overlapsMap.entries()]
        .filter(([type, nb]) => nb > 0)
        .sort((a, b) => b[1] - a[1]);
    return ((0, jsx_runtime_1.jsxs)("details", { className: "synergy-overlaps", onToggle: toggle_1.closeSiblingDetails, children: [(0, jsx_runtime_1.jsx)("summary", { style: { textAlign: "end" }, children: t("overlaps") }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { children: overlaps.map(([type, nb]) => {
                        return ((0, jsx_runtime_1.jsxs)("li", { onClick: () => props.setOverlap(props.overlap === type ? null : type), className: (0, jsx_1.cc)({ active: props.overlap === type }), children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type }), (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), (0, jsx_runtime_1.jsx)("span", { children: nb })] }, type));
                    }) }) })] }));
}
//# sourceMappingURL=synergy-overlaps.js.map