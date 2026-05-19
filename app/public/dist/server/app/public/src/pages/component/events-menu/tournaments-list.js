"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsList = TournamentsList;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../../hooks");
const tournament_item_1 = __importDefault(require("../room-menu/tournament-item"));
require("./tournaments-list.css");
function TournamentsList() {
    const tournaments = (0, hooks_1.useAppSelector)((state) => state.lobby.tournaments);
    const sortedTournaments = [...tournaments].sort((a, b) => a.finished !== b.finished
        ? a.finished
            ? +1
            : -1
        : new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    return sortedTournaments.length > 0 ? ((0, jsx_runtime_1.jsx)("ul", { className: "tournaments", children: sortedTournaments.map((t) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(tournament_item_1.default, { tournament: t }) }, t.id))) })) : ((0, jsx_runtime_1.jsx)("p", { children: "No tournaments planned at the moment" }));
}
//# sourceMappingURL=tournaments-list.js.map