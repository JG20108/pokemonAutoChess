"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePokemonPortrait;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_tooltip_1 = require("react-tooltip");
const evolution_rules_1 = require("../../../../../core/evolution-rules");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const shop_1 = require("../../../../../models/shop");
const Config_1 = require("../../../../../types/Config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const hooks_1 = require("../../../hooks");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const money_1 = require("../icons/money");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const game_pokemon_detail_1 = require("./game-pokemon-detail");
const preferences_1 = require("../../../preferences");
const pokemon_customs_1 = require("../../../../../models/colyseus-models/pokemon-customs");
require("./game-pokemon-portrait.css");
function GamePokemonPortrait(props) {
    var _a, _b, _c;
    const [antialiasing] = (0, preferences_1.usePreference)("antialiasing");
    const pokemon = (0, react_1.useMemo)(() => typeof props.pokemon === "string"
        ? pokemon_factory_1.default.createPokemonFromName(props.pokemon)
        : props.pokemon, [props.pokemon]);
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const currentPlayerId = (0, hooks_1.useAppSelector)((state) => state.game.currentPlayerId);
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    const board = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.game.players.find((p) => p.id === uid)) === null || _a === void 0 ? void 0 : _a.board; });
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const isOnAnotherBoard = currentPlayerId !== uid;
    const [count, setCount] = (0, react_1.useState)(0);
    const [countEvol, setCountEvol] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        let _count = 0;
        let _countEvol = 0;
        if (board &&
            board.forEach &&
            !isOnAnotherBoard &&
            props.pokemon &&
            pokemon &&
            pokemon.hasEvolution) {
            board.forEach((p) => {
                if (p.name === pokemon.name) {
                    _count++;
                }
                else if (Pokemon_1.PkmFamily[p.name] === pokemon.name) {
                    _countEvol++;
                }
            });
        }
        setCount(_count);
        setCountEvol(_countEvol);
    }, [board, board === null || board === void 0 ? void 0 : board.size, props.pokemon, pokemon, isOnAnotherBoard]);
    if (!props.pokemon || !pokemon) {
        return (0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-portrait my-box empty" });
    }
    const pokemonCustom = (0, pokemon_customs_1.getPkmWithCustom)(pokemon.index, currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.pokemonCustoms);
    const rarityColor = Config_1.RarityColor[pokemon.rarity];
    const evolutionName = currentPlayer
        ? pokemon.evolutionRule.getEvolution(pokemon, currentPlayer)
        : (_a = pokemon.evolutions[0]) !== null && _a !== void 0 ? _a : pokemon.evolution;
    let pokemonEvolution = pokemon_factory_1.default.createPokemonFromName(evolutionName);
    const willEvolve = pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
        count === pokemon.evolutionRule.numberRequired - 1;
    const shouldShimmer = pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
        ((count > 0 && pokemon.hasEvolution) ||
            (countEvol > 0 && pokemonEvolution.hasEvolution));
    if (pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
        count === pokemon.evolutionRule.numberRequired - 1 &&
        countEvol === pokemon.evolutionRule.numberRequired - 1 &&
        pokemonEvolution.hasEvolution) {
        const evolutionName2 = currentPlayer
            ? pokemonEvolution.evolutionRule.getEvolution(pokemonEvolution, currentPlayer)
            : (_b = pokemonEvolution.evolutions[0]) !== null && _b !== void 0 ? _b : pokemonEvolution.evolution;
        pokemonEvolution = pokemon_factory_1.default.createPokemonFromName(evolutionName2);
    }
    const pokemonInPortrait = willEvolve && pokemonEvolution
        ? pokemonEvolution
        : pokemon;
    let cost = (0, shop_1.getBuyPrice)(pokemon.name, specialGameRule);
    if (willEvolve &&
        pokemonEvolution &&
        specialGameRule === SpecialGameRule_1.SpecialGameRule.BUYER_FEVER) {
        cost = 0;
    }
    const canBuy = (currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.alive) && (currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.money) >= cost;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box", "clickable", "game-pokemon-portrait", {
            shimmer: shouldShimmer,
            disabled: !canBuy && props.origin === "shop",
            planned: (_c = props.inPlanner) !== null && _c !== void 0 ? _c : false
        }), style: {
            backgroundColor: rarityColor,
            borderColor: rarityColor,
            backgroundImage: `url("${(0, avatar_1.getPortraitSrc)(pokemonInPortrait.index, pokemonCustom.shiny, pokemonCustom.emotion)}")`
        }, onClick: (e) => {
            if (canBuy && props.click)
                props.click(e);
        }, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, "data-tooltip-id": `tooltip-${props.origin}-${props.index}`, children: [(0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `tooltip-${props.origin}-${props.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", place: "top", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: pokemonInPortrait, emotion: pokemonCustom.emotion, shiny: pokemonCustom.shiny }, pokemonInPortrait.id) }), willEvolve && pokemonEvolution && ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-portrait-evolution", children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(pokemon.index, pokemonCustom.shiny, pokemonCustom.emotion), className: "game-pokemon-portrait-evolution-portrait" }), (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/evolution.png", alt: "", className: "game-pokemon-portrait-evolution-icon" })] })), props.inPlanner && (!willEvolve || !pokemonEvolution) && ((0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/planned.png", alt: "", className: "game-pokemon-portrait-planned-icon" })), props.origin === "shop" && ((0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-portrait-cost", children: (0, jsx_runtime_1.jsx)(money_1.Money, { value: cost }) })), (0, jsx_runtime_1.jsx)("ul", { className: "game-pokemon-portrait-types", children: Array.from(pokemonInPortrait.types.values()).map((type) => {
                    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, type));
                }) })] }));
}
//# sourceMappingURL=game-pokemon-portrait.js.map