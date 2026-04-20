"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiRegions;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const config_1 = require("../../../../../config");
const pokemon_1 = require("../../../../../models/colyseus-models/pokemon");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Dungeon_1 = require("../../../../../types/enum/Dungeon");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const MIN_COL_WIDTH = 360;
const ROW_HEIGHT = 340;
function WikiRegions() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [selectedPkm, setSelectedPkm] = (0, react_1.useState)("");
    const [pokemonsPerRegion, setPokemonsPerRegion] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setPokemonsPerRegion(Object.keys(Dungeon_1.DungeonPMDO).reduce((o, region) => {
                const regionalMons = precomputed_pokemon_data_1.PRECOMPUTED_REGIONAL_MONS.filter((p) => new pokemon_1.PokemonClasses[p](p).isInRegion(region)).filter((p, index, array) => {
                    const evolution = (0, precomputed_pokemon_data_1.getPokemonData)(Pokemon_1.PkmFamily[p]).evolution;
                    return (array.findIndex((p2) => Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[p2]) ===
                        index &&
                        !(evolution === p ||
                            (evolution && (0, precomputed_pokemon_data_1.getPokemonData)(evolution).evolution === p)));
                });
                o[region] = regionalMons;
                return o;
            }, {}));
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    const regionalMons = (0, react_1.useMemo)(() => {
        return [...new Set(Object.values(pokemonsPerRegion).flat())].sort((a, b) => {
            return t(`pkm.${a}`).localeCompare(t(`pkm.${b}`));
        });
    }, [pokemonsPerRegion]);
    const filteredRegions = (0, react_1.useMemo)(() => {
        const regions = Object.keys(Dungeon_1.DungeonPMDO);
        if (!selectedPkm)
            return regions;
        return regions.filter((region) => { var _a; return (_a = pokemonsPerRegion[region]) === null || _a === void 0 ? void 0 : _a.includes(selectedPkm); });
    }, [selectedPkm, pokemonsPerRegion]);
    const sortedRegions = (0, react_1.useMemo)(() => filteredRegions.sort((a, b) => t(`map.${a}`).localeCompare(t(`map.${b}`))), [filteredRegions, t]);
    const dynamicRowHeight = (0, react_window_1.useDynamicRowHeight)({
        defaultRowHeight: ROW_HEIGHT,
        key: sortedRegions.length
    });
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-regions", children: [(0, jsx_runtime_1.jsx)("div", { className: "filters", style: { marginBottom: "0.5em" }, children: (0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { options: regionalMons, value: selectedPkm, onChange: (pkm) => setSelectedPkm(pkm) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "my-box", style: { marginBottom: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("p", { children: t("wiki.regions.region_hint1") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.regions.region_hint2") })] }), (0, jsx_runtime_1.jsx)("div", { style: { flex: 1, minHeight: 0 }, children: (0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                        if (height === undefined || width === undefined)
                            return null;
                        const columnCount = Math.max(1, Math.floor(width / MIN_COL_WIDTH));
                        const rowCount = Math.ceil(sortedRegions.length / columnCount);
                        return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: rowCount, rowHeight: dynamicRowHeight, rowComponent: RegionRow, rowProps: {
                                regions: sortedRegions,
                                columnCount,
                                pokemonsPerRegion,
                                t
                            } }, columnCount));
                    } }) }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, { origin: "wiki" })] }));
}
function RegionRow({ index, style, regions, columnCount, pokemonsPerRegion, t }) {
    const startIdx = index * columnCount;
    const rowRegions = regions.slice(startIdx, startIdx + columnCount);
    return ((0, jsx_runtime_1.jsx)("div", { style: Object.assign(Object.assign({}, style), { paddingBottom: "0.5em" }), children: (0, jsx_runtime_1.jsx)("div", { style: {
                display: "grid",
                gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                gap: "0.5em"
            }, children: rowRegions.map((dungeon) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box", style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5em",
                        position: "relative"
                    }, children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }, children: [(0, jsx_runtime_1.jsx)("h2", { children: t(`map.${dungeon}`) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", gap: "5px" }, children: config_1.RegionDetails[dungeon].synergies.map((synergy) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy }, "map_synergy_" + synergy))) })] }), (0, jsx_runtime_1.jsx)("img", { src: `/assets/maps/${dungeon}-preview.png`, loading: "lazy", alt: dungeon, style: {
                                border: "1px solid #000000",
                                borderRadius: "4px",
                                boxShadow: "2px 2px #00000060",
                                imageRendering: "pixelated",
                                height: "250px",
                                objectFit: "cover"
                            } }), (0, jsx_runtime_1.jsx)("div", { className: "wiki-regional-mons", children: ((_a = pokemonsPerRegion[dungeon]) !== null && _a !== void 0 ? _a : []).map((pkm) => ((0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { loading: "lazy", portrait: Pokemon_1.PkmIndex[pkm], "data-tooltip-id": "game-pokemon-detail-tooltip", "data-tooltip-content": pkm }, pkm))) })] }, dungeon));
            }) }) }));
}
//# sourceMappingURL=wiki-regions.js.map