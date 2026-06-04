"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TournamentItem;
exports.TournamentPlayer = TournamentPlayer;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const config_1 = require("../../../../../config");
const gadgets_1 = require("../../../../../config/game/gadgets");
const tournament_logic_1 = require("../../../../../core/tournament-logic");
const number_1 = require("../../../../../utils/number");
const schemas_1 = require("../../../../../utils/schemas");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const date_1 = require("../../utils/date");
const jsx_1 = require("../../utils/jsx");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
const elo_badge_1 = require("../profile/elo-badge");
require("./tournament-item.css");
function TournamentItem(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const participating = props.tournament.players.has(uid);
    const startTime = new Date(props.tournament.startDate).getTime();
    const tournamentFinished = props.tournament.finished;
    const tournamentStarted = Date.now() > startTime && !tournamentFinished;
    const registrationsOpen = Date.now() > startTime - config_1.TOURNAMENT_REGISTRATION_TIME && !tournamentStarted;
    const players = (0, schemas_1.schemaValues)(props.tournament.players);
    const brackets = (0, schemas_1.schemaValues)(props.tournament.brackets);
    const remainingPlayers = players.filter((p) => !p.eliminated);
    const nbStages = Math.max(...players.map((p) => p.ranks.length));
    const sortedPlayers = (0, schemas_1.schemaEntries)(props.tournament.players).sort(([idA, a], [idB, b]) => {
        var _a, _b;
        if (a.eliminated !== b.eliminated)
            return a.eliminated ? +1 : -1;
        if (a.ranks.length !== b.ranks.length)
            return b.ranks.length - a.ranks.length;
        if (tournamentFinished && a.ranks.length === nbStages) {
            return (((_a = a.ranks[a.ranks.length - 1]) !== null && _a !== void 0 ? _a : 8) -
                ((_b = b.ranks[b.ranks.length - 1]) !== null && _b !== void 0 ? _b : 8));
        }
        return ((0, number_1.average)(...(0, schemas_1.schemaValues)(a.ranks)) - (0, number_1.average)(...(0, schemas_1.schemaValues)(b.ranks)));
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tournament-item my-box", children: [(0, jsx_runtime_1.jsxs)("span", { className: "tournament-name", children: [(0, jsx_runtime_1.jsx)("img", { width: "32", height: "32", src: "assets/ui/tournament.svg", style: { marginRight: "0.5em", verticalAlign: "text-bottom" } }), props.tournament.name] }), tournamentFinished ? ((0, jsx_runtime_1.jsx)("div", { children: (0, tournament_logic_1.getTournamentStage)(props.tournament) })) : tournamentStarted ? ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between" }, children: [(0, jsx_runtime_1.jsx)("span", { children: (0, tournament_logic_1.getTournamentStage)(props.tournament) }), (0, jsx_runtime_1.jsxs)("span", { children: [t("tournament.players_remaining"), ": ", remainingPlayers.length] })] })) : ((0, jsx_runtime_1.jsxs)("p", { children: [t("tournament.starts_at"), " ", (0, date_1.formatDate)(new Date(props.tournament.startDate), {
                        dateStyle: "long"
                    })] })), !tournamentStarted && !tournamentFinished && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [user && user.level < gadgets_1.GADGETS.certificate.levelRequired && ((0, jsx_runtime_1.jsx)("p", { children: t("tournament.tournament_mode_locked", {
                            requiredLevel: gadgets_1.GADGETS.certificate.levelRequired
                        }) })), (0, jsx_runtime_1.jsx)("div", { className: "actions", children: participating ? ((0, jsx_runtime_1.jsx)("button", { className: "participate-btn bubbly green", title: t("tournament.cancel_tournament_participation"), disabled: !registrationsOpen ||
                                (user && user.level < gadgets_1.GADGETS.certificate.levelRequired), onClick: () => {
                                (0, network_1.participateInTournament)({
                                    tournamentId: props.tournament.id,
                                    participate: false
                                });
                            }, children: t("tournament.participating") })) : registrationsOpen ? ((0, jsx_runtime_1.jsx)("button", { className: "participate-btn bubbly blue", title: t("tournament.register_tournament_participation"), disabled: !registrationsOpen ||
                                (user && user.level < gadgets_1.GADGETS.certificate.levelRequired), onClick: () => {
                                (0, network_1.participateInTournament)({
                                    tournamentId: props.tournament.id,
                                    participate: true
                                });
                            }, children: t("tournament.participate") })) : null })] })), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [tournamentStarted && (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("tournament.brackets") }), (tournamentStarted || tournamentFinished) && ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("tournament.ranking") })), (registrationsOpen || tournamentStarted) && ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tab, { children: [t("tournament.participants"), " (", players.length, ")"] }))] }), !registrationsOpen && !tournamentStarted && ((0, jsx_runtime_1.jsx)("p", { children: t("tournament.registrations_open_info") })), tournamentStarted && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { className: "brackets", children: brackets.map((bracket) => ((0, jsx_runtime_1.jsxs)("div", { className: "bracket", children: [(0, jsx_runtime_1.jsx)("p", { children: bracket.name }), (0, jsx_runtime_1.jsx)("ul", { children: (0, schemas_1.schemaValues)(bracket.playersId).map((id, i) => ((0, jsx_runtime_1.jsx)(TournamentPlayer, { playerId: id, player: props.tournament.players.get(id), rank: i + 1, showScore: false }, "player" + i))) })] }, bracket.name))) })), (tournamentStarted || tournamentFinished) && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { className: "ranking", children: (0, jsx_runtime_1.jsx)("ul", { children: sortedPlayers.map(([id, player], i) => ((0, jsx_runtime_1.jsx)(TournamentPlayer, { playerId: id, player: player, rank: i + 1, showScore: true }, "player" + i))) }) })), (registrationsOpen || tournamentStarted) && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { className: "participants", children: (0, jsx_runtime_1.jsx)("ul", { children: (0, schemas_1.schemaEntries)(props.tournament.players).map(([id, player], i) => ((0, jsx_runtime_1.jsx)(TournamentPlayer, { playerId: id, player: player, rank: i + 1, showScore: false }, "player" + i))) }) }))] })] }));
}
function TournamentPlayer(props) {
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    return ((0, jsx_runtime_1.jsxs)("li", { className: (0, jsx_1.cc)("player-box", {
            myself: props.playerId === uid,
            eliminated: props.showScore && props.player.eliminated
        }), children: [props.showScore && (0, jsx_runtime_1.jsx)("span", { className: "player-rank", children: props.rank }), (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { avatar: props.player.avatar }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("span", { className: "player-name", children: props.player.name }) }), props.showScore ? ((0, jsx_runtime_1.jsx)("span", { className: "player-ranks", children: props.player.ranks.length > 0 ? props.player.ranks.join(", ") : "-" })) : ((0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: props.player.elo }))] }));
}
//# sourceMappingURL=tournament-item.js.map