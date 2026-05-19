"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePokemonDetailDOMWrapper = void 0;
exports.GamePokemonDetail = GamePokemonDetail;
exports.GamePokemonDetailTooltip = GamePokemonDetailTooltip;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = require("phaser");
const react_1 = require("react");
const client_1 = __importDefault(require("react-dom/client"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../../config");
const dishes_1 = require("../../../../../core/dishes");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Ability_1 = require("../../../../../types/enum/Ability");
const Game_1 = require("../../../../../types/enum/Game");
const Item_1 = require("../../../../../types/enum/Item");
const Passive_1 = require("../../../../../types/enum/Passive");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const avatar_1 = require("../../../../../utils/avatar");
const number_1 = require("../../../../../utils/number");
const schemas_1 = require("../../../../../utils/schemas");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const ability_tooltip_1 = require("../ability/ability-tooltip");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const game_tooltip_bar_1 = require("./game-tooltip-bar");
require("./game-pokemon-detail.css");
function GamePokemonDetail(props) {
    var _a, _b, _c, _d;
    const { t } = (0, react_i18next_1.useTranslation)();
    const pokemon = (0, react_1.useMemo)(() => {
        if (!props.pokemon) {
            return null;
        }
        if (typeof props.pokemon === "string") {
            const pokemon = pokemon_factory_1.default.createPokemonFromName(props.pokemon);
            pokemon.pp = pokemon.maxPP;
            return pokemon;
        }
        return props.pokemon;
    }, [props.pokemon]);
    const pokemonStats = (0, react_1.useMemo)(() => {
        if (!pokemon) {
            return [];
        }
        const baseStats = pokemon_factory_1.default.createPokemonFromName(pokemon.name);
        const stats = [
            { stat: Game_1.Stat.DEF, value: pokemon.def, baseValue: baseStats.def },
            { stat: Game_1.Stat.ATK, value: pokemon.atk, baseValue: baseStats.atk },
            {
                stat: Game_1.Stat.CRIT_CHANCE,
                value: pokemon.critChance,
                baseValue: baseStats.critChance,
                formatter: (value) => `${value}%`
            },
            { stat: Game_1.Stat.AP, value: pokemon.ap, baseValue: baseStats.ap },
            { stat: Game_1.Stat.RANGE, value: pokemon.range, baseValue: baseStats.range },
            {
                stat: Game_1.Stat.SPE_DEF,
                value: pokemon.speDef,
                baseValue: baseStats.speDef
            },
            { stat: Game_1.Stat.SPEED, value: pokemon.speed, baseValue: baseStats.speed },
            {
                stat: Game_1.Stat.CRIT_POWER,
                value: pokemon.critPower,
                baseValue: baseStats.critPower,
                formatter: (value) => `x${(0, number_1.roundToNDigits)(value, 1)}`
            },
            { stat: Game_1.Stat.LUCK, value: pokemon.luck, baseValue: baseStats.luck }
        ];
        return stats.map((s) => {
            if (props.origin === "team") {
                s.value = (0, schemas_1.schemaValues)(pokemon.items).reduce((acc, item) => {
                    var _a, _b;
                    let itemStatBonus = (_b = (_a = config_1.ItemStats[item]) === null || _a === void 0 ? void 0 : _a[s.stat]) !== null && _b !== void 0 ? _b : 0;
                    if (pokemon.items.has(Item_1.Item.BIG_EATER_BELT) &&
                        itemStatBonus > 0 &&
                        s.stat !== Game_1.Stat.PP) {
                        itemStatBonus = Math.floor(itemStatBonus * 1.25);
                    }
                    if (s.stat === Game_1.Stat.CRIT_POWER && itemStatBonus > 0) {
                        itemStatBonus = itemStatBonus / 100;
                    }
                    return acc + itemStatBonus;
                }, s.value);
            }
            return s;
        });
    }, [
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.name,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.items,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.def,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.atk,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.critChance,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.ap,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.range,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.speDef,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.speed,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.critPower,
        pokemon === null || pokemon === void 0 ? void 0 : pokemon.luck,
        props.origin
    ]);
    const getStatWithItemBonus = (stat) => {
        var _a;
        return (_a = pokemonStats.find((s) => s.stat === stat)) === null || _a === void 0 ? void 0 : _a.value;
    };
    let dish = pokemon ? dishes_1.DishByPkm[pokemon.name] : undefined;
    if (pokemon && !dish && pokemon.types.has(Synergy_1.Synergy.GOURMET)) {
        if (pokemon.items.has(Item_1.Item.COOKING_POT)) {
            dish = Item_1.Item.HEARTY_STEW;
        }
        else if (dish !== null) {
            dish = Item_1.Item.SANDWICH;
        }
    }
    const hp = (0, react_1.useMemo)(() => {
        if (!pokemon)
            return undefined;
        if (props.origin === "battle")
            return pokemon.hp;
        if (props.origin === "team") {
            return (0, schemas_1.schemaValues)(pokemon.items).reduce((acc, item) => { var _a, _b; return acc + ((_b = (_a = config_1.ItemStats[item]) === null || _a === void 0 ? void 0 : _a[Game_1.Stat.HP]) !== null && _b !== void 0 ? _b : 0); }, pokemon.hp);
        }
        return undefined;
    }, [pokemon === null || pokemon === void 0 ? void 0 : pokemon.hp, pokemon === null || pokemon === void 0 ? void 0 : pokemon.items, props.origin]);
    const pp = (0, react_1.useMemo)(() => {
        if (!pokemon)
            return undefined;
        if (props.origin === "battle")
            return pokemon.pp;
        if (props.origin === "team") {
            return (0, schemas_1.schemaValues)(pokemon.items).reduce((acc, item) => { var _a, _b; return acc + ((_b = (_a = config_1.ItemStats[item]) === null || _a === void 0 ? void 0 : _a[Game_1.Stat.PP]) !== null && _b !== void 0 ? _b : 0); }, pokemon.pp);
        }
        return undefined;
    }, [pokemon === null || pokemon === void 0 ? void 0 : pokemon.pp, pokemon === null || pokemon === void 0 ? void 0 : pokemon.items, props.origin]);
    const shield = (0, react_1.useMemo)(() => {
        if (!pokemon)
            return undefined;
        if (props.origin === "battle")
            return pokemon.shield;
        if (props.origin === "team") {
            return (0, schemas_1.schemaValues)(pokemon.items).reduce((acc, item) => { var _a, _b; return acc + ((_b = (_a = config_1.ItemStats[item]) === null || _a === void 0 ? void 0 : _a[Game_1.Stat.SHIELD]) !== null && _b !== void 0 ? _b : 0); }, 0);
        }
        return undefined;
    }, [pokemon === null || pokemon === void 0 ? void 0 : pokemon.items, props.origin, pokemon === null || pokemon === void 0 ? void 0 : pokemon.shield]);
    let name = pokemon ? t(`pkm.${pokemon.name}`) : "";
    if (pokemon &&
        pokemon.index === Pokemon_1.PkmIndex[Pokemon_1.Pkm.SUBSTITUTE] &&
        "evolution" in pokemon &&
        pokemon.evolution != null &&
        pokemon.evolution != Pokemon_1.Pkm.DEFAULT) {
        name += ` (${t(`pkm.${pokemon.evolution}`)})`;
    }
    const tmIcon = (0, react_1.useMemo)(() => {
        if (!pokemon || pokemon.tm === Ability_1.Ability.DEFAULT)
            return null;
        let icon = "assets/item/TM.png";
        console.log("TM", pokemon.tm, pokemon.skill);
        if (pokemon.tm === Ability_1.Ability.SKILL_SWAP &&
            pokemon.skill !== Ability_1.Ability.SKILL_SWAP) {
            icon = "assets/ui/SKILL_SWAP.png";
        }
        else if (Item_1.TMsBronze.some((x) => Item_1.AbilityPerTM[x] === pokemon.tm)) {
            icon = "assets/item/TM_BRONZE.png";
        }
        else if (Item_1.TMsGold.some((x) => Item_1.AbilityPerTM[x] === pokemon.tm)) {
            icon = "assets/item/TM_GOLD.png";
        }
        return ((0, jsx_runtime_1.jsx)("img", { src: icon, className: "game-pokemon-detail-ability-icon", alt: t("tm") }));
    }, [pokemon === null || pokemon === void 0 ? void 0 : pokemon.tm, pokemon === null || pokemon === void 0 ? void 0 : pokemon.skill]);
    if (!pokemon) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { className: "game-pokemon-detail-portrait", style: { borderColor: config_1.RarityColor[pokemon.rarity] }, portrait: {
                    index: pokemon.index,
                    shiny: (_a = props.shiny) !== null && _a !== void 0 ? _a : pokemon.shiny,
                    emotion: (_b = props.emotion) !== null && _b !== void 0 ? _b : pokemon.emotion
                } }), pokemon.index === Pokemon_1.PkmIndex[Pokemon_1.Pkm.EGG] &&
                "evolution" in pokemon &&
                pokemon.evolution != null && ((0, jsx_runtime_1.jsx)("img", { className: "game-pokemon-detail-portrait-hint", src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon.evolution]) })), (0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-entry", children: [(0, jsx_runtime_1.jsx)("p", { className: "game-pokemon-detail-entry-name", children: name }), (0, jsx_runtime_1.jsx)("p", { className: "game-pokemon-detail-entry-rarity", style: { color: config_1.RarityColor[pokemon.rarity] }, children: t(`rarity.${pokemon.rarity}`) }), (0, jsx_runtime_1.jsxs)("p", { className: "game-pokemon-detail-entry-tier", children: [Array.from({ length: pokemon.stars }, (_, index) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star.svg", height: "16" }, index))), Array.from({ length: (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).stages - pokemon.stars }, (_, index) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star_empty.svg", height: "16" }, index)))] })] }), (0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-detail-types", children: Array.from(pokemon.types.values()).map((type) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }, type))) }), (0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-bars", children: [(0, jsx_runtime_1.jsx)(game_tooltip_bar_1.GameTooltipBar, { type: props.isAlly === false ? "HP_ENEMY" : "HP_ALLY", value: hp, extraValue: shield, maxValue: props.origin === "team" ? hp : pokemon.maxHP, graduationStep: 10 }), (0, jsx_runtime_1.jsx)(game_tooltip_bar_1.GameTooltipBar, { type: "PP", value: pp, maxValue: pokemon.maxPP })] }), (0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-detail-stats", children: pokemonStats.map(({ stat, value, baseValue, formatter }) => ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-stat-" + stat.toLowerCase(), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${stat}.png`, alt: stat, title: `${t(`stat.${stat}`)}${value !== baseValue ? ` (${baseValue} ${value > baseValue ? "+" : "-"} ${value - baseValue})` : ""}` }), (0, jsx_runtime_1.jsx)("span", { className: (0, jsx_1.cc)({
                                buffed: value > baseValue,
                                nerfed: value < baseValue
                            }), children: formatter ? formatter(value) : value })] }, stat))) }), dish && ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-dish", children: [(0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-dish-name", children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/dish.svg", className: "dish-icon" }), (0, jsx_runtime_1.jsxs)("i", { children: [t("signature_dish"), ":"] }), " ", t(`item.${dish}`)] }), (0, jsx_runtime_1.jsx)("img", { src: `assets/item/${dish}.png`, className: "game-pokemon-detail-dish-icon", alt: dish, title: t(`item.${dish}`) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`item_description.${dish}`)) })] })), pokemon.passive !== Passive_1.Passive.NONE && ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-passive", children: [(0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`passive_description.${pokemon.passive}`), {
                            ap: pokemon.ap,
                            luck: pokemon.luck,
                            stars: pokemon.stars,
                            stages: (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).stages
                        }) }), pokemon.stacksRequired > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "game-pokemon-detail-passive-bar", children: (0, jsx_runtime_1.jsx)(game_tooltip_bar_1.GameTooltipBar, { type: "XP", value: pokemon.stacks, maxValue: pokemon.stacksRequired, graduationStep: 1 }) }))] })), pokemon.skill !== Ability_1.Ability.DEFAULT && ((0, jsx_runtime_1.jsxs)("div", { className: "game-pokemon-detail-ult", children: [(0, jsx_runtime_1.jsxs)("div", { className: "ability-name", children: [tmIcon, t(`ability.${pokemon.skill}`)] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ability_tooltip_1.AbilityTooltip, { ability: pokemon.skill, stats: {
                                ap: (_c = getStatWithItemBonus(Game_1.Stat.AP)) !== null && _c !== void 0 ? _c : pokemon.ap,
                                luck: (_d = getStatWithItemBonus(Game_1.Stat.LUCK)) !== null && _d !== void 0 ? _d : pokemon.luck,
                                stars: pokemon.stars,
                                stages: (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).stages
                            } }, pokemon.id) })] }))] }));
}
class GamePokemonDetailDOMWrapper extends phaser_1.GameObjects.DOMElement {
    constructor(scene, x, y, pokemon, origin, isAlly = true, shiny, emotion) {
        super(scene, x, y);
        this.dom = document.createElement("div");
        this.dom.className = "my-container game-pokemon-detail-tooltip";
        this.setElement(this.dom);
        this.root = client_1.default.createRoot(this.dom);
        this.pokemon = pokemon;
        this.shiny = shiny;
        this.emotion = emotion;
        this.origin = origin;
        this.isAlly = isAlly;
        this.render();
    }
    render() {
        this.root.render((0, jsx_runtime_1.jsx)(GamePokemonDetail, { pokemon: this.pokemon, shiny: this.shiny, emotion: this.emotion, origin: this.origin, isAlly: this.isAlly }));
    }
    updatePokemon(pokemon, shiny, emotion) {
        this.pokemon = pokemon;
        if (shiny !== undefined)
            this.shiny = shiny;
        if (emotion !== undefined)
            this.emotion = emotion;
        this.render();
    }
    destroy() {
        this.root.unmount();
        super.destroy();
    }
}
exports.GamePokemonDetailDOMWrapper = GamePokemonDetailDOMWrapper;
function GamePokemonDetailTooltip(props) {
    return ((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "game-pokemon-detail-tooltip", className: "custom-theme-tooltip game-pokemon-detail-tooltip", render: ({ content }) => ((0, jsx_runtime_1.jsx)(GamePokemonDetail, { pokemon: content, origin: props.origin })), float: true, isOpen: props.isOpen }));
}
//# sourceMappingURL=game-pokemon-detail.js.map