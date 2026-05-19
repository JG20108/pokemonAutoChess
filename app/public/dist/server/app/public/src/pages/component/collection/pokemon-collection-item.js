"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonCollectionItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const precomputed_emotions_1 = require("../../../../../models/precomputed/precomputed-emotions");
const Emotion_1 = require("../../../../../types/enum/Emotion");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./pokemon-collection-item.css");
function PokemonCollectionItem(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if ((0, precomputed_emotions_1.getAvailableEmotions)(props.index, false).length === 0) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box", "clickable", "pokemon-collection-item", {
            unlocked: props.isUnlocked,
            unlockable: props.isUnlockable,
            new: props.isNew,
            favorite: props.isFavorite,
            shimmer: props.isNew
        }), onClick: () => {
            props.setPokemon(props.name);
        }, children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                    index: props.index,
                    shiny: (_b = (_a = props.item) === null || _a === void 0 ? void 0 : _a.selectedShiny) !== null && _b !== void 0 ? _b : false,
                    emotion: (_d = (_c = props.item) === null || _c === void 0 ? void 0 : _c.selectedEmotion) !== null && _d !== void 0 ? _d : Emotion_1.Emotion.NORMAL
                } }), props.filterState.mode === "pokedex" ? ((0, jsx_runtime_1.jsx)("p", { children: (_f = (_e = props.item) === null || _e === void 0 ? void 0 : _e.played) !== null && _f !== void 0 ? _f : 0 })) : ((0, jsx_runtime_1.jsxs)("p", { className: "dust", children: [(0, jsx_runtime_1.jsx)("span", { children: (_h = (_g = props.item) === null || _g === void 0 ? void 0 : _g.dust) !== null && _h !== void 0 ? _h : 0 }), (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.index) })] }))] }));
}
//# sourceMappingURL=pokemon-collection-item.js.map