"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiAbility;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_ability_1 = require("../../../../../models/precomputed/precomputed-ability");
const Ability_1 = require("../../../../../types/enum/Ability");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const Item_1 = require("../../../../../types/enum/Item");
const item_detail_1 = require("../../../game/components/item-detail");
function WikiAbility() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [hoveredPokemon, setHoveredPokemon] = (0, react_1.useState)();
    const [itemHovered, setItemHovered] = (0, react_1.useState)();
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const pokemonsPerAbility = (0, react_1.useMemo)(() => Object.keys(Ability_1.Ability).reduce((o, ability) => {
        o[ability] = precomputed_ability_1.PRECOMPUTED_POKEMONS_PER_ABILITY[ability].map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p)).sort((a, b) => {
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            const familyA = Pokemon_1.PkmFamily[a.name], familyB = Pokemon_1.PkmFamily[b.name];
            if (familyA !== familyB)
                return Pokemon_1.PkmIndex[familyA].localeCompare(Pokemon_1.PkmIndex[familyB]);
            return 0;
        }).sort((a, b) => {
            const familyA = Pokemon_1.PkmFamily[a.name], familyB = Pokemon_1.PkmFamily[b.name];
            if (familyA === familyB && a.stars !== b.stars)
                return a.stars - b.stars;
            return 0;
        });
        return o;
    }, {}), []);
    const tmPerAbility = (0, react_1.useMemo)(() => Object.fromEntries(Object.entries(Item_1.AbilityPerTM).map(([tm, ability]) => [ability, tm])), []);
    const filteredAbilities = Object.keys(Ability_1.Ability)
        .filter((a) => a !== Ability_1.Ability.DEFAULT && (!searchQuery.trim() ||
        `${t(`ability.${a}`)} ${t(`ability_description.${a}`)}`.toLowerCase().includes(searchQuery.trim().toLowerCase())))
        .sort((a, b) => t(`ability.${a}`).localeCompare(t(`ability.${b}`)));
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-ability", children: [(0, jsx_runtime_1.jsx)("div", { className: "actions", children: (0, jsx_runtime_1.jsx)("input", { type: "search", placeholder: t("search"), onInput: event => setSearchQuery(event.target.value) }) }), (0, jsx_runtime_1.jsx)("ul", { children: filteredAbilities.map((ability) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: t(`ability.${ability}`) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`ability_description.${ability}`)) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [((_a = pokemonsPerAbility[ability]) !== null && _a !== void 0 ? _a : []).map((p) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                                    additional: p.additional,
                                                    regional: p.regional
                                                }), "data-tooltip-id": "pokemon-detail", onMouseOver: () => {
                                                    setHoveredPokemon(p.name);
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }) }) }, p.name))), tmPerAbility[ability] && ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "item-detail", onMouseOver: () => setItemHovered(tmPerAbility[ability]), children: (0, jsx_runtime_1.jsx)("img", { src: `assets/item/${Item_1.TMs.includes(tmPerAbility[ability]) ? "TM" : "HM"}.png`, className: "item" }) }))] }) })] }, ability));
                }) }), hoveredPokemon && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "pokemon-detail", className: "custom-theme-tooltip game-pokemon-detail-tooltip", float: true, children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: hoveredPokemon }) }), itemHovered && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "item-detail", className: "custom-theme-tooltip item-detail-tooltip", children: (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, { item: itemHovered }) })] }));
}
//# sourceMappingURL=wiki-ability.js.map