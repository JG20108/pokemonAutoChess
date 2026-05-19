"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiAbility;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const precomputed_ability_1 = require("../../../../../models/precomputed/precomputed-ability");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Ability_1 = require("../../../../../types/enum/Ability");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const item_detail_1 = require("../../../game/components/item-detail");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = __importStar(require("../../utils/jsx"));
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const MIN_COL_WIDTH = 320;
const ROW_HEIGHT = 200;
function WikiAbility() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const pokemonsPerAbility = (0, react_1.useMemo)(() => Object.keys(Ability_1.Ability).reduce((o, ability) => {
        o[ability] = precomputed_ability_1.PRECOMPUTED_POKEMONS_PER_ABILITY[ability]
            .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
            .sort((a, b) => {
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            const familyA = Pokemon_1.PkmFamily[a.name], familyB = Pokemon_1.PkmFamily[b.name];
            if (familyA !== familyB)
                return Pokemon_1.PkmIndex[familyA].localeCompare(Pokemon_1.PkmIndex[familyB]);
            return 0;
        })
            .sort((a, b) => {
            const familyA = Pokemon_1.PkmFamily[a.name], familyB = Pokemon_1.PkmFamily[b.name];
            if (familyA === familyB && a.stars !== b.stars)
                return a.stars - b.stars;
            return 0;
        });
        return o;
    }, {}), []);
    const tmPerAbility = (0, react_1.useMemo)(() => Object.fromEntries(Object.entries(Item_1.AbilityPerTM).map(([tm, ability]) => [ability, tm])), []);
    const filteredAbilities = Object.keys(Ability_1.Ability)
        .filter((a) => a !== Ability_1.Ability.DEFAULT &&
        (!searchQuery.trim() ||
            (0, jsx_1.default)((0, descriptions_1.addIconsToDescription)(`${t(`ability.${a}`)} ${t(`ability_description.${a}`)}`))
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase())))
        .sort((a, b) => t(`ability.${a}`).localeCompare(t(`ability.${b}`)));
    const dynamicRowHeight = (0, react_window_1.useDynamicRowHeight)({
        defaultRowHeight: ROW_HEIGHT,
        key: filteredAbilities.length
    });
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-ability", children: [(0, jsx_runtime_1.jsx)("div", { className: "actions", children: (0, jsx_runtime_1.jsx)("input", { type: "search", placeholder: t("search"), onInput: (event) => setSearchQuery(event.target.value) }) }), (0, jsx_runtime_1.jsx)("div", { style: { flex: 1, minHeight: 0 }, children: (0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                        if (height === undefined || width === undefined)
                            return null;
                        const columnCount = Math.max(1, Math.floor(width / MIN_COL_WIDTH));
                        const rowCount = Math.ceil(filteredAbilities.length / columnCount);
                        return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: rowCount, rowHeight: dynamicRowHeight, rowComponent: AbilityRow, rowProps: {
                                abilities: filteredAbilities,
                                columnCount,
                                pokemonsPerAbility,
                                tmPerAbility
                            } }, columnCount));
                    } }) }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, { origin: "wiki" }), (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, {})] }));
}
function AbilityRow({ index, style, abilities, columnCount, pokemonsPerAbility, tmPerAbility }) {
    const startIdx = index * columnCount;
    const rowAbilities = abilities.slice(startIdx, startIdx + columnCount);
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { style: Object.assign(Object.assign({}, style), { paddingBottom: "0.5em" }), children: (0, jsx_runtime_1.jsx)("div", { style: {
                display: "grid",
                gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                gap: "0.5em"
            }, children: rowAbilities.map((ability) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box", style: { display: "flex", flexDirection: "column", gap: 5 }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: t(`ability.${ability}`) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`ability_description.${ability}`)) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [((_a = pokemonsPerAbility[ability]) !== null && _a !== void 0 ? _a : []).map((p) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                                additional: p.additional,
                                                regional: p.regional
                                            }), "data-tooltip-id": "game-pokemon-detail-tooltip", "data-tooltip-content": p.name, children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }) }) }, p.name))), tmPerAbility[ability] && ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": tmPerAbility[ability], children: (0, jsx_runtime_1.jsx)("img", { src: `assets/item/${Item_1.TMsBronze.includes(tmPerAbility[ability]) ? "TM_BRONZE" : Item_1.TMsSilver.includes(tmPerAbility[ability]) ? "TM" : "TM_GOLD"}.png`, className: "item" }) }))] }) })] }, ability));
            }) }) }));
}
//# sourceMappingURL=wiki-ability.js.map