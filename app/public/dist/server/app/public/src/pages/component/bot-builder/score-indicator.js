"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScoreIndicator;
const jsx_runtime_1 = require("react/jsx-runtime");
const bot_logic_1 = require("../../../../../core/bot-logic");
require("./score-indicator.css");
function ScoreIndicator(props) {
    const score = (0, bot_logic_1.getBotScore)(props.value);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "score-indicator", children: [(0, jsx_runtime_1.jsxs)("div", { className: "score-indicator-bars", children: [(0, jsx_runtime_1.jsx)("div", { style: { width: "10%", backgroundColor: bot_logic_1.BOT_SCORES.INCOMPLETE.color } }), (0, jsx_runtime_1.jsx)("div", { style: { width: "16%", backgroundColor: bot_logic_1.BOT_SCORES.VERY_EASY.color } }), (0, jsx_runtime_1.jsx)("div", { style: { width: "16%", backgroundColor: bot_logic_1.BOT_SCORES.EASY.color } }), (0, jsx_runtime_1.jsx)("div", { style: { width: "16%", backgroundColor: bot_logic_1.BOT_SCORES.MEDIUM.color } }), (0, jsx_runtime_1.jsx)("div", { style: { width: "16%", backgroundColor: bot_logic_1.BOT_SCORES.HARD.color } }), (0, jsx_runtime_1.jsx)("div", { style: { width: "16%", backgroundColor: bot_logic_1.BOT_SCORES.VERY_HARD.color } }), (0, jsx_runtime_1.jsx)("div", { style: { width: "10%", backgroundColor: bot_logic_1.BOT_SCORES.ILLEGAL.color } }), (0, jsx_runtime_1.jsx)("div", { className: "cursor", style: { left: props.value + "%" } })] }), (0, jsx_runtime_1.jsx)("span", { style: { color: score.color }, children: score.label })] }));
}
//# sourceMappingURL=score-indicator.js.map