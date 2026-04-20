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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameHistory;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const config_1 = require("../../../../../config");
const synergies_1 = require("../../../../../models/colyseus-models/synergies");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const date_1 = require("../../utils/date");
const team_1 = __importDefault(require("../after/team"));
const game_mode_icon_1 = require("../icons/game-mode-icon");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const elo_badge_1 = require("./elo-badge");
require("./game-history.css");
const ROW_HEIGHT = 72;
function GameHistory(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [gameHistory, setGameHistory] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [hasMore, setHasMore] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        if (props.onUpdate) {
            props.onUpdate(gameHistory);
        }
    }, [gameHistory, props.onUpdate]);
    const pageSize = 10;
    const loadHistory = (uid, page) => __awaiter(this, void 0, void 0, function* () {
        try {
            setLoading(true);
            const response = yield fetch(`/game-history/${uid}?page=${page}&t=${Date.now()}`);
            const data = yield response.json();
            if (props.uid !== uid)
                return;
            if (data.length < pageSize) {
                setHasMore(false);
            }
            setGameHistory((prevHistory) => [
                ...prevHistory,
                ...data.filter((h) => prevHistory.some((p) => p.time == h.time) == false)
            ]);
        }
        catch (error) {
            console.error("Failed to load history:", error);
        }
        finally {
            setLoading(false);
        }
    });
    const loadMore = () => __awaiter(this, void 0, void 0, function* () {
        if (loading || !hasMore)
            return;
        const skip = gameHistory.length;
        const page = Math.floor(skip / pageSize + 1);
        loadHistory(props.uid, page);
    });
    (0, react_1.useEffect)(() => {
        setGameHistory([]);
        setHasMore(true);
        loadHistory(props.uid, 1);
    }, [props.uid]);
    const dynamicRowHeight = (0, react_window_1.useDynamicRowHeight)({
        defaultRowHeight: ROW_HEIGHT,
        key: gameHistory.length
    });
    const handleRowsRendered = (0, react_1.useCallback)((_visibleRows, allRows) => {
        if (hasMore && !loading && allRows.stopIndex >= gameHistory.length - 3) {
            loadMore();
        }
    }, [hasMore, loading, gameHistory.length]);
    return ((0, jsx_runtime_1.jsxs)("article", { className: "game-history-list", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("game_history") }), (0, jsx_runtime_1.jsxs)("div", { style: { flex: 1, minHeight: 0 }, children: [(!gameHistory || gameHistory.length === 0) && ((0, jsx_runtime_1.jsx)("p", { children: t("no_history_found") })), gameHistory && gameHistory.length > 0 && ((0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                            if (height === undefined || width === undefined)
                                return null;
                            return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: gameHistory.length, rowHeight: dynamicRowHeight, rowComponent: GameHistoryRow, rowProps: {
                                    gameHistory,
                                    t
                                }, onRowsRendered: handleRowsRendered }));
                        } }))] })] }));
}
function GameHistoryRow({ index, style, gameHistory, t }) {
    const r = gameHistory[index];
    return ((0, jsx_runtime_1.jsx)("div", { style: style, children: (0, jsx_runtime_1.jsxs)("div", { className: "my-box game-history", children: [(0, jsx_runtime_1.jsxs)("span", { className: "top", children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: r.gameMode }), t("top"), " ", r.rank] }), (0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: r.elo }), (0, jsx_runtime_1.jsx)("ul", { className: "synergies", children: getTopSynergies(r.pokemons).map(([type, value]) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), (0, jsx_runtime_1.jsx)("span", { children: value })] }, r.time + type))) }), (0, jsx_runtime_1.jsx)("p", { className: "date", children: (0, date_1.formatDate)(r.time) }), (0, jsx_runtime_1.jsx)(team_1.default, { team: r.pokemons })] }) }));
}
function getTopSynergies(team) {
    const synergies = (0, synergies_1.computeSynergies)(team.map((pkmRecord) => {
        const pkm = pokemon_factory_1.default.createPokemonFromName(pkmRecord.name);
        pkm.positionY = 1;
        pkmRecord.items.forEach((item) => {
            pkm.items.add(item);
        });
        return pkm;
    }));
    const topSynergies = [...synergies.entries()]
        .sort((a, b) => {
        const [typeA, valueA] = a;
        const [typeB, valueB] = b;
        const aTriggerReached = config_1.SynergyTriggers[typeA].filter((n) => valueA >= n).length;
        const bTriggerReached = config_1.SynergyTriggers[typeB].filter((n) => valueB >= n).length;
        return aTriggerReached !== bTriggerReached
            ? bTriggerReached - aTriggerReached
            : valueB - valueA;
    })
        .slice(0, 4);
    return topSynergies;
}
//# sourceMappingURL=game-history.js.map