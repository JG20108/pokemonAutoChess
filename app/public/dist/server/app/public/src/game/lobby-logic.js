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
exports.joinLobbyRoom = joinLobbyRoom;
exports.joinExistingPreparationRoom = joinExistingPreparationRoom;
const sdk_1 = require("@colyseus/sdk");
const app_1 = __importDefault(require("firebase/compat/app"));
const i18next_1 = require("i18next");
const types_1 = require("../../../types");
const CloseCodes_1 = require("../../../types/enum/CloseCodes");
const ConnectionStatus_1 = require("../../../types/enum/ConnectionStatus");
const logger_1 = require("../../../utils/logger");
const network_1 = require("../network");
const store_1 = require("../pages/utils/store");
const BoostersStore_1 = require("../stores/BoostersStore");
const LobbyStore_1 = require("../stores/LobbyStore");
const NetworkStore_1 = require("../stores/NetworkStore");
const PreparationStore_1 = require("../stores/PreparationStore");
function joinLobbyRoom(dispatch, navigate) {
    return __awaiter(this, void 0, void 0, function* () {
        const promise = new Promise((resolve, reject) => {
            var _a;
            if ((_a = network_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.connection.isOpen) {
                return resolve(network_1.rooms.lobby);
            }
            (0, network_1.authenticateUser)().then((user) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                try {
                    let room = undefined;
                    const reconnectToken = (_a = store_1.localStore.get(store_1.LocalStoreKeys.RECONNECTION_LOBBY)) === null || _a === void 0 ? void 0 : _a.reconnectionToken;
                    if (reconnectToken) {
                        try {
                            room = yield network_1.client.reconnect(reconnectToken);
                        }
                        catch (error) {
                            store_1.localStore.delete(store_1.LocalStoreKeys.RECONNECTION_LOBBY);
                        }
                    }
                    if (!room) {
                        const idToken = yield user.getIdToken();
                        room = yield network_1.client.join("lobby", { idToken });
                    }
                    if (!room) {
                        throw new Error("Failed to join or reconnect to the lobby room");
                    }
                    dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTED));
                    store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_LOBBY, { reconnectionToken: room.reconnectionToken, roomId: room.roomId }, 60 * 5);
                    const $ = (0, sdk_1.getStateCallbacks)(room);
                    const $state = $(room.state);
                    room.onLeave((code) => {
                        logger_1.logger.info(`left lobby with code ${code}`);
                        const shouldGoToLoginPage = window.location.pathname === "/lobby" &&
                            (code === CloseCodes_1.CloseCodes.USER_INACTIVE ||
                                code === CloseCodes_1.CloseCodes.USER_BANNED ||
                                code === CloseCodes_1.CloseCodes.USER_DELETED ||
                                code === CloseCodes_1.CloseCodes.USER_NOT_AUTHENTICATED);
                        if (shouldGoToLoginPage) {
                            const errorMessage = CloseCodes_1.CloseCodesMessages[code];
                            if (errorMessage) {
                                dispatch((0, NetworkStore_1.setErrorAlertMessage)((0, i18next_1.t)(`errors.${errorMessage}`)));
                            }
                            dispatch((0, LobbyStore_1.resetLobby)());
                            dispatch((0, BoostersStore_1.resetBoosters)());
                            navigate("/");
                        }
                    });
                    $state.messages.onAdd((m) => {
                        dispatch((0, LobbyStore_1.pushMessage)(m));
                    });
                    $state.messages.onRemove((m) => {
                        (0, network_1.removeMessage)(m, "lobby");
                    });
                    $state.listen("ccu", (value) => {
                        dispatch((0, LobbyStore_1.setCcu)(value));
                    });
                    $state.tournaments.onAdd((tournament) => {
                        dispatch((0, LobbyStore_1.addTournament)(tournament));
                        const $tournament = $(tournament);
                        const fields = [
                            "id",
                            "name",
                            "startDate"
                        ];
                        fields.forEach((field) => {
                            $tournament.listen(field, (value) => {
                                dispatch((0, LobbyStore_1.changeTournament)({
                                    tournamentId: tournament.id,
                                    field: field,
                                    value: value
                                }));
                            });
                        });
                        $tournament.players.onAdd((player, userId) => {
                            dispatch((0, LobbyStore_1.updateTournament)());
                            const $player = $(player);
                            const fields = [
                                "eliminated"
                            ];
                            fields.forEach((field) => {
                                $player.listen(field, (value) => {
                                    dispatch((0, LobbyStore_1.changeTournamentPlayer)({
                                        tournamentId: tournament.id,
                                        playerId: userId,
                                        field: field,
                                        value: value
                                    }));
                                });
                            });
                        });
                        $tournament.players.onRemove((player, userId) => {
                            dispatch((0, LobbyStore_1.updateTournament)());
                        });
                        $tournament.brackets.onAdd((bracket, bracketId) => {
                            dispatch((0, LobbyStore_1.addTournamentBracket)({
                                tournamendId: tournament.id,
                                bracketId,
                                bracket
                            }));
                            const $bracket = $(bracket);
                            const fields = [
                                "name",
                                "finished"
                            ];
                            fields.forEach((field) => {
                                $bracket.listen(field, (value) => {
                                    dispatch((0, LobbyStore_1.changeTournamentBracket)({
                                        tournamentId: tournament.id,
                                        bracketId,
                                        field,
                                        value
                                    }));
                                });
                            });
                            $bracket.playersId.onChange(() => {
                                dispatch((0, LobbyStore_1.changeTournamentBracket)({
                                    tournamentId: tournament.id,
                                    bracketId,
                                    field: "playersId",
                                    value: bracket.playersId
                                }));
                            });
                        });
                        $tournament.brackets.onRemove((bracket, bracketId) => {
                            dispatch((0, LobbyStore_1.removeTournamentBracket)({
                                tournamendId: tournament.id,
                                bracketId
                            }));
                        });
                    });
                    $state.tournaments.onRemove((tournament) => {
                        dispatch((0, LobbyStore_1.removeTournament)(tournament));
                    });
                    room.onMessage(types_1.Transfer.ALERT, (message) => {
                        alert(message);
                    });
                    room.onMessage(types_1.Transfer.NOTIFICATIONS, (notifications) => {
                        dispatch((0, NetworkStore_1.setNotifications)(notifications));
                    });
                    room.onMessage(types_1.Transfer.ROOMS, (rooms) => {
                        rooms.forEach((room) => dispatch((0, LobbyStore_1.addRoom)(room)));
                    });
                    room.onMessage(types_1.Transfer.REQUEST_ROOM, (roomId) => __awaiter(this, void 0, void 0, function* () {
                        joinExistingPreparationRoom(roomId, dispatch, navigate);
                    }));
                    room.onMessage(types_1.Transfer.ADD_ROOM, ([, room]) => {
                        if (room.name === "preparation" || room.name === "game") {
                            dispatch((0, LobbyStore_1.addRoom)(room));
                        }
                    });
                    room.onMessage(types_1.Transfer.REMOVE_ROOM, (roomId) => dispatch((0, LobbyStore_1.removeRoom)(roomId)));
                    room.onMessage(types_1.Transfer.USER_PROFILE, (user) => {
                        dispatch((0, NetworkStore_1.setProfile)(user));
                    });
                    room.onMessage(types_1.Transfer.RECONNECT_PROMPT, (pendingGameId) => {
                        dispatch((0, NetworkStore_1.setPendingGameId)(pendingGameId));
                    });
                    room.onMessage(types_1.Transfer.USER, (user) => dispatch((0, LobbyStore_1.setSearchedUser)(user)));
                    (0, network_1.joinLobby)(room);
                    resolve(room);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
        promise.catch((err) => {
            logger_1.logger.error(err);
            if (err.message) {
                dispatch((0, NetworkStore_1.setErrorAlertMessage)(err.message));
            }
            navigate("/");
        });
        return promise;
    });
}
function joinExistingPreparationRoom(roomId, dispatch, navigate, password) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
            if (token) {
                dispatch((0, PreparationStore_1.resetPreparation)());
                const room = yield network_1.client.joinById(roomId, {
                    idToken: token,
                    password
                });
                if (room.name !== "preparation") {
                    room.connection.isOpen && room.leave(false);
                    throw new Error(`Expected to join a preparation room but joined ${room.name} instead`);
                }
                (0, network_1.joinPreparation)(room, 30);
                (0, network_1.leaveRoom)("lobby");
                dispatch((0, LobbyStore_1.resetLobby)());
                dispatch((0, BoostersStore_1.resetBoosters)());
                navigate("/preparation");
            }
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) && error.code in CloseCodes_1.CloseCodesMessages) {
                const errorMessage = CloseCodes_1.CloseCodesMessages[error.code];
                dispatch((0, NetworkStore_1.setErrorAlertMessage)((0, i18next_1.t)(`errors.${errorMessage}`)));
            }
            else {
                logger_1.logger.error(error);
            }
        }
    });
}
//# sourceMappingURL=lobby-logic.js.map