"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseMap = reverseMap;
exports.mapToObj = mapToObj;
exports.objToMap = objToMap;
exports.hasKey = hasKey;
function reverseMap(map) {
    return new Map(Array.from(map.entries()).map(([k, v]) => [v, k]));
}
function mapToObj(map) {
    const obj = {};
    for (const [k, v] of map)
        obj[k] = v;
    return obj;
}
function objToMap(obj) {
    const map = new Map();
    for (const k of Object.keys(obj)) {
        map.set(k, obj[k]);
    }
    return map;
}
function hasKey(map, key) {
    return map.has(key);
}
//# sourceMappingURL=map.js.map