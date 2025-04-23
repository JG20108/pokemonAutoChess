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
exports.TournamentsAdmin = TournamentsAdmin;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const date_1 = require("../../utils/date");
const schemas_1 = require("../../../../../utils/schemas");
require("./tournament-admin.css");
function TournamentsAdmin() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const [tournamentName, setTournamentName] = (0, react_1.useState)("");
    const [tournamentDate, setTournamentDate] = (0, react_1.useState)("");
    const tournaments = (0, hooks_1.useAppSelector)((state) => state.lobby.tournaments);
    const isLoading = !tournaments;
    function createNewTournament(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            dispatch((0, NetworkStore_1.createTournament)({
                name: tournamentName,
                startDate: tournamentDate
            }));
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tournaments-admin", children: [(0, jsx_runtime_1.jsxs)("div", { className: "content", children: [isLoading && (0, jsx_runtime_1.jsx)("p", { children: "Loading..." }), tournaments.length === 0 && (0, jsx_runtime_1.jsx)("p", { children: "No tournaments planned" }), tournaments && ((0, jsx_runtime_1.jsx)("ul", { children: tournaments.map((tournament) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(TournamentAdminItem, { tournament: tournament }) }, tournament.id))) }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "content my-box", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Create a new tournament" }), (0, jsx_runtime_1.jsxs)("form", { className: "tournament-form", onSubmit: createNewTournament, children: [(0, jsx_runtime_1.jsxs)("label", { children: ["Tournament name", " ", (0, jsx_runtime_1.jsx)("input", { type: "text", required: true, value: tournamentName, style: { width: "50ch" }, onChange: (event) => {
                                            setTournamentName(event.target.value);
                                        } })] }), (0, jsx_runtime_1.jsxs)("label", { children: ["Start at", " ", (0, jsx_runtime_1.jsx)("input", { type: "datetime-local", required: true, onChange: (event) => {
                                            if (event.target["validity"].valid) {
                                                const d = new Date(event.target.value).toISOString();
                                                setTournamentDate(d);
                                            }
                                        } })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bubbly blue", children: "Create tournament" })] })] })] }));
}
function TournamentAdminItem(props) {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const brackets = (0, schemas_1.entries)(props.tournament.brackets);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "my-box tournament-admin-item", children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("p", { className: "name", children: props.tournament.name }), (0, jsx_runtime_1.jsx)("p", { className: "date", children: (0, date_1.formatDate)(new Date(props.tournament.startDate)) }), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), (0, jsx_runtime_1.jsxs)("div", { className: "actions", children: [(0, jsx_runtime_1.jsx)("button", { className: "remove-btn bubbly red", onClick: () => {
                                    if (confirm("Delete tournament and all registrations ?")) {
                                        dispatch((0, NetworkStore_1.deleteTournament)({ id: props.tournament.id }));
                                    }
                                }, children: "Delete tournament" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange", onClick: () => {
                                    if (confirm("Remake tournament lobbies ? Previous lobbies won't be deleted so do this only after a server reboot if lobbies have been lost")) {
                                        dispatch((0, NetworkStore_1.remakeTournamentLobby)({ tournamentId: props.tournament.id, bracketId: "all" }));
                                    }
                                }, children: "Remake all lobbies" })] })] }), brackets.length > 0 && (0, jsx_runtime_1.jsx)(TournamentBrackets, { tournamentId: props.tournament.id, brackets: brackets })] }));
}
function TournamentBrackets(props) {
    const dispatch = (0, hooks_1.useAppDispatch)();
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Bracket ID" }), (0, jsx_runtime_1.jsx)("th", { children: "Bracket name" }), (0, jsx_runtime_1.jsx)("th", { children: "Players" }), (0, jsx_runtime_1.jsx)("th", { children: "Status" }), (0, jsx_runtime_1.jsx)("th", { children: "Actions" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: props.brackets.map(([bracketId, bracket]) => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: bracketId }), (0, jsx_runtime_1.jsx)("td", { children: bracket.name }), (0, jsx_runtime_1.jsx)("td", { children: bracket.playersId.length }), (0, jsx_runtime_1.jsx)("td", { children: bracket.finished ? "Finished" : "In progress" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly orange", onClick: () => {
                                        if (confirm("Remake this tournament lobby ? Ongoing game will be deleted as well")) {
                                            dispatch((0, NetworkStore_1.remakeTournamentLobby)({ tournamentId: props.tournamentId, bracketId }));
                                        }
                                    }, children: "Remake" }) })] }, bracketId))) })] }) }));
}
//# sourceMappingURL=tournaments-admin.js.map