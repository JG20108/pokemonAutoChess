"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameSpectatePlayerInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const game_additional_pokemons_1 = require("./game-additional-pokemons");
const game_regional_pokemons_1 = require("./game-regional-pokemons");
const life_1 = require("../icons/life");
const money_1 = require("../icons/money");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./game-spectate-player-info.css");
function GameSpectatePlayerInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectCurrentPlayer);
    return (currentPlayer && (0, jsx_runtime_1.jsxs)("div", { className: "game-spectate-player-info my-container", style: {
            display: "flex",
            gap: "1em",
            alignItems: "center"
        }, children: [(0, jsx_runtime_1.jsx)(game_additional_pokemons_1.GameAdditionalPokemonsIcon, {}), (0, jsx_runtime_1.jsx)(game_regional_pokemons_1.GameRegionalPokemonsIcon, {}), (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: currentPlayer.avatar }), (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: t("spectating", { name: currentPlayer.name }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            gap: "1em",
                            alignItems: "center"
                        }, children: [(0, jsx_runtime_1.jsxs)("span", { children: [t("lvl"), " ", currentPlayer.experienceManager.level] }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(life_1.Life, { value: currentPlayer.life }) }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(money_1.Money, { value: currentPlayer.money }) })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            gap: "1em",
                            alignItems: "center"
                        }, children: [(0, jsx_runtime_1.jsx)("span", { children: t("total") }), (0, jsx_runtime_1.jsxs)("span", { title: t("total_money_earned"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/icons/money_total.svg", alt: "$", style: { width: "24px", height: "24px" } }), " ", currentPlayer.totalMoneyEarned] }), (0, jsx_runtime_1.jsxs)("span", { title: t("total_player_damage_dealt"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/icons/ATK.png", alt: "\u270A", style: { width: "24px", height: "24px" } }), currentPlayer.totalPlayerDamageDealt] }), (0, jsx_runtime_1.jsxs)("span", { title: t("total_reroll_count"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/refresh.svg", alt: "\u21BB", style: { width: "24px", height: "24px" } }), " ", currentPlayer.rerollCount] })] })] })] }));
}
//# sourceMappingURL=game-spectate-player-info.js.map