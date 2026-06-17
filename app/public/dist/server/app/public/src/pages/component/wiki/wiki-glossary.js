"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiGlossary;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const TechnicalTerm_1 = require("../../../../../types/strings/TechnicalTerm");
const descriptions_1 = require("../../utils/descriptions");
require("./wiki-glossary.css");
function WikiGlossary() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const itemCategories = [
        "components",
        "craftable_items",
        "consumable_item",
        "unholdable_item",
        "removable_item"
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-glossary", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("wiki.nav.glossary_label") }), (0, jsx_runtime_1.jsx)("h3", { children: t("wiki.glossary.damage_types") }), (0, jsx_runtime_1.jsxs)("dl", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "my-box glossary-term", children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, descriptions_1.addIconsToDescription)("PHYSICAL") }), (0, jsx_runtime_1.jsx)("dd", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.glossary.PHYSICAL")) })] }, "physical"), (0, jsx_runtime_1.jsxs)("div", { className: "my-box glossary-term", children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, descriptions_1.addIconsToDescription)("SPECIAL") }), (0, jsx_runtime_1.jsx)("dd", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.glossary.SPECIAL")) })] }, "special"), (0, jsx_runtime_1.jsxs)("div", { className: "my-box glossary-term", children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, descriptions_1.addIconsToDescription)("TRUE") }), (0, jsx_runtime_1.jsx)("dd", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.glossary.TRUE")) })] }, "true")] }), (0, jsx_runtime_1.jsx)("h3", { children: t("technical_terms.title") }), (0, jsx_runtime_1.jsx)("dl", { children: TechnicalTerm_1.TechnicalTerms.map((term) => ((0, jsx_runtime_1.jsxs)("div", { className: "my-box glossary-term", children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, descriptions_1.addIconsToDescription)(term) }), (0, jsx_runtime_1.jsx)("dd", { children: (0, descriptions_1.addIconsToDescription)(t(`technical_terms_definitions.${term}`)) })] }, term))) }), (0, jsx_runtime_1.jsx)("h3", { children: t("wiki.glossary.item_categories") }), (0, jsx_runtime_1.jsx)("dl", { children: itemCategories.map((category) => ((0, jsx_runtime_1.jsxs)("div", { className: "my-box glossary-term", children: [(0, jsx_runtime_1.jsx)("dt", { children: t(category) }), (0, jsx_runtime_1.jsx)("dd", { children: (0, descriptions_1.addIconsToDescription)(t(`wiki.glossary.${category}`)) })] }, category))) })] }));
}
//# sourceMappingURL=wiki-glossary.js.map