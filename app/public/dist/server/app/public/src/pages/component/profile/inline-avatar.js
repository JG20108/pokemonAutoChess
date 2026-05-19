"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineAvatar = InlineAvatar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const role_badge_1 = require("./role-badge");
function InlineAvatar(props) {
    var _a, _b;
    const { t } = (0, react_i18next_1.useTranslation)();
    const twitchUrl = props.twitchLogin
        ? `https://www.twitch.tv/${props.twitchLogin}`
        : null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "inline-avatar", style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "0.25em"
        }, children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.avatar, style: { width: "40px", height: "40px" } }), props.title && ((0, jsx_runtime_1.jsx)("span", { className: "player-title", children: t(`title.${props.title}`) })), (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: props.role === types_1.Role.BOT ? t(`pkm.${props.name}`) : props.name }), props.role && (0, jsx_runtime_1.jsx)(role_badge_1.RoleBadge, { role: props.role }), twitchUrl && ((0, jsx_runtime_1.jsx)("a", { className: "twitch-badge-link", href: twitchUrl, target: "_blank", rel: "noreferrer", title: `Watch ${(_a = props.twitchDisplayName) !== null && _a !== void 0 ? _a : props.twitchLogin} on Twitch`, "aria-label": `Watch ${(_b = props.twitchDisplayName) !== null && _b !== void 0 ? _b : props.twitchLogin} on Twitch`, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/twitch.png", width: 16, height: 16, alt: "", "aria-hidden": "true" }) }))] }));
}
//# sourceMappingURL=inline-avatar.js.map