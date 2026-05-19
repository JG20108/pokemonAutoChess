"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.invertKeysValues = invertKeysValues;
function keys(obj) {
    return Object.keys(obj);
}
function values(obj) {
    return Object.values(obj);
}
function entries(obj) {
    return Object.entries(obj);
}
function invertKeysValues(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}
//# sourceMappingURL=object.js.map