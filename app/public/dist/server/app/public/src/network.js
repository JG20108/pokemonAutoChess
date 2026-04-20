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
exports.rooms = exports.client = void 0;
exports.authenticateUser = authenticateUser;
exports.fetchProfile = fetchProfile;
exports.leaveRoom = leaveRoom;
exports.leaveAllRooms = leaveAllRooms;
exports.joinLobby = joinLobby;
exports.joinPreparation = joinPreparation;
exports.joinGame = joinGame;
exports.joinAfter = joinAfter;
exports.sendMessage = sendMessage;
exports.removeMessage = removeMessage;
exports.addBot = addBot;
exports.removeBot = removeBot;
exports.toggleReady = toggleReady;
exports.setNoElo = setNoElo;
exports.lockShop = lockShop;
exports.levelClick = levelClick;
exports.buyInShop = buyInShop;
exports.pickPokemonProposition = pickPokemonProposition;
exports.pickItem = pickItem;
exports.gameStartRequest = gameStartRequest;
exports.changeRoomName = changeRoomName;
exports.changeRoomPassword = changeRoomPassword;
exports.changeRoomMinMaxRanks = changeRoomMinMaxRanks;
exports.setSpecialRule = setSpecialRule;
exports.buyEmotion = buyEmotion;
exports.buyBooster = buyBooster;
exports.openBooster = openBooster;
exports.showEmote = showEmote;
exports.searchById = searchById;
exports.deleteTournament = deleteTournament;
exports.remakeTournamentLobby = remakeTournamentLobby;
exports.participateInTournament = participateInTournament;
exports.giveBooster = giveBooster;
exports.heapSnapshot = heapSnapshot;
exports.deleteAccount = deleteAccount;
exports.giveRole = giveRole;
exports.giveTitle = giveTitle;
exports.kick = kick;
exports.searchMessages = searchMessages;
exports.renameAccount = renameAccount;
exports.getTwitchBlacklist = getTwitchBlacklist;
exports.addTwitchBlacklist = addTwitchBlacklist;
exports.removeTwitchBlacklist = removeTwitchBlacklist;
exports.ban = ban;
exports.unban = unban;
exports.createTournament = createTournament;
const sdk_1 = require("@colyseus/sdk");
const app_1 = __importDefault(require("firebase/compat/app"));
const config_1 = require("../../config");
const types_1 = require("../../types");
const CloseCodes_1 = require("../../types/enum/CloseCodes");
const logger_1 = require("../../utils/logger");
const store_js_1 = require("./pages/utils/store.js");
const stores_1 = __importDefault(require("./stores"));
const NetworkStore_1 = require("./stores/NetworkStore");
const endpoint = `${window.location.protocol.replace("http", "ws")}//${window.location.host}`;
logger_1.logger.info(`Colyseus endpoint: ${endpoint}`);
exports.client = new sdk_1.Client(endpoint);
function authenticateUser() {
    if (!app_1.default.apps.length) {
        app_1.default.initializeApp(config_1.FIREBASE_CONFIG);
    }
    return new Promise((resolve, reject) => {
        app_1.default.auth().onAuthStateChanged((user) => __awaiter(this, void 0, void 0, function* () {
            if (!user)
                return reject(CloseCodes_1.CloseCodes.USER_NOT_AUTHENTICATED);
            stores_1.default.dispatch((0, NetworkStore_1.logIn)(user));
            fetchProfile(true);
            resolve(user);
        }));
    });
}
function fetchProfile() {
    return __awaiter(this, arguments, void 0, function* (forceRefresh = false) {
        var _a;
        const profile = stores_1.default.getState().network.profile;
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        if (!forceRefresh && profile) {
            return Promise.resolve(profile);
        }
        return fetch(`/profile?t=${Date.now()}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((profile) => {
            stores_1.default.dispatch((0, NetworkStore_1.setProfile)(profile));
        });
    });
}
exports.rooms = {
    lobby: undefined,
    preparation: undefined,
    game: undefined,
    after: undefined
};
function leaveRoom(roomName_1) {
    return __awaiter(this, arguments, void 0, function* (roomName, allowReconnect = false) {
        const room = exports.rooms[roomName];
        if (room) {
            exports.rooms[roomName] = undefined;
            if (room.connection.isOpen) {
                return yield room.leave(!allowReconnect);
            }
        }
        return Promise.resolve(-1);
    });
}
function leaveAllRooms() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.allSettled([
            leaveRoom("lobby"),
            leaveRoom("preparation"),
            leaveRoom("game"),
            leaveRoom("after")
        ]);
    });
}
function joinLobby(room) {
    leaveAllRooms();
    exports.rooms.lobby = room;
}
function joinPreparation(room, reconnectionTokenExpirationTimeInSeconds) {
    leaveAllRooms();
    exports.rooms.preparation = room;
    store_js_1.localStore.set(store_js_1.LocalStoreKeys.RECONNECTION_PREPARATION, {
        reconnectionToken: room.reconnectionToken,
        roomId: room.roomId
    }, reconnectionTokenExpirationTimeInSeconds);
}
function joinGame(room, reconnectionTokenExpirationTimeInSeconds) {
    leaveAllRooms();
    exports.rooms.game = room;
    store_js_1.localStore.set(store_js_1.LocalStoreKeys.RECONNECTION_GAME, {
        reconnectionToken: room.reconnectionToken,
        roomId: room.roomId
    }, reconnectionTokenExpirationTimeInSeconds);
}
function joinAfter(room) {
    leaveRoom("lobby");
    leaveRoom("preparation");
    leaveRoom("game", true);
    leaveRoom("after");
    exports.rooms.after = room;
}
function sendMessage(message, source) {
    if (source === "lobby" && exports.rooms.lobby) {
        exports.rooms.lobby.send(types_1.Transfer.NEW_MESSAGE, message);
    }
    else if (source === "preparation" && exports.rooms.preparation) {
        exports.rooms.preparation.send(types_1.Transfer.NEW_MESSAGE, message);
    }
}
function removeMessage(message, source) {
    if (source === "lobby" && exports.rooms.lobby) {
        exports.rooms.lobby.send(types_1.Transfer.REMOVE_MESSAGE, message);
    }
    else if (source === "preparation" && exports.rooms.preparation) {
        exports.rooms.preparation.send(types_1.Transfer.REMOVE_MESSAGE, message);
    }
}
function addBot(bot) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ADD_BOT, bot);
}
function removeBot(id) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMOVE_BOT, id);
}
function toggleReady(ready) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.TOGGLE_READY, ready);
}
function setNoElo(noElo) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_NO_ELO, noElo);
}
function lockShop() {
    var _a;
    (_a = exports.rooms.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LOCK);
}
function levelClick() {
    var _a;
    (_a = exports.rooms.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LEVEL_UP);
}
function buyInShop(id) {
    var _a;
    (_a = exports.rooms.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SHOP, { id });
}
function pickPokemonProposition(proposition) {
    var _a;
    (_a = exports.rooms.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.POKEMON_PROPOSITION, proposition);
}
function pickItem(item) {
    var _a;
    (_a = exports.rooms.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ITEM, item);
}
function gameStartRequest(token) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GAME_START_REQUEST, { token });
}
function changeRoomName(name) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_NAME, name);
}
function changeRoomPassword(password) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_PASSWORD, password);
}
function changeRoomMinMaxRanks(params) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_RANKS, params);
}
function setSpecialRule(rule) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_SPECIAL_RULE, rule);
}
function buyEmotion(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BUY_EMOTION, params);
}
function buyBooster(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BUY_BOOSTER, params);
}
function openBooster() {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.OPEN_BOOSTER);
}
function showEmote(emote) {
    var _a;
    (_a = exports.rooms.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SHOW_EMOTE, emote);
}
function searchById(id) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SEARCH_BY_ID, id);
}
function deleteTournament(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_TOURNAMENT, params);
}
function remakeTournamentLobby(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMAKE_TOURNAMENT_LOBBY, params);
}
function participateInTournament(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.PARTICIPATE_TOURNAMENT, params);
}
function giveBooster(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GIVE_BOOSTER, params);
}
function heapSnapshot() {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.HEAP_SNAPSHOT);
}
function deleteAccount() {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_ACCOUNT);
}
function giveRole(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SET_ROLE, params);
}
function giveTitle(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GIVE_TITLE, params);
}
function kick(playerId) {
    var _a;
    (_a = exports.rooms.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.KICK, playerId);
}
function searchMessages(query) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        const res = yield fetch(`/moderation/chat-search?query=${encodeURIComponent(query)}`, { headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok)
            throw new Error(yield res.text());
        return res.json();
    });
}
function renameAccount(uid, newName) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        const res = yield fetch("/moderation/rename-account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ uid, newName })
        });
        if (!res.ok) {
            const body = yield res.json().catch(() => ({}));
            throw new Error((_b = body.error) !== null && _b !== void 0 ? _b : res.statusText);
        }
        return res.json();
    });
}
function getTwitchBlacklist() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        const res = yield fetch("/moderation/twitch-blacklist", {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) {
            const body = yield res.json().catch(() => ({}));
            throw new Error((_b = body.error) !== null && _b !== void 0 ? _b : res.statusText);
        }
        return res.json();
    });
}
function addTwitchBlacklist(streamerLogin, reason) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        const res = yield fetch("/moderation/twitch-blacklist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ streamerLogin, reason })
        });
        if (!res.ok) {
            const body = yield res.json().catch(() => ({}));
            throw new Error((_b = body.error) !== null && _b !== void 0 ? _b : res.statusText);
        }
    });
}
function removeTwitchBlacklist(streamerLogin) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        const res = yield fetch(`/moderation/twitch-blacklist/${encodeURIComponent(streamerLogin)}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) {
            const body = yield res.json().catch(() => ({}));
            throw new Error((_b = body.error) !== null && _b !== void 0 ? _b : res.statusText);
        }
    });
}
function ban(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BAN, params);
}
function unban(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.UNBAN, params);
}
function createTournament(params) {
    var _a;
    (_a = exports.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.NEW_TOURNAMENT, params);
}
//# sourceMappingURL=network.js.map