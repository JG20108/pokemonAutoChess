"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiTypes;
exports.WikiType = WikiType;
exports.WikiAllTypes = WikiAllTypes;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const config_1 = require("../../../../../config");
const effects_1 = require("../../../../../models/effects");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const preferences_1 = require("../../../preferences");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_filters_1 = require("../pokemon-filters/pokemon-filters");
const effect_description_1 = require("../synergy/effect-description");
const synergy_overlaps_1 = require("../synergy-overlaps/synergy-overlaps");
function WikiTypes() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "wiki-types", children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [Object.keys(Synergy_1.Synergy).map((type) => {
                        return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, "title-" + type));
                    }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("all") }, "title-all")] }), Object.keys(Synergy_1.Synergy).map((r) => {
                return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(WikiType, { type: r }) }, r));
            }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(WikiAllTypes, {}) }, "all")] }));
}
function WikiType(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [preferences] = (0, preferences_1.usePreferences)();
    const [overlap, setOverlap] = (0, react_1.useState)(null);
    const pokemons = (0, pokemon_filters_1.filterPokemonsAccordingToPreferences)(precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[props.type], preferences)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .sort((a, b) => a.stars - b.stars);
    const filteredPokemons = pokemons.filter((p) => overlap ? p.types.includes(overlap) : true);
    const pokemonsPerRarity = (0, array_1.groupBy)(filteredPokemons, (p) => p.rarity);
    for (const rarity in pokemonsPerRarity) {
        const families = (0, array_1.groupBy)(pokemonsPerRarity[rarity], (p) => Pokemon_1.PkmFamily[p.name]);
        pokemonsPerRarity[rarity] = Object.values(families)
            .sort((fa, fb) => {
            const a = fa[0], b = fb[0];
            if (a.regional !== b.regional)
                return +a.regional - +b.regional;
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            return a.index.localeCompare(b.index);
        })
            .flat()
            .sort((a, b) => {
            if (Pokemon_1.PkmFamily[a.name] === Pokemon_1.PkmFamily[b.name])
                return a.stars - b.stars;
            return 0;
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { style: { padding: "0 1em" }, children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type }), " ", t(`synergy.${props.type}`)] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`synergy_description.${props.type}`, { additionalInfo: "" })) }), effects_1.SynergyEffects[props.type].map((effect, i) => {
                return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, jsx_runtime_1.jsxs)("span", { children: ["(", config_1.SynergyTriggers[props.type][i], ") ", t(`effect.${effect}`), ":\u00A0"] }), (0, jsx_runtime_1.jsx)(effect_description_1.EffectDescriptionComponent, { effect: effect })] }, t(`effect.${effect}`)));
            }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { style: { float: "right", justifyItems: "end" }, children: [(0, jsx_runtime_1.jsx)(pokemon_filters_1.PokemonFilters, {}), (0, jsx_runtime_1.jsx)(synergy_overlaps_1.SynergyOverlaps, { type: props.type, pokemons: pokemons, overlap: overlap, setOverlap: setOverlap })] }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: Object.values(Game_1.Rarity).map((rarity) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { style: { color: config_1.RarityColor[rarity] }, children: t(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsx)("td", { children: ((_a = pokemonsPerRarity[rarity]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                        return ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                                additional: p.additional,
                                                regional: p.regional
                                            }), children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index), "data-tooltip-id": "game-pokemon-detail-tooltip", "data-tooltip-content": p.name }) }, p.name));
                                    }) })] }, rarity));
                    }) }) }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, { origin: "wiki" })] }));
}
function WikiAllTypes() {
    const [preferences] = (0, preferences_1.usePreferences)();
    const rarityOrder = [
        Game_1.Rarity.COMMON,
        Game_1.Rarity.UNCOMMON,
        Game_1.Rarity.RARE,
        Game_1.Rarity.EPIC,
        Game_1.Rarity.ULTRA,
        Game_1.Rarity.HATCH,
        Game_1.Rarity.UNIQUE,
        Game_1.Rarity.LEGENDARY,
        Game_1.Rarity.SPECIAL
    ];
    const pokemons = (0, pokemon_filters_1.filterPokemonsAccordingToPreferences)(Object.values(Pokemon_1.Pkm), preferences).map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const pokemonsPerType = Object.fromEntries(Synergy_1.SynergyArray.map((type) => [type, []]));
    for (const p of pokemons) {
        for (const type of p.types) {
            pokemonsPerType[type].push(p);
        }
    }
    pokemonsPerType["protean"] = [
        (0, precomputed_pokemon_data_1.getPokemonData)(Pokemon_1.Pkm.KECLEON),
        (0, precomputed_pokemon_data_1.getPokemonData)(Pokemon_1.Pkm.ARCEUS)
    ];
    for (const type in pokemonsPerType) {
        pokemonsPerType[type].sort((a, b) => a.rarity !== b.rarity
            ? rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
            : a.stars - b.stars);
    }
    const { t } = (0, react_i18next_1.useTranslation)();
    const types = [...Synergy_1.SynergyArray, "protean"];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { id: "wiki-types-all", children: [(0, jsx_runtime_1.jsx)("div", { style: { float: "right", justifyItems: "end" }, children: (0, jsx_runtime_1.jsx)(pokemon_filters_1.PokemonFilters, {}) }), types.map((type) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { children: type === "protean" ? (t("type_fluid")) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), " ", t(`synergy.${type}`)] })) }), (0, jsx_runtime_1.jsx)("ul", { children: ((_a = pokemonsPerType[type]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                        return ((0, jsx_runtime_1.jsx)("li", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                                additional: p.additional,
                                                regional: p.regional
                                            }), children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index), "data-tooltip-id": "game-pokemon-detail-tooltip", "data-tooltip-content": p.name }) }, p.name));
                                    }) })] }, type));
                    })] }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, { origin: "wiki" })] }));
}
//# sourceMappingURL=wiki-types.js.map