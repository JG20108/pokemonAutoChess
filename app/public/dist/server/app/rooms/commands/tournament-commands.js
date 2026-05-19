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
exports.EndTournamentCommand = exports.EndTournamentMatchCommand = exports.RemakeTournamentLobbyCommand = exports.CreateTournamentLobbiesCommand = exports.NextTournamentStageCommand = exports.ParticipateInTournamentCommand = exports.DeleteTournamentCommand = exports.OnCreateTournamentCommand = void 0;
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const gadgets_1 = require("../../config/game/gadgets");
const tournament_logic_1 = require("../../core/tournament-logic");
const tournament_1 = require("../../models/colyseus-models/tournament");
const tournament_2 = require("../../models/mongo-models/tournament");
const user_metadata_1 = __importDefault(require("../../models/mongo-models/user-metadata"));
const notifications_1 = require("../../services/notifications");
const types_1 = require("../../types");
const Game_1 = require("../../types/enum/Game");
const logger_1 = require("../../utils/logger");
const schemas_1 = require("../../utils/schemas");
class OnCreateTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name, startDate }) {
            try {
                const user = this.room.users.get(client.auth.uid);
                if (user && user.role && user.role === types_1.Role.ADMIN) {
                    yield this.state.createTournament(name, startDate);
                    yield this.room.fetchTournaments();
                    this.room.presence.publish("announcement", `A new tournament "${name}" is planned on ${new Date(startDate).toLocaleString("en-US", {
                        timeZoneName: "short"
                    })}, mark your calendar !`);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnCreateTournamentCommand = OnCreateTournamentCommand;
class DeleteTournamentCommand extends command_1.Command {
    execute({ client, tournamentId }) {
        try {
            const user = this.room.users.get(client.auth.uid);
            if (user && user.role && user.role === types_1.Role.ADMIN) {
                this.state.removeTournament(tournamentId);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.DeleteTournamentCommand = DeleteTournamentCommand;
class ParticipateInTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, tournamentId, participate }) {
            try {
                if (!client.auth.uid || this.room.users.has(client.auth.uid) === false)
                    return;
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const user = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (!user)
                    return;
                if (participate) {
                    if (user.level < gadgets_1.GADGETS.certificate.levelRequired) {
                        client.send(types_1.Transfer.ALERT, `You need to reach level ${gadgets_1.GADGETS.certificate.levelRequired} to participate in tournaments.`);
                        return;
                    }
                    const tournamentPlayer = new tournament_1.TournamentPlayerSchema(user.displayName, user.avatar, user.elo);
                    tournament.players.set(user.uid, tournamentPlayer);
                }
                else if (tournament.players.has(user.uid)) {
                    tournament.players.delete(user.uid);
                }
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.players = (0, schemas_1.convertSchemaToRawObject)(tournament.players);
                    mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ParticipateInTournamentCommand = ParticipateInTournamentCommand;
class NextTournamentStageCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId }) {
            try {
                logger_1.logger.debug(`Tournament ${tournamentId} is moving to next stage`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const remainingPlayers = (0, tournament_logic_1.getRemainingPlayers)(tournament);
                const playersInLastRound = new Set();
                tournament.brackets.forEach((bracket) => {
                    bracket.playersId.forEach((id) => playersInLastRound.add(id));
                });
                const isFinalRound = remainingPlayers.length <= 4 &&
                    remainingPlayers.some((p) => p.ranks.length > 0);
                const newlyEliminated = [];
                tournament.players.forEach((player, playerId) => {
                    var _a;
                    if (player.eliminated && playersInLastRound.has(playerId)) {
                        const ranks = (0, schemas_1.schemaValues)(player.ranks);
                        const sortKey = isFinalRound
                            ? ((_a = ranks[ranks.length - 1]) !== null && _a !== void 0 ? _a : 8)
                            : ranks.length > 0
                                ? ranks.reduce((sum, r) => sum + r, 0) / ranks.length
                                : 8;
                        newlyEliminated.push({ id: playerId, sortKey });
                    }
                });
                newlyEliminated.sort((a, b) => a.sortKey - b.sortKey);
                newlyEliminated.forEach(({ id }, index) => {
                    const finalPosition = remainingPlayers.length + index + 1;
                    notifications_1.notificationsService.addNotification(id, "tournament_finished", finalPosition.toString());
                    const client = this.room.clients.find((c) => c.auth.uid === id);
                    if (client) {
                        client.send(types_1.Transfer.NOTIFICATIONS, notifications_1.notificationsService.getNotifications(id));
                    }
                });
                if (isFinalRound) {
                    return [new EndTournamentCommand().setPayload({ tournamentId })];
                }
                else {
                    return [
                        new CreateTournamentLobbiesCommand().setPayload({ tournamentId })
                    ];
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.NextTournamentStageCommand = NextTournamentStageCommand;
class CreateTournamentLobbiesCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId, client }) {
            try {
                if (client) {
                    const user = this.room.users.get(client.auth.uid);
                    if (!user || !user.role || user.role !== types_1.Role.ADMIN) {
                        return;
                    }
                }
                logger_1.logger.debug(`Creating tournament lobbies for tournament ${tournamentId}`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                this.state.addAnnouncement(`${tournament.name} ${(0, tournament_logic_1.getTournamentStage)(tournament)} are starting !`);
                const brackets = (0, tournament_logic_1.makeBrackets)(tournament);
                tournament.brackets.clear();
                for (const bracket of brackets) {
                    const bracketId = crypto.randomUUID();
                    logger_1.logger.info(`Creating tournament game ${bracket.name} id: ${bracketId}`);
                    tournament.brackets.set(bracketId, new tournament_1.TournamentBracketSchema(bracket.name, bracket.playersId));
                    yield colyseus_1.matchMaker.createRoom("preparation", {
                        gameMode: Game_1.GameMode.TOURNAMENT,
                        noElo: true,
                        ownerId: null,
                        roomName: bracket.name,
                        autoStartDelayInSeconds: 10 * 60,
                        whitelist: bracket.playersId,
                        tournamentId,
                        bracketId
                    });
                }
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                    yield mongoTournament.save();
                }
                tournament.pendingLobbiesCreation = false;
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.CreateTournamentLobbiesCommand = CreateTournamentLobbiesCommand;
class RemakeTournamentLobbyCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId, bracketId, client }) {
            try {
                if (client) {
                    const user = this.room.users.get(client.auth.uid);
                    if (!user || !user.role || user.role !== types_1.Role.ADMIN) {
                        return;
                    }
                }
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const bracket = tournament.brackets.get(bracketId);
                if (!bracket)
                    return logger_1.logger.error(`Tournament bracket not found: ${bracketId}`);
                logger_1.logger.info(`Remaking tournament game ${bracket.name} id: ${bracketId}`);
                tournament.brackets.set(bracketId, new tournament_1.TournamentBracketSchema(bracket.name, bracket.playersId));
                yield colyseus_1.matchMaker.createRoom("preparation", {
                    gameMode: Game_1.GameMode.TOURNAMENT,
                    noElo: true,
                    ownerId: null,
                    roomName: bracket.name,
                    autoStartDelayInSeconds: 10 * 60,
                    whitelist: bracket.playersId,
                    tournamentId,
                    bracketId
                });
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                    yield mongoTournament.save();
                }
                tournament.pendingLobbiesCreation = false;
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.RemakeTournamentLobbyCommand = RemakeTournamentLobbyCommand;
class EndTournamentMatchCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId, bracketId, players }) {
            logger_1.logger.debug(`Tournament ${tournamentId} bracket ${bracketId} has ended`);
            try {
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const bracket = tournament.brackets.get(bracketId);
                if (!bracket)
                    return logger_1.logger.error(`Tournament bracket not found: ${bracketId}`);
                bracket.finished = true;
                players.forEach((p) => {
                    const player = tournament.players.get(p.id);
                    if (player) {
                        player.ranks.push(p.rank);
                        if (p.rank > 4) {
                            player.eliminated = true;
                        }
                    }
                });
                bracket.playersId.forEach((playerId) => {
                    const player = tournament.players.get(playerId);
                    if (player && players.every((p) => p.id !== playerId)) {
                        player.eliminated = true;
                    }
                });
                if (!tournament.pendingLobbiesCreation &&
                    (0, schemas_1.schemaValues)(tournament.brackets).every((b) => b.finished)) {
                    tournament.pendingLobbiesCreation = true;
                    const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                    if (mongoTournament) {
                        mongoTournament.players = (0, schemas_1.convertSchemaToRawObject)(tournament.players);
                        mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                        mongoTournament.save();
                    }
                    return [new NextTournamentStageCommand().setPayload({ tournamentId })];
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.EndTournamentMatchCommand = EndTournamentMatchCommand;
class EndTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId }) {
            var _b;
            try {
                logger_1.logger.debug(`Tournament ${tournamentId} is finished`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                let finalists = [], nbMatchsPlayed = 0;
                tournament.players.forEach((player, playerId) => {
                    if (player.ranks.length > nbMatchsPlayed) {
                        finalists = [];
                        nbMatchsPlayed = player.ranks.length;
                    }
                    if (player.ranks.length === nbMatchsPlayed) {
                        finalists.push(Object.assign({ id: playerId }, player));
                    }
                });
                const winner = finalists.find((p) => p.ranks.at(-1) === 1);
                if (winner) {
                    this.room.presence.publish("announcement", `${winner.name} won the tournament !`);
                }
                for (const player of finalists) {
                    const rank = (_b = player.ranks.at(-1)) !== null && _b !== void 0 ? _b : 1;
                    const user = this.room.users.get(player.id);
                    const mongoUser = yield user_metadata_1.default.findOne({ uid: player.id });
                    if (mongoUser === null)
                        continue;
                    logger_1.logger.debug(`Tournament ${tournamentId} finalist ${player.name} finished with rank ${rank}, distributing rewards`);
                    mongoUser.booster += 3;
                    if (mongoUser.titles.includes(types_1.Title.ACE_TRAINER) === false) {
                        mongoUser.titles.push(types_1.Title.ACE_TRAINER);
                        if (user)
                            user.titles.push(types_1.Title.ACE_TRAINER);
                    }
                    if (rank <= 4) {
                        mongoUser.booster += 3;
                        if (mongoUser.titles.includes(types_1.Title.ELITE_FOUR_MEMBER) === false) {
                            mongoUser.titles.push(types_1.Title.ELITE_FOUR_MEMBER);
                            if (user)
                                user.titles.push(types_1.Title.ELITE_FOUR_MEMBER);
                        }
                    }
                    if (rank === 1) {
                        mongoUser.booster += 4;
                        if (mongoUser.titles.includes(types_1.Title.CHAMPION) === false) {
                            mongoUser.titles.push(types_1.Title.CHAMPION);
                            if (user)
                                user.titles.push(types_1.Title.CHAMPION);
                        }
                    }
                    if (user)
                        user.booster = mongoUser.booster;
                    yield mongoUser.save();
                }
                tournament.brackets.clear();
                tournament.finished = true;
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.finished = true;
                    mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                    yield mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.EndTournamentCommand = EndTournamentCommand;
//# sourceMappingURL=tournament-commands.js.map