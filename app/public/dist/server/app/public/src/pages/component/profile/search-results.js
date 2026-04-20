"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchResults;
const jsx_runtime_1 = require("react/jsx-runtime");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
function SearchResults(props) {
    const { suggestions, onSelect } = props;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { className: "search-suggestions", children: suggestions.map((suggestion) => ((0, jsx_runtime_1.jsxs)("li", { className: (0, jsx_1.cc)("player my-box clickable", {
                    banned: suggestion.banned === true
                }), onClick: () => onSelect(suggestion), children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: suggestion.avatar }), (0, jsx_runtime_1.jsx)("span", { children: suggestion.name })] }, suggestion.id))) }) }));
}
//# sourceMappingURL=search-results.js.map