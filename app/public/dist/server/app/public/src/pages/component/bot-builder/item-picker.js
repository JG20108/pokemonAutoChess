"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemPicker;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_tabs_1 = require("react-tabs");
const Item_1 = require("../../../../../types/enum/Item");
const array_1 = require("../../../../../utils/array");
const item_detail_1 = require("../../../game/components/item-detail");
const jsx_1 = require("../../utils/jsx");
function ItemPicker(props) {
    function handleOnDragStart(e, item) {
        e.stopPropagation();
        e.dataTransfer.setData("text/plain", `item,${item}`);
    }
    const tabs = [
        { label: (0, i18next_1.t)("components"), key: "components", items: Item_1.ItemComponents },
        { label: (0, i18next_1.t)("craftable_items"), key: "craftable", items: Item_1.CraftableItems },
        {
            label: (0, i18next_1.t)("food"),
            key: "food",
            items: [
                ...Item_1.Berries,
                Item_1.Item.TART_APPLE,
                Item_1.Item.SWEET_APPLE,
                Item_1.Item.SIRUPY_APPLE,
                Item_1.Item.CHEF_HAT
            ]
        },
        { label: (0, i18next_1.t)("tools"), key: "tools", items: Item_1.Tools },
        {
            label: (0, i18next_1.t)("shiny_items"),
            key: "shiny_items",
            items: Item_1.ShinyItems
        },
        {
            label: (0, i18next_1.t)("tm_short"),
            key: "tm",
            items: Item_1.TMs
        },
        {
            label: (0, i18next_1.t)("wands"),
            key: "wands",
            items: Item_1.Wands,
            hidden: props.origin === "team-planner" || props.origin === "bot-builder"
        },
        {
            label: (0, i18next_1.t)("special_items"),
            key: "special_items",
            items: [
                Item_1.Item.RUSTED_SWORD,
                Item_1.Item.TEAL_MASK,
                Item_1.Item.WELLSPRING_MASK,
                Item_1.Item.CORNERSTONE_MASK,
                Item_1.Item.HEARTHFLAME_MASK,
                ...Item_1.MemoryDiscs
            ]
        }
    ].filter((tab) => !tab.hidden);
    if (props.origin !== "tier-list") {
        tabs.forEach((tab) => {
            if (tab.key !== "tm") {
                tab.items = tab.items.filter((item) => !(0, array_1.isIn)(Item_1.UnholdableItems, item));
            }
        });
    }
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-box", id: "item-picker", children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { children: tabs.map((t) => ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t.label }, t.key))) }), tabs.map((t) => ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: t.items.map((item) => ((0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + Item_1.Item[item] + ".png", className: (0, jsx_1.cc)("item", {
                        selected: item === props.selected
                    }), "data-tooltip-id": "item-detail-tooltip", "data-tooltip-content": item, onClick: () => { var _a; return (_a = props.selectEntity) === null || _a === void 0 ? void 0 : _a.call(props, item); }, draggable: true, onDragStart: (e) => handleOnDragStart(e, item) }, item))) }, t.key))), (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, {})] }));
}
//# sourceMappingURL=item-picker.js.map