"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameExperience;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const config_1 = require("../../../../../config");
const experience_manager_1 = require("../../../../../models/colyseus-models/experience-manager");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const descriptions_1 = require("../../utils/descriptions");
const money_1 = require("../icons/money");
function GameExperience() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const experienceManager = (0, hooks_1.useAppSelector)((state) => state.game.experienceManager);
    const isLevelMax = experienceManager.level >= config_1.MAX_LEVEL;
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.game.specialGameRule);
    const levelUpCost = (0, experience_manager_1.getLevelUpCost)(specialGameRule);
    const goldToLevelUp = isLevelMax
        ? null
        : Math.ceil((experienceManager.expNeeded - experienceManager.experience) /
            levelUpCost) * levelUpCost;
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const canLevelup = !isLevelMax && spectatedPlayer && spectatedPlayer.money >= levelUpCost;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "game-experience", children: [(0, jsx_runtime_1.jsxs)("span", { children: [t("lvl"), " ", experienceManager.level] }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange buy-xp-button", title: t("buy_xp_tooltip", { cost: levelUpCost }), onClick: () => {
                    (0, network_1.levelClick)();
                }, children: (0, jsx_runtime_1.jsx)(money_1.Money, { value: t("buy_xp", { cost: levelUpCost }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "progress-bar", "data-tooltip-id": "gold-to-levelup-tooltip", children: [(0, jsx_runtime_1.jsx)("progress", { className: "my-progress", value: isLevelMax ? 0 : experienceManager.experience, max: experienceManager.expNeeded }), (0, jsx_runtime_1.jsx)("span", { children: isLevelMax
                            ? "Max Level"
                            : experienceManager.experience + "/" + experienceManager.expNeeded })] }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "gold-to-levelup-tooltip", className: "custom-theme-tooltip", place: "top", children: (0, jsx_runtime_1.jsx)("p", { className: "help", children: isLevelMax ? (t("max_level_reached")) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [t("gold_needed_to_level_up"), (0, jsx_runtime_1.jsx)("b", { style: {
                                    color: canLevelup
                                        ? "var(--color-fg-green, green)"
                                        : "var(--color-fg-red, red)"
                                }, children: (0, descriptions_1.addIconsToDescription)(`${goldToLevelUp} GOLD`) }), "(", t("clicks", { count: goldToLevelUp / levelUpCost }), ")"] })) }) })] }));
}
//# sourceMappingURL=game-experience.js.map