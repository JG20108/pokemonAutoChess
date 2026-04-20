"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomName = generateRandomName;
const random_1 = require("./random");
const Adjectives = [
    "Happy",
    "Brave",
    "Curious",
    "Sleepy",
    "Swift",
    "Bold",
    "Calm",
    "Clever",
    "Daring",
    "Eager",
    "Fierce",
    "Gentle",
    "Jolly",
    "Kind",
    "Lively",
    "Mighty",
    "Noble",
    "Proud",
    "Quick",
    "Rash",
    "Sassy",
    "Shy",
    "Silent",
    "Sneaky",
    "Spooky",
    "Sturdy",
    "Tiny",
    "Tough",
    "Tricky",
    "Trusty",
    "Wild",
    "Witty",
    "Zany",
    "Chill",
    "Dizzy",
    "Fluffy",
    "Frosty",
    "Funky",
    "Grumpy",
    "Hasty",
    "Lucky",
    "Moody",
    "Naive",
    "Peppy",
    "Quiet",
    "Rowdy",
    "Shiny",
    "Silly",
    "Sunny",
    "Wacky"
];
function formatPkmName(pkm) {
    return pkm.charAt(0).toUpperCase() + pkm.slice(1).toLowerCase();
}
function randomDigits() {
    return String(Math.floor(1000000 + Math.random() * 9000000));
}
function generateRandomName(starter) {
    const adjective = (0, random_1.pickRandomIn)(Adjectives);
    const pokemon = formatPkmName(starter);
    const digits = randomDigits();
    return `${adjective}-${pokemon}-${digits}`;
}
//# sourceMappingURL=name-generation.js.map