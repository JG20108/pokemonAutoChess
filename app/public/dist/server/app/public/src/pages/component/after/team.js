"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Team;
const jsx_runtime_1 = require("react/jsx-runtime");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./team.css");
function Team(props) {
    return ((0, jsx_runtime_1.jsx)("ul", { className: "player-team-pokemons", children: props.team.map((p, index) => {
            return ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: p.avatar }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-items", children: p.items.map((item, i) => ((0, jsx_runtime_1.jsx)("img", { src: "/assets/item/" + item + ".png" }, i))) })] }, index));
        }) }));
}
//# sourceMappingURL=team.js.map