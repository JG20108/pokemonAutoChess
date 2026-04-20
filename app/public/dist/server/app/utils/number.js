"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fpsToDuration = exports.average = exports.roundToNDigits = exports.isBetween = exports.clamp = exports.max = exports.min = void 0;
exports.calcAngleDegrees = calcAngleDegrees;
exports.angleBetween = angleBetween;
const min = (minimum) => (value) => Math.max(minimum, value);
exports.min = min;
const max = (maximum) => (value) => Math.min(maximum, value);
exports.max = max;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
exports.clamp = clamp;
const isBetween = (a, b) => (value) => a < b ? value >= a && value <= b : value >= b && value <= a;
exports.isBetween = isBetween;
const roundToNDigits = (value, nbDigits = 2, mode = "closest") => {
    const factor = 10 ** nbDigits;
    const scaled = value * factor;
    const rounded = mode === "up"
        ? Math.ceil(scaled)
        : mode === "down"
            ? Math.floor(scaled)
            : Math.round(scaled);
    return rounded / factor;
};
exports.roundToNDigits = roundToNDigits;
const average = (...values) => {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
};
exports.average = average;
const fpsToDuration = (targetFramesPerSecond) => (nbFrames) => Math.round(nbFrames * (1000 / targetFramesPerSecond));
exports.fpsToDuration = fpsToDuration;
function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
}
function angleBetween(pointA, pointB) {
    const dx = pointB[0] - pointA[0];
    const dy = pointB[1] - pointA[1];
    return Math.atan2(dy, dx);
}
//# sourceMappingURL=number.js.map