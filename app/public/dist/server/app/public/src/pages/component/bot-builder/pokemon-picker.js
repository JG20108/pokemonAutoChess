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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonPicker;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const types_1 = require("../../../../../types");
const Config_1 = require("../../../../../types/Config");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const checkbox_1 = require("../checkbox/checkbox");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const Ability_1 = require("../../../../../types/enum/Ability");
const hooks_1 = require("../../../hooks");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const preferences_1 = require("../../../preferences");
function PokemonPicker(props) {
    const tabs = [...Object.keys(precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE), "none"];
    const pokemonsPerTab = tabs.map((t) => (t === "none"
        ? [Pokemon_1.Pkm.KECLEON, Pokemon_1.Pkm.ARCEUS]
        : precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[t]).map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p)));
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-box", id: "pokemon-picker", children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: tabs.map((t) => {
                    return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t === "none" ? "?" : (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: t }) }, t));
                }) }), pokemonsPerTab.map((pokemons, i) => {
                return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(PokemonPickerTab, { selected: props.selected, selectEntity: props.selectEntity, addEntity: props.addEntity, pokemons: pokemons, type: tabs[i] }) }, "pokemons-tab-" + i));
            })] }));
}
function PokemonPickerTab(props) {
    var _a, _b;
    const [preferences, setPreferences] = (0, preferences_1.usePreferences)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const [hoveredPokemon, setHoveredPokemon] = (0, react_1.useState)();
    function handleOnDragStart(e, name) {
        setHoveredPokemon(undefined);
        e.dataTransfer.setData("pokemon", name);
    }
    const ingame = (0, react_router_dom_1.useLocation)().pathname === "/game";
    const [overlap, setOverlap] = (0, react_1.useState)(null);
    const additionalPokemons = (0, hooks_1.useAppSelector)((state) => state.game.additionalPokemons);
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    const regionalPokemons = (_b = (_a = currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.regionalPokemons) === null || _a === void 0 ? void 0 : _a.slice()) !== null && _b !== void 0 ? _b : [];
    const baseVariant = (pkm) => {
        var _a;
        return (_a = Object.keys(Pokemon_1.PkmRegionalVariants).find((p) => Pokemon_1.PkmRegionalVariants[p].includes(pkm))) !== null && _a !== void 0 ? _a : pkm;
    };
    const filteredPokemons = props.pokemons
        .filter(p => overlap ? p.types.includes(overlap) : true)
        .filter((p) => {
        if (p.skill === Ability_1.Ability.DEFAULT)
            return false;
        if (p.rarity === Game_1.Rarity.SPECIAL)
            return true;
        if (preferences.showEvolutions)
            return true;
        else
            return p.name === Pokemon_1.PkmFamily[p.name];
    })
        .filter((p) => !ingame || !preferences.filterAvailableAddsAndRegionals ||
        ((!p.additional ||
            additionalPokemons.includes(baseVariant(Pokemon_1.PkmFamily[p.name])) ||
            specialGameRule === SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE) &&
            (!p.regional || (regionalPokemons === null || regionalPokemons === void 0 ? void 0 : regionalPokemons.includes(p.name)))));
    const pokemonsPerRarity = (0, array_1.groupBy)(filteredPokemons, (p) => p.rarity);
    for (const rarity in pokemonsPerRarity) {
        pokemonsPerRarity[rarity].sort((a, b) => {
            if (a.regional !== b.regional)
                return +a.regional - +b.regional;
            if (a.additional !== b.additional)
                return +a.additional - +b.additional;
            if (Pokemon_1.PkmFamily[a.name] === Pokemon_1.PkmFamily[b.name])
                return a.stars - b.stars;
            return Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[a.name]].localeCompare(Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[b.name]]);
        });
    }
    const overlapsMap = new Map(Object.values(Synergy_1.Synergy)
        .filter(type => type !== props.type)
        .map(type => [type, filteredPokemons.filter((p, i, list) => p.types.includes(type) &&
            list.findIndex((q) => Pokemon_1.PkmFamily[p.name] === Pokemon_1.PkmFamily[q.name]) === i).length]));
    const overlaps = [...overlapsMap.entries()].filter(([type, nb]) => nb > 0).sort((a, b) => b[1] - a[1]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dl", { id: "rarity-grid", children: [
                    Game_1.Rarity.COMMON,
                    Game_1.Rarity.UNIQUE,
                    Game_1.Rarity.UNCOMMON,
                    Game_1.Rarity.LEGENDARY,
                    Game_1.Rarity.RARE,
                    Game_1.Rarity.HATCH,
                    Game_1.Rarity.EPIC,
                    Game_1.Rarity.SPECIAL,
                    Game_1.Rarity.ULTRA
                ].map((rarity) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { style: { color: Config_1.RarityColor[rarity], textTransform: "uppercase", fontWeight: "500", fontSize: "80%", alignContent: "center" }, children: t(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsx)("dd", { style: { display: "flex", flexWrap: "wrap", gap: "1px" }, children: ((_a = pokemonsPerRarity[rarity]) !== null && _a !== void 0 ? _a : []).map((p) => ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                        additional: p.additional,
                                        regional: p.regional,
                                        selected: p.name === props.selected["name"]
                                    }), onClick: () => {
                                        props.selectEntity({
                                            name: p.name,
                                            emotion: types_1.Emotion.NORMAL,
                                            shiny: false
                                        });
                                    }, onDoubleClick: (e) => {
                                        e.preventDefault();
                                        props.addEntity({
                                            name: p.name,
                                            emotion: types_1.Emotion.NORMAL,
                                            shiny: false
                                        });
                                    }, onContextMenu: (e) => {
                                        e.preventDefault();
                                        props.addEntity({
                                            name: p.name,
                                            emotion: types_1.Emotion.NORMAL,
                                            shiny: false
                                        });
                                    }, onMouseOver: () => {
                                        setHoveredPokemon(p.name);
                                    }, "data-tooltip-id": "pokemon-detail", draggable: true, onDragStart: (e) => handleOnDragStart(e, p.name), children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }) }, p.name))) })] }, rarity));
                }) }), (0, jsx_runtime_1.jsxs)("div", { className: "filters", children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: preferences.showEvolutions, onToggle: (checked) => {
                            setPreferences({ showEvolutions: checked });
                        }, label: t("show_evolutions"), isDark: true }), ingame && ((0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: preferences.filterAvailableAddsAndRegionals, onToggle: (checked) => {
                            setPreferences({ filterAvailableAddsAndRegionals: checked });
                        }, label: t("show_only_available_picks"), isDark: true })), (0, jsx_runtime_1.jsxs)("details", { children: [(0, jsx_runtime_1.jsx)("summary", { children: t("overlaps") }), (0, jsx_runtime_1.jsx)("ul", { className: "synergy-overlaps", children: overlaps.map(([type, nb]) => {
                                    return (0, jsx_runtime_1.jsxs)("li", { onClick: () => setOverlap(overlap === type ? null : type), className: (0, jsx_1.cc)({ active: overlap === type }), children: [props.type === "none" ? "?" : (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type }), (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), (0, jsx_runtime_1.jsx)("span", { children: nb })] }, type);
                                }) })] })] }), hoveredPokemon && (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "pokemon-detail", className: "custom-theme-tooltip game-pokemon-detail-tooltip", float: true, children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: hoveredPokemon }) })] }));
}
//# sourceMappingURL=pokemon-picker.js.map