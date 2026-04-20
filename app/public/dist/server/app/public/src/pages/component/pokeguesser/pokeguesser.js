"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pokeguesser;
exports.PokemonSelect = PokemonSelect;
exports.PokemonAttempt = PokemonAttempt;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const precomputed_pokemons_1 = require("../../../../../models/precomputed/precomputed-pokemons");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const number_1 = require("../../../../../utils/number");
const random_1 = require("../../../../../utils/random");
const schemas_1 = require("../../../../../utils/schemas");
const jsx_1 = require("../../utils/jsx");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const modal_1 = require("../modal/modal");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./pokeguesser.css");
const listPokemonsToGuess = precomputed_pokemons_1.precomputedPokemonsImplemented
    .filter((p) => !(Pokemon_1.PkmFamily[p.name] === Pokemon_1.Pkm.UNOWN_A && p.name !== Pokemon_1.Pkm.UNOWN_A))
    .sort((a, b) => parseInt(a.index.split("-")[0]) - parseInt(b.index.split("-")[0]));
function Pokeguesser(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [pokemonToGuess, setPokemonToGuess] = (0, react_1.useState)((0, random_1.pickRandomIn)(listPokemonsToGuess));
    const [attempts, setAttempts] = (0, react_1.useState)([]);
    const [value, setValue] = (0, react_1.useState)("");
    const [found, setFound] = (0, react_1.useState)(false);
    const [difficulty, setDifficulty] = (0, react_1.useState)("normal");
    const submitGuess = (pokemonName) => {
        const pokemon = listPokemonsToGuess.find((p) => p.name === pokemonName);
        if (!pokemon)
            return null;
        setAttempts([...attempts, pokemon]);
        setValue("");
        if (Pokemon_1.PkmFamily[pokemonName] === Pokemon_1.Pkm.UNOWN_A) {
            setFound(Pokemon_1.PkmFamily[pokemonToGuess.name] === Pokemon_1.Pkm.UNOWN_A);
        }
        else if (pokemonToGuess.name in config_1.PkmAltFormsByPkm ||
            config_1.PkmAltForms.includes(pokemonName)) {
            setFound((0, config_1.getBaseAltForm)(pokemonToGuess.name) === (0, config_1.getBaseAltForm)(pokemonName));
        }
        else if (pokemonName === pokemonToGuess.name) {
            setFound(true);
        }
    };
    const resetGame = () => {
        setPokemonToGuess((0, random_1.pickRandomIn)(listPokemonsToGuess));
        setAttempts([]);
        setValue("");
        setFound(false);
    };
    (0, react_1.useEffect)(() => {
        resetGame();
    }, [difficulty]);
    return ((0, jsx_runtime_1.jsxs)(modal_1.Modal, { show: props.show, onClose: props.handleClose, className: "game-pokeguesser-modal", header: t("gadget.pokeguesser"), children: [(0, jsx_runtime_1.jsxs)("fieldset", { className: "pokeguesser-options", children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: "difficulty-select", style: { marginRight: 8 }, children: [t("pokeguessr.difficulty") || "Difficulty", ":"] }), (0, jsx_runtime_1.jsxs)("select", { id: "difficulty-select", style: { marginRight: 16 }, value: difficulty, onChange: (e) => setDifficulty(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "easy", children: t("pokeguessr.easy") }), (0, jsx_runtime_1.jsx)("option", { value: "normal", children: t("pokeguessr.normal") }), (0, jsx_runtime_1.jsx)("option", { value: "hard", children: t("pokeguessr.hard") })] })] }), (0, jsx_runtime_1.jsx)("h2", { children: found
                    ? t("pokeguessr.itssolution", { pokemon: pokemonToGuess.name })
                    : t("pokeguessr.whosthatpokemon") }), difficulty === "hard" && !found ? ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/missing-portrait.png", className: "pokemon-portrait" })) : ((0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: { index: pokemonToGuess.index }, draggable: "false", onDragStart: (e) => e.preventDefault(), style: {
                    filter: found
                        ? ""
                        : difficulty === "easy"
                            ? `blur(${16 - (0, number_1.clamp)(attempts.length, 0, 15)}px)`
                            : `blur(${16 - (0, number_1.clamp)(attempts.length, 0, 15)}px) grayscale(${100 - (0, number_1.clamp)(attempts.length, 0, 10) * 10}%)`
                } })), found ? ((0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: resetGame, children: t("pokeguessr.reset") }) })) : ((0, jsx_runtime_1.jsx)(PokemonSelect, { value: value, setValue: setValue, onSubmit: submitGuess })), (0, jsx_runtime_1.jsxs)("div", { className: "attempts", children: [(0, jsx_runtime_1.jsx)("h3", { children: t("pokeguessr.attempts", { count: attempts.length }) }), (0, jsx_runtime_1.jsx)("ul", { children: attempts.map((pkm, i) => ((0, jsx_runtime_1.jsx)(PokemonAttempt, { index: i, pokemon: pkm, solution: pokemonToGuess, difficulty: difficulty }, i))) })] })] }));
}
function PokemonSelect({ value, setValue, onSubmit }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [showDropdown, setShowDropdown] = (0, react_1.useState)(false);
    const [filtered, setFiltered] = (0, react_1.useState)(listPokemonsToGuess);
    const inputRef = (0, react_1.useRef)(null);
    const dropdownRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        setFiltered(listPokemonsToGuess.filter((p) => p.name.toLowerCase().startsWith(value.toLowerCase())));
    }, [value]);
    (0, react_1.useEffect)(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSelect = (name) => {
        setValue(name);
        setShowDropdown(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(value);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, id: "pokemon-select-form", children: [(0, jsx_runtime_1.jsxs)("div", { children: [value &&
                        (() => {
                            const selected = listPokemonsToGuess.find((p) => p.name === value);
                            if (!selected)
                                return null;
                            return ((0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(selected.index), alt: selected.name, style: { width: 32, height: 32 } }));
                        })(), (0, jsx_runtime_1.jsx)("input", { ref: inputRef, name: "pokemon", id: "pokemon-custom-input", value: value, onChange: (e) => {
                            setValue(e.target.value);
                            setShowDropdown(true);
                        }, autoComplete: "off", placeholder: "Select a Pok\u00E9mon...", onFocus: () => setShowDropdown(true), onKeyDown: (e) => {
                            if (e.key === "Enter" && filtered.length === 1) {
                                e.preventDefault();
                                setShowDropdown(false);
                                if (onSubmit) {
                                    onSubmit(filtered[0].name);
                                }
                            }
                            else if (e.key === "Escape") {
                                setShowDropdown(false);
                                e.stopPropagation();
                            }
                        } }), showDropdown && filtered.length > 0 && ((0, jsx_runtime_1.jsx)("div", { ref: dropdownRef, className: "dropdown", children: filtered.map((p) => ((0, jsx_runtime_1.jsxs)("div", { className: "dropdown-item", onMouseDown: () => handleSelect(p.name), children: [(0, jsx_runtime_1.jsx)("span", { className: "portrait", children: (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(p.index), alt: p.name, style: { width: 32, height: 32, marginRight: 8 } }) }), (0, jsx_runtime_1.jsx)("span", { className: "name", children: t(`pkm.${p.name}`) })] }, p.name))) }))] }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", type: "submit", children: t("pokeguessr.guess") })] }));
}
function PokemonAttempt({ pokemon, solution, index, difficulty }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const statsHints = [
        Game_1.Stat.HP,
        Game_1.Stat.ATK,
        Game_1.Stat.DEF,
        Game_1.Stat.SPEED,
        Game_1.Stat.SPE_DEF,
        Game_1.Stat.RANGE,
        Game_1.Stat.PP
    ];
    const randomStat = statsHints[(index + parseInt(solution.index)) % 7];
    const statMapping = {
        [Game_1.Stat.HP]: "hp",
        [Game_1.Stat.ATK]: "atk",
        [Game_1.Stat.DEF]: "def",
        [Game_1.Stat.SPEED]: "speed",
        [Game_1.Stat.SPE_DEF]: "speDef",
        [Game_1.Stat.RANGE]: "range",
        [Game_1.Stat.PP]: "maxPP"
    };
    const pokemonStat = pokemon[statMapping[randomStat]];
    const solutionStat = solution[statMapping[randomStat]];
    return ((0, jsx_runtime_1.jsxs)("li", { className: "pokemon-attempt", children: [(0, jsx_runtime_1.jsxs)("span", { className: (0, jsx_1.cc)("name", { valid: pokemon.name === solution.name }), children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", src: (0, avatar_1.getPortraitSrc)(pokemon.index), alt: pokemon.name, style: {
                            width: 32,
                            height: 32,
                            marginRight: 8
                        } }), t(`pkm.${pokemon.name}`)] }), (0, jsx_runtime_1.jsx)("span", { className: (0, jsx_1.cc)("rarity", { valid: pokemon.rarity === solution.rarity }), children: t(`rarity.${pokemon.rarity}`) }), (0, jsx_runtime_1.jsxs)("span", { className: (0, jsx_1.cc)("stars", { valid: pokemon.stars === solution.stars }), children: [" ", Array.from({ length: pokemon.stars }, (_, i) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star.svg", height: "24" }, "star" + i)))] }), (difficulty === "easy" || index >= 8) && ((0, jsx_runtime_1.jsx)("span", { className: (0, jsx_1.cc)("pool", {
                    valid: pokemon.regional
                        ? pokemon.regional === solution.regional
                        : pokemon.additional === solution.additional
                }), children: t(`pool.${pokemon.regional ? "regional" : pokemon.additional ? "additional" : "regular"}`) })), (0, schemas_1.values)(pokemon.types).map((type, i) => ((0, jsx_runtime_1.jsxs)("span", { className: (0, jsx_1.cc)("type", type, { valid: solution.types.has(type) }), children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), " ", t(`synergy.${type}`)] }, i))), (0, jsx_runtime_1.jsxs)("span", { className: (0, jsx_1.cc)("stat", { valid: pokemonStat === solutionStat }), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${randomStat.toUpperCase()}.png`, alt: t(`stat.${randomStat}`), title: t(`stat.${randomStat}`), height: "32" }), " ", pokemonStat, solutionStat > pokemonStat
                        ? " ⏶"
                        : solutionStat < pokemonStat
                            ? " ⏷"
                            : ""] })] }));
}
//# sourceMappingURL=pokeguesser.js.map