"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedValue = getNestedValue;
exports.applyEditsToObject = applyEditsToObject;
function getNestedValue(obj, path) {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
        if (typeof current !== "object" || current === null)
            return "";
        current = current[part];
        if (current === undefined)
            return "";
    }
    return typeof current === "string" ? current : "";
}
function applyEditsToObject(base, edits) {
    const result = JSON.parse(JSON.stringify(base));
    for (const [path, value] of Object.entries(edits)) {
        const parts = path.split(".");
        let obj = result;
        for (let i = 0; i < parts.length - 1; i++) {
            if (typeof obj[parts[i]] !== "object" || obj[parts[i]] === null) {
                obj[parts[i]] = {};
            }
            obj = obj[parts[i]];
        }
        obj[parts[parts.length - 1]] = value;
    }
    return result;
}
//# sourceMappingURL=types.js.map