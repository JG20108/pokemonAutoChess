"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortraitSrc = getPortraitSrc;
exports.getPkmFromPortraitSrc = getPkmFromPortraitSrc;
exports.getAvatarSrc = getAvatarSrc;
exports.getAvatarString = getAvatarString;
exports.getPokemonCustomFromAvatar = getPokemonCustomFromAvatar;
const types_1 = require("../types");
const Pokemon_1 = require("../types/enum/Pokemon");
const PORTRAITS_FALLBACKS = {
    "0669-0001": "0669",
    "0669-0002": "0669",
    "0669-0003": "0669",
    "0669-0004": "0669",
    "0670-0001": "0670",
    "0670-0002": "0670",
    "0670-0003": "0670",
    "0670-0004": "0670"
};
function getPortraitSrc(index, shiny, emotion) {
    if (index in PORTRAITS_FALLBACKS)
        index = PORTRAITS_FALLBACKS[index];
    return getAvatarSrc(getAvatarString(index, shiny, emotion));
}
function getPkmFromPortraitSrc(src) {
    const regex = /\/assets\/portraits\/([\w\/]+)\.png$/;
    const match = src.match(regex);
    if (!match)
        return null;
    return getPokemonCustomFromAvatar(match[1]);
}
function getAvatarSrc(avatar) {
    return `/assets/portraits/${avatar.replace(/(\d+)\-/g, "$1/")}.png`;
}
function getAvatarString(index, shiny, emotion) {
    const defaultIndex = index !== null && index !== void 0 ? index : Pokemon_1.PkmIndex[Pokemon_1.Pkm.MAGIKARP];
    const shinyPad = shiny
        ? defaultIndex.length === 4
            ? "/0000/0001"
            : "/0001"
        : "";
    return `${defaultIndex.replace("-", "/")}${shinyPad}/${emotion || types_1.Emotion.NORMAL}`;
}
function getPokemonCustomFromAvatar(avatar) {
    let emotion = types_1.Emotion.NORMAL;
    let shiny = false;
    let index = "0019";
    let noEmotion = avatar;
    Object.values(types_1.Emotion).forEach((e_) => {
        const e = e_;
        if (avatar.includes(e)) {
            noEmotion = avatar.replace(e, "");
            emotion = e;
        }
    });
    if (noEmotion.endsWith("/")) {
        noEmotion = noEmotion.slice(0, noEmotion.length - 1);
    }
    if (noEmotion.endsWith("/")) {
        noEmotion = noEmotion.slice(0, noEmotion.length - 1);
    }
    const split = noEmotion.split("/");
    if (noEmotion.includes("/0000/0001")) {
        index = split[0];
        shiny = true;
    }
    else if (split.length === 1) {
        index = split[0];
        shiny = false;
    }
    else {
        if (split.length === 2) {
            index = noEmotion.replace("/", "-");
            shiny = false;
        }
        if (split.length === 3) {
            index = `${split[0]}-${split[1]}`;
            shiny = split[2] === "0001";
        }
        if (split.length === 4) {
            index = `${split[0]}-${split[1]}-0000-${split[3]}`;
            shiny = split[2] === "0001";
        }
    }
    return {
        emotion: emotion,
        shiny: shiny,
        name: Pokemon_1.PkmByIndex[index]
    };
}
//# sourceMappingURL=avatar.js.map