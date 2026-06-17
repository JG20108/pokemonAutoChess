"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Synergies;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = __importDefault(require("react-dom"));
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../../config");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const synergy_component_1 = __importDefault(require("./synergy-component"));
const synergy_detail_component_1 = __importDefault(require("./synergy-detail-component"));
require("./synergies.css");
function Synergies(props) {
    const [hoveredSynergy, setHoveredSynergy] = (0, react_1.useState)(null);
    const synergies = Object.keys(Synergy_1.Synergy)
        .sort((a, b) => {
        const fa = props.synergies.find((e) => e[0] == a);
        const fb = props.synergies.find((e) => e[0] == b);
        const sa = fa ? fa : 0;
        const sb = fb ? fb : 0;
        if (sa[1] == sb[1]) {
            if (sa[1] >= config_1.SynergyTriggers[a][0]) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            return sb[1] - sa[1];
        }
    })
        .filter((type) => {
        const s = props.synergies.find((e) => e[0] == type);
        return s && s[1] > 0;
    });
    const tooltip = ((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-synergy", hidden: hoveredSynergy === null, className: "custom-theme-tooltip", place: "right-start", delayShow: 100, delayHide: 0, children: hoveredSynergy && ((0, jsx_runtime_1.jsx)(synergy_detail_component_1.default, { type: hoveredSynergy, value: props.synergies.find((e) => e[0] == hoveredSynergy)[1] })) }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "synergies-list", children: [synergies.map((type, index) => {
                const s = props.synergies.find((e) => e[0] == type);
                return ((0, jsx_runtime_1.jsx)(synergy_component_1.default, { type: type, value: s[1], index: index, onMouseEnter: () => setHoveredSynergy(type), onMouseLeave: () => setHoveredSynergy(null) }, type));
            }), props.tooltipPortal
                ? react_dom_1.default.createPortal(tooltip, document.body)
                : tooltip] }));
}
//# sourceMappingURL=synergies.js.map