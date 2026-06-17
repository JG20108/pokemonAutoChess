"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameSpectatePlayerInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const depths_1 = require("../../../game/depths");
const hooks_1 = require("../../../hooks");
const life_1 = require("../icons/life");
const money_1 = require("../icons/money");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const game_additional_pokemons_1 = require("./game-additional-pokemons");
const game_regional_pokemons_1 = require("./game-regional-pokemons");
const game_streak_info_1 = require("./game-streak-info");
require("./game-spectate-player-info.css");
function GameSpectatePlayerInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    return (spectatedPlayer && ((0, jsx_runtime_1.jsxs)("div", { className: "game-spectate-player-info my-container", style: {
            display: "flex",
            gap: "1em",
            alignItems: "center",
            zIndex: depths_1.DEPTH.SPECTATE_PLAYER_INFO
        }, children: [(0, jsx_runtime_1.jsx)(game_additional_pokemons_1.GameAdditionalPokemonsIcon, {}), (0, jsx_runtime_1.jsx)(game_regional_pokemons_1.GameRegionalPokemonsIcon, {}), (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: spectatedPlayer.avatar }), (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: t("spectating", { name: spectatedPlayer.name }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            gap: "1em",
                            alignItems: "center"
                        }, children: [(0, jsx_runtime_1.jsxs)("span", { children: [t("lvl"), " ", spectatedPlayer.experienceManager.level] }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(life_1.Life, { value: spectatedPlayer.life }) }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(money_1.Money, { value: spectatedPlayer.money }) }), (0, jsx_runtime_1.jsx)(game_streak_info_1.GameStreakInfo, {})] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            gap: "1em",
                            alignItems: "center"
                        }, children: [(0, jsx_runtime_1.jsx)("span", { children: t("total") }), (0, jsx_runtime_1.jsxs)("span", { title: t("game_stats.total_money_earned"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/icons/money_total.svg", alt: "$", style: { width: "24px", height: "24px" } }), " ", spectatedPlayer.gameStats.totalMoneyEarned] }), (0, jsx_runtime_1.jsxs)("span", { title: t("game_stats.total_player_damage_dealt"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/icons/ATK.png", alt: "\u270A", style: { width: "24px", height: "24px" } }), spectatedPlayer.gameStats.totalPlayerDamageDealt] }), (0, jsx_runtime_1.jsxs)("span", { title: t("game_stats.total_reroll_count"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/refresh.svg", alt: "\u21BB", style: { width: "24px", height: "24px" } }), " ", spectatedPlayer.gameStats.rerollCount] })] })] })] })));
}
//# sourceMappingURL=game-spectate-player-info.js.map