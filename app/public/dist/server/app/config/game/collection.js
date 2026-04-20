"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoosterPriceByRarity = exports.EmotionCost = exports.DUST_PER_SHINY = exports.DUST_PER_BOOSTER = void 0;
exports.getEmotionCost = getEmotionCost;
const Emotion_1 = require("../../types/enum/Emotion");
const Game_1 = require("../../types/enum/Game");
exports.DUST_PER_BOOSTER = 50;
exports.DUST_PER_SHINY = 250;
exports.EmotionCost = {
    [Emotion_1.Emotion.NORMAL]: 50,
    [Emotion_1.Emotion.HAPPY]: 100,
    [Emotion_1.Emotion.PAIN]: 100,
    [Emotion_1.Emotion.ANGRY]: 100,
    [Emotion_1.Emotion.WORRIED]: 100,
    [Emotion_1.Emotion.SAD]: 100,
    [Emotion_1.Emotion.CRYING]: 100,
    [Emotion_1.Emotion.SHOUTING]: 150,
    [Emotion_1.Emotion.TEARY_EYED]: 150,
    [Emotion_1.Emotion.DETERMINED]: 150,
    [Emotion_1.Emotion.JOYOUS]: 150,
    [Emotion_1.Emotion.INSPIRED]: 150,
    [Emotion_1.Emotion.SURPRISED]: 150,
    [Emotion_1.Emotion.DIZZY]: 150,
    [Emotion_1.Emotion.SPECIAL0]: 200,
    [Emotion_1.Emotion.SPECIAL1]: 200,
    [Emotion_1.Emotion.SIGH]: 200,
    [Emotion_1.Emotion.STUNNED]: 200,
    [Emotion_1.Emotion.SPECIAL2]: 200,
    [Emotion_1.Emotion.SPECIAL3]: 200
};
function getEmotionCost(emotion, isShiny) {
    return isShiny ? exports.EmotionCost[emotion] * 3 : exports.EmotionCost[emotion];
}
exports.BoosterPriceByRarity = {
    [Game_1.Rarity.COMMON]: 600,
    [Game_1.Rarity.UNCOMMON]: 1000,
    [Game_1.Rarity.RARE]: 1000,
    [Game_1.Rarity.EPIC]: 900,
    [Game_1.Rarity.ULTRA]: 300,
    [Game_1.Rarity.UNIQUE]: 500,
    [Game_1.Rarity.LEGENDARY]: 250,
    [Game_1.Rarity.HATCH]: 300,
    [Game_1.Rarity.SPECIAL]: 500
};
//# sourceMappingURL=collection.js.map