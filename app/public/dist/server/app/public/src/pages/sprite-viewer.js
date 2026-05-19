"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteDebug = SpriteDebug;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = require("react");
const react_router_1 = require("react-router");
const Game_1 = require("../../../types/enum/Game");
const Pokemon_1 = require("../../../types/enum/Pokemon");
const Status_1 = require("../../../types/enum/Status");
const checkbox_1 = require("./component/checkbox/checkbox");
const debug_scene_1 = __importDefault(require("./component/debug/debug-scene"));
const main_sidebar_1 = require("./component/main-sidebar/main-sidebar");
const pokemon_typeahead_1 = require("./component/typeahead/pokemon-typeahead");
require("./sprite-viewer.css");
function SpriteDebug() {
    const navigate = (0, react_router_1.useNavigate)();
    const [pkm, setPkm] = (0, react_1.useState)(Pokemon_1.Pkm.RATTATA);
    const [shiny, setShiny] = (0, react_1.useState)(false);
    const [orientation, setOrientation] = (0, react_1.useState)(Game_1.Orientation.DOWNLEFT);
    const [animationType, setAnimType] = (0, react_1.useState)("Idle");
    const [status, setStatus] = (0, react_1.useState)("");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sprite-viewer-root", children: [(0, jsx_runtime_1.jsx)(main_sidebar_1.MainSidebar, { page: "main_lobby", leave: () => navigate("/lobby"), leaveLabel: (0, i18next_1.t)("back_to_lobby") }), (0, jsx_runtime_1.jsxs)("div", { className: "sprite-viewer-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "sprite-viewer-toolbar my-box", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "pokemon-typeahead", children: "Pokemon" }), (0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: pkm, options: Object.values(Pokemon_1.Pkm).sort((a, b) => (0, i18next_1.t)(`pkm.${a}`).localeCompare((0, i18next_1.t)(`pkm.${b}`))), onChange: (pkm) => {
                                    if (pkm) {
                                        setPkm(pkm);
                                    }
                                } }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: shiny, onToggle: setShiny, label: (0, i18next_1.t)("shiny"), isDark: true }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "sprite-viewer-orientation", children: "Orientation" }), (0, jsx_runtime_1.jsx)("select", { id: "sprite-viewer-orientation", value: orientation, onChange: (e) => setOrientation(e.currentTarget.value), children: Object.entries(Game_1.Orientation).map(([k, v]) => ((0, jsx_runtime_1.jsx)("option", { value: v, children: k }, v))) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "sprite-viewer-anim-type", children: "Anim type" }), (0, jsx_runtime_1.jsxs)("select", { id: "sprite-viewer-anim-type", value: animationType, onChange: (e) => setAnimType(e.currentTarget.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "Idle", children: "Idle" }), (0, jsx_runtime_1.jsx)("option", { value: "Walk", children: "Walk" }), (0, jsx_runtime_1.jsx)("option", { value: "Sleep", children: "Sleep" }), (0, jsx_runtime_1.jsx)("option", { value: "Eat", children: "Eat" }), (0, jsx_runtime_1.jsx)("option", { value: "Hurt", children: "Hurt" }), (0, jsx_runtime_1.jsx)("option", { value: "Hop", children: "Hop" }), (0, jsx_runtime_1.jsx)("option", { value: "Attack", children: "Attack" }), (0, jsx_runtime_1.jsx)("option", { value: "Ability", children: "Ability" }), (0, jsx_runtime_1.jsx)("option", { value: "Emote", children: "Emote" })] }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "sprite-viewer-status", children: "Status" }), (0, jsx_runtime_1.jsxs)("select", { id: "sprite-viewer-status", value: status, onChange: (e) => setStatus(e.currentTarget.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "None" }), Object.entries(Status_1.Status).map(([k, v]) => ((0, jsx_runtime_1.jsx)("option", { value: v, children: k }, v))), (0, jsx_runtime_1.jsx)("option", { value: "POISONNED_BADLY", children: "Poisonned badly" }), (0, jsx_runtime_1.jsx)("option", { value: "BALM_MUSHROOM", children: "Balm Mushroom" }), (0, jsx_runtime_1.jsx)("option", { value: "BOOST/ATK", children: "Boost Attack" }), (0, jsx_runtime_1.jsx)("option", { value: "BOOST/DEF", children: "Boost Defense" }), (0, jsx_runtime_1.jsx)("option", { value: "BOOST/SPE_DEF", children: "Boost Special Defense" }), (0, jsx_runtime_1.jsx)("option", { value: "BOOST/SHIELD", children: "Boost Shield" }), (0, jsx_runtime_1.jsx)("option", { value: "BOOST/SPEED", children: "Boost Speed" }), (0, jsx_runtime_1.jsx)("option", { value: "BOOST/AP", children: "Boost AP" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "sprite-viewer-sprite", children: (0, jsx_runtime_1.jsx)(debug_scene_1.default, { pkm: pkm, orientation: orientation, animationType: animationType, shiny: shiny, status: status, width: 1950, height: 1000 }) })] })] }));
}
//# sourceMappingURL=sprite-viewer.js.map