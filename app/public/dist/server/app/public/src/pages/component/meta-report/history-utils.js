"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateShort = formatDateShort;
function formatDateShort(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
//# sourceMappingURL=history-utils.js.map