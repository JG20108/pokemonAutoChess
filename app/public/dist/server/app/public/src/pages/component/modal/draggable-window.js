"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DraggableWindow;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const draggable_1 = require("../../utils/draggable");
require("./draggable-window.css");
function DraggableWindow({ title, children, className = "", style = {}, defaultMinimized = false, initialPosition = { x: 0, y: 0 }, minimizeButtonTitle = (0, i18next_1.t)("minimize"), maximizeButtonTitle = (0, i18next_1.t)("maximize"), onToggleMinimize, onMove }) {
    const [isMinimized, setMinimized] = (0, react_1.useState)(defaultMinimized);
    const { position, isDragging, handleMouseDown, containerRef } = (0, draggable_1.useDraggable)({
        initialPosition,
        margin: 8
    });
    (0, react_1.useEffect)(() => {
        onToggleMinimize === null || onToggleMinimize === void 0 ? void 0 : onToggleMinimize(isMinimized);
    }, [isMinimized, onToggleMinimize]);
    (0, react_1.useEffect)(() => {
        onMove === null || onMove === void 0 ? void 0 : onMove(position);
    }, [position, onMove]);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: containerRef, className: `draggable-window ${className} ${isMinimized ? "minimized" : "maximized"}`, style: Object.assign(Object.assign({}, style), { transform: `translate(${position.x}px, ${position.y}px)`, cursor: isDragging ? "grabbing" : "default" }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "draggable-window-header", onMouseDown: (e) => handleMouseDown(e, ".draggable-window-header-button"), style: { cursor: isDragging ? "grabbing" : "grab" }, children: [(0, jsx_runtime_1.jsx)("h3", { className: "draggable-window-title", children: title }), (0, jsx_runtime_1.jsx)("button", { className: "draggable-window-header-button", onClick: () => setMinimized(!isMinimized), title: isMinimized ? maximizeButtonTitle : minimizeButtonTitle, children: isMinimized ? "➕" : "➖" })] }), !isMinimized && ((0, jsx_runtime_1.jsx)("div", { className: "draggable-window-content", children: children }))] }));
}
//# sourceMappingURL=draggable-window.js.map