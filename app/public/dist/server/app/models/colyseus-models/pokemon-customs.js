"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCustoms = void 0;
exports.getPkmWithCustom = getPkmWithCustom;
const schema_1 = require("@colyseus/schema");
const types_1 = require("../../types");
const Pokemon_1 = require("../../types/enum/Pokemon");
class PokemonCustoms extends schema_1.MapSchema {
    constructor(pokemonCollection) {
        super();
        pokemonCollection.forEach((item, index) => {
            var _a;
            const shiny = item.selectedShiny ? 1 : 0;
            let emotionIndex = types_1.CollectionEmotions.indexOf((_a = item.selectedEmotion) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL);
            if (emotionIndex === -1)
                emotionIndex = 0;
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
        emotion: (_a = types_1.CollectionEmotions[emotionIndex]) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL
    };
}
//# sourceMappingURL=pokemon-customs.js.map