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
const react_dom_1 = __importDefault(require("react-dom"));
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const react_tooltip_1 = require("react-tooltip");
const effects_1 = require("../../../../../models/effects");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const Config_1 = require("../../../../../types/Config");
const Ability_1 = require("../../../../../types/enum/Ability");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const effect_description_1 = require("../synergy/effect-description");
const checkbox_1 = require("../checkbox/checkbox");
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
    const [showEvolutions, setShowEvolutions] = (0, react_1.useState)(false);
    const [overlap, setOverlap] = (0, react_1.useState)(null);
    const pokemons = precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[props.type]
        .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .sort((a, b) => a.stars - b.stars)
        .filter((p, index, list) => {
        if (p.skill === Ability_1.Ability.DEFAULT)
            return false;
        if (p.rarity === Game_1.Rarity.SPECIAL)
            return true;
        if (showEvolutions)
            return true;
        else
            return (list.findIndex((p2) => Pokemon_1.PkmFamily[p.name] === Pokemon_1.PkmFamily[p2.name]) === index);
    });
    const filteredPokemons = pokemons
        .filter(p => overlap ? p.types.includes(overlap) : true);
    const pokemonsPerRarity = (0, array_1.groupBy)(filteredPokemons, (p) => p.rarity);
    for (const rarity in pokemonsPerRarity) {
        const families = (0, array_1.groupBy)(pokemonsPerRarity[rarity], (p) => Pokemon_1.PkmFamily[p.name]);
        pokemonsPerRarity[rarity] = Object.values(families).sort((fa, fb) => {
            const a = fa[0], b = fb[0];
            if (a.regional !== b.regional)
                return +a.regional - +b.regional;
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            return a.index.localeCompare(b.index);
        }).flat().sort((a, b) => {
            if (Pokemon_1.PkmFamily[a.name] === Pokemon_1.PkmFamily[b.name])
                return a.stars - b.stars;
            return 0;
        });
    }
    const overlapsMap = new Map(Object.values(Synergy_1.Synergy)
        .filter(type => type !== props.type)
        .map(type => [type, pokemons.filter((p, i, list) => p.types.includes(type) &&
            list.findIndex((q) => q.types.includes(type) && Pokemon_1.PkmFamily[p.name] === Pokemon_1.PkmFamily[q.name]) === i).length]));
    const overlaps = [...overlapsMap.entries()].filter(([type, nb]) => nb > 0).sort((a, b) => b[1] - a[1]);
    return ((0, jsx_runtime_1.jsxs)("div", { style: { padding: "0 1em" }, children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type }), " ", t(`synergy.${props.type}`)] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`synergy_description.${props.type}`, { additionalInfo: "" })) }), effects_1.SynergyEffects[props.type].map((effect, i) => {
                return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, jsx_runtime_1.jsxs)("span", { children: ["(", Config_1.SynergyTriggers[props.type][i], ") ", t(`effect.${effect}`), ":\u00A0"] }), (0, jsx_runtime_1.jsx)(effect_description_1.EffectDescriptionComponent, { effect: effect })] }, t(`effect.${effect}`)));
            }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { style: { float: "right", justifyItems: "end" }, children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: showEvolutions, onToggle: setShowEvolutions, label: t("show_evolutions"), isDark: true }), (0, jsx_runtime_1.jsxs)("details", { children: [(0, jsx_runtime_1.jsx)("summary", { style: { textAlign: "end" }, children: t("overlaps") }), (0, jsx_runtime_1.jsx)("ul", { className: "synergy-overlaps", children: overlaps.map(([type, nb]) => {
                                    return (0, jsx_runtime_1.jsxs)("li", { onClick: () => setOverlap(overlap === type ? null : type), className: (0, jsx_1.cc)({ active: overlap === type }), children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type }), (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), (0, jsx_runtime_1.jsx)("span", { children: nb })] }, type);
                                }) })] })] }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: Object.values(Game_1.Rarity).map((rarity) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarity] }, children: t(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsx)("td", { children: ((_a = pokemonsPerRarity[rarity]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                        return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                                additional: p.additional,
                                                regional: p.regional
                                            }), children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index), "data-tooltip-id": `pokemon-detail-${p.index}` }), react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `pokemon-detail-${p.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: p.name }) }), document.querySelector(".wiki-modal"))] }, p.name));
                                    }) })] }, rarity));
                    }) }) })] }));
}
function WikiAllTypes() {
    const rarityOrder = [Game_1.Rarity.COMMON, Game_1.Rarity.UNCOMMON, Game_1.Rarity.RARE, Game_1.Rarity.EPIC, Game_1.Rarity.ULTRA, Game_1.Rarity.HATCH, Game_1.Rarity.UNIQUE, Game_1.Rarity.LEGENDARY, Game_1.Rarity.SPECIAL];
    const pokemons = Object.values(Pokemon_1.Pkm)
        .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .filter((a, index, list) => {
        if (a.skill === Ability_1.Ability.DEFAULT)
            return false;
        return true;
    });
    const pokemonsPerType = Object.fromEntries(Object.values(Synergy_1.Synergy).map(type => [type, []]));
    for (const p of pokemons) {
        for (const type of p.types) {
            pokemonsPerType[type].push(p);
        }
    }
    for (const type in pokemonsPerType) {
        pokemonsPerType[type].sort((a, b) => a.rarity !== b.rarity ? rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity) : a.stars - b.stars);
    }
    const [hoveredPokemon, setHoveredPokemon] = (0, react_1.useState)();
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { id: "wiki-types-all", children: Object.values(Synergy_1.Synergy).map((type) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), " ", t(`synergy.${type}`)] }), (0, jsx_runtime_1.jsx)("ul", { children: ((_a = pokemonsPerType[type]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                    return ((0, jsx_runtime_1.jsx)("li", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                            additional: p.additional,
                                            regional: p.regional
                                        }), onMouseOver: () => {
                                            setHoveredPokemon(p.name);
                                        }, "data-tooltip-id": "pokemon-detail", children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index), "data-tooltip-id": `pokemon-detail-${p.index}` }) }, p.name));
                                }) })] }, type));
                }) }), hoveredPokemon && react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "pokemon-detail", className: "custom-theme-tooltip game-pokemon-detail-tooltip", float: true, children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: hoveredPokemon }) }), document.querySelector(".wiki-modal"))] }));
}
//# sourceMappingURL=wiki-types.js.map