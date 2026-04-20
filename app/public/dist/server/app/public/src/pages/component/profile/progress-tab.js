"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressTab = ProgressTab;
exports.ProgressBox = ProgressBox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const gadgets_1 = require("../../../../../config/game/gadgets");
const precomputed_pokemons_1 = require("../../../../../models/precomputed/precomputed-pokemons");
const types_1 = require("../../../../../types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const array_1 = require("../../../../../utils/array");
const hooks_1 = require("../../../hooks");
require("./progress-tab.css");
function ProgressTab() {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const listPokemons = precomputed_pokemons_1.precomputedPokemonsImplemented.filter((pokemon) => config_1.PkmAltForms.includes(pokemon.name) === false &&
        Pokemon_1.NonPkm.includes(pokemon.name) === false);
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => {
        var _a, _b, _c;
        return [
            ...((_c = (_b = (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.pokemonCollection) === null || _b === void 0 ? void 0 : _b.values()) !== null && _c !== void 0 ? _c : [])
        ];
    });
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const nbAvatarsUnlocked = listPokemons.filter((pkm) => {
        const item = pokemonCollection.find((p) => p.id === pkm.index);
        return item && (item.emotions.length > 0 || item.shinyEmotions.length > 0);
    }).length;
    const nbPokemonsPlayed = listPokemons.filter((pkm) => {
        const item = pokemonCollection.find((p) => p.id === pkm.index);
        return item && item.played > 0;
    }).length;
    const nbPokemonsTotal = listPokemons.length;
    const nbTitlesUnlocked = user
        ? Object.keys(types_1.Title).filter((title) => (0, array_1.isIn)(user.titles, title)).length
        : 0;
    const nbTitlesTotal = Object.keys(types_1.Title).length;
    const level = (_a = user === null || user === void 0 ? void 0 : user.level) !== null && _a !== void 0 ? _a : 0;
    const gadgets = Object.values(gadgets_1.GADGETS).filter((g) => !g.disabled);
    const nbGadgetsUnlocked = gadgets.filter((g) => g.levelRequired <= level).length;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "progress-grid", children: [(0, jsx_runtime_1.jsx)(ProgressBox, { label: t("profile.progress.avatars_unlocked", {
                        count: nbAvatarsUnlocked,
                        total: nbPokemonsTotal
                    }), count: nbAvatarsUnlocked, total: nbPokemonsTotal }), (0, jsx_runtime_1.jsx)(ProgressBox, { label: t("profile.progress.pokemons_played", {
                        count: nbPokemonsPlayed,
                        total: nbPokemonsTotal
                    }), count: nbPokemonsPlayed, total: nbPokemonsTotal }), (0, jsx_runtime_1.jsx)(ProgressBox, { label: t("profile.progress.titles_unlocked", {
                        count: nbTitlesUnlocked,
                        total: nbTitlesTotal
                    }), count: nbTitlesUnlocked, total: nbTitlesTotal }), (0, jsx_runtime_1.jsx)(ProgressBox, { label: t("profile.progress.gadgets_unlocked", {
                        count: nbGadgetsUnlocked,
                        total: gadgets.length
                    }), count: nbGadgetsUnlocked, total: gadgets.length })] }) }));
}
function ProgressBox(props) {
    const { label, count, total } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: "progress-box", style: {
            "--pc": `${((100 * count) / total).toFixed(3)}%`
        }, children: label }));
}
//# sourceMappingURL=progress-tab.js.map