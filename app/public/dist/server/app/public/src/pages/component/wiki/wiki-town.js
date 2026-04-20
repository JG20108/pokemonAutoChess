"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiTown;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const TownEncounter_1 = require("../../../../../types/enum/TownEncounter");
const descriptions_1 = require("../../utils/descriptions");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
function WikiTown() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-town", children: [(0, jsx_runtime_1.jsxs)("div", { className: "my-box", style: { marginBottom: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("p", { children: t("wiki.town.town_encounters_hint") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.town.town_encounters_hint2") })] }), (0, jsx_runtime_1.jsx)("ul", { children: Object.values(TownEncounter_1.TownEncounters).map((encounter) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: { index: Pokemon_1.PkmIndex[encounter] } }), " ", t(`pkm.${encounter}`)] }), (0, jsx_runtime_1.jsxs)("span", { style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            textAlign: "end"
                                        }, children: [t("stages"), ":", (0, jsx_runtime_1.jsx)("br", {}), Object.keys(config_1.TownEncountersByStage)
                                                .filter((s) => encounter in config_1.TownEncountersByStage[s])
                                                .map((s) => s)
                                                .join(", ")] })] }), (0, jsx_runtime_1.jsx)("p", { className: "description", children: (0, descriptions_1.addIconsToDescription)(t(`town_encounter_description.${encounter}`, {
                                    cost: (_a = config_1.TownEncounterSellPrice[encounter]) !== null && _a !== void 0 ? _a : 0
                                })) })] }, encounter));
                }) })] }));
}
//# sourceMappingURL=wiki-town.js.map