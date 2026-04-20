"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyWheelModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const modal_1 = require("../modal/modal");
require("./synergy-wheel.css");
const SYNERGIES = Object.values(Synergy_1.Synergy);
function SynergyWheelModal(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [numSynergies, setNumSynergies] = (0, react_1.useState)(1);
    const [results, setResults] = (0, react_1.useState)([]);
    const [spinning, setSpinning] = (0, react_1.useState)(false);
    const [reelSequences, setReelSequences] = (0, react_1.useState)([]);
    const reelRefs = (0, react_1.useRef)([]);
    const slotMachineRef = (0, react_1.useRef)(null);
    const drawSynergies = () => {
        if (spinning)
            return;
        setSpinning(true);
        setResults([]);
        setReelSequences([]);
        const newResults = [];
        const availableSynergies = [...SYNERGIES];
        for (let i = 0; i < numSynergies; i++) {
            if (availableSynergies.length === 0)
                break;
            const randomIndex = Math.floor(Math.random() * availableSynergies.length);
            const selectedSynergy = availableSynergies[randomIndex];
            newResults.push(selectedSynergy);
            availableSynergies.splice(randomIndex, 1);
        }
        const sequences = [];
        for (let reelIndex = 0; reelIndex < numSynergies; reelIndex++) {
            const targetSynergy = newResults[reelIndex];
            const sequence = [];
            for (let i = 0; i < 20; i++) {
                if (i === 3) {
                    sequence.push(targetSynergy);
                }
                else {
                    const randomIndex = Math.floor(Math.random() * SYNERGIES.length);
                    sequence.push(SYNERGIES[randomIndex]);
                }
            }
            sequences.push(sequence);
        }
        setReelSequences(sequences);
        const baseDuration = 1500;
        const slowDownDuration = 500;
        reelRefs.current.forEach((reel, index) => {
            if (reel) {
                const reelDuration = baseDuration + index * 500 + Math.random() * 500;
                setTimeout(() => {
                    reel.classList.remove("spinning");
                    reel.classList.add("stopping");
                }, reelDuration);
            }
        });
        const totalDuration = baseDuration + (numSynergies - 1) * 500 + 500 + slowDownDuration;
        setTimeout(() => {
            setResults(newResults);
            setSpinning(false);
            reelRefs.current.forEach((reel) => {
                if (reel) {
                    reel.classList.remove("stopping");
                }
            });
            setReelSequences([]);
        }, totalDuration);
    };
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.handleClose, className: "game-synergy-wheel-modal", header: t("gadget.synergy_wheel"), children: (0, jsx_runtime_1.jsxs)("div", { className: "synergy-wheel-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "synergy-wheel-controls", children: (0, jsx_runtime_1.jsxs)("label", { children: [t("synergy_wheel.number_to_draw"), ":", (0, jsx_runtime_1.jsxs)("select", { value: numSynergies, onChange: (e) => setNumSynergies(Number(e.target.value)), disabled: spinning, children: [(0, jsx_runtime_1.jsx)("option", { value: 1, children: "1" }), (0, jsx_runtime_1.jsx)("option", { value: 2, children: "2" }), (0, jsx_runtime_1.jsx)("option", { value: 3, children: "3" })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "slot-machine", ref: slotMachineRef, children: Array.from({ length: numSynergies }, (_, index) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsx)("div", { className: `slot-reel ${spinning ? "spinning" : ""}`, ref: (el) => {
                                reelRefs.current[index] = el;
                            }, children: (0, jsx_runtime_1.jsx)("div", { className: "reel-symbols", children: spinning ? (((_a = reelSequences[index]) === null || _a === void 0 ? void 0 : _a.map((synergy, symbolIndex) => ((0, jsx_runtime_1.jsx)("div", { className: "symbol", children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy, size: "60px" }) }, `${synergy}-${symbolIndex}`)))) ||
                                    [...Array(20)].map((_, symbolIndex) => {
                                        const synergy = SYNERGIES[symbolIndex % SYNERGIES.length];
                                        return ((0, jsx_runtime_1.jsx)("div", { className: "symbol", children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy, size: "60px" }) }, `${synergy}-${symbolIndex}`));
                                    })) : ((0, jsx_runtime_1.jsx)("div", { className: "symbol result", children: results[index] ? ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: results[index], size: "60px" })) : ((0, jsx_runtime_1.jsx)("div", { className: "placeholder", children: "?" })) })) }) }, index));
                    }) }), (0, jsx_runtime_1.jsx)("button", { className: "spin-button bubbly blue", onClick: drawSynergies, disabled: spinning, children: spinning ? t("synergy_wheel.spinning") : t("synergy_wheel.spin") }), results.length > 0 && !spinning && ((0, jsx_runtime_1.jsxs)("div", { className: "results", children: [(0, jsx_runtime_1.jsxs)("h3", { children: [t("synergy_wheel.results"), ":"] }), (0, jsx_runtime_1.jsx)("div", { className: "result-synergies", children: results.map((synergy, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "result-synergy", children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy, size: "40px" }), (0, jsx_runtime_1.jsx)("span", { children: t(`synergy.${synergy}`) })] }, index))) })] }))] }) }));
}
//# sourceMappingURL=synergy-wheel.js.map