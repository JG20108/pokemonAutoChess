"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiItems;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Item_1 = require("../../../../../types/enum/Item");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const array_1 = require("../../../../../utils/array");
const item_detail_1 = require("../../../game/components/item-detail");
const descriptions_1 = require("../../utils/descriptions");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function ItemList(props) {
    return props.items.map((i) => {
        var _a;
        return ((0, jsx_runtime_1.jsx)("li", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": i, children: (0, jsx_runtime_1.jsx)("img", { src: (_a = props.icon) !== null && _a !== void 0 ? _a : "assets/item/" + i + ".png", className: "item" }) }, i));
    });
}
function WikiItems() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const otherBuriedItems = [
        Item_1.Item.TRASH,
        Item_1.Item.LEFTOVERS,
        Item_1.Item.COIN,
        Item_1.Item.NUGGET,
        Item_1.Item.BIG_NUGGET
    ];
    const specialItems = (0, react_1.useMemo)(() => {
        const specialItemsToExclude = [
            ...Item_1.MemoryDiscs,
            ...Item_1.TownItems,
            ...otherBuriedItems,
            ...Item_1.FishingRods,
            ...Item_1.Mulches,
            Item_1.Item.CHEF_HAT,
            Item_1.Item.FIRE_SHARD,
            Item_1.Item.CELL_BATTERY
        ];
        return Item_1.SpecialItems.filter((i) => !specialItemsToExclude.includes(i));
    }, []);
    const components = Item_1.ItemComponentsNoScarf;
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-items", children: [(0, jsx_runtime_1.jsxs)("article", { className: "craftable", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("wiki.items.item_recipes") }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.craftable_items_description")) }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { style: {
                                                fontSize: "300%",
                                                verticalAlign: "middle",
                                                textAlign: "center",
                                                lineHeight: 0
                                            }, children: "+" }), components.map((i) => {
                                            return ((0, jsx_runtime_1.jsx)("th", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": i, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }, i));
                                        })] }), components.map((i) => {
                                    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": i, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }), components.map((j) => {
                                                let tier2Item;
                                                Object.keys(Item_1.ItemRecipe).forEach((recipeName) => {
                                                    if ((Item_1.ItemRecipe[recipeName][0] == i &&
                                                        Item_1.ItemRecipe[recipeName][1] == j) ||
                                                        (Item_1.ItemRecipe[recipeName][0] == j &&
                                                            Item_1.ItemRecipe[recipeName][1] == i)) {
                                                        tier2Item = recipeName;
                                                    }
                                                });
                                                return ((0, jsx_runtime_1.jsx)("td", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": tier2Item, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + tier2Item + ".png", className: "item" }) }, "td-" + i + "-" + j));
                                            })] }, "tr-" + i));
                                })] }) })] }), (0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsx)("h2", { children: t("shiny_items") }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.shiny_items_description")) }), (0, jsx_runtime_1.jsx)("ul", { className: "shiny", children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.ShinyItems }) }), (0, jsx_runtime_1.jsx)("h2", { children: t("wiki.items.town_items") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.items.town_items_description") }), (0, jsx_runtime_1.jsx)("ul", { className: "town", children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.TownItems }) }), (0, jsx_runtime_1.jsx)("h2", { children: t("special_items") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.items.special_items_description") }), (0, jsx_runtime_1.jsx)("ul", { className: "special", children: (0, jsx_runtime_1.jsx)(ItemList, { items: specialItems }) })] }), (0, jsx_runtime_1.jsxs)("article", { className: "synergy-items", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("wiki.items.items_from_synergies") }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.NORMAL }), " ", t("scarves")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.scarves_description")) }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { style: {
                                                fontSize: "300%",
                                                verticalAlign: "middle",
                                                textAlign: "center",
                                                lineHeight: 0
                                            }, children: "+" }), [...components, Item_1.Item.SILK_SCARF].map((i) => {
                                            return ((0, jsx_runtime_1.jsx)("th", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": i, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + i + ".png", className: "item" }) }, i));
                                        })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": Item_1.Item.SILK_SCARF, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + Item_1.Item.SILK_SCARF + ".png", className: "item" }) }), [...components, Item_1.Item.SILK_SCARF].map((j) => {
                                            let tier2Item;
                                            Object.keys(Item_1.ItemRecipe).forEach((recipeName) => {
                                                if ((Item_1.ItemRecipe[recipeName][0] == Item_1.Item.SILK_SCARF &&
                                                    Item_1.ItemRecipe[recipeName][1] == j) ||
                                                    (Item_1.ItemRecipe[recipeName][0] == j &&
                                                        Item_1.ItemRecipe[recipeName][1] == Item_1.Item.SILK_SCARF)) {
                                                    tier2Item = recipeName;
                                                }
                                            });
                                            return ((0, jsx_runtime_1.jsx)("td", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": tier2Item, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + tier2Item + ".png", className: "item" }) }, "td-" + Item_1.Item.SILK_SCARF + "-" + j));
                                        })] })] }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.ARTIFICIAL }), " ", t("tools")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.tools_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.ArtificialItems }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.other_tools_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.Tools.filter((i) => (0, array_1.isIn)(Item_1.ArtificialItems, i) === false) }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.GROUND }), " ", t("wiki.items.gems")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.gems_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.SynergyGemsBuried }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.gems_not_buried_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.SynergyGems.filter((gem) => Item_1.SynergyGemsBuried.includes(gem) === false) }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.you_may_also_find_in_the_ground")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: otherBuriedItems }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.ROCK }), " ", t("wiki.items.weather_rocks")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.weather_rocks_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.WeatherRocks }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.HUMAN }), " ", t("tm")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.tm_description")) }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.TMsBronze }), (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.TMsSilver }), (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.TMsGold })] }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.GRASS }), " ", t("wiki.items.berries")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.berries_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: Item_1.Berries.filter((b) => b !== Item_1.Item.NANAB_BERRY).map((berry) => ((0, jsx_runtime_1.jsxs)("li", { "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": berry, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + berry + ".png", className: "item" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("img", { src: "assets/environment/berry_trees/" + berry + "_6.png", className: "tree" })] }, berry))) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.GOURMET }), " ", t("wiki.items.dishes")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.dishes_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: [Item_1.Item.CHEF_HAT, ...Item_1.Dishes, Item_1.Item.NANAB_BERRY] }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.WATER }), " ", t("wiki.items.fishing_rods")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.fishing_rods_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: [...Item_1.FishingRods].reverse() }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.FLORA }), " ", t("wiki.items.mulch")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.mulch_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: Item_1.Mulches }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.ELECTRIC }), " ", t("item.CELL_BATTERY")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.cell_battery_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: [Item_1.Item.CELL_BATTERY] }) }), (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Synergy_1.Synergy.FIRE }), " ", t("item.FIRE_SHARD")] }), (0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t("wiki.items.fire_shard_description")) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ItemList, { items: [Item_1.Item.FIRE_SHARD] }) })] }), (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, {})] }));
}
//# sourceMappingURL=wiki-items.js.map