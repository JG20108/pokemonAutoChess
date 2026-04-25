"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonCollectionItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const config_1 = require("../../../../../config");
const precomputed_emotions_1 = require("../../../../../models/precomputed/precomputed-emotions");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Emotion_1 = require("../../../../../types/enum/Emotion");
const avatar_1 = require("../../../../../utils/avatar");
const pokemon_animations_1 = require("../../../game/components/pokemon-animations");
const hooks_1 = require("../../../hooks");
const jsx_1 = require("../../utils/jsx");
const store_1 = require("../../utils/store");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./pokemon-collection-item.css");
function PokemonCollectionItem(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const lastBoostersOpened = (0, hooks_1.useAppSelector)((state) => state.boosters.lastBoostersOpened);
    const [favorites] = (0, store_1.useLocalStore)(store_1.LocalStoreKeys.FAVORITES, [], Infinity);
    if ((0, precomputed_emotions_1.getAvailableEmotions)(props.index, false).length === 0) {
        return null;
    }
    const { dust, emotions, shinyEmotions } = (_a = props.item) !== null && _a !== void 0 ? _a : {
        dust: 0,
        emotions: [],
        shinyEmotions: []
    };
    const isUnlocked = props.filterState.mode === "pokedex"
        ? ((_c = (_b = props.item) === null || _b === void 0 ? void 0 : _b.played) !== null && _c !== void 0 ? _c : 0) > 0
        : props.filterState.mode === "shiny"
            ? (shinyEmotions === null || shinyEmotions === void 0 ? void 0 : shinyEmotions.length) > 0
            : (emotions === null || emotions === void 0 ? void 0 : emotions.length) > 0 || (shinyEmotions === null || shinyEmotions === void 0 ? void 0 : shinyEmotions.length) > 0;
    const allForms = (0, config_1.getAllAltForms)(props.name);
    const isNew = lastBoostersOpened.some((booster) => booster.some((card) => allForms.includes(card.name) && card.new));
    const availableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(props.index, false);
    const shinyAvailableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(props.index, true);
    const isFavorite = favorites.includes(props.name);
    const rarity = (0, precomputed_pokemon_data_1.getPokemonData)(props.name).rarity;
    const boosterCost = config_1.BoosterPriceByRarity[rarity];
    if (props.filterState.filter === "refundable" && dust < boosterCost)
        return null;
    if (props.filterState.filter === "new" && !isNew)
        return null;
    const canUnlock = props.filterState.mode !== "pokedex" &&
        (availableEmotions.some((e) => emotions.includes(e) === false &&
            dust >= (0, config_1.getEmotionCost)(e, false) &&
            props.filterState.mode !== "shiny") ||
            shinyAvailableEmotions.some((e) => {
                var _a;
                return shinyEmotions.includes(e) === false &&
                    dust >= (0, config_1.getEmotionCost)(e, true) &&
                    !((_a = pokemon_animations_1.PokemonAnimations[props.name]) === null || _a === void 0 ? void 0 : _a.shinyUnavailable);
            }));
    if (props.filterState.filter === "unlocked" && !isUnlocked)
        return null;
    if (props.filterState.filter === "unlockable" && !canUnlock)
        return null;
    if (props.filterState.filter === "locked" && isUnlocked)
        return null;
    if (props.filterState.filter === "favorite" && !isFavorite)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box", "clickable", "pokemon-collection-item", {
            unlocked: isUnlocked,
            unlockable: canUnlock,
            new: isNew,
            favorite: isFavorite,
            shimmer: isNew
        }), onClick: () => {
            props.setPokemon(props.name);
        }, children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                    index: props.index,
                    shiny: (_e = (_d = props.item) === null || _d === void 0 ? void 0 : _d.selectedShiny) !== null && _e !== void 0 ? _e : false,
                    emotion: (_g = (_f = props.item) === null || _f === void 0 ? void 0 : _f.selectedEmotion) !== null && _g !== void 0 ? _g : Emotion_1.Emotion.NORMAL
                } }), props.filterState.mode === "pokedex" ? ((0, jsx_runtime_1.jsx)("p", { children: (_j = (_h = props.item) === null || _h === void 0 ? void 0 : _h.played) !== null && _j !== void 0 ? _j : 0 })) : ((0, jsx_runtime_1.jsxs)("p", { className: "dust", children: [(0, jsx_runtime_1.jsx)("span", { children: props.item ? props.item.dust : 0 }), (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(props.index) })] }))] }));
}
//# sourceMappingURL=pokemon-collection-item.js.map