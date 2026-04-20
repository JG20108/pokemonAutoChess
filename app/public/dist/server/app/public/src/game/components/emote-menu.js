"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmoteMenuComponent = EmoteMenuComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = require("phaser");
const client_1 = __importDefault(require("react-dom/client"));
const react_i18next_1 = require("react-i18next");
const precomputed_emotions_1 = require("../../../../models/precomputed/precomputed-emotions");
const Emotion_1 = require("../../../../types/enum/Emotion");
const logger_1 = require("../../../../utils/logger");
const pokemon_portrait_1 = __importDefault(require("../../pages/component/pokemon-portrait"));
const jsx_1 = require("../../pages/utils/jsx");
const stores_1 = __importDefault(require("../../stores"));
require("./emote-menu.css");
function EmoteMenuComponent(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const availableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(props.index, props.shiny);
    const emotions = Emotion_1.AvatarEmotions.filter((emotion) => availableEmotions.includes(emotion));
    return emotions.length === 0 ? ((0, jsx_runtime_1.jsx)("div", { children: t("no_emotions_available") })) : ((0, jsx_runtime_1.jsx)("ul", { children: emotions.map((emotion, i) => {
            const unlocked = stores_1.default.getState().game.emotesUnlocked.includes(emotion);
            return ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: { index: props.index, shiny: props.shiny, emotion }, title: emotion + (!unlocked ? " (locked)" : ""), className: (0, jsx_1.cc)({ locked: !unlocked }), onClick: () => unlocked && props.sendEmote(emotion) }), (0, jsx_runtime_1.jsx)("span", { className: "counter", children: i + 1 })] }, emotion));
        }) }));
}
class EmoteMenu extends phaser_1.GameObjects.DOMElement {
    constructor(scene, avatarIndex, shiny, sendEmote) {
        super(scene, -350, -150);
        const state = stores_1.default.getState();
        const player = state.game.players.find((p) => p.id === scene.uid);
        this.dom = document.createElement("div");
        this.dom.className = "my-container emote-menu";
        this.setElement(this.dom);
        const root = client_1.default.createRoot(this.dom);
        if (player) {
            root.render((0, jsx_runtime_1.jsx)(EmoteMenuComponent, { player: player, index: avatarIndex, shiny: shiny, sendEmote: sendEmote }));
        }
        else {
            logger_1.logger.error(`Cant' find player bound to EmoteMenu`);
        }
    }
}
exports.default = EmoteMenu;
//# sourceMappingURL=emote-menu.js.map