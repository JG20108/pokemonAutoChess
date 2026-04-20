"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rankType = rankType;
exports.default = TeamComp;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const elo_badge_1 = require("../profile/elo-badge");
require("./team-comp.css");
function rankType(a, b, synergies) {
    const sa = synergies[a];
    const sb = synergies[b];
    const va = sa ? sa : 0;
    const vb = sb ? sb : 0;
    return vb - va;
}
function rankPokemon(a, b, pokemons) {
    const pa = pokemons[a];
    const pb = pokemons[b];
    const va = pa ? pa.frequency : 0;
    const vb = pb ? pb.frequency : 0;
    return vb - va;
}
function TeamComp(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const sortedTypes = props.team.synergies
        ? Object.keys(props.team.synergies).sort((a, b) => {
            return rankType(a, b, props.team.synergies);
        })
        : new Array();
    const sortedPokemons = props.team.mean_team.pokemons
        ? Object.keys(props.team.mean_team.pokemons).sort((a, b) => {
            return rankPokemon(a, b, props.team.mean_team.pokemons);
        })
        : new Array();
    const getCarouselItems = () => {
        var _a;
        const carouselItemsMap = new Map();
        (_a = props.team.mean_items) === null || _a === void 0 ? void 0 : _a.forEach((itemData) => {
            const item = itemData.item;
            const recipe = Item_1.ItemRecipe[item];
            if (recipe) {
                recipe.forEach((baseItem) => {
                    const current = carouselItemsMap.get(baseItem) || 0;
                    carouselItemsMap.set(baseItem, current + itemData.frequency);
                });
            }
            else {
                const current = carouselItemsMap.get(item) || 0;
                carouselItemsMap.set(item, current + itemData.frequency);
            }
        });
        return Array.from(carouselItemsMap.entries())
            .filter(([item]) => Item_1.ItemComponents.includes(item))
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([item, frequency]) => ({ item, frequency }));
    };
    const carouselItems = getCarouselItems();
    return ((0, jsx_runtime_1.jsx)("div", { className: "team-comp my-box", id: props.team.cluster_id, children: (0, jsx_runtime_1.jsxs)("div", { className: "team-comp-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "team-comp-left", children: [(0, jsx_runtime_1.jsxs)("div", { className: "team-comp-header", children: [(0, jsx_runtime_1.jsx)("span", { className: "rank", children: props.rank }), (0, jsx_runtime_1.jsx)("div", { className: "synergy-group", children: sortedTypes.slice(0, 3).map((type) => ((0, jsx_runtime_1.jsxs)("div", { className: "synergy-item", children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type.toUpperCase(), size: "48px" }), (0, jsx_runtime_1.jsx)("span", { children: props.team.synergies[type] })] }, type))) }), (0, jsx_runtime_1.jsxs)("div", { className: "header-info", children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("average_place"), ":"] }), props.team.mean_rank.toFixed(2)] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("winrate"), ":"] }), props.team.winrate.toFixed(2), " %"] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("count"), ":"] }), props.team.count] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "popular-pokemons-header", children: t("popular_pokemons") }), (0, jsx_runtime_1.jsx)("div", { className: "player-team-pokemons", children: sortedPokemons.map((pokemon) => {
                                var _a;
                                const pokemonData = props.team.mean_team.pokemons[pokemon];
                                return ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-container", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon] }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-frequency", children: (((_a = pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.frequency) !== null && _a !== void 0 ? _a : 0) * 100).toFixed(0) + "%" }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-items", children: ((pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.items) || []).map((item, i) => ((0, jsx_runtime_1.jsx)("img", { src: `/assets/item/${item}.png`, "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": item }, i))) })] }, `mean_${pokemon}`));
                            }) })] }), props.team.mean_items && props.team.mean_items.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "top-items-list", children: [(0, jsx_runtime_1.jsx)("div", { className: "items-header", children: t("popular_items") }), (0, jsx_runtime_1.jsx)("div", { className: "items-group", children: props.team.mean_items.slice(0, 5).map((itemData, idx) => ((0, jsx_runtime_1.jsxs)("div", { className: "item-entry", children: [(0, jsx_runtime_1.jsx)("img", { src: `/assets/item/${itemData.item}.png`, "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": itemData.item, className: "item-icon" }), (0, jsx_runtime_1.jsxs)("span", { className: "item-frequency", children: [(itemData.frequency * 100).toFixed(1), "%"] })] }, idx))) }), carouselItems.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "carousel-priority-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "carousel-header", children: t("carousel_priority") }), (0, jsx_runtime_1.jsx)("div", { className: "carousel-items-list", children: carouselItems.map((itemData, idx) => {
                                        const ordinals = ["1st", "2nd", "3rd", "4th", "5th"];
                                        return ((0, jsx_runtime_1.jsxs)("div", { className: "carousel-item-entry", children: [(0, jsx_runtime_1.jsx)("img", { src: `/assets/item/${itemData.item}.png`, "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": itemData.item, className: "carousel-item-icon" }), (0, jsx_runtime_1.jsx)("span", { className: "carousel-item-frequency", children: ordinals[idx] })] }, idx));
                                    }) })] }))] })), props.team.top_teams && props.team.top_teams.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "top-teams-list", children: [(0, jsx_runtime_1.jsx)("div", { className: "teams-header", children: t("example_teams") }), props.team.top_teams.slice(0, 3).map((topTeam, idx) => ((0, jsx_runtime_1.jsxs)("div", { className: "top-team-entry", children: [(0, jsx_runtime_1.jsxs)("div", { className: "team-rank", children: ["Top ", topTeam.rank, (0, jsx_runtime_1.jsx)("div", { className: "team-elo", children: (0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: topTeam.elo }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "team-pokemons", children: topTeam.pokemons.map((pokemonData, pokemonIdx) => ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-container", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemonData.name] }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-items", children: (pokemonData.items || []).map((item, i) => ((0, jsx_runtime_1.jsx)("img", { src: `/assets/item/${item}.png`, "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": item }, i))) })] }, `top_${idx}_${pokemonIdx}`))) })] }, idx)))] }))] }) }));
}
//# sourceMappingURL=team-comp.js.map