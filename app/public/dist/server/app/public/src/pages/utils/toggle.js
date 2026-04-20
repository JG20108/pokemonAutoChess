"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeSiblingDetails = closeSiblingDetails;
function closeSiblingDetails(event) {
    var _a, _b;
    const details = event.currentTarget;
    if (details.open === false)
        return;
    const detailsElements = ((_b = (_a = details.parentElement) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []);
    for (const el of Array.from(detailsElements)) {
        el.open = el === event.currentTarget;
        if (el !== event.currentTarget && el.tagName === "DETAILS") {
            el.removeAttribute("open");
        }
    }
}
//# sourceMappingURL=toggle.js.map