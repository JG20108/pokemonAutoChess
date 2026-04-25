"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../../config");
const hooks_1 = require("../../../hooks");
const game_1 = require("../../game");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const synergy_detail_component_1 = __importDefault(require("./synergy-detail-component"));
function SynergyComponent(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const levelReached = config_1.SynergyTriggers[props.type]
        .filter((n) => n <= props.value)
        .at(-1);
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const highlightSynergy = (type) => {
        const scene = (0, game_1.getGameScene)();
        if (!scene)
            return;
        const outline = scene.plugins.get("rexOutline");
        if (!outline)
            return;
        if (!(spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.board))
            return;
        spectatedPlayer.board.forEach((p) => {
            var _a, _b;
            if (p.types.has(type)) {
                const sprite = (_b = (_a = scene.board) === null || _a === void 0 ? void 0 : _a.pokemons.get(p.id)) === null || _b === void 0 ? void 0 : _b.sprite;
                if (sprite) {
                    outline.add(sprite, {
                        thickness: 4,
                        outlineColor: 0xffffff
                    });
                }
            }
        });
    };
    const removeHighlightSynergy = (type) => {
        const scene = (0, game_1.getGameScene)();
        if (!scene)
            return;
        const outline = scene.plugins.get("rexOutline");
        if (!outline)
            return;
        if (spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.board) {
            spectatedPlayer.board.forEach((p) => {
                var _a, _b;
                if (p.types.has(type)) {
                    const sprite = (_b = (_a = scene.board) === null || _a === void 0 ? void 0 : _a.pokemons.get(p.id)) === null || _b === void 0 ? void 0 : _b.sprite;
                    if (sprite) {
                        outline.remove(sprite);
                    }
                }
            });
        }
    };
    const tooltip = ((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-" + props.type, className: "custom-theme-tooltip", place: "right-start", delayShow: 100, delayHide: 0, children: (0, jsx_runtime_1.jsx)(synergy_detail_component_1.default, { type: props.type, value: props.value }) }));
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            display: "grid",
            gridTemplateColumns: "40px 2ch 1fr",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: props.value >= config_1.SynergyTriggers[props.type][0]
                ? "var(--color-bg-secondary)"
                : "rgba(84, 89, 107,0)",
            margin: "4px",
            borderRadius: "12px",
            padding: "2px 0",
            border: props.value >= config_1.SynergyTriggers[props.type][0]
                ? "var(--border-thin)"
                : "none",
            cursor: "var(--cursor-hover)"
        }, "data-tooltip-id": "detail-" + props.type, onMouseEnter: () => {
            highlightSynergy(props.type);
        }, onMouseLeave: () => {
            removeHighlightSynergy(props.type);
        }, children: [props.tooltipPortal
                ? react_dom_1.default.createPortal(tooltip, document.body)
                : tooltip, (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type, size: "40px" }), (0, jsx_runtime_1.jsx)("span", { style: {
                    fontSize: "32px",
                    textShadow: "2px 2px 2px #000000c0",
                    textAlign: "center",
                    marginRight: "4px",
                    color: levelReached ? "#ffffff" : "#b8b8b8"
                }, children: props.value }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    flexFlow: "column",
                    lineHeight: 1.25
                }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            display: "flex",
                            justifyContent: "space-evenly"
                        }, children: config_1.SynergyTriggers[props.type].map((t) => {
                            return ((0, jsx_runtime_1.jsx)("span", { style: {
                                    color: levelReached === t
                                        ? "var(--color-fg-gold)"
                                        : props.value >= t
                                            ? "var(--color-fg-primary)"
                                            : "var(--color-fg-secondary)"
                                }, children: t }, t));
                        }) }), (0, jsx_runtime_1.jsx)("p", { style: { margin: "0px", textAlign: "center", fontWeight: "500" }, children: t(`synergy.${props.type}`) })] })] }));
}
//# sourceMappingURL=synergy-component.js.map