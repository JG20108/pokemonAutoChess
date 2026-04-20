"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameLock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
function GameLock() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const shopLocked = (0, hooks_1.useAppSelector)((state) => state.game.shopLocked);
    return ((0, jsx_runtime_1.jsx)("button", { className: `bubbly lock-icon ${shopLocked ? "red" : "green"}`, onClick: () => (0, network_1.lockShop)(), title: `${shopLocked ? t("unlock") : t("lock")} ${t("current_shop_for_next_turn")}`, children: (0, jsx_runtime_1.jsx)("img", { src: `/assets/ui/lock-${shopLocked ? "close" : "open"}.svg`, alt: `${shopLocked ? "Locked" : "Unlocked"}` }) }));
}
//# sourceMappingURL=game-lock.js.map