"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryDelta = HistoryDelta;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./history-delta.css");
function computeDelta(entries, invertY) {
    if (!entries || entries.length < 2)
        return null;
    const latest = entries[entries.length - 1].value;
    const previous = entries[entries.length - 2].value;
    const diff = latest - previous;
    const positive = invertY ? diff < 0 : diff > 0;
    return { value: Math.abs(diff), positive };
}
function HistoryDelta(props) {
    var _a;
    if (!props.entries || props.entries.length < 2)
        return null;
    const delta = computeDelta(props.entries, (_a = props.invertY) !== null && _a !== void 0 ? _a : false);
    if (!delta)
        return null;
    return ((0, jsx_runtime_1.jsxs)("span", { className: `sparkline-delta ${delta.positive ? "delta-positive" : "delta-negative"}`, children: [delta.positive ? "▲" : "▼", " ", delta.value.toFixed(2)] }));
}
//# sourceMappingURL=history-delta.js.map