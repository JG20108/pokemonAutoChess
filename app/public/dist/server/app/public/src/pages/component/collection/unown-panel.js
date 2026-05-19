"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnownPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const config_1 = require("../../../../../config");
const precomputed_emotions_1 = require("../../../../../models/precomputed/precomputed-emotions");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Emotion_1 = require("../../../../../types/enum/Emotion");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const pokemon_animations_1 = require("../../../game/components/pokemon-animations");
const hooks_1 = require("../../../hooks");
const store_1 = require("../../utils/store");
const pokemon_collection_item_1 = __importDefault(require("./pokemon-collection-item"));
require("./unown-panel.css");
function UnownPanel(props) {
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => {
        var _a, _b;
        return (_b = (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection) !== null && _b !== void 0 ? _b : new Map();
    });
    const secretMessage = `    
    To unleash ancient powers?
    Max Groudon with a red orb
    Give Kyogre a blue orb and
    use Jade orb for Rayquaza!
    `
        .replace(/^\s+/gm, "")
        .replace(/\s+$/gm, "")
        .split("");
    const [favorites] = (0, store_1.useLocalStore)(store_1.LocalStoreKeys.FAVORITES, [], Infinity);
    const lastBoostersOpened = (0, hooks_1.useAppSelector)((state) => state.boosters.lastBoostersOpened);
    const unowns = (0, react_1.useMemo)(() => Pokemon_1.Unowns.map((pkm) => {
        var _a, _b, _c;
        const item = (_a = pokemonCollection.get(Pokemon_1.PkmIndex[pkm])) !== null && _a !== void 0 ? _a : {
            dust: 0,
            emotions: [],
            shinyEmotions: [],
            selectedEmotion: Emotion_1.Emotion.NORMAL,
            selectedShiny: false,
            id: Pokemon_1.PkmIndex[pkm],
            played: 0
        };
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const availableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(pokemonData.index, false);
        const shinyAvailableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(pokemonData.index, true);
        const isUnlocked = ((_b = item.emotions) === null || _b === void 0 ? void 0 : _b.length) > 0 || ((_c = item.shinyEmotions) === null || _c === void 0 ? void 0 : _c.length) > 0;
        const isNew = lastBoostersOpened.some((booster) => booster.some((card) => card.name === pkm && card.new));
        const isFavorite = favorites.includes(pkm);
        const isUnlockable = props.filterState.mode !== "pokedex" &&
            (availableEmotions.some((e) => !item.emotions.includes(e) &&
                item.dust >= (0, config_1.getEmotionCost)(e, false) &&
                props.filterState.mode !== "shiny") ||
                shinyAvailableEmotions.some((e) => {
                    var _a;
                    return !item.shinyEmotions.includes(e) &&
                        item.dust >= (0, config_1.getEmotionCost)(e, true) &&
                        !((_a = pokemon_animations_1.PokemonAnimations[pkm]) === null || _a === void 0 ? void 0 : _a.shinyUnavailable);
                }));
        return { pkm, item, isUnlocked, isNew, isFavorite, isUnlockable };
    }), [pokemonCollection, favorites, lastBoostersOpened, props.filterState.mode]);
    const filteredUnowns = (0, react_1.useMemo)(() => unowns
        .filter(({ item, isNew, isUnlocked, isFavorite, isUnlockable }) => {
        const boosterCost = config_1.BoosterPriceByRarity[Game_1.Rarity.SPECIAL];
        if (props.filterState.filter === "refundable" &&
            item.dust < boosterCost)
            return false;
        if (props.filterState.filter === "new" && !isNew)
            return false;
        if (props.filterState.filter === "unlocked" && !isUnlocked)
            return false;
        if (props.filterState.filter === "unlockable" && !isUnlockable)
            return false;
        if (props.filterState.filter === "locked" && isUnlocked)
            return false;
        if (props.filterState.filter === "favorite" && !isFavorite)
            return false;
        return true;
    })
        .sort((a, b) => {
        var _a, _b, _c, _d;
        if (props.filterState.sort === "index") {
            return Pokemon_1.PkmIndex[a.pkm].localeCompare(Pokemon_1.PkmIndex[b.pkm]);
        }
        else {
            return ((_b = (_a = b.item) === null || _a === void 0 ? void 0 : _a.dust) !== null && _b !== void 0 ? _b : 0) - ((_d = (_c = a.item) === null || _c === void 0 ? void 0 : _c.dust) !== null && _d !== void 0 ? _d : 0);
        }
    }), [props.filterState.sort, props.filterState.filter, props.filterState.mode]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { id: "unown-panel", children: secretMessage.map((char, i) => renderChar(char, i, unowns)) }), (0, jsx_runtime_1.jsx)("div", { className: "unown-collection-grid", children: filteredUnowns.map((unown) => ((0, jsx_runtime_1.jsx)(pokemon_collection_item_1.default, { name: unown.pkm, index: Pokemon_1.PkmIndex[unown.pkm], item: unown.item, setPokemon: props.setPokemon, filterState: props.filterState, isUnlocked: unown.isUnlocked, isNew: unown.isNew, isFavorite: unown.isFavorite, isUnlockable: unown.isUnlockable }, Pokemon_1.PkmIndex[unown.pkm]))) })] }));
}
function renderChar(c, index, unowns) {
    let unown;
    switch (c) {
        case "\n":
            return (0, jsx_runtime_1.jsx)("br", {}, "char" + index);
        case " ":
            return (0, jsx_runtime_1.jsx)("span", { className: "char space" }, "char" + index);
        case "!":
            unown = unowns.find((u) => u.pkm === Pokemon_1.Pkm.UNOWN_EXCLAMATION);
            return ((0, jsx_runtime_1.jsx)("span", { className: "char", style: {
                    backgroundImage: (unown === null || unown === void 0 ? void 0 : unown.isUnlocked)
                        ? `url(assets/unown/unown-em.png)`
                        : ""
                } }, "char" + index));
        case "?":
            unown = unowns.find((u) => u.pkm === Pokemon_1.Pkm.UNOWN_QUESTION);
            return ((0, jsx_runtime_1.jsx)("span", { className: "char", style: {
                    backgroundImage: (unown === null || unown === void 0 ? void 0 : unown.isUnlocked)
                        ? `url(assets/unown/unown-qm.png)`
                        : ""
                } }, "char" + index));
        default:
            unown = unowns.find((u) => u.pkm === "UNOWN_" + c.toUpperCase());
            return ((0, jsx_runtime_1.jsx)("span", { className: "char", style: {
                    backgroundImage: (unown === null || unown === void 0 ? void 0 : unown.isUnlocked)
                        ? `url(assets/unown/unown-${c.toLowerCase()}.png)`
                        : ""
                } }, "char" + index));
    }
}
//# sourceMappingURL=unown-panel.js.map