"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyDetailComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const synergies_1 = require("../../../../../config/game/synergies");
const synergies_2 = require("../../../../../models/colyseus-models/synergies");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_and_categories_1 = require("../../../../../models/precomputed/precomputed-types-and-categories");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const board_1 = require("../../../../../utils/board");
const number_1 = require("../../../../../utils/number");
const schemas_1 = require("../../../../../utils/schemas");
const hooks_1 = require("../../../hooks");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_portrait_1 = require("../game/game-pokemon-portrait");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const effect_description_1 = require("./effect-description");
const keepFirstOfFamily = (arr) => {
    const seenFamilies = new Set();
    return arr.filter((p) => {
        const family = Pokemon_1.PkmFamily[p];
        if (seenFamilies.has(family))
            return false;
        seenFamilies.add(family);
        return true;
    });
};
const baseVariant = (pkm) => {
    var _a;
    return (_a = Object.keys(Pokemon_1.PkmRegionalVariants).find((p) => Pokemon_1.PkmRegionalVariants[p].includes(pkm))) !== null && _a !== void 0 ? _a : pkm;
};
function SynergyDetailComponent(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const additionalPokemons = (0, hooks_1.useAppSelector)((state) => state.game.additionalPokemons);
    const stageLevel = (0, hooks_1.useAppSelector)((state) => state.game.stageLevel);
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const levelReached = config_1.SynergyTriggers[props.type]
        .filter((n) => n <= props.value)
        .at(-1);
    const regulars = keepFirstOfFamily(precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].pokemons)
        .map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p))
        .sort((a, b) => config_1.RarityCost[a.rarity] - config_1.RarityCost[b.rarity]);
    const additionals = keepFirstOfFamily(precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].additionalPokemons.filter((p) => additionalPokemons.includes(baseVariant(Pokemon_1.PkmFamily[p])) ||
        specialGameRule === SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE)).map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const uniques = keepFirstOfFamily(precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].uniquePokemons).map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const legendaries = keepFirstOfFamily(precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].legendaryPokemons).map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    const specials = keepFirstOfFamily(precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[props.type].specialPokemons).map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
    let additionalInfo = "";
    if (spectatedPlayer) {
        switch (props.type) {
            case Synergy_1.Synergy.WILD: {
                const wildChance = (0, synergies_2.getWildChance)(spectatedPlayer, stageLevel);
                additionalInfo = t("synergy_description.WILD_ADDITIONAL", {
                    wildChance: (0, number_1.roundToNDigits)(wildChance * 100, 1)
                });
                break;
            }
            case Synergy_1.Synergy.BABY: {
                additionalInfo = t("synergy_description.BABY_CHANCE_STACKED", {
                    eggChance: (0, number_1.roundToNDigits)((levelReached === 7
                        ? spectatedPlayer.goldenEggChance
                        : spectatedPlayer.eggChance) * 100, 1)
                });
                break;
            }
            case Synergy_1.Synergy.DRAGON: {
                const totalDragonStars = (0, schemas_1.schemaValues)(spectatedPlayer.board).reduce((acc, pokemon) => acc +
                    (pokemon.types.has(Synergy_1.Synergy.DRAGON) && !(0, board_1.isOnBench)(pokemon)
                        ? pokemon.stars
                        : 0), 0);
                additionalInfo = t("synergy_description.DRAGON_STARS", {
                    totalStars: totalDragonStars
                });
                break;
            }
            case Synergy_1.Synergy.ELECTRIC: {
                additionalInfo = t("synergy_description.ELECTRIC_CHARGE", {
                    charge: spectatedPlayer.cellBattery
                });
                break;
            }
            case Synergy_1.Synergy.NORMAL: {
                additionalInfo = t("synergy_description.NORMAL_SCARVES", {
                    scarves: spectatedPlayer.scarvesItems.join(" ")
                });
                break;
            }
            default:
                break;
        }
    }
    if (props.type === Synergy_1.Synergy.FAIRY && spectatedPlayer) {
        additionalInfo = t("synergy_description.FAIRY_WANDS", {
            wands: spectatedPlayer.fairyWands.join(" ")
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { style: { maxWidth: "560px" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type, size: "40px" }), (0, jsx_runtime_1.jsx)("h3", { style: { margin: 0 }, children: t(`synergy.${props.type}`) })] }), (0, jsx_runtime_1.jsx)("p", { style: { whiteSpace: "pre-wrap" }, children: (0, descriptions_1.addIconsToDescription)(t(`synergy_description.${props.type}`, { additionalInfo })) }), synergies_1.SynergyEffects[props.type].map((effect, i) => {
                return ((0, jsx_runtime_1.jsxs)("div", { style: {
                        color: levelReached === config_1.SynergyTriggers[props.type][i]
                            ? "var(--color-fg-primary)"
                            : "var(--color-fg-secondary)",
                        backgroundColor: levelReached === config_1.SynergyTriggers[props.type][i]
                            ? "var(--color-bg-secondary)"
                            : "transparent",
                        border: levelReached === config_1.SynergyTriggers[props.type][i]
                            ? "var(--border-thick)"
                            : "none",
                        borderRadius: "12px",
                        padding: "5px"
                    }, children: [(0, jsx_runtime_1.jsxs)("h4", { style: { fontSize: "1.2em", marginBottom: 0 }, children: ["(", config_1.SynergyTriggers[props.type][i], ") ", t(`effect.${effect}`)] }), (0, jsx_runtime_1.jsx)(effect_description_1.EffectDescriptionComponent, { effect: effect })] }, effect));
            }), (0, jsx_runtime_1.jsx)(PokemonPortraitList, { pokemons: regulars, type: props.type, player: spectatedPlayer }), (0, jsx_runtime_1.jsx)(PokemonPortraitList, { pokemons: additionals, type: props.type, player: spectatedPlayer, marginTop: "0.5em" }), (0, jsx_runtime_1.jsx)(PokemonPortraitList, { pokemons: uniques, type: props.type, player: spectatedPlayer, marginTop: "0.5em" }), (0, jsx_runtime_1.jsx)(PokemonPortraitList, { pokemons: legendaries, type: props.type, player: spectatedPlayer, marginTop: "0.5em" }), (0, jsx_runtime_1.jsx)(PokemonPortraitList, { pokemons: specials, type: props.type, player: spectatedPlayer, marginTop: "0.5em" })] }));
}
function PokemonPortraitList(props) {
    const teamFamilies = new Set(props.player == null
        ? []
        : (0, schemas_1.schemaValues)(props.player.board)
            .filter((x) => x.types.has(props.type))
            .map((x) => Pokemon_1.PkmFamily[x.name]));
    return ((0, jsx_runtime_1.jsx)("div", { style: Object.assign({ display: "flex", flexWrap: "wrap" }, (props.marginTop ? { marginTop: props.marginTop } : {})), children: props.pokemons.map((p) => ((0, jsx_runtime_1.jsx)(PokemonPortrait, { p: p, type: props.type, player: props.player, teamFamilies: teamFamilies }, p.name))) }));
}
function PokemonPortrait(props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
            additional: props.p.additional,
            regional: props.p.regional,
            acquired: props.teamFamilies.has(Pokemon_1.PkmFamily[props.p.name])
        }), style: {
            color: config_1.RarityColor[props.p.rarity],
            border: "3px solid " + config_1.RarityColor[props.p.rarity]
        }, children: (0, jsx_runtime_1.jsx)("img", { src: (0, game_pokemon_portrait_1.getCachedPortrait)(props.p.index, (_a = props.player) === null || _a === void 0 ? void 0 : _a.pokemonCustoms), alt: `${props.p.name} portrait` }) }, props.p.name));
}
//# sourceMappingURL=synergy-detail-component.js.map