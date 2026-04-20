"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseCodesMessages = exports.CloseCodes = void 0;
var CloseCodes;
(function (CloseCodes) {
    CloseCodes[CloseCodes["NORMAL_CLOSURE"] = 1000] = "NORMAL_CLOSURE";
    CloseCodes[CloseCodes["NO_STATUS_RECEIVED"] = 1005] = "NO_STATUS_RECEIVED";
    CloseCodes[CloseCodes["ABNORMAL_CLOSURE"] = 1006] = "ABNORMAL_CLOSURE";
    CloseCodes[CloseCodes["TIMEOUT"] = 3008] = "TIMEOUT";
    CloseCodes[CloseCodes["CONSENTED"] = 4000] = "CONSENTED";
    CloseCodes[CloseCodes["SERVER_SHUTDOWN"] = 4001] = "SERVER_SHUTDOWN";
    CloseCodes[CloseCodes["WITH_ERROR"] = 4002] = "WITH_ERROR";
    CloseCodes[CloseCodes["FAILED_TO_RECONNECT"] = 4003] = "FAILED_TO_RECONNECT";
    CloseCodes[CloseCodes["MAY_TRY_RECONNECT"] = 4010] = "MAY_TRY_RECONNECT";
    CloseCodes[CloseCodes["USER_INACTIVE"] = 4101] = "USER_INACTIVE";
    CloseCodes[CloseCodes["USER_KICKED"] = 4102] = "USER_KICKED";
    CloseCodes[CloseCodes["USER_BANNED"] = 4103] = "USER_BANNED";
    CloseCodes[CloseCodes["USER_NOT_AUTHENTICATED"] = 4104] = "USER_NOT_AUTHENTICATED";
    CloseCodes[CloseCodes["USER_RANK_TOO_LOW"] = 4105] = "USER_RANK_TOO_LOW";
    CloseCodes[CloseCodes["USER_RANK_TOO_HIGH"] = 4106] = "USER_RANK_TOO_HIGH";
    CloseCodes[CloseCodes["USER_TIMEOUT"] = 4107] = "USER_TIMEOUT";
    CloseCodes[CloseCodes["USER_DELETED"] = 4108] = "USER_DELETED";
    CloseCodes[CloseCodes["USER_IN_ANOTHER_GAME"] = 4109] = "USER_IN_ANOTHER_GAME";
    CloseCodes[CloseCodes["USER_ALREADY_JOINED"] = 4110] = "USER_ALREADY_JOINED";
    CloseCodes[CloseCodes["USER_NOT_WHITELISTED"] = 4111] = "USER_NOT_WHITELISTED";
    CloseCodes[CloseCodes["ROOM_FULL"] = 4120] = "ROOM_FULL";
    CloseCodes[CloseCodes["ROOM_EMPTY"] = 4121] = "ROOM_EMPTY";
    CloseCodes[CloseCodes["ROOM_DELETED"] = 4122] = "ROOM_DELETED";
    CloseCodes[CloseCodes["INVALID_PASSWORD"] = 4123] = "INVALID_PASSWORD";
    CloseCodes[CloseCodes["GAME_ALREADY_STARTED"] = 4130] = "GAME_ALREADY_STARTED";
})(CloseCodes || (exports.CloseCodes = CloseCodes = {}));
exports.CloseCodesMessages = {
    [CloseCodes.SERVER_SHUTDOWN]: "SERVER_SHUTDOWN",
    [CloseCodes.FAILED_TO_RECONNECT]: "FAILED_TO_RECONNECT",
    [CloseCodes.USER_INACTIVE]: "USER_INACTIVE",
    [CloseCodes.USER_KICKED]: "USER_KICKED",
    [CloseCodes.USER_BANNED]: "USER_BANNED",
    [CloseCodes.USER_DELETED]: "USER_DELETED",
    [CloseCodes.USER_RANK_TOO_LOW]: "USER_RANK_TOO_LOW",
    [CloseCodes.USER_NOT_AUTHENTICATED]: "USER_NOT_AUTHENTICATED",
    [CloseCodes.USER_NOT_WHITELISTED]: "USER_NOT_WHITELISTED",
    [CloseCodes.USER_TIMEOUT]: "USER_TIMEOUT",
    [CloseCodes.ROOM_FULL]: "ROOM_FULL",
    [CloseCodes.ROOM_EMPTY]: "ROOM_EMPTY",
    [CloseCodes.ROOM_DELETED]: "ROOM_DELETED",
    [CloseCodes.USER_IN_ANOTHER_GAME]: "USER_IN_ANOTHER_GAME",
    [CloseCodes.USER_ALREADY_JOINED]: "USER_ALREADY_JOINED",
    [CloseCodes.GAME_ALREADY_STARTED]: "GAME_ALREADY_STARTED",
    [CloseCodes.INVALID_PASSWORD]: "INVALID_PASSWORD"
};
//# sourceMappingURL=CloseCodes.js.map