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
exports.ItemDetailTooltipContent = ItemDetailTooltipContent;
exports.ItemDetailTooltip = ItemDetailTooltip;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = require("phaser");
const react_1 = __importStar(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../config");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const array_1 = require("../../../../utils/array");
const object_1 = require("../../../../utils/object");
const descriptions_1 = require("../../pages/utils/descriptions");
require("./item-detail.css");
function ItemDetailTooltipContent({ item, showItemCombinationsTooltip = true }) {
    var _a, _b;
    const { t } = (0, react_i18next_1.useTranslation)();
    const recipes = (0, react_1.useMemo)(() => Item_1.ItemComponents.map((c) => (0, object_1.entries)(Item_1.ItemRecipe).find(([, recipe]) => recipe != null &&
        ((recipe[0] === item && recipe[1] === c) ||
            (recipe[1] === item && recipe[0] === c)))).filter((r) => r != null), [item]);
    const formatStat = (stat, value) => {
        let output = value.toString();
        if ([Game_1.Stat.CRIT_CHANCE, Game_1.Stat.CRIT_POWER].includes(stat)) {
            output += "%";
        }
        if (value >= 0) {
            output = "+" + output;
        }
        return output;
    };
    const itemCategoryLabel = (0, react_1.useMemo)(() => {
        if (Item_1.ConsumableItems.includes(item))
            return t("consumable_item");
        if ((0, array_1.isIn)(Item_1.UnholdableItems, item))
            return t("unholdable_item");
        if ((0, array_1.isIn)(Item_1.RemovableItems, item))
            return t("removable_item");
        if ((0, array_1.isIn)(Item_1.ItemComponents, item))
            return t("item_component");
        if ((0, array_1.isIn)(Item_1.ShinyItems, item))
            return t("shiny");
        return null;
    }, [item, t]);
    if ((0, array_1.isIn)(Object.values(Item_1.Item), item) === false)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-item-detail", children: [(0, jsx_runtime_1.jsx)("img", { className: "game-item-detail-icon", src: `assets/item/${item}.png`, alt: t(`item.${item}`) }), (0, jsx_runtime_1.jsxs)("div", { className: "game-item-detail-name", children: [Item_1.ItemRecipe[item] && ((0, jsx_runtime_1.jsx)("div", { className: "game-item-recipe", children: (_a = Item_1.ItemRecipe[item]) === null || _a === void 0 ? void 0 : _a.map((item, i) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { className: "game-item-detail-icon", src: `assets/item/${item}.png`, alt: t(`item.${item}`) }, item), i === 0 && " + "] }, `component_${i}_${item}`))) })), t(`item.${item}`)] }), (0, jsx_runtime_1.jsxs)("div", { className: "game-item-detail-stats", children: [itemCategoryLabel && (0, jsx_runtime_1.jsx)("i", { children: itemCategoryLabel }), (0, object_1.entries)((_b = config_1.ItemStats[item]) !== null && _b !== void 0 ? _b : {}).map(([stat, value]) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${stat}.png`, alt: stat, title: t(`stat.${stat}`) }), (0, jsx_runtime_1.jsx)("span", { children: formatStat(stat, value !== null && value !== void 0 ? value : 0) })] }, stat)))] }), (0, jsx_runtime_1.jsx)("p", { className: "game-item-detail-description", children: (0, descriptions_1.addIconsToDescription)(t(`item_description.${item}`)) }), recipes.length > 0 && showItemCombinationsTooltip && ((0, jsx_runtime_1.jsx)("div", { className: "game-item-detail-combinations", children: recipes.map(([result, recipe]) => {
                    const otherComponent = recipe[0] === item ? recipe[1] : recipe[0];
                    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-item-detail-combination", children: [(0, jsx_runtime_1.jsx)("p", { children: "+" }), (0, jsx_runtime_1.jsx)("img", { src: `assets/item/${otherComponent}.png`, alt: t(`item.${otherComponent}`), "data-tooltip-id": "item-detail-recipes-tooltip", "data-tooltip-content": otherComponent, "data-tooltip-place": "right" }), (0, jsx_runtime_1.jsx)("p", { children: "=" }), (0, jsx_runtime_1.jsx)("img", { src: `assets/item/${result}.png`, alt: t(`item.${result}`), "data-tooltip-id": "item-detail-recipes-tooltip", "data-tooltip-content": result })] }, result));
                }) })), showItemCombinationsTooltip && ((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "item-detail-recipes-tooltip", className: "custom-theme-tooltip item-detail-tooltip", render: ({ content }) => ((0, jsx_runtime_1.jsx)(ItemDetailTooltipContent, { item: content, showItemCombinationsTooltip: false })) }))] }));
}
function ItemDetailTooltip() {
    return ((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "item-detail-tooltip", className: "custom-theme-tooltip item-detail-tooltip", render: ({ content }) => ((0, jsx_runtime_1.jsx)(ItemDetailTooltipContent, { item: content })) }));
}
class ItemDetail extends phaser_1.GameObjects.DOMElement {
    constructor(scene, x, y, name) {
        super(scene, x, y);
        this.dom = document.createElement("div");
        this.dom.className = "my-container item-detail-tooltip";
        this.setElement(this.dom);
        const root = client_1.default.createRoot(this.dom);
        root.render((0, jsx_runtime_1.jsx)(ItemDetailTooltipContent, { item: name }));
    }
}
exports.default = ItemDetail;
//# sourceMappingURL=item-detail.js.map