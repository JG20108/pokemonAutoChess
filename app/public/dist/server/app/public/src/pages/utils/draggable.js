"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDraggable = useDraggable;
const react_1 = require("react");
const number_1 = require("../../../../utils/number");
const SIDEBAR_WIDTH = 60;
function useDraggable(options = {}) {
    const { initialPosition = { x: 0, y: 0 }, margin = 40 } = options;
    const [position, setPosition] = (0, react_1.useState)(initialPosition);
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    const dragRef = (0, react_1.useRef)({
        activePointerId: null,
        startMouseX: 0,
        startMouseY: 0,
        startPosX: 0,
        startPosY: 0,
        startLeft: 0,
        startTop: 0,
        width: 0,
        height: 0
    });
    const containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (isDragging) {
            const handlePointerMove = (e) => {
                if (dragRef.current.activePointerId !== e.pointerId) {
                    return;
                }
                const dx = e.clientX - dragRef.current.startMouseX;
                const dy = e.clientY - dragRef.current.startMouseY;
                const proposedLeft = dragRef.current.startLeft + dx;
                const proposedTop = dragRef.current.startTop + dy;
                const maxLeft = window.innerWidth - margin - dragRef.current.width;
                const maxTop = window.innerHeight - margin - dragRef.current.height;
                const clampedLeft = (0, number_1.clamp)(proposedLeft, SIDEBAR_WIDTH + margin, Math.max(margin, maxLeft));
                const clampedTop = (0, number_1.clamp)(proposedTop, margin, Math.max(margin, maxTop));
                const newX = dragRef.current.startPosX + (clampedLeft - dragRef.current.startLeft);
                const newY = dragRef.current.startPosY + (clampedTop - dragRef.current.startTop);
                setPosition({ x: newX, y: newY });
            };
            const stopDragging = (e) => {
                if (e &&
                    dragRef.current.activePointerId !== null &&
                    dragRef.current.activePointerId !== e.pointerId) {
                    return;
                }
                dragRef.current.activePointerId = null;
                setIsDragging(false);
            };
            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", stopDragging);
            window.addEventListener("pointercancel", stopDragging);
            return () => {
                window.removeEventListener("pointermove", handlePointerMove);
                window.removeEventListener("pointerup", stopDragging);
                window.removeEventListener("pointercancel", stopDragging);
            };
        }
    }, [isDragging, margin]);
    (0, react_1.useEffect)(() => {
        const clampCurrentPosition = () => {
            var _a, _b, _c, _d, _e;
            const rect = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            const width = (_b = rect === null || rect === void 0 ? void 0 : rect.width) !== null && _b !== void 0 ? _b : 0;
            const height = (_c = rect === null || rect === void 0 ? void 0 : rect.height) !== null && _c !== void 0 ? _c : 0;
            const maxLeft = window.innerWidth - margin - width;
            const maxTop = window.innerHeight - margin - height;
            const currentLeft = (_d = rect === null || rect === void 0 ? void 0 : rect.left) !== null && _d !== void 0 ? _d : 0;
            const currentTop = (_e = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _e !== void 0 ? _e : 0;
            const clampedLeft = (0, number_1.clamp)(currentLeft, SIDEBAR_WIDTH + margin, Math.max(margin, maxLeft));
            const clampedTop = (0, number_1.clamp)(currentTop, margin, Math.max(margin, maxTop));
            const dx = clampedLeft - currentLeft;
            const dy = clampedTop - currentTop;
            if (dx !== 0 || dy !== 0) {
                setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
            }
        };
        clampCurrentPosition();
        const onResize = () => clampCurrentPosition();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [margin]);
    const handlePointerDown = (e, ignoreSelector) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0)) {
            return;
        }
        if (ignoreSelector && e.target.closest(ignoreSelector)) {
            return;
        }
        e.preventDefault();
        dragRef.current.activePointerId = e.pointerId;
        (_b = (_a = e.currentTarget).setPointerCapture) === null || _b === void 0 ? void 0 : _b.call(_a, e.pointerId);
        setIsDragging(true);
        const rect = (_c = containerRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
        dragRef.current = Object.assign(Object.assign({}, dragRef.current), { startMouseX: e.clientX, startMouseY: e.clientY, startPosX: position.x, startPosY: position.y, startLeft: (_d = rect === null || rect === void 0 ? void 0 : rect.left) !== null && _d !== void 0 ? _d : 0, startTop: (_e = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _e !== void 0 ? _e : 0, width: (_f = rect === null || rect === void 0 ? void 0 : rect.width) !== null && _f !== void 0 ? _f : 0, height: (_g = rect === null || rect === void 0 ? void 0 : rect.height) !== null && _g !== void 0 ? _g : 0 });
    };
    return {
        position,
        isDragging,
        handlePointerDown,
        containerRef
    };
}
//# sourceMappingURL=draggable.js.map