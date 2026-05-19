"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotSelectModal = BotSelectModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const network_1 = require("../../../network");
const jsx_1 = require("../../utils/jsx");
const modal_1 = require("../modal/modal");
const elo_badge_1 = require("../profile/elo-badge");
const inline_avatar_1 = require("../profile/inline-avatar");
require("./bot-select-modal.css");
const MIN_COL_WIDTH = 360;
const ROW_HEIGHT = 58;
function BotSelectModal(props) {
    const [sortBotsOrder, setSortBotsOrder] = (0, react_1.useState)(false);
    const [sortBotsCriteria, setSortBotsCriteria] = (0, react_1.useState)("name");
    const [queryBot, setQueryBot] = (0, react_1.useState)("");
    const [botsSelection, setBotsSelection] = (0, react_1.useState)(new Set());
    const { t } = (0, react_i18next_1.useTranslation)();
    function sortBy(criteria) {
        if (sortBotsCriteria === criteria) {
            setSortBotsOrder(!sortBotsOrder);
        }
        else {
            setSortBotsCriteria(criteria);
            setSortBotsOrder(false);
        }
    }
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [botsList, setBotsList] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (botsList === null) {
            fetch(`/bots?approved=true&t=${Date.now()}`)
                .then((r) => r.json())
                .then((bots) => {
                setBotsList(bots);
                setLoading(false);
            });
        }
    }, []);
    const botsListSorted = (botsList !== null && botsList !== void 0 ? botsList : [])
        .filter((bot) => !props.botsSelected || props.botsSelected.includes(bot.id) === false)
        .filter((bot) => bot.name.toLowerCase().includes(queryBot.toLowerCase()))
        .sort((a, b) => (a[sortBotsCriteria] < b[sortBotsCriteria] ? -1 : 1) *
        (sortBotsOrder ? -1 : 1));
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: true, className: "bot-select-modal", onClose: () => props.close(), header: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [t("select_bots_for_this_game"), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), (0, jsx_runtime_1.jsx)("input", { type: "search", style: { maxWidth: "20ch" }, placeholder: "Search by name", value: queryBot, onInput: (e) => setQueryBot(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                        sortBy("elo");
                    }, className: "bubbly pink", children: t("sort_by_elo") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                        sortBy("name");
                    }, className: "bubbly blue", children: t("sort_by_name") })] }), body: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)("p", { children: t("loading") }), !loading && botsListSorted.length === 0 && ((0, jsx_runtime_1.jsx)("p", { children: t("no_bots_found") })), !loading && botsListSorted.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "bot-select-grid", children: (0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                            if (height === undefined || width === undefined)
                                return null;
                            const columnCount = Math.max(1, Math.floor(width / MIN_COL_WIDTH));
                            const columnWidth = Math.floor(width / columnCount);
                            const rowCount = Math.ceil(botsListSorted.length / columnCount);
                            return ((0, jsx_runtime_1.jsx)(react_window_1.Grid, { style: { height, width }, columnCount: columnCount, columnWidth: columnWidth, rowCount: rowCount, rowHeight: ROW_HEIGHT, cellComponent: BotCell, cellProps: {
                                    botsListSorted,
                                    columnCount,
                                    botsSelection,
                                    setBotsSelection
                                } }));
                        } }) }))] }), footer: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: () => {
                        props.close();
                    }, children: t("cancel") }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue", onClick: () => {
                        botsSelection.forEach((bot) => (0, network_1.addBot)(bot));
                        props.close();
                    }, children: [t("add"), " ", botsSelection.size, " ", t("bot"), botsSelection.size === 1 ? "" : "s"] })] }) }));
}
function BotCell({ columnIndex, rowIndex, style, botsListSorted, columnCount, botsSelection, setBotsSelection }) {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= botsListSorted.length)
        return null;
    const bot = botsListSorted[index];
    return ((0, jsx_runtime_1.jsx)("div", { style: Object.assign(Object.assign({}, style), { padding: "0 4px 8px 0" }), children: (0, jsx_runtime_1.jsxs)("li", { className: (0, jsx_1.cc)("player", "my-box", "preparation-menu-user", {
                selected: botsSelection.has(bot)
            }), onClick: () => {
                if (botsSelection.has(bot)) {
                    botsSelection.delete(bot);
                }
                else {
                    botsSelection.add(bot);
                }
                setBotsSelection(new Set([...botsSelection]));
            }, children: [(0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: bot.elo }), (0, jsx_runtime_1.jsx)(inline_avatar_1.InlineAvatar, { avatar: bot.avatar, name: bot.name })] }) }));
}
//# sourceMappingURL=bot-select-modal.js.map