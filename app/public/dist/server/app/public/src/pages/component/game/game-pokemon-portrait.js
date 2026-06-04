"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedPortrait = getCachedPortrait;
exports.default = GamePokemonPortrait;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../../config");
const evolution_manager_1 = require("../../../../../core/evolution-logic/evolution-manager");
const pokemon_customs_1 = require("../../../../../models/colyseus-models/pokemon-customs");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const shop_1 = require("../../../../../models/shop");
const EvolutionRules_1 = require("../../../../../types/EvolutionRules");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const schemas_1 = require("../../../../../utils/schemas");
const hooks_1 = require("../../../hooks");
const game_1 = require("../../game");
const jsx_1 = require("../../utils/jsx");
const money_1 = require("../icons/money");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const game_pokemon_detail_1 = require("./game-pokemon-detail");
require("./game-pokemon-portrait.css");
function getCachedPortrait(index, customs) {
    var _a;
    const scene = (0, game_1.getGameScene)();
    const pokemonCustom = (0, pokemon_customs_1.getPkmWithCustom)(index, customs);
    return ((_a = scene === null || scene === void 0 ? void 0 : scene.textures.getBase64(`portrait-${index}`)) !== null && _a !== void 0 ? _a : (0, avatar_1.getPortraitSrc)(index, pokemonCustom.shiny, pokemonCustom.emotion));
}
function GamePokemonPortrait(props) {
    var _a, _b, _c, _d;
    const pokemon = (0, react_1.useMemo)(() => {
        if (typeof props.pokemon === "string") {
            const pokemon = pokemon_factory_1.default.createPokemonFromName(props.pokemon);
            pokemon.pp = pokemon.maxPP;
            return pokemon;
        }
        return props.pokemon;
    }, [props.pokemon]);
    const currentPlayerUid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const spectatedPlayerId = (0, hooks_1.useAppSelector)((state) => state.game.playerIdSpectated);
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const connectedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectConnectedPlayer);
    const board = (_a = connectedPlayer === null || connectedPlayer === void 0 ? void 0 : connectedPlayer.board) !== null && _a !== void 0 ? _a : null;
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const stageLevel = (0, hooks_1.useAppSelector)((state) => state.game.stageLevel);
    const isOnAnotherBoard = spectatedPlayerId !== currentPlayerUid;
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
    const customs = spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.pokemonCustoms;
    const pokemonCustom = (0, pokemon_customs_1.getPkmWithCustom)(pokemon.index, customs);
    const rarityColor = config_1.RarityColor[pokemon.rarity];
    const evolutionName = spectatedPlayer
        ? evolution_manager_1.EvolutionManager.getEvolution(pokemon, spectatedPlayer)
        : ((_b = pokemon.evolutions[0]) !== null && _b !== void 0 ? _b : pokemon.evolution);
    let pokemonEvolution = pokemon_factory_1.default.createPokemonFromName(evolutionName);
    const willEvolve = pokemon.evolutionRule.type === EvolutionRules_1.EvolutionRuleType.COUNT &&
        count === pokemon.evolutionRule.numberRequired - 1;
    const shouldShimmer = pokemon.evolutionRule.type === EvolutionRules_1.EvolutionRuleType.COUNT &&
        ((count > 0 && pokemon.hasEvolution) ||
            (countEvol > 0 && pokemonEvolution.hasEvolution));
    if (pokemon.evolutionRule.type === EvolutionRules_1.EvolutionRuleType.COUNT &&
        count === pokemon.evolutionRule.numberRequired - 1 &&
        countEvol === pokemon.evolutionRule.numberRequired - 1 &&
        pokemonEvolution.hasEvolution) {
        const evolutionName2 = spectatedPlayer
            ? evolution_manager_1.EvolutionManager.getEvolution(pokemonEvolution, spectatedPlayer, stageLevel)
            : ((_c = pokemonEvolution.evolutions[0]) !== null && _c !== void 0 ? _c : pokemonEvolution.evolution);
        pokemonEvolution = pokemon_factory_1.default.createPokemonFromName(evolutionName2);
    }
    const pokemonInPortrait = willEvolve && pokemonEvolution ? pokemonEvolution : pokemon;
    const cost = (0, shop_1.getBuyPrice)(pokemon.name, specialGameRule);
    const gainedSynergies = pokemonEvolution && willEvolve
        ? (0, schemas_1.schemaValues)(pokemonEvolution.types).filter((type) => !pokemon.types.has(type))
        : [];
    const lostSynergies = pokemonEvolution && willEvolve
        ? (0, schemas_1.schemaValues)(pokemon.types).filter((type) => !pokemonEvolution.types.has(type))
        : [];
    const canBuy = (spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.alive) && (spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.money) >= cost;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("my-box", "clickable", "game-pokemon-portrait", {
            shimmer: shouldShimmer,
            disabled: !canBuy && props.origin === "shop",
            planned: (_d = props.inPlanner) !== null && _d !== void 0 ? _d : false
        }), style: {
            backgroundColor: rarityColor,
            borderColor: rarityColor,
            backgroundImage: `url("${getCachedPortrait(pokemonInPortrait.index, customs)}")`
        }, onClick: (e) => {
            if (canBuy && props.click)
                props.click(e);
        }, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, "data-tooltip-id": `tooltip-${props.origin}-${props.index}`, children: [(0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `tooltip-${props.origin}-${props.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", place: "top", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: pokemonInPortrait, emotion: pokemonCustom.emotion, shiny: pokemonCustom.shiny, origin: props.origin }, pokemonInPortrait.id) }), willEvolve && pokemonEvolution && ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-portrait-evolution", children: [(0, jsx_runtime_1.jsx)("img", { src: getCachedPortrait(pokemon.index, customs), className: "game-pokemon-portrait-evolution-portrait" }), (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/evolution.png", alt: "", className: "game-pokemon-portrait-evolution-icon" })] })), props.inPlanner && (!willEvolve || !pokemonEvolution) && ((0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/planned.png", alt: "", className: "game-pokemon-portrait-planned-icon" })), props.origin === "shop" && ((0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-portrait-cost", children: (0, jsx_runtime_1.jsx)(money_1.Money, { value: cost }) })), (0, jsx_runtime_1.jsxs)("ul", { className: "game-pokemon-portrait-types", children: [Array.from(pokemonInPortrait.types.values()).map((type) => {
                        return ((0, jsx_runtime_1.jsx)("li", { className: (0, jsx_1.cc)({ gained: gainedSynergies.includes(type) }), children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, type));
                    }), lostSynergies.map((type) => ((0, jsx_runtime_1.jsx)("li", { className: "lost", children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, type)))] })] }));
}
//# sourceMappingURL=game-pokemon-portrait.js.map