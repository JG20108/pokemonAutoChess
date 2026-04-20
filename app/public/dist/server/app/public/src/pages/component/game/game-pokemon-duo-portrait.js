"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePokemonDuoPortrait;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../../config");
const pokemon_customs_1 = require("../../../../../models/colyseus-models/pokemon-customs");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const jsx_1 = require("../../utils/jsx");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const game_pokemon_detail_1 = require("./game-pokemon-detail");
const game_pokemon_portrait_1 = require("./game-pokemon-portrait");
require("./game-pokemon-portrait.css");
function GamePokemonDuoPortrait(props) {
    var _a;
    const duo = Pokemon_1.PkmDuos[props.duo].map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const rarityColor = config_1.RarityColor[duo[0].rarity];
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const duoCustom = duo.map((p) => (0, pokemon_customs_1.getPkmWithCustom)(p.index, spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.pokemonCustoms));
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)(`my-container game-pokemon-portrait game-pokemon-portrait-duo`, { planned: (_a = props.inPlanner) !== null && _a !== void 0 ? _a : false }), style: {
            backgroundColor: rarityColor,
            borderColor: rarityColor
        }, onClick: props.click, children: [duo.map((p, i) => {
                var _a, _b;
                return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("game-pokemon-portrait-duo-part", "game-pokemon-portrait-duo-part-" + (i === 0 ? "down" : "up")), "data-tooltip-id": `tooltip-${props.origin}-${props.index}-${p.index}`, style: {
                                backgroundImage: `url("${(0, game_pokemon_portrait_1.getCachedPortrait)(p.index, spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.pokemonCustoms)}")`
                            } }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `tooltip-${props.origin}-${props.index}-${p.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", place: "bottom", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: p.name, emotion: (_a = duoCustom[i]) === null || _a === void 0 ? void 0 : _a.emotion, shiny: (_b = duoCustom[i]) === null || _b === void 0 ? void 0 : _b.shiny, origin: props.origin }) })] }, "duo-" + i));
            }), props.inPlanner && ((0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/planned.png", alt: "", className: "game-pokemon-portrait-planned-icon" })), (0, jsx_runtime_1.jsx)("ul", { className: "game-pokemon-portrait-types", children: Array.from(duo[0].types.values()).map((type) => {
                    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type, size: "1.4vw" }) }, type));
                }) })] }));
}
//# sourceMappingURL=game-pokemon-duo-portrait.js.map