"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCustoms = exports.EmotionByIndex = exports.EmotionIndex = void 0;
exports.getPkmWithCustom = getPkmWithCustom;
const schema_1 = require("@colyseus/schema");
const types_1 = require("../../types");
const Pokemon_1 = require("../../types/enum/Pokemon");
exports.EmotionIndex = {
    [types_1.Emotion.NORMAL]: 0,
    [types_1.Emotion.HAPPY]: 1,
    [types_1.Emotion.PAIN]: 2,
    [types_1.Emotion.ANGRY]: 3,
    [types_1.Emotion.WORRIED]: 4,
    [types_1.Emotion.SAD]: 5,
    [types_1.Emotion.CRYING]: 6,
    [types_1.Emotion.SHOUTING]: 7,
    [types_1.Emotion.TEARY_EYED]: 8,
    [types_1.Emotion.DETERMINED]: 9,
    [types_1.Emotion.JOYOUS]: 10,
    [types_1.Emotion.INSPIRED]: 11,
    [types_1.Emotion.SURPRISED]: 12,
    [types_1.Emotion.DIZZY]: 13,
    [types_1.Emotion.SPECIAL0]: 14,
    [types_1.Emotion.SPECIAL1]: 15,
    [types_1.Emotion.SIGH]: 16,
    [types_1.Emotion.STUNNED]: 17,
    [types_1.Emotion.SPECIAL2]: 18,
    [types_1.Emotion.SPECIAL3]: 19
};
exports.EmotionByIndex = Object.fromEntries(Object.entries(exports.EmotionIndex).map(([emotion, index]) => [
    index,
    emotion
]));
class PokemonCustoms extends schema_1.MapSchema {
    constructor(pokemonCollection) {
        super();
        pokemonCollection.forEach((item, index) => {
            var _a;
            const shiny = item.selectedShiny ? 1 : 0;
            const emotionIndex = (_a = exports.EmotionIndex[item.selectedEmotion]) !== null && _a !== void 0 ? _a : 0;
            this.set(index, (shiny ? 0b10000000 : 0) | emotionIndex);
        });
    }
}
exports.PokemonCustoms = PokemonCustoms;
function getPkmWithCustom(index, customs) {
    var _a;
    const custom = customs && index in customs
        ? customs[index.toString()]
        : customs && "get" in customs
            ? customs.get(index.toString())
            : 0;
    const shiny = custom >= 0b10000000;
    const emotionIndex = custom & 0b01111111;
    return {
        name: Pokemon_1.PkmIndex[index],
        shiny,
        emotion: (_a = exports.EmotionByIndex[emotionIndex]) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL
    };
}
//# sourceMappingURL=pokemon-customs.js.map