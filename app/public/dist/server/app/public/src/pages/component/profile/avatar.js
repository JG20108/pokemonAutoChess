"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = Avatar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const elo_badge_1 = require("./elo-badge");
const role_badge_1 = require("./role-badge");
require("./avatar.css");
function Avatar(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "avatar player my-box", children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.avatar }), (0, jsx_runtime_1.jsxs)("div", { className: "player-portrait", children: [(0, jsx_runtime_1.jsxs)("span", { className: "player-title-role", children: [props.title && ((0, jsx_runtime_1.jsx)("p", { className: "player-title", children: t(`title.${props.title}`) })), props.role && (0, jsx_runtime_1.jsx)(role_badge_1.RoleBadge, { role: props.role })] }), (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: props.name })] }), props.elo && (0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: props.elo })] }));
}
//# sourceMappingURL=avatar.js.map