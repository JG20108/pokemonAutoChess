"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiStages;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../../../../models/precomputed/precomputed-rarity");
const pve_stages_1 = require("../../../../../models/pve-stages");
const types_1 = require("../../../../../types");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const object_1 = require("../../../../../utils/object");
const item_detail_1 = require("../../../game/components/item-detail");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./wiki-stages.css");
function WikiStages() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [selectedStage, setSelectedStage] = (0, react_1.useState)(null);
    const [hoveredLegendType, setHoveredLegendType] = (0, react_1.useState)(null);
    const generateStageInfo = () => {
        const stages = [];
        for (let level = 0; level <= 40; level++) {
            if (config_1.ItemCarouselStages.includes(level)) {
                stages.push({
                    level,
                    icon: "/assets/ui/carousel.svg",
                    type: "carousel"
                });
            }
            if (config_1.PortalCarouselStages.includes(level)) {
                stages.push({
                    level,
                    icon: "/assets/ui/mythical.svg",
                    title: level === 0
                        ? t("wiki.stages.starter_pick")
                        : level === 10
                            ? t("unique_pick")
                            : level === 20
                                ? t("wiki.stages.legendary_pick")
                                : undefined,
                    type: "portal"
                });
            }
            else if (config_1.AdditionalPicksStages.includes(level)) {
                stages.push({
                    level,
                    icon: "/assets/ui/additional-pick.svg",
                    type: "additional",
                    title: level === config_1.AdditionalPicksStages[0]
                        ? t("rarity.UNCOMMON")
                        : level === config_1.AdditionalPicksStages[1]
                            ? t("rarity.RARE")
                            : level === config_1.AdditionalPicksStages[2]
                                ? t("rarity.EPIC")
                                : undefined
                });
            }
            const pveStage = pve_stages_1.PVEStages[level];
            if (pveStage) {
                stages.push({
                    level,
                    icon: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pveStage.avatar], false, types_1.Emotion.NORMAL),
                    title: t(pveStage.name),
                    type: "pve",
                    stageData: pveStage
                });
            }
            else if (level > 0) {
                stages.push({
                    level,
                    icon: "/assets/ui/battle.svg",
                    type: "battle"
                });
            }
        }
        return stages;
    };
    const allStages = generateStageInfo();
    const selectedStageInfo = selectedStage !== null
        ? allStages.find((s) => s.level === selectedStage)
        : null;
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-stages", children: [(0, jsx_runtime_1.jsxs)("div", { className: "wiki-stage-path-container my-box", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stage-header", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("stages") }), (0, jsx_runtime_1.jsxs)("div", { className: "stage-legend", children: [(0, jsx_runtime_1.jsxs)("div", { className: "legend-item pve", onMouseEnter: () => setHoveredLegendType("pve"), onMouseLeave: () => setHoveredLegendType(null), children: [(0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[Pokemon_1.Pkm.MAGIKARP], false, types_1.Emotion.NORMAL), alt: "PvE" }), (0, jsx_runtime_1.jsx)("span", { children: t("stage_type.pve") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "legend-item carousel", onMouseEnter: () => setHoveredLegendType("carousel"), onMouseLeave: () => setHoveredLegendType(null), children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/carousel.svg", alt: "Carousel" }), (0, jsx_runtime_1.jsx)("span", { children: t("stage_type.carousel") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "legend-item portal", onMouseEnter: () => setHoveredLegendType("portal"), onMouseLeave: () => setHoveredLegendType(null), children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/mythical.svg", alt: "Portal" }), (0, jsx_runtime_1.jsx)("span", { children: t("stage_type.portal") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "legend-item additional", onMouseEnter: () => setHoveredLegendType("additional"), onMouseLeave: () => setHoveredLegendType(null), children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/additional-pick.svg", alt: "Additional" }), (0, jsx_runtime_1.jsx)("span", { children: t("stage_type.additional") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "legend-item battle", onMouseEnter: () => setHoveredLegendType("battle"), onMouseLeave: () => setHoveredLegendType(null), children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/battle.svg", alt: "Battle" }), (0, jsx_runtime_1.jsx)("span", { children: t("stage_type.battle") })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "wiki-stage-path", children: allStages.map((stage) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("wiki-stage-path-item", {
                                        selected: selectedStage === stage.level,
                                        highlighted: hoveredLegendType === stage.type,
                                        pve: stage.type === "pve",
                                        carousel: stage.type === "carousel",
                                        portal: stage.type === "portal",
                                        additional: stage.type === "additional",
                                        battle: stage.type === "battle"
                                    }), onClick: () => setSelectedStage(selectedStage === stage.level ? null : stage.level), title: `${t("stage")} ${stage.level}: ${stage.title}`, children: [(0, jsx_runtime_1.jsx)("img", { src: stage.icon, alt: stage.title }), (0, jsx_runtime_1.jsx)("span", { className: "stage-number", children: stage.level })] }), stage.level < 40 && (0, jsx_runtime_1.jsx)("span", { className: "stage-connector", children: "\u2015" })] }, `stage-${stage.level}`))) })] }), selectedStageInfo && (0, jsx_runtime_1.jsx)(StageDetail, { stageInfo: selectedStageInfo })] }));
}
function StageDetail({ stageInfo }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    if (!stageInfo)
        return null;
    const itemDetail = (item) => ((0, jsx_runtime_1.jsx)("img", { className: "item", src: `assets/item/${item}.png`, alt: t(`item.${item}`), title: t(`item.${item}`), "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": item }, item));
    const pokemonDetail = (pkm) => ((0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
            index: Pokemon_1.PkmIndex[pkm],
            emotion: types_1.Emotion.NORMAL,
            shiny: false
        }, "data-tooltip-id": "game-pokemon-detail-tooltip", "data-tooltip-content": pkm }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "stage-detail my-box", children: [(0, jsx_runtime_1.jsxs)("header", { className: "stage-detail-header", children: [(0, jsx_runtime_1.jsx)("div", { className: "stage-detail-info", children: (0, jsx_runtime_1.jsxs)("h3", { children: [t("stage"), " ", stageInfo.level, " - ", t(`stage_type.${stageInfo.type}`), stageInfo.title ? " : " : null, stageInfo.title] }) }), (0, jsx_runtime_1.jsx)("div", { className: "stage-detail-icon", children: (0, jsx_runtime_1.jsx)("img", { src: stageInfo.icon, alt: stageInfo.title }) })] }), stageInfo.type === "pve" && stageInfo.stageData && ((0, jsx_runtime_1.jsxs)("div", { className: "pve-stage-details", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stage-board", children: [(0, jsx_runtime_1.jsxs)("h4", { children: [t("wiki.stages.enemy_team"), ":"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: t("wiki.stages.pokemon") }), stageInfo.stageData.marowakItems && ((0, jsx_runtime_1.jsx)("th", { children: t("wiki.stages.marowak_items") })), stageInfo.stageData.statBoosts && ((0, jsx_runtime_1.jsx)("th", { children: t("wiki.stages.stat_boosts") }))] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: stageInfo.stageData.board.map(([pkm, x, y], index) => {
                                            var _a;
                                            return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { className: "pokemon-cell", children: [pokemonDetail(pkm), (0, jsx_runtime_1.jsx)("span", { children: t(`pkm.${pkm}`) })] }), stageInfo.stageData.marowakItems && ((0, jsx_runtime_1.jsx)("td", { className: "items-cell", children: (_a = stageInfo.stageData.marowakItems[index]) === null || _a === void 0 ? void 0 : _a.map((item) => ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: itemDetail(item) }, item))) })), stageInfo.stageData.statBoosts && ((0, jsx_runtime_1.jsx)("td", { className: "boosts-cell", children: (0, object_1.entries)(stageInfo.stageData.statBoosts).map(([stat, boost]) => ((0, jsx_runtime_1.jsxs)("div", { className: "boost-item", title: t(`stat.${stat}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${stat}.png`, alt: stat }), (0, jsx_runtime_1.jsxs)("span", { children: ["+", boost] })] }, stat))) }))] }, index));
                                        }) })] })] }), stageInfo.stageData.rewards && ((0, jsx_runtime_1.jsxs)("div", { className: "stage-rewards", children: [(0, jsx_runtime_1.jsx)("h4", { children: t("wiki.stages.rewards") }), (0, jsx_runtime_1.jsx)("ul", { children: stageInfo.stageData.rewards.map((item) => ((0, jsx_runtime_1.jsx)("li", { children: itemDetail(item) }, item))) })] })), stageInfo.stageData.shinyChance && ((0, jsx_runtime_1.jsxs)("div", { className: "stage-shiny", children: [(0, jsx_runtime_1.jsxs)("h4", { children: [t("wiki.stages.shiny_chance"), ":", " ", (0, jsx_runtime_1.jsxs)("span", { children: [(stageInfo.stageData.shinyChance * 100).toFixed(2), "%"] })] }), stageInfo.level === 1 ? ((0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.stages.shiny_magikarp_description")) })) : stageInfo.level === 9 ? ((0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.stages.shiny_gyarados_description")) })) : ((0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.stages.shiny_pve_description")) }))] }))] })), stageInfo.type === "carousel" && ((0, jsx_runtime_1.jsxs)("div", { className: "carousel-stage-details", children: [(0, jsx_runtime_1.jsx)("p", { children: t("wiki.stages.carousel_description") }), (0, jsx_runtime_1.jsx)("h4", { children: t("wiki.stages.item_pool") }), (0, jsx_runtime_1.jsx)("div", { className: "stage-rewards", children: (0, jsx_runtime_1.jsx)("ul", { className: "", children: (stageInfo.level >= 20
                                ? Item_1.CraftableItemsNoScarves
                                : Item_1.ItemComponentsNoScarf).map((item) => ((0, jsx_runtime_1.jsx)("li", { children: itemDetail(item) }, item))) }) }), (0, jsx_runtime_1.jsx)("h4", { children: t("wiki.stages.town_encounters") }), (0, jsx_runtime_1.jsx)("div", { className: "town-encounters", children: config_1.TownEncountersByStage[stageInfo.level] && ((0, jsx_runtime_1.jsx)("ul", { children: Object.entries(config_1.TownEncountersByStage[stageInfo.level]).map(([pkm, chance]) => ((0, jsx_runtime_1.jsxs)("li", { className: "town-encounter", children: [pokemonDetail(pkm), (0, jsx_runtime_1.jsxs)("span", { children: [(chance * 100).toFixed(1), "%"] })] }, pkm))) })) })] })), stageInfo.type === "portal" && ((0, jsx_runtime_1.jsxs)("div", { className: "portal-stage-details", children: [(0, jsx_runtime_1.jsx)("p", { children: t("wiki.stages.portal_description_1") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.stages.portal_description_2") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.stages.portal_description_3") })] })), stageInfo.type === "additional" && ((0, jsx_runtime_1.jsxs)("div", { className: "additional-stage-details", children: [(0, jsx_runtime_1.jsx)("p", { children: t("wiki.stages.additional_description") }), (0, jsx_runtime_1.jsx)("h4", { children: t("additional_picks") }), (0, jsx_runtime_1.jsx)("ul", { children: (0, precomputed_pokemon_data_1.getAdditionalsTier1)(stageInfo.level === config_1.AdditionalPicksStages[0]
                            ? precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.UNCOMMON
                            : stageInfo.level === config_1.AdditionalPicksStages[1]
                                ? precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.RARE
                                : stageInfo.level === config_1.AdditionalPicksStages[2]
                                    ? precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.EPIC
                                    : []).map((pkm) => ((0, jsx_runtime_1.jsx)("li", { children: pokemonDetail(pkm) }, pkm))) })] })), stageInfo.type === "battle" && ((0, jsx_runtime_1.jsx)("div", { className: "battle-stage-details", children: (0, jsx_runtime_1.jsx)("p", { children: t("wiki.stages.battle_description") }) })), (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, {}), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, { origin: "wiki" })] }));
}
//# sourceMappingURL=wiki-stages.js.map