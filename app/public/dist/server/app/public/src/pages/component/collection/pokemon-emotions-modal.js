"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonEmotionsModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const precomputed_emotions_1 = require("../../../../../models/precomputed/precomputed-emotions");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const types_1 = require("../../../../../types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const pokemon_animations_1 = require("../../../game/components/pokemon-animations");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const jsx_1 = require("../../utils/jsx");
const store_1 = require("../../utils/store");
const modal_1 = require("../modal/modal");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const pokemon_emotion_1 = __importDefault(require("./pokemon-emotion"));
require("./pokemon-emotions-modal.css");
function PokemonEmotionsModal(props) {
    var _a, _b, _c, _d, _e;
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => {
        var _a, _b;
        return (_b = (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection) !== null && _b !== void 0 ? _b : new Map();
    });
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [requestError, setRequestError] = (0, react_1.useState)(null);
    const onError = (0, react_1.useCallback)((error) => {
        const message = error instanceof Error ? error.message : t("errors.UNKNOWN_ERROR");
        setRequestError(message);
    }, [t]);
    const [selectedVariant, setSelectedVariant] = (0, react_1.useState)(props.pokemon);
    (0, react_1.useEffect)(() => {
        setSelectedVariant(props.pokemon);
    }, [props.pokemon]);
    const shardIndex = Pokemon_1.PkmIndex[props.pokemon];
    const index = Pokemon_1.PkmIndex[selectedVariant];
    const rarity = (0, precomputed_pokemon_data_1.getPokemonData)(selectedVariant).rarity;
    const boosterCost = config_1.BoosterPriceByRarity[rarity];
    const availableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(index, false);
    const shinyAvailableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(index, true);
    const shinyAvailable = ((_a = pokemon_animations_1.PokemonAnimations[selectedVariant]) === null || _a === void 0 ? void 0 : _a.shinyUnavailable) !== true;
    const item = (0, react_1.useMemo)(() => {
        var _a;
        return (_a = pokemonCollection.get(index)) !== null && _a !== void 0 ? _a : {
            dust: 0,
            emotions: [],
            shinyEmotions: [],
            selectedEmotion: types_1.Emotion.NORMAL,
            selectedShiny: false,
            id: "0000",
            played: 0
        };
    }, [index, pokemonCollection]);
    const shards = (0, react_1.useMemo)(() => { var _a, _b; return (_b = (_a = pokemonCollection.get(shardIndex)) === null || _a === void 0 ? void 0 : _a.dust) !== null && _b !== void 0 ? _b : 0; }, [shardIndex, pokemonCollection]);
    const handlePokemonEmotionClick = (0, react_1.useCallback)((unlocked, update) => {
        setRequestError(null);
        if (unlocked) {
            (0, network_1.changeSelectedEmotion)(update).catch(onError);
        }
        else {
            (0, network_1.buyEmotion)(update).catch(onError);
        }
    }, [t]);
    const resetEmotion = (0, react_1.useCallback)(() => {
        setRequestError(null);
        (0, network_1.changeSelectedEmotion)({ index, emotion: null, shiny: false }).catch(onError);
    }, [index, t]);
    const isCurrentAvatar = user &&
        (0, avatar_1.getAvatarSrc)(user === null || user === void 0 ? void 0 : user.avatar) ===
            (0, avatar_1.getPortraitSrc)(index, item.selectedShiny, (_b = item.selectedEmotion) !== null && _b !== void 0 ? _b : types_1.Emotion.NORMAL);
    const [favorites, updateFavorites] = (0, store_1.useLocalStore)(store_1.LocalStoreKeys.FAVORITES, [], Infinity);
    const isFavorite = (0, react_1.useMemo)(() => { var _a; return (_a = favorites.includes(selectedVariant)) !== null && _a !== void 0 ? _a : false; }, [favorites, selectedVariant]);
    const toggleFavorite = (0, react_1.useCallback)(() => {
        let newFavorites;
        if (isFavorite) {
            newFavorites = favorites.filter((p) => p !== selectedVariant);
        }
        else {
            newFavorites = [...favorites, selectedVariant];
        }
        updateFavorites(newFavorites);
    }, [favorites, isFavorite, selectedVariant, updateFavorites]);
    const isAltForm = config_1.PkmAltForms.includes(props.pokemon) || props.pokemon in config_1.PkmAltFormsByPkm;
    const altForms = isAltForm
        ? [props.pokemon, ...(config_1.PkmAltFormsByPkm[props.pokemon] || [])]
        : [];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(modal_1.Modal, { show: true, onClose: props.onClose, className: "pokemon-emotions-modal anchor-top", header: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                                index,
                                shiny: item.selectedShiny,
                                emotion: (_c = item.selectedEmotion) !== null && _c !== void 0 ? _c : types_1.Emotion.NORMAL
                            }, className: (0, jsx_1.cc)({ unlocked: item != null }) }), (0, jsx_runtime_1.jsxs)("h2", { children: [t(`pkm.${selectedVariant}`), " #", Pokemon_1.PkmIndex[selectedVariant], " -", " ", t("played_times", { count: (_d = item.played) !== null && _d !== void 0 ? _d : 0 })] }), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), isAltForm && ((0, jsx_runtime_1.jsxs)("div", { className: "alt-forms-select", children: [(0, jsx_runtime_1.jsx)("label", { children: t("alt_forms") }), (0, jsx_runtime_1.jsx)("select", { onChange: (e) => setSelectedVariant(e.target.value), value: selectedVariant, children: altForms.map((variant) => ((0, jsx_runtime_1.jsxs)("option", { value: variant, children: [t(`pkm.${variant}`), " (", variant, ")"] }, variant))) })] })), (0, jsx_runtime_1.jsxs)("p", { className: "dust", children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(index), className: "dust", alt: "dust" }), shards, " ", t("shards"), " "] })] }), body: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("p", { children: t("collection.normal_emotions") }), (0, jsx_runtime_1.jsx)("div", { children: availableEmotions.map((e) => {
                                        return ((0, jsx_runtime_1.jsx)(pokemon_emotion_1.default, { index: index, shiny: false, unlocked: item && item.emotions.includes(e), selected: item.selectedEmotion === e && !item.selectedShiny, path: index.replace("-", "/"), emotion: e, dust: shards, onClick: () => handlePokemonEmotionClick(item && item.emotions.includes(e), { index: index, emotion: e, shiny: false }) }, e));
                                    }) })] }), shinyAvailable && ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("p", { children: t("collection.shiny_emotions") }), (0, jsx_runtime_1.jsx)("div", { children: shinyAvailableEmotions.map((e) => {
                                        return ((0, jsx_runtime_1.jsx)(pokemon_emotion_1.default, { index: index, shiny: true, unlocked: item && item.shinyEmotions.includes(e), selected: item.selectedEmotion === e && item.selectedShiny, path: `${index.replace("-", "/")}/0000/0001`, emotion: e, dust: shards, onClick: () => handlePokemonEmotionClick(item && item.shinyEmotions.includes(e), { index: index, emotion: e, shiny: true }) }, e));
                                    }) })] }))] }), footer: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue", disabled: (item.emotions.length === 0 &&
                                item.shinyEmotions.length === 0) ||
                                isCurrentAvatar, onClick: () => {
                                var _a;
                                return dispatch((0, NetworkStore_1.changeAvatar)({
                                    index,
                                    emotion: (_a = item.selectedEmotion) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL,
                                    shiny: item.selectedShiny
                                }));
                            }, children: [isCurrentAvatar ? t("collection.chosen_as_avatar") : t("collection.choose_as_avatar"), "\u00A0", (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                                        index,
                                        shiny: item.selectedShiny,
                                        emotion: (_e = item.selectedEmotion) !== null && _e !== void 0 ? _e : types_1.Emotion.NORMAL
                                    }, alt: "avatar" })] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly orange", disabled: shards < boosterCost, onClick: () => {
                                setRequestError(null);
                                (0, network_1.buyBooster)({ index }).catch(onError);
                            }, children: [t("collection.buy_booster", { cost: boosterCost }), (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(index), className: "dust", alt: "dust" })] }), item.selectedEmotion != null &&
                            item.selectedEmotion != types_1.Emotion.NORMAL && ((0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue", onClick: resetEmotion, children: [t("collection.reset_emotion"), "\u00A0", (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                                        index,
                                        shiny: false,
                                        emotion: types_1.Emotion.NORMAL
                                    }, alt: "avatar" })] })), (0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", isFavorite ? "red" : "green"), onClick: toggleFavorite, children: ["\u2764\uFE0F\u00A0", isFavorite ? t("collection.remove_from_favorites") : t("collection.add_to_favorites")] })] }) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { show: requestError != null, onClose: () => setRequestError(null), className: "is-dark basic-modal-body", header: t("errors.title"), body: (0, jsx_runtime_1.jsx)("p", { style: { padding: "1em" }, children: requestError }) })] }));
}
//# sourceMappingURL=pokemon-emotions-modal.js.map