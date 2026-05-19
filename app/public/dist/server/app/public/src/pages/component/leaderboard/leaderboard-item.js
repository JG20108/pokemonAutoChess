"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LeaderboardItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const network_1 = require("../../../network");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const elo_badge_1 = require("../profile/elo-badge");
function LeaderboardItem(props) {
    var _a, _b;
    const { t } = (0, react_i18next_1.useTranslation)();
    const player = props.item;
    const twitchUrl = player.twitchLogin
        ? `https://www.twitch.tv/${player.twitchLogin}`
        : null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "player my-box clickable", style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }, onClick: () => {
            if (!props.isBot && "id" in props.item) {
                (0, network_1.searchById)(props.item.id);
            }
        }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "5px" }, children: [(0, jsx_runtime_1.jsx)("span", { className: "player-rank", children: props.item.rank }), (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.item.avatar })] }), (0, jsx_runtime_1.jsx)("span", { style: {
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    padding: "0 0.5em"
                }, children: props.isBot ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [t(`pkm.${props.item.name}`), " ", t("by"), " @", props.item.author] })) : ((0, jsx_runtime_1.jsxs)("span", { style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4em"
                    }, children: [(0, jsx_runtime_1.jsx)("span", { children: props.item.name }), twitchUrl && ((0, jsx_runtime_1.jsx)("a", { className: "twitch-badge-link", href: twitchUrl, target: "_blank", rel: "noreferrer", onClick: (event) => {
                                event.stopPropagation();
                            }, title: `Watch ${(_a = player.twitchDisplayName) !== null && _a !== void 0 ? _a : player.twitchLogin} on Twitch`, "aria-label": `Watch ${(_b = player.twitchDisplayName) !== null && _b !== void 0 ? _b : player.twitchLogin} on Twitch`, style: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "var(--cursor-hover)"
                            }, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/twitch.png", width: 16, height: 16, alt: "", "aria-hidden": "true" }) }))] })) }), (0, jsx_runtime_1.jsx)("div", { style: { width: "8ch", textAlign: "end" }, children: props.noElo ? props.item.value : (0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: props.item.value }) })] }));
}
//# sourceMappingURL=leaderboard-item.js.map