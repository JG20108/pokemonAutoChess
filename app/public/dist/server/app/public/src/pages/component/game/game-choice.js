"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameChoice;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const array_1 = require("../../../../../utils/array");
const depths_1 = require("../../../game/depths");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const game_1 = require("../../game");
const audio_1 = require("../../utils/audio");
const descriptions_1 = require("../../utils/descriptions");
const store_1 = require("../../utils/store");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const game_pokemon_duo_portrait_1 = __importDefault(require("./game-pokemon-duo-portrait"));
const game_pokemon_portrait_1 = __importDefault(require("./game-pokemon-portrait"));
require("./game-choice.css");
function isPokemonChoice(choice) {
    return choice.pokemons.length > 0;
}
function GameChoice() {
    var _a, _b, _c;
    const { t } = (0, react_i18next_1.useTranslation)();
    const connectedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectConnectedPlayer);
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const life = (_a = connectedPlayer === null || connectedPlayer === void 0 ? void 0 : connectedPlayer.life) !== null && _a !== void 0 ? _a : 0;
    const choices = (_b = connectedPlayer === null || connectedPlayer === void 0 ? void 0 : connectedPlayer.choices) !== null && _b !== void 0 ? _b : [];
    const board = (_c = (0, game_1.getGameScene)()) === null || _c === void 0 ? void 0 : _c.board;
    const hasPokemonChoice = choices.some(isPokemonChoice);
    const containsDuo = choices.some((choice) => choice.pokemons.some((pokemon) => pokemon in Pokemon_1.PkmDuo));
    const isBenchFull = board && hasPokemonChoice && board.getBenchSize() >= (containsDuo ? 7 : 8);
    const [teamPlanner, setTeamPlanner] = (0, react_1.useState)(store_1.localStore.get(store_1.LocalStoreKeys.TEAM_PLANNER));
    (0, react_1.useEffect)(() => {
        const updateTeamPlanner = (event) => {
            if (event.key === store_1.LocalStoreKeys.TEAM_PLANNER) {
                setTeamPlanner(store_1.localStore.get(store_1.LocalStoreKeys.TEAM_PLANNER));
            }
        };
        window.addEventListener("storage", updateTeamPlanner);
        return () => {
            window.removeEventListener("storage", updateTeamPlanner);
        };
    }, []);
    const [visible, setVisible] = (0, react_1.useState)(true);
    if (choices.length === 0 || life <= 0) {
        return null;
    }
    const choice = choices[0];
    let message = null;
    if (choice.type === "synergy") {
        message = t("player_choices.choose_monotype");
    }
    else if (choice.type === "addPick") {
        message = t("player_choices.choose_add_pick");
    }
    else if (choice.type === "starter") {
        if (specialGameRule === SpecialGameRule_1.SpecialGameRule.FIRST_PARTNER) {
            message = t("player_choices.choose_first_partner");
        }
        else if (specialGameRule === SpecialGameRule_1.SpecialGameRule.PSEUDO_JOURNEY) {
            message = t("player_choices.choose_pseudo_legendary");
        }
        else if (specialGameRule === SpecialGameRule_1.SpecialGameRule.CHOSEN_ONE) {
            message = t("player_choices.choose_chosen_one");
        }
        else {
            message = t("player_choices.choose_starter");
        }
    }
    else if (choice.type === "mission_order") {
        message = t("player_choices.choose_mission_order");
    }
    else if (choice.type === "unique") {
        message = t("player_choices.choose_unique");
    }
    else if (choice.type === "legendary") {
        message = t("player_choices.choose_legendary");
    }
    else if (choice.type === "item") {
        message = t("player_choices.choose_item");
    }
    else if (choice.type === "wand") {
        message = t("player_choices.choose_wand");
    }
    const isChosenOne = choice.type === "starter" &&
        specialGameRule === SpecialGameRule_1.SpecialGameRule.CHOSEN_ONE;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-choice", style: { zIndex: depths_1.DEPTH.MODAL }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "my-container", style: { visibility: visible ? "visible" : "hidden" }, children: [message && (0, jsx_runtime_1.jsx)("h2", { children: message }), choice.type === "synergy" ? ((0, jsx_runtime_1.jsx)("div", { className: "game-choice-synergy-list", children: choice.synergies.map((synergy, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "my-box active clickable game-choice-synergy-item", onClick: (event) => {
                                event.stopPropagation();
                                (0, audio_1.playSound)(audio_1.SOUNDS.BUTTON_CLICK);
                                (0, network_1.pickChoice)(choice.id, index);
                            }, children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy, size: "2rem" }), (0, jsx_runtime_1.jsx)("span", { children: t(`synergy.${synergy}`) })] }, `${choice.id}-${index}`))) })) : choice.pokemons.length > 0 ? ((0, jsx_runtime_1.jsx)("div", { className: isChosenOne
                            ? "game-choice-pokemons-grid"
                            : "game-choice-pokemons-list", children: choice.pokemons.map((proposition, index) => {
                            var _a, _b;
                            const item = choice.items[index];
                            return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box active clickable", onClick: (event) => {
                                    event.stopPropagation();
                                    (0, audio_1.playSound)(audio_1.SOUNDS.BUTTON_CLICK);
                                    (0, network_1.pickChoice)(choice.id, index);
                                }, children: [proposition in Pokemon_1.PkmDuos ? ((0, jsx_runtime_1.jsx)(game_pokemon_duo_portrait_1.default, { origin: "proposition", index: index, duo: proposition, inPlanner: (_a = teamPlanner === null || teamPlanner === void 0 ? void 0 : teamPlanner.some((pokemon) => pokemon.name === proposition[0] ||
                                            pokemon.name === proposition[1])) !== null && _a !== void 0 ? _a : false }, `proposition-${choice.id}-${index}`)) : ((0, jsx_runtime_1.jsx)(game_pokemon_portrait_1.default, { origin: "proposition", index: index, pokemon: proposition, inPlanner: (_b = teamPlanner === null || teamPlanner === void 0 ? void 0 : teamPlanner.some((pokemon) => {
                                            if (proposition in Pokemon_1.PkmDuos) {
                                                return Pokemon_1.PkmDuos[proposition].includes(pokemon.name);
                                            }
                                            return Pokemon_1.PkmFamily[pokemon.name] === proposition;
                                        })) !== null && _b !== void 0 ? _b : false }, `proposition-${choice.id}-${index}`)), item && (0, array_1.isIn)(Item_1.ShinyItems, item) === false && ((0, jsx_runtime_1.jsxs)("div", { className: "choice-additional-item", children: [(0, jsx_runtime_1.jsx)("span", { style: {
                                                    fontSize: "2rem",
                                                    verticalAlign: "middle"
                                                }, children: "+" }), (0, jsx_runtime_1.jsx)("img", { style: {
                                                    width: "2rem",
                                                    height: "2rem",
                                                    verticalAlign: "middle"
                                                }, src: "assets/item/" + item + ".png" }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`item_description.${item}`)) })] }))] }, `${choice.id}-${index}`));
                        }) })) : ((0, jsx_runtime_1.jsx)("div", { className: "game-choice-items-list", children: choice.items.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "my-box active clickable", onClick: (event) => {
                                event.stopPropagation();
                                (0, audio_1.playSound)(audio_1.SOUNDS.BUTTON_CLICK);
                                (0, network_1.pickChoice)(choice.id, index);
                            }, children: [(0, jsx_runtime_1.jsx)("img", { style: { width: "4rem", height: "4rem" }, src: "assets/item/" + item + ".png" }), (0, jsx_runtime_1.jsx)("h3", { style: { margin: "0.25em 0" }, children: t(`item.${item}`) }), (0, jsx_runtime_1.jsx)("p", { style: { marginBottom: "0.5em" }, children: (0, descriptions_1.addIconsToDescription)(t(`item_description.${item}`)) })] }, `${choice.id}-${index}`))) })), isBenchFull && choice.pokemons.length > 0 && ((0, jsx_runtime_1.jsx)("p", { children: t("player_choices.free_slot_hint") }))] }), (0, jsx_runtime_1.jsx)("div", { className: "show-hide-action", children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange active", onClick: () => {
                        setVisible(!visible);
                    }, children: visible ? t("hide") : t("show") }) })] }));
}
//# sourceMappingURL=game-choice.js.map