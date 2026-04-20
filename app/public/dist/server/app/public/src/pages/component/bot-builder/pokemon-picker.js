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
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const react_tabs_1 = require("react-tabs");
const config_1 = require("../../../../../config");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../../../../../models/precomputed/precomputed-types");
const types_1 = require("../../../../../types");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const jsx_1 = require("../../utils/jsx");
const store_1 = require("../../utils/store");
const checkbox_1 = require("../checkbox/checkbox");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_filters_1 = require("../pokemon-filters/pokemon-filters");
const synergy_overlaps_1 = require("../synergy-overlaps/synergy-overlaps");
function PokemonPicker(props) {
    var _a;
    const tabs = [...Object.keys(precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE), "none"];
    const pokemonsPerTab = tabs.map((t) => t === "none"
        ? [
            Pokemon_1.Pkm.KECLEON,
            Pokemon_1.Pkm.ARCEUS,
            Pokemon_1.Pkm.PILLAR_WOOD,
            Pokemon_1.Pkm.PILLAR_IRON,
            Pokemon_1.Pkm.PILLAR_CONCRETE,
            Pokemon_1.Pkm.EGG
        ]
        : precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[t]);
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-box", id: "pokemon-picker", defaultIndex: (_a = store_1.localStore.get(store_1.LocalStoreKeys.LAST_TAB_OPENED_PICKER)) !== null && _a !== void 0 ? _a : 0, onSelect: (index) => store_1.localStore.set(store_1.LocalStoreKeys.LAST_TAB_OPENED_PICKER, index), children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: tabs.map((t) => {
                    return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t === "none" ? ("?") : ((0, jsx_runtime_1.jsx)("div", { draggable: true, onDragStart: (e) => {
                                e.dataTransfer.setData("text/plain", `synergy,${t}`);
                                e.stopPropagation();
                            }, onDragEnd: () => {
                            }, style: {
                                display: "block",
                                cursor: "var(--cursor-grab)",
                                userSelect: "none"
                            }, onMouseDown: (e) => {
                                e.currentTarget.style.cursor = "var(--cursor-grabbing)";
                            }, onMouseUp: (e) => {
                                e.currentTarget.style.cursor = "var(--cursor-grab)";
                            }, children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: t }) })) }, t));
                }) }), pokemonsPerTab.map((pokemons, i) => {
                return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(PokemonPickerTab, { selected: props.selected, selectEntity: props.selectEntity, addEntity: props.addEntity, pokemons: pokemons, type: tabs[i] }) }, "pokemons-tab-" + i));
            })] }));
}
function PokemonPickerTab(props) {
    var _a, _b;
    const [preferences, setPreferences] = (0, preferences_1.usePreferences)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    function handleOnDragStart(e, name) {
        e.stopPropagation();
        e.dataTransfer.setData("text/plain", `pokemon,${name}`);
        setIsDragging(true);
    }
    function handleOnDragEnd() {
        setIsDragging(false);
    }
    const ingame = (0, react_router_1.useLocation)().pathname === "/game";
    const [overlap, setOverlap] = (0, react_1.useState)(null);
    const additionalPokemons = (0, hooks_1.useAppSelector)((state) => state.game.additionalPokemons);
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectConnectedPlayer);
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const player = currentPlayer !== null && currentPlayer !== void 0 ? currentPlayer : spectatedPlayer;
    const regionalPokemons = (_b = (_a = player === null || player === void 0 ? void 0 : player.regionalPokemons) === null || _a === void 0 ? void 0 : _a.slice()) !== null && _b !== void 0 ? _b : [];
    const shouldIncludeNonPkm = props.type === "none";
    const filteredPokemons = (0, react_1.useMemo)(() => (0, pokemon_filters_1.filterPokemonsAccordingToPreferences)(props.pokemons, preferences, shouldIncludeNonPkm)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .filter((p) => (overlap ? p.types.includes(overlap) : true))
        .filter((p) => {
        var _a;
        const family = Pokemon_1.PkmFamily[p.name];
        const baseVariantName = (_a = Pokemon_1.PkmRegionalBaseVariants[family]) !== null && _a !== void 0 ? _a : family;
        const regionalVariants = Pokemon_1.PkmRegionalVariants[family];
        const isInAddPicks = additionalPokemons.includes(baseVariantName);
        const isInRegion = p.regional && regionalPokemons.includes(family);
        const hasVariantInRegion = regionalVariants === null || regionalVariants === void 0 ? void 0 : regionalVariants.some((variant) => regionalPokemons.includes(variant));
        const isAvailable = (!p.regional || isInRegion) &&
            (!p.additional || isInAddPicks) &&
            !hasVariantInRegion;
        return (!ingame ||
            !preferences.filterAvailableAddsAndRegionals ||
            isAvailable ||
            specialGameRule === SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE);
    }), [
        props.pokemons,
        overlap,
        preferences.showAdditionalPool,
        preferences.showRegionalPool,
        preferences.showRegularPool,
        preferences.showEvolutions,
        preferences.showAltForms,
        preferences.filterAvailableAddsAndRegionals,
        additionalPokemons,
        regionalPokemons,
        ingame,
        specialGameRule
    ]);
    const pokemonsPerRarity = (0, react_1.useMemo)(() => {
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
        return pokemonsPerRarity;
    }, [filteredPokemons]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "filters", style: { display: "flex", justifyContent: "end", gap: "1em" }, children: [ingame && ((0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: preferences.filterAvailableAddsAndRegionals, onToggle: (checked) => {
                            setPreferences({ filterAvailableAddsAndRegionals: checked });
                        }, label: t("show_only_available_picks"), isDark: true })), (0, jsx_runtime_1.jsx)(pokemon_filters_1.PokemonFilters, {}), props.type !== "none" && ((0, jsx_runtime_1.jsx)(synergy_overlaps_1.SynergyOverlaps, { type: props.type, pokemons: filteredPokemons, overlap: overlap, setOverlap: setOverlap }))] }), (0, jsx_runtime_1.jsx)("dl", { id: "rarity-grid", children: [
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
                    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { style: {
                                    color: config_1.RarityColor[rarity],
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    fontSize: "80%",
                                    alignContent: "center"
                                }, children: t(`rarity.${rarity}`) }), (0, jsx_runtime_1.jsx)("dd", { style: { display: "flex", flexWrap: "wrap", gap: "1px" }, children: ((_a = pokemonsPerRarity[rarity]) !== null && _a !== void 0 ? _a : []).map((p) => {
                                    var _a;
                                    return ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                            additional: p.additional,
                                            regional: p.regional,
                                            selected: p.name === ((_a = props.selected) === null || _a === void 0 ? void 0 : _a["name"])
                                        }), onClick: () => {
                                            var _a;
                                            (_a = props.selectEntity) === null || _a === void 0 ? void 0 : _a.call(props, {
                                                name: p.name,
                                                emotion: types_1.Emotion.NORMAL,
                                                shiny: false
                                            });
                                        }, onDoubleClick: (e) => {
                                            var _a;
                                            e.preventDefault();
                                            (_a = props.addEntity) === null || _a === void 0 ? void 0 : _a.call(props, {
                                                name: p.name,
                                                emotion: types_1.Emotion.NORMAL,
                                                shiny: false
                                            });
                                        }, onContextMenu: (e) => {
                                            var _a;
                                            e.preventDefault();
                                            (_a = props.addEntity) === null || _a === void 0 ? void 0 : _a.call(props, {
                                                name: p.name,
                                                emotion: types_1.Emotion.NORMAL,
                                                shiny: false
                                            });
                                        }, "data-tooltip-id": "game-pokemon-detail-tooltip", "data-tooltip-content": p.name, draggable: true, onDragStart: (e) => handleOnDragStart(e, p.name), onDragEnd: handleOnDragEnd, children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index) }) }, p.name));
                                }) })] }, rarity));
                }) }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, Object.assign({ origin: "planner" }, (isDragging ? { isOpen: false } : {})))] }));
}
//# sourceMappingURL=pokemon-picker.js.map