"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarTab = AvatarTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
function AvatarTab() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const pokemonCollectionMap = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection; });
    const pokemonCollection = pokemonCollectionMap
        ? [...pokemonCollectionMap.values()]
        : [];
    const [selectedPkm, setSelectedPkm] = (0, react_1.useState)("");
    const unlocked = pokemonCollection.filter((item) => item.emotions.length > 0 || item.shinyEmotions.length > 0);
    const nbUnlocked = unlocked.length;
    const nbTotal = Object.keys(Pokemon_1.PkmByIndex).length;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h3", { style: { display: "flex" }, children: [t("change_avatar"), " ", (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), " ", t("avatars_unlocked", { nbUnlocked, nbTotal })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.5em" }, children: [(0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPkm, onChange: setSelectedPkm }), selectedPkm != "" && (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => setSelectedPkm(""), children: t("all") })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", margin: "0.5em 0", gap: selectedPkm ? "0.5em" : 0 }, children: [pokemonCollection.length === 0 && (0, jsx_runtime_1.jsx)("p", { children: t("play_more_games_hint") }), selectedPkm
                        ? (0, jsx_runtime_1.jsx)(SelectedPokemonAvatars, { pokemon: selectedPkm })
                        : unlocked.map((item) => {
                            return ((0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { className: "clickable", onClick: () => { setSelectedPkm(Pokemon_1.PkmByIndex[item.id]); }, portrait: { index: item.id } }, `${item.id}`));
                        })] })] }));
}
function SelectedPokemonAvatars(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const pokemonCollectionMap = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection; });
    const currentAvatar = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.avatar; });
    const index = Pokemon_1.PkmIndex[props.pokemon];
    const pokemonCollectionItem = pokemonCollectionMap === null || pokemonCollectionMap === void 0 ? void 0 : pokemonCollectionMap.get(index);
    if (!pokemonCollectionItem || (pokemonCollectionItem.emotions.length === 0 && pokemonCollectionItem.shinyEmotions.length === 0))
        return (0, jsx_runtime_1.jsx)("p", { children: t("play_more_games_hint") });
    return (["normal", "shiny"].flatMap((type) => pokemonCollectionItem[type === "shiny" ? "shinyEmotions" : "emotions"]
        .map((emotion) => {
        return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box clickable pokemon-emotion unlocked", { selected: (0, avatar_1.getAvatarString)(index, type === "shiny", emotion) === currentAvatar }), onClick: () => {
                dispatch((0, NetworkStore_1.changeAvatar)({
                    index,
                    emotion,
                    shiny: type === "shiny"
                }));
            }, children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                        index,
                        shiny: type === "shiny",
                        emotion
                    } }, `${type}-${index}${emotion}`), (0, jsx_runtime_1.jsx)("p", { children: t(`emotion.${emotion}`) })] }));
    })));
}
//# sourceMappingURL=avatar-tab.js.map