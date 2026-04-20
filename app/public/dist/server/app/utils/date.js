"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = isValidDate;
function isValidDate(date) {
    if (typeof date === "number")
        date = new Date(date);
    return !isNaN(date.getTime());
}
//# sourceMappingURL=date.js.map