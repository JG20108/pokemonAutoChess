"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmoteBubble = void 0;
const phaser_1 = require("phaser");
const avatar_1 = require("../../../../utils/avatar");
class EmoteBubble extends phaser_1.GameObjects.DOMElement {
    constructor(scene, emoteAvatar, isOpponent) {
        super(scene, 0, 0);
        this.dom = document.createElement("div");
        this.dom.className =
            "game-emote-bubble " + (isOpponent ? "opponent" : "current");
        const emoteImg = document.createElement("img");
        emoteImg.src = (0, avatar_1.getAvatarSrc)(emoteAvatar);
        this.dom.appendChild(emoteImg);
        this.setElement(this.dom);
    }
}
exports.EmoteBubble = EmoteBubble;
//# sourceMappingURL=emote-bubble.js.map