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
exports.isPlayerTimeout = isPlayerTimeout;
exports.givePlayerTimeout = givePlayerTimeout;
exports.getPendingGame = getPendingGame;
exports.setPendingGame = setPendingGame;
exports.clearPendingGame = clearPendingGame;
exports.clearPendingGamesOnRoomDispose = clearPendingGamesOnRoomDispose;
const config_1 = require("../config");
const date_1 = require("../utils/date");
const PENDING_GAME = "pending_game";
const USER_TIMEOUT = "user_timeout";
const TIMEOUT_IN_SECONDS = 60 * 5;
function isPlayerTimeout(presence, playerId) {
    return __awaiter(this, void 0, void 0, function* () {
        const timeoutDateStr = yield presence.hget(playerId, USER_TIMEOUT);
        if (timeoutDateStr) {
            const timeout = new Date(timeoutDateStr).getTime();
            return (0, date_1.isValidDate)(timeout) && Date.now() < timeout;
        }
        return false;
    });
}
function givePlayerTimeout(presence, playerId) {
    return __awaiter(this, void 0, void 0, function* () {
        return presence.hset(playerId, USER_TIMEOUT, new Date(Date.now() + 1000 * TIMEOUT_IN_SECONDS).toISOString());
    });
}
function getPendingGame(presence, playerId) {
    return __awaiter(this, void 0, void 0, function* () {
        const pendingGame = yield presence.hget(playerId, PENDING_GAME);
        if (pendingGame) {
            const [pendingGameId, reconnectionDeadlineStr] = pendingGame.split(",");
            const reconnectionDeadline = new Date(reconnectionDeadlineStr);
            if (!(0, date_1.isValidDate)(reconnectionDeadline)) {
                return null;
            }
            return {
                gameId: pendingGameId,
                reconnectionDeadline,
                isExpired: reconnectionDeadline.getTime() < Date.now()
            };
        }
        return null;
    });
}
function setPendingGame(presence, playerId, gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        return presence.hset(playerId, PENDING_GAME, [
            gameId,
            new Date(Date.now() + 1000 * config_1.ALLOWED_GAME_RECONNECTION_TIME).toISOString()
        ].join(","));
    });
}
function clearPendingGame(presence, playerId) {
    return __awaiter(this, void 0, void 0, function* () {
        return presence.hdel(playerId, PENDING_GAME);
    });
}
function clearPendingGamesOnRoomDispose(presence, playerId, roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        const pendingGame = yield presence.hget(playerId, PENDING_GAME);
        if (pendingGame && pendingGame.split(",")[0] === roomId) {
            yield clearPendingGame(presence, playerId);
        }
    });
}
//# sourceMappingURL=pending-game-manager.js.map