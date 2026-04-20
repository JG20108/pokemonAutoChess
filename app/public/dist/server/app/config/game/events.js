"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOURNAMENT_CLEANUP_DELAY = exports.TOURNAMENT_REGISTRATION_TIME = exports.VictoryRoadPointsPerRank = exports.VICTORY_ROAD_MAX_EVENT_POINTS = void 0;
exports.getGameEventResetDate = getGameEventResetDate;
exports.getCurrentGameEvent = getCurrentGameEvent;
const events_1 = require("../../types/events");
exports.VICTORY_ROAD_MAX_EVENT_POINTS = 500;
exports.VictoryRoadPointsPerRank = [
    +15,
    +8,
    +5,
    +1,
    -1,
    -3,
    -5,
    -8
];
exports.TOURNAMENT_REGISTRATION_TIME = 60 * 60 * 1000;
exports.TOURNAMENT_CLEANUP_DELAY = 24 * 60 * 60 * 1000;
function getGameEventResetDate() {
    const now = new Date();
    const resetDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1, 0, 0, 0, 0));
    return resetDate;
}
function getCurrentGameEvent() {
    const month = new Date().getUTCMonth();
    return events_1.GameEvents[month % events_1.GameEvents.length];
}
//# sourceMappingURL=events.js.map