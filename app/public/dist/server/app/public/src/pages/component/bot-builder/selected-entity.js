"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SelectedEntity;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const precomputed_emotions_1 = require("../../../../../models/precomputed/precomputed-emotions");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const item_detail_1 = require("../../../game/components/item-detail");
const checkbox_1 = require("../checkbox/checkbox");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
function SelectedEntity(props) {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    if (Object.keys(Item_1.Item).includes(props.entity)) {
        return ((0, jsx_runtime_1.jsx)("div", { id: "selected-entity", className: "my-box", children: (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltipContent, { item: props.entity }) }));
    }
    else if (Object.values(Pokemon_1.Pkm).includes(props.entity.name)) {
        const pkm = props.entity;
        const index = Pokemon_1.PkmIndex[pkm.name];
        const shiny = (_a = pkm.shiny) !== null && _a !== void 0 ? _a : false;
        const availableEmotions = (0, precomputed_emotions_1.getAvailableEmotions)(index, shiny);
        return ((0, jsx_runtime_1.jsxs)("div", { id: "selected-entity", className: "my-box", children: [(0, jsx_runtime_1.jsxs)("fieldset", { children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: shiny, onToggle: () => {
                                props.onChange(Object.assign(Object.assign({}, pkm), { shiny: !shiny }));
                            }, label: t("shiny"), isDark: true }), (0, jsx_runtime_1.jsxs)("label", { children: [t("emotion_label"), ":\u00A0", (0, jsx_runtime_1.jsx)("select", { value: pkm.emotion, onChange: (e) => {
                                        props.onChange(Object.assign(Object.assign({}, pkm), { emotion: e.target.value }));
                                    }, children: availableEmotions.map((e) => ((0, jsx_runtime_1.jsx)("option", { value: e, children: e }, e))) })] })] }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: pkm.name, emotion: pkm.emotion, shiny: shiny, origin: "planner" })] }));
    }
    else {
        return null;
    }
}
//# sourceMappingURL=selected-entity.js.map