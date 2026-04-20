"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoosterCard = BoosterCard;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./booster-card.css");
function BoosterCard({ card, flipped, onFlip }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(card.name);
    const style = {
        "--rarity-color": config_1.RarityColor[pokemonData.rarity]
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("booster-card", "rarity-" + pokemonData.rarity.toLowerCase(), { shiny: card.shiny || false, flipped }), style: style, onClick: onFlip, children: [(0, jsx_runtime_1.jsx)("div", { className: "back", children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/pokecard.png" }) }), (0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("front", { shimmer: card.shiny }), children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                            index: Pokemon_1.PkmIndex[card.name],
                            shiny: card.shiny,
                            emotion: card.emotion
                        } }), (0, jsx_runtime_1.jsxs)("div", { className: "front-text", children: [(0, jsx_runtime_1.jsxs)("p", { className: "name", children: [t(`pkm.${card.name}`), (0, jsx_runtime_1.jsx)("br", {}), " ", (0, jsx_runtime_1.jsx)("span", { style: { fontWeight: "normal" }, children: t(`emotion.${card.emotion}`) })] }), card.new ? ((0, jsx_runtime_1.jsx)("p", { className: "new", children: t("new") })) : ((0, jsx_runtime_1.jsxs)("p", { className: "dust", children: ["+", card.shiny ? config_1.DUST_PER_SHINY : config_1.DUST_PER_BOOSTER, " ", t("shards"), " ", (0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[card.name]), className: "dust", alt: "dust" })] }))] })] })] }));
}
//# sourceMappingURL=booster-card.js.map