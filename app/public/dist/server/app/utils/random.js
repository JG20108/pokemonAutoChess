"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chance = chance;
exports.randomWeighted = randomWeighted;
exports.randomBetween = randomBetween;
exports.pickRandomIn = pickRandomIn;
exports.pickNRandomIn = pickNRandomIn;
exports.shuffleArray = shuffleArray;
exports.simpleHashSeededCoinFlip = simpleHashSeededCoinFlip;
const number_1 = require("./number");
function chance(probability, pokemon, cap = 1) {
    var _a;
    if (probability === 0)
        return false;
    return (Math.random() <
        (0, number_1.max)(cap)(Math.pow(probability, 1 - ((_a = pokemon === null || pokemon === void 0 ? void 0 : pokemon.luck) !== null && _a !== void 0 ? _a : 0) / 100)));
}
function randomWeighted(weights, totalWeight, ap = 0, apScaling = 1, luck = 0) {
    if (totalWeight === undefined) {
        totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
    }
    let random = Math.random() *
        totalWeight *
        (1 + ap * (apScaling / 100)) *
        (1 + luck / 100);
    for (const [item, weight] of Object.entries(weights)) {
        if ((random -= weight) < 0)
            return item;
    }
    return null;
}
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function pickRandomIn(list) {
    if (!Array.isArray(list))
        return pickRandomIn(Object.values(list));
    return list[Math.floor(Math.random() * list.length)];
}
function pickNRandomIn(array, number) {
    const selection = [], options = [...array];
    shuffleArray(options);
    while (selection.length < number && options.length > 0) {
        selection.push(options.pop());
    }
    return selection;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function simpleHashSeededCoinFlip(seed) {
    const hash = Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hash % 2 === 0;
}
//# sourceMappingURL=random.js.map