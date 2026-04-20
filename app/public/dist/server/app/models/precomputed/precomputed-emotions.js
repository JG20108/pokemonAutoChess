"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX = void 0;
exports.getAvailableEmotions = getAvailableEmotions;
const types_1 = require("../../types");
const emotions_per_pokemon_index_json_1 = __importDefault(require("./emotions-per-pokemon-index.json"));
exports.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX = emotions_per_pokemon_index_json_1.default;
function getAvailableEmotions(index, shiny) {
    if (shiny) {
        const shinyPad = index.length === 4 ? "-0000-0001" : "-0001";
        index += shinyPad;
    }
    return Object.values(types_1.Emotion).filter((e, i) => { var _a; return ((_a = exports.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[index]) === null || _a === void 0 ? void 0 : _a[i]) === 1; });
}
//# sourceMappingURL=precomputed-emotions.js.map