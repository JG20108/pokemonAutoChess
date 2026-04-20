"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTypeahead = PokemonTypeahead;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Ability_1 = require("../../../../../types/enum/Ability");
const Passive_1 = require("../../../../../types/enum/Passive");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
require("./pokemon-typeahead.css");
function PokemonTypeahead({ onChange, value, options }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const pokemonOptions = options ||
        Object.values(Pokemon_1.Pkm)
            .filter((p) => {
            const pokemon = (0, precomputed_pokemon_data_1.getPokemonData)(p);
            return ((pokemon.skill !== Ability_1.Ability.DEFAULT ||
                pokemon.passive !== Passive_1.Passive.NONE) &&
                config_1.PkmAltForms.includes(pokemon.name) === false);
        })
            .sort((a, b) => t("pkm." + a).localeCompare(t("pkm." + b)));
    return ((0, jsx_runtime_1.jsxs)("select", { value: value, onChange: (e) => { var _a, _b; return onChange((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ""); }, className: "pokemon-typeahead", children: [(0, jsx_runtime_1.jsx)("option", { value: "", disabled: true, children: t("search_pokemon") }), (0, jsx_runtime_1.jsx)("option", { value: "", children: t("all") }), pokemonOptions.map((p) => ((0, jsx_runtime_1.jsx)("option", { value: p, children: t("pkm." + p) }, p)))] }));
}
//# sourceMappingURL=pokemon-typeahead.js.map