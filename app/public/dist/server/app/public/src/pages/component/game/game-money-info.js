"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMoneyInfo = GameMoneyInfo;
exports.GameMoneyDetail = GameMoneyDetail;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const Game_1 = require("../../../../../types/enum/Game");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const number_1 = require("../../../../../utils/number");
const hooks_1 = require("../../../hooks");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const money_1 = require("../icons/money");
function GameMoneyInfo() {
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const maxInterest = (0, hooks_1.useAppSelector)((state) => state.game.maxInterest);
    if (!spectatedPlayer)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { id: "game-money-info", className: "my-container money information", children: (0, jsx_runtime_1.jsxs)("div", { "data-tooltip-id": "detail-money", children: [(0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-money", className: "custom-theme-tooltip", place: "top", children: (0, jsx_runtime_1.jsx)(GameMoneyDetail, {}) }), (0, jsx_runtime_1.jsx)(money_1.Money, { value: spectatedPlayer.money, className: (0, jsx_1.cc)({
                        "is-max": spectatedPlayer.money >= maxInterest * 10
                    }) })] }) }));
}
function GameMoneyDetail() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const streak = (0, hooks_1.useAppSelector)((state) => state.game.streak);
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const currentPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const lastPlayerBattle = currentPlayer && currentPlayer.history && currentPlayer.history.length > 0
        ? currentPlayer.history.filter((r) => r.id !== "pve").at(-1)
        : null;
    const lastBattleResult = lastPlayerBattle ? lastPlayerBattle.result : null;
    const interest = (0, hooks_1.useAppSelector)((state) => state.game.interest);
    const maxInterest = (0, hooks_1.useAppSelector)((state) => state.game.maxInterest);
    let streakLabel = "Draw";
    if (lastBattleResult === Game_1.BattleResult.WIN) {
        streakLabel = t("victory_count", { count: streak + 1 });
    }
    else if (lastBattleResult === Game_1.BattleResult.DEFEAT) {
        streakLabel = t("defeat_count", { count: streak + 1 });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-money-detail", children: [(0, jsx_runtime_1.jsx)("p", { className: "help", children: (0, descriptions_1.addIconsToDescription)(t("passive_income_hint")) }), (0, jsx_runtime_1.jsxs)("p", { style: { marginTop: "0.5em" }, children: [(0, jsx_runtime_1.jsx)(money_1.Money, { value: `${t("streak")}: ${streak === 0 ? 0 : "+" + (0, number_1.max)(5)(streak)}` }), " ", lastBattleResult !== null && `(${streakLabel})`] }), (0, jsx_runtime_1.jsx)("p", { className: "help", children: (0, descriptions_1.addIconsToDescription)(t("victory_income_hint")) }), specialGameRule !== SpecialGameRule_1.SpecialGameRule.BLOOD_MONEY && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { style: { marginTop: "0.5em" }, children: [(0, jsx_runtime_1.jsx)(money_1.Money, { value: t("interest", { interest }) }), "(", (0, descriptions_1.addIconsToDescription)(t("max_interest", { maxInterest })), ")"] }), (0, jsx_runtime_1.jsx)("p", { className: "help", children: (0, descriptions_1.addIconsToDescription)(t("additional_income_hint", {
                            maxInterest,
                            maxInterestGolds: maxInterest * 10
                        })) })] }))] }));
}
//# sourceMappingURL=game-money-info.js.map