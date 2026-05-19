"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EloTab = EloTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const EloRank_1 = require("../../../../../types/enum/EloRank");
const Game_1 = require("../../../../../types/enum/Game");
const elo_1 = require("../../../../../utils/elo");
const hooks_1 = require("../../../hooks");
function EloTab() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const rank = user ? (0, elo_1.getRank)(user.elo) : null;
    const [gameHistory, setGameHistory] = (0, react_1.useState)([]);
    const isDecaying = (0, react_1.useMemo)(() => {
        return (gameHistory.length < config_1.ELO_DECAY_NB_GAMES_REQUIRED ||
            Date.now() - gameHistory[config_1.ELO_DECAY_NB_GAMES_REQUIRED - 1].time >
                config_1.CRON_ELO_DECAY_DELAY);
    }, [gameHistory]);
    const eloDecayTime = (0, react_1.useMemo)(() => {
        if (gameHistory.length < config_1.ELO_DECAY_NB_GAMES_REQUIRED) {
            return 0;
        }
        const nextDecayTime = gameHistory[config_1.ELO_DECAY_NB_GAMES_REQUIRED - 1].time + config_1.CRON_ELO_DECAY_DELAY;
        const timeLeft = nextDecayTime - Date.now();
        return timeLeft;
    }, [gameHistory]);
    const loadHistory = (uid, page) => __awaiter(this, void 0, void 0, function* () {
        try {
            const requiresRanked = user
                ? user.elo >= config_1.EloRankThreshold[EloRank_1.EloRank.ULTRA_BALL]
                : false;
            const response = yield fetch(`/game-history/${uid}?page=${page}&t=${Date.now()}${requiresRanked ? `&gameMode=${Game_1.GameMode.RANKED}` : ""}`);
            const data = yield response.json();
            if ((user === null || user === void 0 ? void 0 : user.uid) !== uid)
                return;
            console.log("Loaded game history page", page, data);
            setGameHistory(data);
        }
        catch (error) {
            console.error("Failed to load history:", error);
        }
    });
    (0, react_1.useEffect)(() => {
        setGameHistory([]);
        if (user) {
            loadHistory(user.uid, 1);
        }
    }, [user === null || user === void 0 ? void 0 : user.uid]);
    return user && rank ? ((0, jsx_runtime_1.jsxs)("div", { className: "elo-tab", children: [(0, jsx_runtime_1.jsxs)("p", { children: [t("rank"), ":"] }), (0, jsx_runtime_1.jsx)("img", { style: {
                    display: "block",
                    margin: "0 auto",
                    width: "200px",
                    maxWidth: "100%"
                }, src: "assets/ranks/" + rank + ".svg", alt: t(`elorank.${rank}`), title: t(`elorank.${rank}`) }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "1.2em", fontWeight: "bold" }, children: t(`elorank.${rank}`) }), (0, jsx_runtime_1.jsxs)("p", { children: [t("profile.elo_tab.current_elo"), ": ", user.elo] }), (0, jsx_runtime_1.jsxs)("p", { children: [t("profile.elo_tab.max_elo_reached"), ": ", user.maxElo] }), (0, jsx_runtime_1.jsx)("p", { children: t("profile.elo_tab.elo_decay_info", {
                    eloLoss: config_1.ELO_DECAY_LOST_PER_DAY
                }) }), (0, jsx_runtime_1.jsx)("p", { style: { whiteSpace: "pre-line" }, children: isDecaying
                    ? t("profile.elo_tab.elo_decay_active")
                    : t("profile.elo_tab.elo_decay_inactive", {
                        time: new Date(Date.now() + (eloDecayTime !== null && eloDecayTime !== void 0 ? eloDecayTime : 0)).toLocaleDateString()
                    }) })] })) : null;
}
//# sourceMappingURL=elo-tab.js.map