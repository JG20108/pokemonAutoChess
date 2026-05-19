"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AfterMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const Strings_1 = require("../../../../../../app/types/strings/Strings");
const config_1 = require("../../../../../config");
const elo_1 = require("../../../../../core/elo");
const types_1 = require("../../../../../types");
const item_detail_1 = require("../../../game/components/item-detail");
const hooks_1 = require("../../../hooks");
const descriptions_1 = require("../../utils/descriptions");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const game_mode_icon_1 = require("../icons/game-mode-icon");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const avatar_1 = require("../profile/avatar");
const team_1 = __importDefault(require("./team"));
require("./after-menu.css");
function AfterMenu() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const players = (0, hooks_1.useAppSelector)((state) => state.after.players)
        .slice()
        .sort((a, b) => a.rank - b.rank);
    const eligibleToXP = (0, hooks_1.useAppSelector)((state) => state.after.eligibleToXP);
    const eligibleToELO = (0, hooks_1.useAppSelector)((state) => state.after.eligibleToELO);
    const gameMode = (0, hooks_1.useAppSelector)((state) => state.after.gameMode);
    const currentPlayerId = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const currentPlayer = players.find((p) => p.id === currentPlayerId);
    const playerRank = currentPlayer ? currentPlayer.rank : null;
    const humans = players.filter((p) => p.role !== types_1.Role.BOT);
    const newElo = currentPlayer
        ? (0, elo_1.computeElo)(currentPlayer, currentPlayer.rank, currentPlayer.elo, humans, gameMode, false)
        : null;
    const shouldShowElo = eligibleToELO && currentPlayer && newElo;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "after-menu", children: [(0, jsx_runtime_1.jsxs)("div", { className: "my-container is-centered", children: [playerRank && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "player-rank", children: [playerRank <= 3 && ((0, jsx_runtime_1.jsx)("img", { src: `/assets/ui/rank${playerRank}.png`, alt: "" })), (0, jsx_runtime_1.jsx)("span", { children: (0, Strings_1.getRankLabel)(playerRank) })] }), (0, jsx_runtime_1.jsxs)("p", { className: "gamemode", children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: gameMode }), t(`game_modes.${gameMode}`)] }), (0, jsx_runtime_1.jsxs)("div", { className: "player-gains", children: [shouldShowElo && ((0, jsx_runtime_1.jsxs)("p", { className: "player-elo", children: ["ELO ", newElo, " (", (newElo >= currentPlayer.elo ? "+" : "-") +
                                                Math.abs(newElo - currentPlayer.elo), ")"] })), eligibleToXP && ((0, jsx_runtime_1.jsxs)("p", { className: "player-exp", children: ["EXP + ", config_1.ExpPlace[playerRank - 1]] }))] })] })), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: t("rank") }), (0, jsx_runtime_1.jsx)("th", { children: t("player") }), (0, jsx_runtime_1.jsx)("th", { children: t("stats") }), (0, jsx_runtime_1.jsx)("th", { children: t("team") }), (0, jsx_runtime_1.jsx)("th", { children: t("synergies") })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: players.map((player) => {
                                    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: player.rank }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(avatar_1.Avatar, { avatar: player.avatar, name: player.name, elo: player.elo, title: player.title, role: player.role }) }), (0, jsx_runtime_1.jsxs)("td", { "data-tooltip-id": `stats-tooltip-${player.id}`, children: [(0, jsx_runtime_1.jsxs)("p", { title: t("game_stats.total_money_earned"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/icons/money_total.svg", alt: "$", style: { width: "24px", height: "24px" } }), " ", player.gameStats.totalMoneyEarned] }), (0, jsx_runtime_1.jsxs)("p", { title: t("game_stats.total_player_damage_dealt"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/icons/ATK.png", alt: "\u270A", style: { width: "24px", height: "24px" } }), player.gameStats.totalPlayerDamageDealt] }), (0, jsx_runtime_1.jsxs)("p", { title: t("game_stats.total_reroll_count"), children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/refresh.svg", alt: "\u21BB", style: { width: "24px", height: "24px" } }), " ", player.gameStats.rerollCount] }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `stats-tooltip-${player.id}`, className: "custom-theme-tooltip", place: "right", children: (0, jsx_runtime_1.jsx)(PlayerStatsTooltip, { player: player }) })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(team_1.default, { team: player.pokemons }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("ul", { className: "player-team-synergies", children: player.synergies.filter(isNotIncomplete).map((s) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: s.name }), (0, jsx_runtime_1.jsx)("span", { children: s.value })] }, s.name))) }) })] }, player.id));
                                }) })] })] }), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, { origin: "after" }), (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, {})] }));
}
function isNotIncomplete(s) {
    return s.value >= config_1.SynergyTriggers[s.name][0];
}
function PlayerStatsTooltip({ player }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const gameStats = [
        {
            icon: "assets/icons/money_total.svg",
            label: t("game_stats.total_money_earned"),
            value: player.gameStats.totalMoneyEarned
        },
        {
            icon: "assets/icons/ATK.png",
            label: t("game_stats.total_player_damage_dealt"),
            value: player.gameStats.totalPlayerDamageDealt
        },
        {
            icon: "assets/ui/refresh.svg",
            label: t("game_stats.total_reroll_count"),
            value: player.gameStats.rerollCount
        },
        {
            icon: "assets/icons/HP.png",
            label: t("game_stats.maxHP"),
            value: player.gameStats.maxHP
        },
        {
            icon: "assets/icons/ATK.png",
            label: t("game_stats.maxAttack"),
            value: player.gameStats.maxAttack
        },
        {
            icon: "assets/icons/DEF.png",
            label: t("game_stats.maxDefense"),
            value: player.gameStats.maxDefense
        },
        {
            icon: "assets/icons/SPE_DEF.png",
            label: t("game_stats.maxSpecialDefense"),
            value: player.gameStats.maxSpecialDefense
        },
        {
            icon: "assets/icons/AP.png",
            label: t("game_stats.maxAP"),
            value: player.gameStats.maxAP
        },
        {
            icon: "assets/icons/SPEED.png",
            label: t("game_stats.maxSpeed"),
            value: player.gameStats.maxSpeed
        },
        {
            icon: "assets/icons/ATK.png",
            label: t("game_stats.maxPhysicalDamage"),
            value: player.gameStats.maxPhysicalDamage
        },
        {
            icon: "assets/icons/AP.png",
            label: t("game_stats.maxSpecialDamage"),
            value: player.gameStats.maxSpecialDamage
        },
        {
            icon: "assets/icons/CRIT_POWER.png",
            label: t("game_stats.maxTrueDamage"),
            value: player.gameStats.maxTrueDamage
        },
        {
            icon: "assets/icons/SHIELD.png",
            label: t("game_stats.maxShield"),
            value: player.gameStats.maxShield
        },
        {
            icon: "assets/icons/HP.png",
            label: t("game_stats.maxHeal"),
            value: player.gameStats.maxHeal
        },
        {
            icon: "assets/ui/star.svg",
            label: t("game_stats.maxWinStreak"),
            value: player.gameStats.maxWinStreak
        },
        {
            icon: "assets/icons/DITTO.png",
            label: t("game_stats.dittosUsed"),
            value: player.gameStats.dittosUsed
        }
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "player-stats-tooltip", children: (0, jsx_runtime_1.jsx)("dl", { children: gameStats.map(({ icon, label, value }) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)("dt", { children: [(0, jsx_runtime_1.jsx)("img", { src: icon, alt: "" }), (0, descriptions_1.addIconsToDescription)(label)] }), (0, jsx_runtime_1.jsx)("dd", { children: value })] }, label))) }) }));
}
//# sourceMappingURL=after-menu.js.map