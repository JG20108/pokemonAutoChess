"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EloEngine = void 0;
const number_1 = require("../utils/number");
class EloEngine {
    constructor() {
        this.K = 32;
    }
    getExpected(a, b) {
        return 1 / (1 + Math.pow(10, (b - a) / 400));
    }
    updateRating(expected, actual, current, nbGamesPlayed) {
        const dynamicK = actual > expected
            ? (0, number_1.min)(this.K)(123 - 70 * Math.log(nbGamesPlayed))
            : this.K;
        return Math.round(current + dynamicK * (actual - expected));
    }
}
exports.EloEngine = EloEngine;
//# sourceMappingURL=elo-engine.js.map