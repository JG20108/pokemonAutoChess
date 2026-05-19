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
exports.BotManagerPanel = BotManagerPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const network_1 = require("../../../network");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
require("./bot-manager-panel.css");
const ROW_HEIGHT = 50;
function BotManagerPanel() {
    const [filterApproved, setFilterApproved] = (0, react_1.useState)();
    const [filteredPokemon, setFilteredPokemon] = (0, react_1.useState)("");
    const [filteredAuthor, setFilteredAuthor] = (0, react_1.useState)("");
    const [authors, setAuthors] = (0, react_1.useState)([]);
    const navigate = (0, react_router_1.useNavigate)();
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { id: "bot-manager-panel", children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Bot Management Panel" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => navigate("/lobby"), className: "bubbly blue", children: t("back_to_lobby") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "controls", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => setFilterApproved(undefined), children: "All Bots" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: () => setFilterApproved(true), children: "Approved Bots" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange", onClick: () => setFilterApproved(false), children: "Bots pending approval" }), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), (0, jsx_runtime_1.jsxs)("div", { children: ["Filter bots using this Pok\u00E9mon:\u00A0", (0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: filteredPokemon, onChange: setFilteredPokemon })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Filter by author:\u00A0", (0, jsx_runtime_1.jsxs)("select", { value: filteredAuthor, onChange: (e) => setFilteredAuthor(e.target.value), className: "author-filter-input", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "All authors" }), authors.map((author) => ((0, jsx_runtime_1.jsx)("option", { value: author, children: author }, author)))] })] })] }), (0, jsx_runtime_1.jsx)(BotsList, { approved: filterApproved, filteredPokemon: filteredPokemon, filteredAuthor: filteredAuthor, onBotsLoaded: (bots) => setAuthors([...new Set(bots.map((b) => b.author))].sort()) })] }));
}
function BotsList(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_1.useNavigate)();
    const [bots, setBots] = (0, react_1.useState)(null);
    const [sortColumn, setSortColumn] = (0, react_1.useState)("");
    const [sortDirection, setSortDirection] = (0, react_1.useState)("asc");
    (0, react_1.useEffect)(() => {
        (0, network_1.authenticateUser)();
        fetch(`/bots?${props.filteredPokemon ? `pkm=${props.filteredPokemon}` : ""}&t=${Date.now()}`)
            .then((res) => res.json())
            .then((data) => {
            setBots(data);
            props.onBotsLoaded(data);
        });
    }, [props.filteredPokemon]);
    function deleteBot(bot) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!confirm(`Are you sure you want to delete bot ${bot.name} of ${bot.author} ?`))
                return;
            const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
            const res = yield fetch(`/bots/${bot.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                setBots((bots) => { var _a; return (_a = bots === null || bots === void 0 ? void 0 : bots.filter((b) => b.id !== bot.id)) !== null && _a !== void 0 ? _a : []; });
            }
            else
                alert(res.statusText);
        });
    }
    function approveBot(botId, approved) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
            const res = yield fetch(`/bots/${botId}/approve`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ approved })
            });
            if (res.ok) {
                setBots((bots) => {
                    var _a;
                    return (_a = bots === null || bots === void 0 ? void 0 : bots.map((bot) => (bot.id === botId ? Object.assign(Object.assign({}, bot), { approved }) : bot))) !== null && _a !== void 0 ? _a : [];
                });
            }
            else
                alert(res.statusText);
        });
    }
    function handleSort(column) {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        }
        else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    }
    const filteredBots = (0, react_1.useMemo)(() => {
        if (!bots)
            return [];
        return bots
            .filter((b) => props.approved === undefined || b.approved === props.approved)
            .filter((b) => !props.filteredAuthor || b.author === props.filteredAuthor)
            .sort((a, b) => {
            if (!sortColumn)
                return 0;
            let aValue = a[sortColumn];
            let bValue = b[sortColumn];
            if (sortColumn === "name") {
                aValue = t(`pkm.${a.name}`);
                bValue = t(`pkm.${b.name}`);
            }
            if (sortColumn === "elo") {
                aValue = Number(a.elo);
                bValue = Number(b.elo);
            }
            if (aValue === undefined || bValue === undefined)
                return 0;
            if (typeof aValue === "string" && typeof bValue === "string") {
                const cmp = aValue.localeCompare(bValue);
                return sortDirection === "asc" ? cmp : -cmp;
            }
            if (aValue < bValue)
                return sortDirection === "asc" ? -1 : 1;
            if (aValue > bValue)
                return sortDirection === "asc" ? 1 : -1;
            return 0;
        });
    }, [bots, props.approved, sortColumn, sortDirection]);
    return ((0, jsx_runtime_1.jsx)("main", { id: "bots-list", className: "my-container", children: bots === null ? ((0, jsx_runtime_1.jsx)("p", { children: "Loading..." })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "bots-table-header", children: [(0, jsx_runtime_1.jsxs)("span", { onClick: () => handleSort("avatar"), style: { cursor: "pointer" }, children: ["Avatar", " ", sortColumn === "avatar"
                                    ? sortDirection === "asc"
                                        ? "▲"
                                        : "▼"
                                    : ""] }), (0, jsx_runtime_1.jsxs)("span", { onClick: () => handleSort("name"), style: { cursor: "pointer" }, children: ["Name", " ", sortColumn === "name"
                                    ? sortDirection === "asc"
                                        ? "▲"
                                        : "▼"
                                    : ""] }), (0, jsx_runtime_1.jsxs)("span", { onClick: () => handleSort("author"), style: { cursor: "pointer" }, children: ["Author", " ", sortColumn === "author"
                                    ? sortDirection === "asc"
                                        ? "▲"
                                        : "▼"
                                    : ""] }), (0, jsx_runtime_1.jsxs)("span", { onClick: () => handleSort("elo"), style: { cursor: "pointer" }, children: ["Elo", " ", sortColumn === "elo"
                                    ? sortDirection === "asc"
                                        ? "▲"
                                        : "▼"
                                    : ""] }), (0, jsx_runtime_1.jsxs)("span", { onClick: () => handleSort("id"), style: { cursor: "pointer" }, children: ["UID", " ", sortColumn === "id" ? (sortDirection === "asc" ? "▲" : "▼") : ""] }), (0, jsx_runtime_1.jsxs)("span", { onClick: () => handleSort("approved"), style: { cursor: "pointer" }, children: ["Approved", " ", sortColumn === "approved"
                                    ? sortDirection === "asc"
                                        ? "▲"
                                        : "▼"
                                    : ""] }), (0, jsx_runtime_1.jsx)("span", { children: "Actions" })] }), (0, jsx_runtime_1.jsx)("div", { style: { flex: 1, minHeight: 0 }, children: (0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                            if (height === undefined || width === undefined)
                                return null;
                            return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: filteredBots.length, rowHeight: ROW_HEIGHT, rowComponent: BotRow, rowProps: {
                                    filteredBots,
                                    navigate,
                                    onApprove: approveBot,
                                    onDelete: deleteBot
                                } }));
                        } }) })] })) }));
}
function BotRow({ index, style, filteredBots, navigate, onApprove, onDelete }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const b = filteredBots[index];
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("bots-table-row", { even: index % 2 === 0 }), style: style, children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: b.avatar }) }), (0, jsx_runtime_1.jsx)("span", { children: t(`pkm.${b.name}`) }), (0, jsx_runtime_1.jsx)("span", { children: b.author }), (0, jsx_runtime_1.jsx)("span", { children: b.elo }), (0, jsx_runtime_1.jsx)("span", { style: { color: "#999", fontSize: "80%" }, children: b.id }), (0, jsx_runtime_1.jsx)("span", { children: b.approved ? ((0, jsx_runtime_1.jsx)("span", { style: { color: "var(--color-fg-positive)" }, children: t("yes") })) : ((0, jsx_runtime_1.jsx)("span", { style: { color: "var(--color-fg-negative)" }, children: t("no") })) }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => navigate(`/bot-builder?bot=${b.id}`), className: "bubbly blue", style: { fontSize: "80%" }, children: t("edit") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => onApprove(b.id, !b.approved), className: (0, jsx_1.cc)("bubbly", b.approved ? "orange" : "green"), style: { fontSize: "80%" }, children: b.approved ? t("disapprove") : t("approve") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => onDelete(b), className: "bubbly red", style: { fontSize: "80%" }, children: t("delete") })] })] }));
}
//# sourceMappingURL=bot-manager-panel.js.map