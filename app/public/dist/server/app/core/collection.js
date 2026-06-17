"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionUtils = void 0;
const types_1 = require("../types");
const Pokemon_1 = require("../types/enum/Pokemon");
class CollectionUtils {
    static hasNodeBuffer() {
        return typeof Buffer !== "undefined";
    }
    static allocMask(size) {
        return this.hasNodeBuffer() ? Buffer.alloc(size) : new Uint8Array(size);
    }
    static hasUnlockedCustom(collection, card) {
        var _a;
        const index = Pokemon_1.PkmIndex[card.name];
        if (collection.has(index) === false) {
            return false;
        }
        const collectionItem = collection.get(index);
        return CollectionUtils.hasUnlocked(collectionItem.unlocked, (_a = card.emotion) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL, card.shiny);
    }
    static toMongoCollectionItem(item) {
        return Object.assign(Object.assign({}, item), { unlocked: CollectionUtils.decodeBase64(item.unlockedb64) });
    }
    static toCollectionItemClient(item) {
        return {
            id: item.id,
            dust: item.dust,
            played: item.played,
            selectedShiny: item.selectedShiny,
            selectedEmotion: item.selectedEmotion,
            unlockedb64: item.unlocked
                ? CollectionUtils.encodeBase64(item.unlocked)
                : ""
        };
    }
    static unpackCollectionItem(item) {
        const { emotions, shinyEmotions } = CollectionUtils.getEmotionsUnlocked(item);
        const { unlockedb64 } = item, rest = __rest(item, ["unlockedb64"]);
        return Object.assign(Object.assign({}, rest), { emotions,
            shinyEmotions });
    }
    static getEmotionMask(emotions = [], shinyEmotions = []) {
        const buffer = this.allocMask(5);
        emotions.forEach((emotion) => {
            const index = this.EMOTION_VALUES.indexOf(emotion);
            if (index !== -1) {
                this.setBit(buffer, index, true);
            }
        });
        shinyEmotions.forEach((emotion) => {
            const index = this.EMOTION_VALUES.indexOf(emotion);
            if (index !== -1) {
                this.setBit(buffer, index + 20, true);
            }
        });
        return buffer;
    }
    static encodeBase64(buffer) {
        if (this.hasNodeBuffer()) {
            return Buffer.from(buffer).toString("base64");
        }
        let binary = "";
        for (let i = 0; i < buffer.length; i++) {
            binary += String.fromCharCode(buffer[i]);
        }
        return btoa(binary);
    }
    static decodeBase64(base64) {
        if (this.hasNodeBuffer()) {
            return Buffer.from(base64, "base64");
        }
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
    }
    static getEmotionsUnlocked(item) {
        const emotions = [];
        const shinyEmotions = [];
        if (!item)
            return { emotions, shinyEmotions };
        const mask = "unlockedb64" in item
            ? CollectionUtils.decodeBase64(item.unlockedb64)
            : item.unlocked;
        for (let i = 0; i < 20; i++) {
            if (this.getBit(mask, i)) {
                emotions.push(this.EMOTION_VALUES[i]);
            }
        }
        for (let i = 0; i < 20; i++) {
            if (this.getBit(mask, i + 20)) {
                shinyEmotions.push(this.EMOTION_VALUES[i]);
            }
        }
        return {
            emotions,
            shinyEmotions
        };
    }
    static hasUnlocked(mask, emotion, shiny = false) {
        const index = this.EMOTION_VALUES.indexOf(emotion);
        if (index === -1)
            return false;
        const bitIndex = shiny ? index + 20 : index;
        return this.getBit(mask, bitIndex);
    }
    static unlockEmotion(mask, emotion, shiny = false) {
        const index = this.EMOTION_VALUES.indexOf(emotion);
        if (index === -1)
            return;
        const bitIndex = shiny ? index + 20 : index;
        this.setBit(mask, bitIndex, true);
    }
    static setBit(mask, bitIndex, value) {
        const byteIndex = Math.floor(bitIndex / 8);
        const bitPosition = bitIndex % 8;
        if (byteIndex >= mask.length)
            return;
        if (value) {
            mask[byteIndex] |= 1 << bitPosition;
        }
        else {
            mask[byteIndex] &= ~(1 << bitPosition);
        }
    }
    static getBit(mask, bitIndex) {
        const byteIndex = Math.floor(bitIndex / 8);
        const bitPosition = bitIndex % 8;
        if (byteIndex >= mask.length)
            return false;
        return (mask[byteIndex] & (1 << bitPosition)) !== 0;
    }
}
exports.CollectionUtils = CollectionUtils;
CollectionUtils.EMOTION_VALUES = types_1.CollectionEmotions;
//# sourceMappingURL=collection.js.map