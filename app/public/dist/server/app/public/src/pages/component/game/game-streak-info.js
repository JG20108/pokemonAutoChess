"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStreakInfo = GameStreakInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const Game_1 = require("../../../../../types/enum/Game");
const hooks_1 = require("../../../hooks");
function GameStreakInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    if (!currentPlayer)
        return null;
    const streak = currentPlayer.streak;
    const lastPlayerBattle = currentPlayer && currentPlayer.history && currentPlayer.history.length > 0
        ? currentPlayer.history.filter((r) => r.id !== "pve").at(-1)
        : null;
    const lastBattleResult = lastPlayerBattle ? lastPlayerBattle.result : null;
    let streakLabel = "Draw";
    if (lastBattleResult === Game_1.BattleResult.WIN) {
        streakLabel = t("victory_count", { count: streak + 1 });
    }
    else if (lastBattleResult === Game_1.BattleResult.DEFEAT) {
        streakLabel = t("defeat_count", { count: streak + 1 });
    }
    if (!lastBattleResult)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { id: "game-streak-info", className: "streak", children: (0, jsx_runtime_1.jsxs)("div", { "data-tooltip-id": "detail-streak", className: `streak-${lastBattleResult.toLowerCase()}`, children: [(0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-streak", className: "custom-theme-tooltip", place: "top", children: (0, jsx_runtime_1.jsx)("p", { className: "help", children: `${t("streak")}: ${streakLabel}` }) }), streak + 1] }) }));
}
//# sourceMappingURL=game-streak-info.js.map