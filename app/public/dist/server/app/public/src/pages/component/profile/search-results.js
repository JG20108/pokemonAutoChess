"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchResults;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
function SearchResults() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const suggestions = (0, hooks_1.useAppSelector)((state) => state.lobby.suggestions);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { className: "search-suggestions", children: suggestions.map((suggestion) => ((0, jsx_runtime_1.jsxs)("li", { className: (0, jsx_1.cc)("player my-box clickable", { banned: suggestion.banned === true }), onClick: (e) => {
                    dispatch((0, NetworkStore_1.searchById)(suggestion.id));
                }, children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: suggestion.avatar }), (0, jsx_runtime_1.jsx)("span", { children: suggestion.name })] }, suggestion.id))) }) }));
}
//# sourceMappingURL=search-results.js.map