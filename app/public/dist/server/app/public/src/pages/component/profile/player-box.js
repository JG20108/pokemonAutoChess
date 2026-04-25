"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlayerBox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const types_1 = require("../../../../../types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const hooks_1 = require("../../../hooks");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const elo_badge_1 = require("./elo-badge");
const role_badge_1 = require("./role-badge");
function PlayerBox(props) {
    var _a, _b;
    const { t } = (0, react_i18next_1.useTranslation)();
    const role = (0, hooks_1.useAppSelector)((state) => { var _a; return (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.role; });
    const pokemons = [];
    const [favoritePokemons, setFavoritePokemons] = (0, react_1.useState)([]);
    const [favoriteSynergies, setFavoriteSynergies] = (0, react_1.useState)([]);
    const twitchUrl = props.user.twitchLogin
        ? `https://www.twitch.tv/${props.user.twitchLogin}`
        : null;
    (0, react_1.useEffect)(() => {
        if (!props.history)
            return;
        props.history.forEach((record) => pokemons.push(...record.pokemons.map((p) => p.name.toUpperCase())));
        const countPokemons = new Map();
        const countSynergies = new Map();
        pokemons.forEach((p) => {
            var _a;
            countPokemons.set(p, ((_a = countPokemons.get(p)) !== null && _a !== void 0 ? _a : 0) + 1);
            (0, precomputed_pokemon_data_1.getPokemonData)(p).types.forEach((type) => {
                var _a;
                countSynergies.set(type, ((_a = countSynergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
            });
        });
        const favoritePokemons = [...countPokemons.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([k, v]) => k);
        const favoriteSynergies = [...countSynergies.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([k, v]) => k);
        setFavoritePokemons(favoritePokemons);
        setFavoriteSynergies(favoriteSynergies);
    }, [props.history]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "player my-box", children: [(0, jsx_runtime_1.jsx)("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }, children: (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.5em" }, children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.user.avatar }), props.user.title && ((0, jsx_runtime_1.jsx)("p", { className: "player-title", children: t(`title.${props.user.title}`) })), (0, jsx_runtime_1.jsx)(role_badge_1.RoleBadge, { role: props.user.role }), props.user.banned && ((0, jsx_runtime_1.jsx)("div", { className: "badge banned", children: t("banned") })), (0, jsx_runtime_1.jsx)("p", { className: "player-display-name", style: {
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis"
                            }, children: props.user.displayName }), twitchUrl && ((0, jsx_runtime_1.jsx)("a", { className: "twitch-badge-link", href: twitchUrl, target: "_blank", rel: "noreferrer", title: `Watch ${(_a = props.user.twitchDisplayName) !== null && _a !== void 0 ? _a : props.user.twitchLogin} on Twitch`, "aria-label": `Watch ${(_b = props.user.twitchDisplayName) !== null && _b !== void 0 ? _b : props.user.twitchLogin} on Twitch`, children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/twitch.png", alt: "", "aria-hidden": "true" }) }))] }) }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }, children: [(0, jsx_runtime_1.jsx)("div", { style: { display: "flex", alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: props.user.elo }) }), (0, jsx_runtime_1.jsxs)("p", { children: [t("level"), " ", props.user.level, " (", props.user.exp, " / 1000)"] }), (0, jsx_runtime_1.jsxs)("p", { children: [t("wins"), ": ", props.user.wins] })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }, children: [(0, jsx_runtime_1.jsxs)("p", { children: [" ", t("favorites"), ":"] }), (0, jsx_runtime_1.jsx)("p", { children: favoriteSynergies.map((type) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }, "fav_" + type))) }), (0, jsx_runtime_1.jsx)("p", { children: favoritePokemons.map((name) => ((0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: Pokemon_1.PkmIndex[name] + "/Normal" }, name))) })] }), (role === types_1.Role.ADMIN || role === types_1.Role.MODERATOR) && ((0, jsx_runtime_1.jsxs)("p", { style: { color: "#aaa", fontSize: "60%" }, children: [t("profile.account.user_id"), ": ", props.user.uid] }))] }));
}
//# sourceMappingURL=player-box.js.map