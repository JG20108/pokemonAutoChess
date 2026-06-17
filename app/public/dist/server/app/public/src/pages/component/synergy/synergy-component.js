"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const hooks_1 = require("../../../hooks");
const game_1 = require("../../game");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
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
        if (!(spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.board))
            return;
        spectatedPlayer.board.forEach((p) => {
            var _a, _b;
            if (p.types.has(type)) {
                const sprite = (_b = (_a = scene.board) === null || _a === void 0 ? void 0 : _a.pokemons.get(p.id)) === null || _b === void 0 ? void 0 : _b.sprite;
                if (sprite) {
                    scene.setHovered(sprite, 4);
                }
            }
        });
    };
    const removeHighlightSynergy = (type) => {
        const scene = (0, game_1.getGameScene)();
        if (!scene)
            return;
        spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.board.forEach((p) => {
            var _a, _b;
            if (p.types.has(type)) {
                const sprite = (_b = (_a = scene.board) === null || _a === void 0 ? void 0 : _a.pokemons.get(p.id)) === null || _b === void 0 ? void 0 : _b.sprite;
                if (sprite) {
                    scene.clearHovered(sprite);
                }
            }
        });
    };
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
        }, "data-tooltip-id": "detail-synergy", onMouseEnter: () => {
            highlightSynergy(props.type);
            props.onMouseEnter();
        }, onMouseLeave: () => {
            removeHighlightSynergy(props.type);
            props.onMouseLeave();
        }, children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type }), (0, jsx_runtime_1.jsx)("span", { style: {
                    fontSize: "2em",
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