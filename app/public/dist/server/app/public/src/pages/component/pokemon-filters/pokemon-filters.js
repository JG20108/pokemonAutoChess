"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonFilters = PokemonFilters;
exports.filterPokemonsAccordingToPreferences = filterPokemonsAccordingToPreferences;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const preferences_1 = require("../../../preferences");
const toggle_1 = require("../../utils/toggle");
const checkbox_1 = require("../checkbox/checkbox");
require("./pokemon-filters.css");
const config_1 = require("../../../../../config");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Ability_1 = require("../../../../../types/enum/Ability");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
function PokemonFilters() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [preferences, setPreferences] = (0, preferences_1.usePreferences)();
    const pools = [
        "showRegularPool",
        "showAdditionalPool",
        "showRegionalPool",
        "showSpecialPool"
    ];
    const poolByPreference = {
        showRegularPool: "regular",
        showAdditionalPool: "additional",
        showRegionalPool: "regional",
        showSpecialPool: "special"
    };
    const isTheOnlyPoolSelected = (pool) => {
        const otherPools = pools.filter((p) => p !== pool);
        return (preferences[pool] === true &&
            otherPools.every((p) => preferences[p] === false));
    };
    return ((0, jsx_runtime_1.jsxs)("details", { className: "pokemon-filters", onToggle: toggle_1.closeSiblingDetails, children: [(0, jsx_runtime_1.jsx)("summary", { children: t("filters") }), (0, jsx_runtime_1.jsxs)("div", { children: [pools.map((pool) => ((0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: preferences[pool], disabled: isTheOnlyPoolSelected(pool), onToggle: (checked) => {
                            setPreferences({ [pool]: checked });
                        }, label: t(`pool.${poolByPreference[pool]}`), isDark: true }, pool))), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: preferences.showEvolutions, onToggle: (checked) => {
                            setPreferences({ showEvolutions: checked });
                        }, label: t("show_evolutions"), isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: preferences.showAltForms, onToggle: (checked) => {
                            setPreferences({ showAltForms: checked });
                        }, label: t("show_alt_forms"), isDark: true })] })] }));
}
function filterPokemonsAccordingToPreferences(pokemons, preferences, includesNonPkm = false) {
    const data = pokemons.map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    return pokemons.filter((p) => {
        if (Pokemon_1.NonPkm.includes(p) && !includesNonPkm)
            return false;
        const { additional, regional, rarity, skill, stars } = (0, precomputed_pokemon_data_1.getPokemonData)(p);
        if (skill === Ability_1.Ability.DEFAULT && !includesNonPkm)
            return false;
        const special = rarity === Game_1.Rarity.SPECIAL;
        if (!preferences.showAdditionalPool && additional)
            return false;
        if (!preferences.showRegionalPool && regional)
            return false;
        if (!preferences.showSpecialPool && special)
            return false;
        if (!preferences.showRegularPool && !(additional || regional || special))
            return false;
        if (config_1.PkmAltForms.includes(p) && !preferences.showAltForms)
            return false;
        if (!preferences.showEvolutions) {
            const prevolution = data.find((p2) => {
                return (p2.evolution === p ||
                    p2.evolutions.includes(p) ||
                    (Pokemon_1.PkmFamily[p2.name] === Pokemon_1.PkmFamily[p] && p2.stars < stars));
            });
            if (prevolution && prevolution.rarity === rarity)
                return false;
        }
        return true;
    });
}
//# sourceMappingURL=pokemon-filters.js.map