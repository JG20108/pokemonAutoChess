"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Wiki;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const wiki_ability_1 = __importDefault(require("./wiki-ability"));
const wiki_data_1 = __importDefault(require("./wiki-data"));
const wiki_faq_1 = __importDefault(require("./wiki-faq"));
const wiki_glossary_1 = __importDefault(require("./wiki-glossary"));
const wiki_items_1 = __importDefault(require("./wiki-items"));
const wiki_pokemons_1 = __importDefault(require("./wiki-pokemons"));
const wiki_regions_1 = __importDefault(require("./wiki-regions"));
const wiki_stages_1 = __importDefault(require("./wiki-stages"));
const wiki_statistic_1 = __importDefault(require("./wiki-statistic"));
const wiki_status_1 = __importDefault(require("./wiki-status"));
const wiki_town_1 = __importDefault(require("./wiki-town"));
const wiki_tutorials_1 = __importDefault(require("./wiki-tutorials"));
const wiki_types_1 = __importDefault(require("./wiki-types"));
const wiki_weather_1 = __importDefault(require("./wiki-weather"));
require("./wiki.css");
function Wiki({ inGame = false }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { id: "wiki-page", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [!inGame && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.faq.faq") }, "title-faq"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.how_to_play") }, "title-tutorials")] })), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.pokemons_label") }, "title-pokemon"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.abilities_label") }, "title-ability"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.items_label") }, "title-items"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.synergies_label") }, "title-types"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.statistics_label") }, "title-statistic"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("status_label") }, "title-status"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.weather_label") }, "title-weather"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("stages") }, "title-stages"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.town_label") }, "title-town"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.dungeon_label") }, "title-dungeon"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.glossary_label") }, "title-glossary"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("wiki.nav.data_label") }, "title-data")] }), !inGame && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_faq_1.default, {}) }, "faq"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_tutorials_1.default, {}) }, "tutorials")] })), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_pokemons_1.default, {}) }, "pokemon"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_ability_1.default, {}) }, "ability"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_items_1.default, {}) }, "items"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_types_1.default, {}) }, "types"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_statistic_1.default, {}) }, "statistic"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_status_1.default, {}) }, "status"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_weather_1.default, {}) }, "weather"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_stages_1.default, {}) }, "stages"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_town_1.default, {}) }, "town"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_regions_1.default, {}) }, "dungeon"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_glossary_1.default, {}) }, "glossary"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(wiki_data_1.default, {}) }, "data")] }) }));
}
//# sourceMappingURL=wiki.js.map